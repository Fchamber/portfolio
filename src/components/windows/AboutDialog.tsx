interface Props {
  onClose: () => void;
}

export default function AboutDialog({ onClose }: Props) {
  return (
    <div className="about-dialog-overlay" onClick={onClose}>
      <div
        className="window"
        style={{ width: 320 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title-bar">
          <div className="title-bar-text">About Flynn Chambers — Portfolio</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} />
          </div>
        </div>
        <div className="about-dialog-content">
          <p>
            <strong>Flynn Chambers — Portfolio</strong>
            <br />
            Version 1.0
          </p>
          <p>Built by Flynn Chambers</p>
          <p>
            Windows XP styling provided by{' '}
            <a
              href="https://github.com/botoxparty/XP.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              XP.css
            </a>
            , created by{' '}
            <strong>Adam Hammad</strong>. Licensed under MIT.
          </p>
          <div className="about-dialog-footer">
            <button onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
