import { useState, useEffect, useRef } from 'react';
import { projects, about, certs, cv } from '../data/content';
import type { Project } from '../types';
import './modern.css';

const SECTIONS = ['about', 'projects', 'experience', 'credentials', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_LABELS: Record<SectionId, string> = {
  about: 'About',
  projects: 'Projects',
  experience: 'Experience',
  credentials: 'Credentials',
  contact: 'Contact',
};

function parseMarkdownCV(md: string) {
  const lines = md.split('\n');
  const roles: { title: string; company: string; period: string; bullets: string[] }[] = [];
  let currentRole: { title: string; company: string; period: string; bullets: string[] } | null = null;
  let inEmployment = false;

  for (const line of lines) {
    if (line.startsWith('## Employment History')) {
      inEmployment = true;
      continue;
    }
    if (inEmployment && line.startsWith('## ') && !line.includes('Employment')) {
      inEmployment = false;
      continue;
    }
    if (!inEmployment) continue;

    if (line.startsWith('### ')) {
      if (currentRole) roles.push(currentRole);
      const heading = line.replace('### ', '');
      const idx = heading.indexOf(', ');
      const title = idx === -1 ? heading : heading.slice(0, idx);
      const company = idx === -1 ? '' : heading.slice(idx + 2);
      currentRole = { title, company, period: '', bullets: [] };
    } else if (line.startsWith('*') && line.endsWith('*') && currentRole) {
      currentRole.period = line.replace(/^\*|\*$/g, '');
    } else if (line.startsWith('- ') && currentRole) {
      currentRole.bullets.push(line.replace('- ', ''));
    }
  }
  if (currentRole) roles.push(currentRole);
  return roles;
}

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    for (const id of SECTIONS) {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.m-reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('m-visible');
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [expandedProject]);

  function scrollTo(id: SectionId) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    setMobileNavOpen(false);
  }

  const visibleProjects = projects.filter((p) => p.visible);
  const featuredProjects = visibleProjects.filter((p) => p.featured).sort((a, b) => (a.featured_order ?? 99) - (b.featured_order ?? 99));
  const otherProjects = visibleProjects.filter((p) => !p.featured);
  const roles = parseMarkdownCV(cv.web_content);
  const education = certs.filter((c) => c.type === 'education');
  const certifications = certs.filter((c) => c.type === 'certification');

  return (
    <div className="m-page">
      {/* NAV */}
      <nav className="m-nav">
        <div className="m-nav-inner">
          <a href="/" className="m-nav-logo">FC</a>
          <div className="m-nav-links">
            {SECTIONS.map((id) => (
              <button
                key={id}
                className={`m-nav-link${activeSection === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {NAV_LABELS[id]}
              </button>
            ))}
            <a href="/xp" className="m-nav-link m-nav-xp">XP Edition</a>
          </div>
          <button
            className="m-nav-hamburger"
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      {mobileNavOpen && (
        <>
          <div className="m-mobile-overlay" onClick={() => setMobileNavOpen(false)} />
          <div className="m-mobile-nav">
            {SECTIONS.map((id) => (
              <button
                key={id}
                className={`m-mobile-nav-link${activeSection === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {NAV_LABELS[id]}
              </button>
            ))}
            <a href="/xp" className="m-mobile-nav-link" onClick={() => setMobileNavOpen(false)}>
              XP Edition
            </a>
          </div>
        </>
      )}

      {/* HERO */}
      <header className="m-hero">
        <div className="m-hero-doc">
          <span className="m-mono m-muted">DOC. FC-2026-001 / REV. A</span>
        </div>
        <div className="m-hero-content">
          <p className="m-hero-spec m-mono">— AI ENGINEER / SOLUTIONS CONSULTANT</p>
          <h1 className="m-hero-name">
            Flynn<br />
            <span className="m-accent">Chambers</span>
          </h1>
          <p className="m-hero-sub">
            I scope, sell, and build technical solutions end to end, with a focus on AI,
            security, and full-stack software. Master of IT in Cybersecurity. Brisbane, Australia.
          </p>
          <div className="m-hero-actions">
            <button className="m-btn m-btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="m-btn m-btn-secondary" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="m-hero-footer m-mono m-muted">
          <span>FC / BNE / 26</span>
          <span>SHEET 01/01</span>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" ref={(el) => { sectionRefs.current.about = el; }} className="m-section">
        <div className="m-section-inner">
          <div className="m-section-label m-mono m-reveal">
            <span className="m-accent">01</span> / ABOUT
          </div>
          <div className="m-about-grid m-reveal">
            <div className="m-about-photo-wrap">
              {about.photo_url ? (
                <img src={about.photo_url} alt="Flynn Chambers" className="m-about-photo" />
              ) : (
                <div className="m-about-initials">FC</div>
              )}
            </div>
            <div className="m-about-text">
              <h2>Solutions Architect &amp; AI Engineer</h2>
              <p>{about.bio}</p>
            </div>
          </div>
          <div className="m-skills m-reveal">
            <h3 className="m-mono m-muted">CAPABILITIES</h3>
            {about.skill_groups ? (
              <div className="m-skill-groups">
                {about.skill_groups.map((group, i) => (
                  <div key={group.label} className="m-skill-group">
                    <div className="m-skill-group-label m-mono">
                      <span className="m-accent">{String(i + 1).padStart(2, '0')}</span>
                      <span className="m-muted"> / </span>
                      <span>{group.label.toUpperCase()}</span>
                    </div>
                    <div className="m-skills-grid">
                      {group.items.map((item) => (
                        <span key={item} className="m-skill">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="m-skills-grid">
                {about.skills.map((skill) => (
                  <span key={skill} className="m-skill">{skill}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={(el) => { sectionRefs.current.projects = el; }} className="m-section m-section-alt">
        <div className="m-section-inner">
          <div className="m-section-label m-mono m-reveal">
            <span className="m-accent">02</span> / PROJECTS
          </div>
          <div className="m-projects-grid">
            {featuredProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                expanded={expandedProject === p.id}
                onToggle={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
              />
            ))}
          </div>
          {otherProjects.length > 0 && (
            <>
              <h3 className="m-mono m-muted m-reveal" style={{ marginTop: 48, marginBottom: 24 }}>
                OTHER PROJECTS
              </h3>
              <div className="m-projects-grid">
                {otherProjects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    expanded={expandedProject === p.id}
                    onToggle={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" ref={(el) => { sectionRefs.current.experience = el; }} className="m-section">
        <div className="m-section-inner">
          <div className="m-section-label m-mono m-reveal">
            <span className="m-accent">03</span> / EXPERIENCE
          </div>
          <div className="m-timeline">
            {roles.map((role, i) => (
              <div key={i} className="m-timeline-item m-reveal">
                <div className="m-timeline-marker" />
                <div className="m-timeline-content">
                  <span className="m-mono m-muted m-timeline-period">{role.period}</span>
                  <h3>{role.title}</h3>
                  <p className="m-accent m-timeline-company">{role.company}</p>
                  <ul>
                    {role.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {cv.pdf_url && (
            <div className="m-reveal" style={{ marginTop: 32 }}>
              <a href={cv.pdf_url} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-secondary">
                Download Full CV (PDF)
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" ref={(el) => { sectionRefs.current.credentials = el; }} className="m-section m-section-alt">
        <div className="m-section-inner">
          <div className="m-section-label m-mono m-reveal">
            <span className="m-accent">04</span> / CREDENTIALS
          </div>
          <div className="m-creds-grid">
            <div className="m-reveal">
              <h3 className="m-mono m-muted">EDUCATION</h3>
              <div className="m-creds-list">
                {education.map((c) => (
                  <div key={c.id} className="m-cred-item">
                    <h4>{c.title}</h4>
                    <p className="m-muted">{c.issuer}</p>
                    {c.date && <span className="m-mono m-muted">{c.date}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="m-reveal">
              <h3 className="m-mono m-muted">CERTIFICATIONS</h3>
              <div className="m-creds-list">
                {certifications.map((c) => (
                  <div key={c.id} className="m-cred-item">
                    <h4>{c.title}</h4>
                    <p className="m-muted">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={(el) => { sectionRefs.current.contact = el; }} className="m-section">
        <div className="m-section-inner m-contact">
          <div className="m-section-label m-mono m-reveal">
            <span className="m-accent">05</span> / CONTACT
          </div>
          <div className="m-reveal">
            <h2>Let's build something.</h2>
            <p className="m-muted" style={{ maxWidth: 480, marginBottom: 32 }}>
              Open to consulting engagements, security work, and AI projects.
              Based in Brisbane, available remotely.
            </p>
            <div className="m-contact-links">
              <a href={`mailto:${about.email}`} className="m-contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
                <span>{about.email}</span>
              </a>
              {about.phone && (
                <a href={`tel:${about.phone.replace(/\s/g, '')}`} className="m-contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{about.phone}</span>
                </a>
              )}
              {about.linkedin_url && (
                <a href={about.linkedin_url} target="_blank" rel="noopener noreferrer" className="m-contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              )}
              {about.github_url && (
                <a href={about.github_url} target="_blank" rel="noopener noreferrer" className="m-contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="m-footer">
        <div className="m-footer-inner m-mono">
          <span>FC / BNE / 26</span>
          <span>Flynn Chambers</span>
          <span>
            <a href="/xp" className="m-footer-xp">XP Edition</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, expanded, onToggle }: { project: Project; expanded: boolean; onToggle: () => void }) {
  const hasLinks = project.github_url || project.live_url || project.pdf_url;

  return (
    <div className={`m-project-card m-reveal${expanded ? ' expanded' : ''}`}>
      <button className="m-project-card-header" onClick={onToggle}>
        <div className="m-project-card-meta">
          <span className="m-mono m-accent">{String(project.id).padStart(2, '0')}</span>
          <span className="m-mono m-muted">/</span>
          <span className="m-mono m-muted">{project.tags[0]?.toUpperCase()}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="m-project-tags">
          {project.tags.map((t) => (
            <span key={t} className="m-project-tag m-mono">{t}</span>
          ))}
        </div>
        <span className="m-project-expand m-mono">{expanded ? '— COLLAPSE' : '+ EXPAND'}</span>
      </button>
      {expanded && (
        <div className="m-project-detail">
          {project.long_description && (
            <div className="m-project-long-desc">
              {project.long_description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
          {hasLinks && (
            <div className="m-project-links">
              {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-small">
                  Live Demo
                </a>
              )}
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-small">
                  GitHub
                </a>
              )}
              {project.pdf_url && (
                <a href={project.pdf_url} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-small">
                  PDF
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
