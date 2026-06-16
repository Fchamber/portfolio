import type { About as AboutType } from '../../types';

interface Props {
  about: AboutType;
}

export default function About({ about }: Props) {
  const initials = 'FC';

  return (
    <div className="about-pane">
      <div className="section-heading">
        <span>👤</span>
        <span>About</span>
      </div>

      <div className="about-header">
        {about.photo_url
          ? <img src={about.photo_url} alt="Flynn Chambers" className="about-avatar" />
          : <div className="about-avatar-initials">{initials}</div>
        }
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="about-name">Flynn Chambers</div>
          <p className="about-bio">{about.bio || 'Cybersecurity & AI engineer.'}</p>
        </div>
      </div>

      {about.skills && about.skills.length > 0 && (
        <div>
          <div className="about-section-title">Skills</div>
          <div className="skills-list">
            {about.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="about-section-title">Contact</div>
        <div className="contact-links">
          {about.email && (
            <a href={`mailto:${about.email}`} className="contact-link">
              <span>✉</span> {about.email}
            </a>
          )}
          {about.github_url && (
            <a href={about.github_url} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>⌥</span> GitHub
            </a>
          )}
          {about.linkedin_url && (
            <a href={about.linkedin_url} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>in</span> LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
