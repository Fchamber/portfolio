import { create } from 'zustand';
import type { AppWindowStore, WindowId, WindowState } from '../types';

const defaultWindow = (position: { x: number; y: number }): WindowState => ({
  open: false,
  minimized: false,
  position,
  zIndex: 1,
});

export const useWindowStore = create<AppWindowStore>((set) => ({
  portfolio: { ...defaultWindow({ x: 60, y: 30 }), open: window.innerWidth > 768 },
  minesweeper: defaultWindow({ x: 420, y: 80 }),
  nextZ: 2,

  openWindow: (id: WindowId) =>
    set((state) => {
      const z = state.nextZ;
      return {
        [id]: { ...state[id], open: true, minimized: false, zIndex: z },
        nextZ: z + 1,
      };
    }),

  closeWindow: (id: WindowId) =>
    set((state) => ({ [id]: { ...state[id], open: false } })),

  minimizeWindow: (id: WindowId) =>
    set((state) => ({ [id]: { ...state[id], minimized: true } })),

  restoreWindow: (id: WindowId) =>
    set((state) => {
      const z = state.nextZ;
      return {
        [id]: { ...state[id], minimized: false, zIndex: z },
        nextZ: z + 1,
      };
    }),

  focusWindow: (id: WindowId) =>
    set((state) => {
      const z = state.nextZ;
      return {
        [id]: { ...state[id], zIndex: z },
        nextZ: z + 1,
      };
    }),

  setPosition: (id: WindowId, pos) =>
    set((state) => ({ [id]: { ...state[id], position: pos } })),
}));
