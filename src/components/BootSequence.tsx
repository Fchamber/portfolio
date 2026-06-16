import { useState, useEffect, useRef, useCallback } from 'react';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [out, setOut] = useState(false);
  const done = useRef(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setOut(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    const t = setTimeout(finish, 4200);
    return () => clearTimeout(t);
  }, [finish]);

  useEffect(() => {
    const handler = () => finish();
    window.addEventListener('click', handler);
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('click', handler);
      window.removeEventListener('keydown', handler);
    };
  }, [finish]);

  return (
    <div className={`boot-overlay${out ? ' boot-overlay--out' : ''}`}>
      <div className="boot-screen">
        <div className="boot-logo">
          <div className="boot-logo-name">Flynn Chambers</div>
          <div className="boot-logo-edition">Portfolio</div>
        </div>

        <div className="boot-progress-track">
          <div className="boot-progress-strip">
            {Array.from({ length: 28 }, (_, i) => <span key={i} className="boot-block" />)}
          </div>
        </div>

        <div className="boot-copyright">© 2025 Flynn Chambers · click anywhere to skip</div>
      </div>
    </div>
  );
}
