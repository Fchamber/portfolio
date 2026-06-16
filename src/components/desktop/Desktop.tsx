import { useWindowStore } from '../../store/windowStore';
import DesktopIcon from './DesktopIcon';
import Taskbar from './Taskbar';
import ExplorerWindow from '../windows/ExplorerWindow';
import MinesweeperWindow from '../windows/MinesweeperWindow';

export default function Desktop() {
  const store = useWindowStore();

  return (
    <>
      <div className="desktop">
        <div className="desktop-icons">
          <DesktopIcon
            label="My Portfolio"
            icon="/assets/icons/portfolio.svg"
            onDoubleClick={() => store.openWindow('portfolio')}
          />
          <DesktopIcon
            label="Minesweeper"
            icon="/assets/icons/minesweeper.svg"
            onDoubleClick={() => store.openWindow('minesweeper')}
          />
        </div>
      </div>

      <Taskbar />

      {store.portfolio.open && <ExplorerWindow />}
      {store.minesweeper.open && <MinesweeperWindow />}
    </>
  );
}
