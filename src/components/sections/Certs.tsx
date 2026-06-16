import type { Cert } from '../../types';

interface Props {
  certs: Cert[];
}

export default function Certs({ certs }: Props) {
  const education = certs.filter((c) => c.type === 'education');
  const certifications = certs.filter((c) => c.type === 'certification');

  return (
    <div>
      <div className="section-heading">
        <span>🎓</span>
        <span>Certs &amp; Education</span>
      </div>

      <ul className="tree-view">
        {education.length > 0 && (
          <li>
            <details open>
              <summary className="certs-section-title">Education</summary>
              <ul>
                {education.map((c) => (
                  <li key={c.id} className="cert-item">
                    <span className="cert-title">{c.title}</span>
                    {(c.issuer || c.date) && (
                      <span className="cert-meta">
                        {[c.issuer, c.date].filter(Boolean).join(' · ')}
                      </span>
                    )}
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        View certificate ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        )}

        {certifications.length > 0 && (
          <li>
            <details open>
              <summary className="certs-section-title">Certifications</summary>
              <ul>
                {certifications.map((c) => (
                  <li key={c.id} className="cert-item">
                    <span className="cert-title">{c.title}</span>
                    {(c.issuer || c.date) && (
                      <span className="cert-meta">
                        {[c.issuer, c.date].filter(Boolean).join(' · ')}
                      </span>
                    )}
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        View certificate ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        )}

        {certs.length === 0 && (
          <li style={{ color: '#888', fontStyle: 'italic' }}>No entries yet.</li>
        )}
      </ul>
    </div>
  );
}
