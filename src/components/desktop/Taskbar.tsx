import { useClock } from '../../hooks/useClock';
import { useWindowStore } from '../../store/windowStore';
import type { WindowId } from '../../types';

interface TaskbarEntry {
  id: WindowId;
  label: string;
  icon: string;
}

const WINDOWS: TaskbarEntry[] = [
  { id: 'portfolio', label: 'Flynn Chambers — Portfolio', icon: '/assets/icons/portfolio.svg' },
  { id: 'minesweeper', label: 'Minesweeper', icon: '/assets/icons/minesweeper.svg' },
];

export default function Taskbar() {
  const time = useClock();
  const store = useWindowStore();

  function handleTaskbarBtn(id: WindowId) {
    const win = store[id];
    if (!win.open) return;
    if (win.minimized) {
      store.restoreWindow(id);
    } else {
      store.minimizeWindow(id);
    }
  }

  const openWindows = WINDOWS.filter((w) => store[w.id].open);

  return (
    <div className="taskbar">
      <button className="taskbar-start">
        <img src="/assets/icons/start-logo.svg" alt="Windows" />
        start
      </button>
      <div className="taskbar-divider" />
      <div className="taskbar-windows">
        {openWindows.map((w) => (
          <button
            key={w.id}
            className={`taskbar-btn${!store[w.id].minimized ? ' active' : ''}`}
            onClick={() => handleTaskbarBtn(w.id)}
          >
            <img src={w.icon} alt="" />
            {w.label}
          </button>
        ))}
      </div>
      <div className="taskbar-tray">
        <div className="taskbar-tray-icons">
          <img src="/assets/icons/network.svg" alt="Network" />
          <img src="/assets/icons/volume.svg" alt="Volume" />
        </div>
        <span>{time}</span>
      </div>
    </div>
  );
}
