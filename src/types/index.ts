export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  icon_url?: string;
  tags: string[];
  featured: boolean;
  featured_order?: number;
  github_url?: string;
  live_url?: string;
  pdf_url?: string;
  screenshot_url?: string;
  iframe_url?: string;
  video_url?: string;
  visible: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface About {
  id: number;
  bio: string;
  photo_url?: string;
  skills: string[];
  skill_groups?: SkillGroup[];
  email: string;
  phone?: string;
  linkedin_url?: string;
  github_url?: string;
}

export interface Cert {
  id: number;
  title: string;
  issuer?: string;
  date?: string;
  url?: string;
  type: 'education' | 'certification';
  sort_order: number;
  created_at: string;
}

export interface CV {
  id: number;
  pdf_url?: string;
  web_content: string;
}

export type Section = 'projects' | 'about' | 'certs' | 'cv';

export interface WindowState {
  open: boolean;
  minimized: boolean;
  position: { x: number; y: number };
  zIndex: number;
}

export interface AppWindowStore {
  portfolio: WindowState;
  minesweeper: WindowState;
  nextZ: number;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  setPosition: (id: WindowId, pos: { x: number; y: number }) => void;
}

export type WindowId = 'portfolio' | 'minesweeper';
