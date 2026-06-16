import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import type { WindowId } from '../../types';
import { useWindowStore } from '../../store/windowStore';

interface Props {
  id: WindowId;
  title: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
  menuBar?: React.ReactNode;
  addressBar?: React.ReactNode;
  onFocus?: () => void;
}

export default function WindowChrome({
  id, title, width = 920, height = 620, children, menuBar, addressBar, onFocus,
}: Props) {
  const store = useWindowStore();
  const win = store[id];
  const nodeRef = useRef<HTMLDivElement>(null);
  const [maximized, setMaximized] = useState(false);

  if (!win.open || win.minimized) return null;

  const handleMouseDown = () => {
    store.focusWindow(id);
    onFocus?.();
  };

  const chrome = (
    <div className="window" style={{ width: '100%', height: '100%' }}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => store.minimizeWindow(id)} />
          <button aria-label={maximized ? 'Restore' : 'Maximize'} onClick={() => setMaximized(m => !m)} />
          <button aria-label="Close" onClick={() => store.closeWindow(id)} />
        </div>
      </div>
      {menuBar}
      {addressBar}
      <div className="window-body">
        {children}
      </div>
    </div>
  );

  if (maximized) {
    return (
      <div
        className="xp-window-wrap xp-window-maximized"
        style={{ zIndex: win.zIndex }}
        onMouseDown={handleMouseDown}
      >
        {chrome}
      </div>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".title-bar"
      defaultPosition={win.position}
      bounds="parent"
      onStart={() => store.focusWindow(id)}
      onStop={(_e, data) => store.setPosition(id, { x: data.x, y: data.y })}
    >
      <div
        ref={nodeRef}
        className="xp-window-wrap"
        style={{ width, height, zIndex: win.zIndex, resize: 'both', overflow: 'hidden', minWidth: 480, minHeight: 320 }}
        onMouseDown={handleMouseDown}
      >
        {chrome}
      </div>
    </Draggable>
  );
}
