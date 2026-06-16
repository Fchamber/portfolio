import { useState, useEffect } from 'react';
import Desktop from '../components/desktop/Desktop';
import MobileLayout from '../components/mobile/MobileLayout';
import BootSequence from '../components/BootSequence';
import '../index.css';

export default function XPApp() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('xp-mode');
    return () => { document.documentElement.classList.remove('xp-mode'); };
  }, []);

  return (
    <>
      <Desktop />
      <MobileLayout />
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
    </>
  );
}
