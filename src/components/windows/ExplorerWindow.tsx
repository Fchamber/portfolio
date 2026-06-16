import { useState } from 'react';
import WindowChrome from './WindowChrome';
import AboutDialog from './AboutDialog';
import Projects from '../sections/Projects';
import ProjectDetail from '../sections/ProjectDetail';
import About from '../sections/About';
import Certs from '../sections/Certs';
import CV from '../sections/CV';
import { projects, about, certs, cv } from '../../data/content';
import type { Section, Project } from '../../types';

const ADDRESS_MAP: Record<Section, string> = {
  projects: 'flynn.dev/projects',
  about:    'flynn.dev/about',
  certs:    'flynn.dev/certs',
  cv:       'flynn.dev/cv',
};

export default function ExplorerWindow() {
  const [section, setSection] = useState<Section>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const address = selectedProject
    ? `flynn.dev/projects/${selectedProject.slug}`
    : ADDRESS_MAP[section];

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'projects', label: 'Projects',         icon: '📁' },
    { id: 'about',    label: 'About',             icon: '👤' },
    { id: 'certs',    label: 'Certs & Education', icon: '🎓' },
    { id: 'cv',       label: 'CV',                icon: '📄' },
  ];

  function navigate(s: Section) {
    setSection(s);
    setSelectedProject(null);
  }

  const menuBar = (
    <div className="window-menubar">
      <button>File</button>
      <button>Edit</button>
      <button>View</button>
      <button>Favourites</button>
      <button>Tools</button>
      <button onClick={() => setShowAbout(true)}>Help</button>
    </div>
  );

  const addressBar = (
    <div className="window-addressbar">
      <label>Address</label>
      <input readOnly value={address} />
    </div>
  );

  const sidebar = (
    <div className="explorer-sidebar">
      <div className="sidebar-avatar">
        {about.photo_url
          ? <img src={about.photo_url} alt="Flynn Chambers" className="sidebar-avatar-img" />
          : <div className="sidebar-avatar-initials">FC</div>
        }
        <div className="sidebar-name">Flynn Chambers</div>
        <div className="sidebar-role">Cybersecurity &amp; AI</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-nav-item${section === item.id && !selectedProject ? ' active' : ''}`}
            onClick={() => navigate(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-contacts">
        <a href={`mailto:${about.email}`} className="sidebar-contact-link">
          <span>✉</span> Email
        </a>
        {about.github_url && (
          <a href={about.github_url} target="_blank" rel="noopener noreferrer" className="sidebar-contact-link">
            <span>⌥</span> GitHub
          </a>
        )}
        {about.linkedin_url && (
          <a href={about.linkedin_url} target="_blank" rel="noopener noreferrer" className="sidebar-contact-link">
            <span>in</span> LinkedIn
          </a>
        )}
      </div>
    </div>
  );

  function renderContent() {
    if (selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }
    switch (section) {
      case 'projects': return <Projects projects={projects} onSelectProject={setSelectedProject} />;
      case 'about':    return <About about={about} />;
      case 'certs':    return <Certs certs={certs} />;
      case 'cv':       return <CV cv={cv} />;
    }
  }

  return (
    <>
      <WindowChrome
        id="portfolio"
        title="Flynn Chambers — Portfolio"
        menuBar={menuBar}
        addressBar={addressBar}
      >
        {sidebar}
        <div className="explorer-content">
          {renderContent()}
        </div>
      </WindowChrome>

      {showAbout && <AboutDialog onClose={() => setShowAbout(false)} />}
    </>
  );
}
