interface Props {
  slug: string;
  size?: number;
}

export default function ProjectIcon({ slug, size = 40 }: Props) {
  const s = size;

  /* ── Argus: shield + eye ─────────────────────────────────────────────── */
  if (slug === 'argus') return (
    <svg viewBox="0 0 48 48" width={s} height={s} fill="none">
      <path d="M24 3L7 12v16c0 8 5 14 17 18 12-4 17-10 17-18V12Z" fill="#1462c0"/>
      <path d="M24 7L10 15v13c0 7 4 12 14 15 10-3 14-8 14-15V15Z" fill="#4a9ff5"/>
      <ellipse cx="24" cy="28" rx="9" ry="6" fill="white" fillOpacity="0.95"/>
      <circle cx="24" cy="28" r="4" fill="#091e5a"/>
      <circle cx="25.5" cy="26.5" r="1.5" fill="white" fillOpacity="0.8"/>
    </svg>
  );

  /* ── catGPT: cat face ────────────────────────────────────────────────── */
  if (slug === 'catgpt') return (
    <svg viewBox="0 0 48 48" width={s} height={s} fill="none">
      <polygon points="9,22 3,7 18,17" fill="#f7cc44"/>
      <polygon points="39,22 45,7 30,17" fill="#f7cc44"/>
      <polygon points="10,21 6,11 16,17" fill="#f5a0a0"/>
      <polygon points="38,21 42,11 32,17" fill="#f5a0a0"/>
      <circle cx="24" cy="28" r="18" fill="#f7cc44"/>
      <ellipse cx="17" cy="25" rx="3.5" ry="4.5" fill="#1a1a1a"/>
      <ellipse cx="31" cy="25" rx="3.5" ry="4.5" fill="#1a1a1a"/>
      <circle cx="18" cy="23.5" r="1.2" fill="white"/>
      <circle cx="32" cy="23.5" r="1.2" fill="white"/>
      <path d="M22 31l2-2 2 2Q24 34 22 31Z" fill="#e06060"/>
      <path d="M20 33Q24 37 28 33" stroke="#c05050" strokeWidth="1.2" fill="none"/>
      <line x1="5" y1="29" x2="19" y2="30.5" stroke="#aaa" strokeWidth="0.8"/>
      <line x1="5" y1="32.5" x2="19" y2="32.5" stroke="#aaa" strokeWidth="0.8"/>
      <line x1="43" y1="29" x2="29" y2="30.5" stroke="#aaa" strokeWidth="0.8"/>
      <line x1="43" y1="32.5" x2="29" y2="32.5" stroke="#aaa" strokeWidth="0.8"/>
    </svg>
  );

  /* ── thinkd: node graph on dark canvas ───────────────────────────────── */
  if (slug === 'thinkd') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect width="48" height="48" rx="6" fill="#0d1117"/>
      <line x1="14" y1="14" x2="24" y2="24" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.8"/>
      <line x1="34" y1="14" x2="24" y2="24" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.8"/>
      <line x1="14" y1="34" x2="24" y2="24" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8"/>
      <line x1="34" y1="34" x2="24" y2="24" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8"/>
      <line x1="14" y1="14" x2="34" y2="14" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="14" y1="34" x2="34" y2="34" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4"/>
      <circle cx="14" cy="14" r="4" fill="#a3e635"/>
      <circle cx="34" cy="14" r="4" fill="#f97316"/>
      <circle cx="14" cy="34" r="4" fill="#38bdf8"/>
      <circle cx="34" cy="34" r="4" fill="#e879f9"/>
      <circle cx="24" cy="24" r="6.5" fill="#8b5cf6"/>
      <circle cx="24" cy="24" r="3.5" fill="#ddd8fe"/>
    </svg>
  );

  /* ── Enterprise OpenClaw: building + AI badge ────────────────────────── */
  if (slug === 'openclaw') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect width="48" height="48" rx="4" fill="#1e2d5a"/>
      <polygon points="6,21 24,6 42,21" fill="#2a4080"/>
      <rect x="9" y="20" width="30" height="24" rx="1" fill="#3a5a9a"/>
      <rect x="13" y="24" width="6" height="5" rx="1" fill="#a8d8ff"/>
      <rect x="21" y="24" width="6" height="5" rx="1" fill="#a8d8ff"/>
      <rect x="29" y="24" width="6" height="5" rx="1" fill="#a8d8ff"/>
      <rect x="13" y="32" width="6" height="5" rx="1" fill="#7ab8e8"/>
      <rect x="29" y="32" width="6" height="5" rx="1" fill="#7ab8e8"/>
      <rect x="20" y="33" width="8" height="11" rx="1" fill="#1e2d5a"/>
      <circle cx="37" cy="11" r="7" fill="#f59e0b"/>
      <circle cx="37" cy="11" r="4.5" fill="#1e2d5a"/>
      <circle cx="35.5" cy="11" r="1.2" fill="#f59e0b"/>
      <circle cx="38.5" cy="11" r="1.2" fill="#f59e0b"/>
      <circle cx="37" cy="9.5" r="1.2" fill="#f59e0b"/>
      <circle cx="37" cy="12.5" r="1.2" fill="#f59e0b"/>
    </svg>
  );

  /* ── Nhabit: house ───────────────────────────────────────────────────── */
  if (slug === 'nhabit') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect width="48" height="48" rx="4" fill="#fdf6ee"/>
      <rect x="30" y="10" width="5" height="14" rx="0.5" fill="#a06030"/>
      <polygon points="4,27 24,7 44,27" fill="#c0784a"/>
      <rect x="7" y="25" width="34" height="19" fill="#e8d4b8"/>
      <rect x="20" y="33" width="8" height="11" rx="1" fill="#c0784a"/>
      <circle cx="27" cy="39" r="1" fill="#a06030"/>
      <rect x="10" y="28" width="8" height="7" rx="1" fill="#a8d0f0"/>
      <line x1="14" y1="28" x2="14" y2="35" stroke="#7090b0" strokeWidth="0.8"/>
      <line x1="10" y1="31.5" x2="18" y2="31.5" stroke="#7090b0" strokeWidth="0.8"/>
      <rect x="30" y="28" width="8" height="7" rx="1" fill="#a8d0f0"/>
      <line x1="34" y1="28" x2="34" y2="35" stroke="#7090b0" strokeWidth="0.8"/>
      <line x1="30" y1="31.5" x2="38" y2="31.5" stroke="#7090b0" strokeWidth="0.8"/>
    </svg>
  );

  /* ── Homelab: server rack + lock badge ───────────────────────────────── */
  if (slug === 'homelab') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect width="48" height="48" rx="4" fill="#0f1f0f"/>
      <rect x="6" y="8" width="36" height="10" rx="2" fill="#3a6a3a"/>
      <circle cx="10" cy="13" r="1.5" fill="#4ade80"/>
      <circle cx="14" cy="13" r="1.5" fill="#4ade80"/>
      <circle cx="18" cy="13" r="1.5" fill="#4ade80" fillOpacity="0.35"/>
      <rect x="24" y="9.5" width="14" height="2.5" rx="0.5" fill="#0f1f0f"/>
      <rect x="24" y="13" width="14" height="2.5" rx="0.5" fill="#0f1f0f"/>
      <rect x="6" y="21" width="36" height="10" rx="2" fill="#3a6a3a"/>
      <circle cx="10" cy="26" r="1.5" fill="#4ade80"/>
      <circle cx="14" cy="26" r="1.5" fill="#facc15"/>
      <circle cx="18" cy="26" r="1.5" fill="#4ade80" fillOpacity="0.35"/>
      <rect x="24" y="22.5" width="14" height="2.5" rx="0.5" fill="#0f1f0f"/>
      <rect x="24" y="26" width="14" height="2.5" rx="0.5" fill="#0f1f0f"/>
      <circle cx="36" cy="39" r="8" fill="#22c55e"/>
      <rect x="32" y="39" width="8" height="6" rx="1" fill="white"/>
      <path d="M33.5 39v-2a2.5 2.5 0 0 1 5 0v2" stroke="white" strokeWidth="1.5" fill="none"/>
      <circle cx="36" cy="42.5" r="1.2" fill="#22c55e"/>
    </svg>
  );

  /* ── Jobber: document + checkmark badge ──────────────────────────────── */
  if (slug === 'jobber') return (
    <svg viewBox="0 0 48 48" width={s} height={s} fill="none">
      <rect width="48" height="48" rx="4" fill="#f8f4ff"/>
      <path d="M10 6h18l10 10v26a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2Z" fill="white" stroke="#c4b0e8" strokeWidth="1"/>
      <line x1="28" y1="6" x2="38" y2="16" stroke="#c4b0e8" strokeWidth="1"/>
      <line x1="14" y1="22" x2="34" y2="22" stroke="#c4b0e8" strokeWidth="1.5"/>
      <line x1="14" y1="27" x2="34" y2="27" stroke="#c4b0e8" strokeWidth="1.5"/>
      <line x1="14" y1="32" x2="26" y2="32" stroke="#c4b0e8" strokeWidth="1.5"/>
      <circle cx="36" cy="37" r="8" fill="#8b5cf6"/>
      <path d="M32 37l2.5 2.5 5.5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  /* ── AskIT: chat bubble + M365 dots ──────────────────────────────────── */
  if (slug === 'askit') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect width="48" height="48" rx="4" fill="#0078d4"/>
      <rect x="7" y="9" width="26" height="20" rx="3" fill="white" fillOpacity="0.95"/>
      <polygon points="10,29 7,39 18,33" fill="white" fillOpacity="0.95"/>
      <circle cx="13" cy="19" r="2.5" fill="#0078d4"/>
      <circle cx="20" cy="19" r="2.5" fill="#0078d4"/>
      <circle cx="27" cy="19" r="2.5" fill="#0078d4"/>
      <rect x="28" y="26" width="13" height="13" rx="3" fill="#50e6ff" fillOpacity="0.9"/>
      <circle cx="31.5" cy="32.5" r="1.5" fill="white"/>
      <circle cx="34.5" cy="32.5" r="1.5" fill="white"/>
      <circle cx="37.5" cy="32.5" r="1.5" fill="white"/>
    </svg>
  );

  /* ── Portfolio: CRT monitor ──────────────────────────────────────────── */
  if (slug === 'portfolio') return (
    <svg viewBox="0 0 48 48" width={s} height={s}>
      <rect x="3" y="5" width="42" height="30" rx="3" fill="#c8c4b8" stroke="#808080" strokeWidth="1"/>
      <rect x="5" y="7" width="38" height="26" rx="2" fill="#1462c0"/>
      <rect x="7" y="9" width="34" height="22" rx="1" fill="#0058e6"/>
      <line x1="11" y1="15" x2="27" y2="15" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
      <line x1="11" y1="19" x2="25" y2="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
      <line x1="11" y1="23" x2="21" y2="23" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
      <circle cx="33" cy="19" r="4.5" fill="#3a8cf5" fillOpacity="0.5"/>
      <rect x="19" y="35" width="10" height="6" fill="#a8a490"/>
      <rect x="13" y="41" width="22" height="3" rx="1.5" fill="#909080"/>
    </svg>
  );

  /* ── Data Privacy Paper: document + lock badge ───────────────────────── */
  if (slug === 'data-privacy-paper') return (
    <svg viewBox="0 0 48 48" width={s} height={s} fill="none">
      <rect width="48" height="48" rx="4" fill="#fffbf0"/>
      <path d="M10 6h18l10 10v26a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2Z" fill="#fff9e6" stroke="#d4a020" strokeWidth="1"/>
      <line x1="28" y1="6" x2="38" y2="16" stroke="#d4a020" strokeWidth="1"/>
      <line x1="15" y1="22" x2="33" y2="22" stroke="#d4a020" strokeWidth="1.2" strokeOpacity="0.6"/>
      <line x1="15" y1="27" x2="33" y2="27" stroke="#d4a020" strokeWidth="1.2" strokeOpacity="0.6"/>
      <line x1="15" y1="32" x2="25" y2="32" stroke="#d4a020" strokeWidth="1.2" strokeOpacity="0.6"/>
      <circle cx="36" cy="37" r="9" fill="#f59e0b"/>
      <rect x="31.5" y="37" width="9" height="7" rx="1.5" fill="white"/>
      <path d="M33 37v-2.5a3 3 0 0 1 6 0V37" stroke="white" strokeWidth="1.8" fill="none"/>
      <circle cx="36" cy="41" r="1.2" fill="#f59e0b"/>
    </svg>
  );

  /* ── Default fallback ────────────────────────────────────────────────── */
  return (
    <svg viewBox="0 0 48 48" width={s} height={s} fill="none">
      <rect x="8" y="5" width="32" height="38" rx="2" fill="#d4d0c8" stroke="#808080" strokeWidth="1"/>
      <line x1="13" y1="17" x2="35" y2="17" stroke="#808080" strokeWidth="1.5"/>
      <line x1="13" y1="23" x2="35" y2="23" stroke="#808080" strokeWidth="1.5"/>
      <line x1="13" y1="29" x2="26" y2="29" stroke="#808080" strokeWidth="1.5"/>
    </svg>
  );
}
