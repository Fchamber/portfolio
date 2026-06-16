import DOMPurify from 'dompurify';
import type { CV as CVType } from '../../types';

interface Props {
  cv: CVType;
}

// Minimal markdown → HTML (headings, bold, lists, paragraphs)
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '');
}

export default function CV({ cv }: Props) {
  return (
    <div>
      <div className="section-heading">
        <span>📄</span>
        <span>CV</span>
      </div>

      <div className="cv-actions">
        {cv.pdf_url ? (
          <a href={cv.pdf_url} target="_blank" rel="noopener noreferrer">
            <button>⬇ Download PDF</button>
          </a>
        ) : (
          <button disabled title="PDF not yet uploaded">⬇ Download PDF</button>
        )}
      </div>

      <div
        className="cv-web-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(renderMarkdown(cv.web_content || '')) }}
      />
    </div>
  );
}
