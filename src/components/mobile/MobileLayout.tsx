import { useState } from 'react';
import { projects, about, certs, cv } from '../../data/content';
import Projects from '../sections/Projects';
import ProjectDetail from '../sections/ProjectDetail';
import About from '../sections/About';
import Certs from '../sections/Certs';
import CV from '../sections/CV';
import type { Section, Project } from '../../types';

type MobileSection = Section | 'minesweeper';

const NAV_ITEMS: { id: MobileSection; label: string }[] = [
  { id: 'projects',    label: '📁 Projects' },
  { id: 'about',       label: '👤 About' },
  { id: 'certs',       label: '🎓 Certs & Education' },
  { id: 'cv',          label: '📄 CV' },
  { id: 'minesweeper', label: '💣 Minesweeper' },
];

export default function MobileLayout() {
  const [section, setSection] = useState<MobileSection>('projects');
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function navigate(s: MobileSection) {
    setSection(s);
    setSelectedProject(null);
    setNavOpen(false);
  }

  const sectionLabel = NAV_ITEMS.find((n) => n.id === section)?.label ?? '';

  function renderContent() {
    if (selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }
    switch (section) {
      case 'projects':    return <Projects projects={projects} onSelectProject={setSelectedProject} />;
      case 'about':       return <About about={about} />;
      case 'certs':       return <Certs certs={certs} />;
      case 'cv':          return <CV cv={cv} />;
      case 'minesweeper': return (
        <div style={{ padding: '20px 0', textAlign: 'center', color: '#666' }}>
          Minesweeper is only available on desktop.
        </div>
      );
    }
  }

  return (
    <div className="mobile-layout">
      <header className="mobile-header">
        <span className="mobile-header-title">Flynn Chambers</span>
        <button
          className="mobile-menu-btn"
          onClick={() => setNavOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </header>

      {navOpen && <div className="mobile-overlay" onClick={() => setNavOpen(false)} />}

      <nav className={`mobile-nav-drawer${navOpen ? ' open' : ''}`}>
        <div style={{ color: '#fff', fontSize: 11, padding: '0 4px 8px', opacity: 0.7 }}>
          Flynn Chambers
        </div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={section === item.id ? 'active' : ''}
            onClick={() => navigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: '8px 12px 4px', fontSize: 10, color: '#888', borderBottom: '1px solid #e0ddd4' }}>
        {sectionLabel}
      </div>

      <main className="mobile-content">
        {renderContent()}
      </main>

      <footer className="mobile-footer">
        XP styling: <a href="https://github.com/botoxparty/XP.css" target="_blank" rel="noopener noreferrer">XP.css</a> by Adam Hammad
      </footer>
    </div>
  );
}
