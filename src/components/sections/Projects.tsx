import { useState } from 'react';
import type { Project } from '../../types';
import ProjectIcon from '../ProjectIcon';

interface Props {
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

export default function Projects({ projects, onSelectProject }: Props) {
  const [showAll, setShowAll] = useState(false);

  const featured = projects
    .filter((p) => p.featured && p.visible)
    .sort((a, b) => (a.featured_order ?? 99) - (b.featured_order ?? 99))
    .slice(0, 4);

  if (showAll) {
    return (
      <div>
        <div className="projects-list-header">
          <button onClick={() => setShowAll(false)}>← Back</button>
          <h2>All Projects</h2>
        </div>
        <table className="projects-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {projects.filter((p) => p.visible).map((p) => (
              <tr key={p.id} onClick={() => onSelectProject(p)}>
                <td style={{ width: 24 }}>
                  <ProjectIcon slug={p.slug} size={18} />
                </td>
                <td>{p.title}</td>
                <td>
                  <div className="project-tags">
                    {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <div className="section-heading">
        <span>📁</span>
        <span>Projects</span>
      </div>
      <div className="projects-grid">
        {featured.map((p) => (
          <button key={p.id} className="project-card" onClick={() => onSelectProject(p)}>
            <div className="project-card-icon">
              <ProjectIcon slug={p.slug} size={40} />
            </div>
            <div className="project-card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
        {projects.filter((p) => p.visible).length > 4 && (
          <button className="more-projects-card" onClick={() => setShowAll(true)}>
            More projects...
          </button>
        )}
      </div>
    </div>
  );
}
