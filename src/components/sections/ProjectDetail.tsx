import type { Project } from '../../types';
import ProjectIcon from '../ProjectIcon';

interface Props {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <div>
      <div className="project-detail-header">
        <ProjectIcon slug={project.slug} size={32} />
        <div>
          <h2 style={{ fontSize: 14, margin: 0 }}>{project.title}</h2>
          <div className="project-tags" style={{ marginTop: 4 }}>
            {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>
      </div>

      <button onClick={onBack} style={{ marginBottom: 10 }}>← Back</button>

      {project.screenshot_url && !project.iframe_url && (
        <img src={project.screenshot_url} alt="Screenshot" className="project-detail-screenshot" />
      )}
      {project.iframe_url && (
        <iframe
          src={project.iframe_url}
          title={project.title}
          className="project-detail-iframe"
          sandbox="allow-scripts"
        />
      )}
      {project.video_url && (
        <iframe
          src={project.video_url}
          title={`${project.title} video`}
          className="project-detail-iframe"
          sandbox="allow-scripts allow-presentation"
          allowFullScreen
        />
      )}

      <p className="project-detail-description">
        {project.long_description || project.description}
      </p>

      <div className="project-detail-links">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">
            <button>Live Demo</button>
          </a>
        )}
        {project.pdf_url && (
          <a href={project.pdf_url} target="_blank" rel="noopener noreferrer">
            <button>Download PDF</button>
          </a>
        )}
      </div>
    </div>
  );
}
