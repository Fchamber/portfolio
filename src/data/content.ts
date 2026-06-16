import type { Project, About, Cert, CV } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
// featured: true  → appears in the 4-card grid on the Projects home view
// featured_order  → controls grid position (1 = top-left)
// visible: false  → hides from all views
//
// icon_url        → path under /assets/icons/ or full URL
// screenshot_url  → shown in the detail view
// iframe_url      → embedded live demo (overrides screenshot)
// github_url / live_url / pdf_url → link buttons in detail view

export const projects: Project[] = [
  {
    id: 1,
    title: 'Argus — AI-Powered XDR Triage',
    slug: 'argus',
    description: 'MSc thesis. Local LLM pipeline that triages XDR security alerts at human-expert accuracy across 1,000 synthetic alerts.',
    long_description: `Built as my MSc thesis, Argus is an AI-powered XDR alert analysis system using a local LLM pipeline. The system processes raw security alerts, enriches them with context, and produces structured triage decisions — severity, recommended action, analyst notes — matching human-expert accuracy across a corpus of 1,000 synthetic alerts.

The architecture uses a locally-hosted LLM (no cloud dependency) with a structured prompt chain for alert normalisation, threat classification, and response recommendation. Designed to sit between an XDR platform and a SOC analyst queue, dramatically reducing alert fatigue for lean security teams.

Currently exploring commercialisation as an MSP-native AI SOC tool.`,
    icon_url: '',
    tags: ['AI', 'Security', 'Local LLMs', 'XDR', 'Python', 'MSc Thesis'],
    featured: true,
    featured_order: 1,
    github_url: '',
    live_url: '',
    pdf_url: '/assets/Argus \u2013 LLM driven Cyber Security Executive Reporting Platform.pdf',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 0,
    created_at: '',
    updated_at: '',
  },
  {
    id: 2,
    title: 'catGPT',
    slug: 'catgpt',
    description: 'Parody ChatGPT that responds to every message with a curated cat video. Static site on Cloudflare Pages.',
    long_description: `A parody of ChatGPT built as a fun side project — whatever you type, catGPT responds with a thoughtfully curated cat video.

Built as a static site and deployed on Cloudflare Pages. Surprisingly good UX for a joke app — the "typing" indicator and response format mirror the real ChatGPT experience closely enough to fool people for a second.`,
    icon_url: '',
    tags: ['JavaScript', 'Cloudflare Pages', 'Static Site'],
    featured: true,
    featured_order: 2,
    github_url: '',
    live_url: 'https://catgpt-2kk.pages.dev/',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 1,
    created_at: '',
    updated_at: '',
  },
  {
    id: 3,
    title: 'thinkd',
    slug: 'thinkd',
    description: 'AI-powered note-taking and project management on an infinite canvas. Dump anything in — AI auto-organises into dashboards, tasks, and timelines.',
    long_description: `thinkd is an AI-native productivity tool built for developers and technical people who think in systems.

The core idea: an infinite canvas where you can dump anything — meeting notes, code snippets, ideas, URLs — and the AI automatically organises it into structured views: dashboards, task lists, timelines, dependency graphs.

No rigid templates, no forced structure. You work naturally; thinkd infers the structure and surfaces what matters. Developer-focused aesthetic — dark mode, keyboard-first, minimal UI overhead.

Currently in active development. Nothing public yet.`,
    icon_url: '',
    tags: ['AI', 'React', 'Product', 'In Progress'],
    featured: true,
    featured_order: 3,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 2,
    created_at: '',
    updated_at: '',
  },
  {
    id: 4,
    title: 'Enterprise OpenClaw Deployment',
    slug: 'openclaw',
    description: 'Enterprise AI executive assistant deployment with Entra app registration, Graph API integration, and Telegram channels. Included a security risk research presentation.',
    long_description: `Deployed and hardened an AI executive assistant (OpenClaw) across an enterprise Microsoft 365 environment. The work covered the full integration stack: Entra ID app registration, OAuth scopes, Graph API integration for calendar/email/document access, and Telegram channel connectivity for async AI interaction.

Alongside the deployment, I conducted in-depth research into OpenClaw's security risk surface — data handling, token exposure, prompt injection vectors, and third-party integrations — and produced a formal presentation of findings for the client.

Unable to showcase specifics due to client confidentiality.`,
    icon_url: '',
    tags: ['AI', 'Enterprise', 'Microsoft Entra', 'Graph API', 'Security'],
    featured: true,
    featured_order: 4,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 3,
    created_at: '',
    updated_at: '',
  },
  {
    id: 5,
    title: 'Nhabit — 3D Architectural SaaS',
    slug: 'nhabit',
    description: 'Co-founded a 3D architectural visualisation SaaS. Scaled from 2 to 12 people, reached ~$20K MRR. Now closed.',
    long_description: `Co-founded Nhabit, a SaaS platform for 3D architectural visualisation targeting residential builders and property developers. I led the full technical stack — engineering specs, sprint planning, infrastructure, and security — while also running operations and the team.

Grew from 2 co-founders to a team of 12 and scaled to approximately $20K MRR before shutting down. The technical stack covered the full Microsoft cloud suite: M365, Azure, Entra ID, SharePoint, and a cloud-first product architecture built from zero.

The startup experience gave me a breadth of skills I couldn't have gotten any other way — product thinking, investor relations, hiring, and real accountability for technical and commercial outcomes.`,
    icon_url: '',
    tags: ['SaaS', 'Startup', 'Azure', 'M365', 'Leadership'],
    featured: false,
    featured_order: undefined,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 4,
    created_at: '',
    updated_at: '',
  },
  {
    id: 6,
    title: 'Hardened Homelab',
    slug: 'homelab',
    description: 'Self-hosted Nextcloud and Immich on Proxmox/Docker with Zero Trust access via Cloudflare Tunnels. No inbound firewall rules.',
    long_description: `A private cloud ecosystem running Nextcloud (files/docs) and Immich (photo library) on dedicated hardware. Everything is containerised on Proxmox with Docker and Linux VMs for service isolation.

Access is fully Zero Trust: no inbound firewall rules open anywhere. All external access is mediated through Cloudflare Tunnels, with internal reverse proxies and strict network segmentation between services.

Built primarily to have full ownership of personal data, but also as a practical platform for testing infrastructure patterns I use professionally.`,
    icon_url: '',
    tags: ['Proxmox', 'Docker', 'Cloudflare', 'Linux', 'Zero Trust', 'Self-Hosted'],
    featured: false,
    featured_order: undefined,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 5,
    created_at: '',
    updated_at: '',
  },
  {
    id: 7,
    title: 'Jobber — CV Optimiser',
    slug: 'jobber',
    description: 'Tool for tailoring a CV to a specific job description. Paste a JD, get a targeted version of your CV back.',
    long_description: `Jobber is a CV optimisation tool — paste in a job description, and it rewrites or restructures your CV to match the language, priorities, and keywords of that specific role.

Built for people who apply to multiple roles and want their applications to actually land, without manually editing their CV every time. Currently being packaged for deployment on Cloudflare Pages.`,
    icon_url: '',
    tags: ['AI', 'JavaScript', 'Cloudflare Pages', 'In Progress'],
    featured: false,
    featured_order: undefined,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 6,
    created_at: '',
    updated_at: '',
  },
  {
    id: 8,
    title: 'AskIT — M365 Tenant AI Assistant',
    slug: 'askit',
    description: 'AI assistant that connects to a Microsoft 365 tenant via Graph API. Query tenant config, security posture, and user data in natural language.',
    long_description: `AskIT is an AI assistant platform that connects to Microsoft 365 tenants via the Graph API, letting you interrogate tenant configuration, security posture, user data, and device compliance using plain English.

Designed for MSPs and IT teams managing multiple environments — making complex tenant data instantly accessible without needing to navigate the admin portals. Ask "which users don't have MFA?" or "what conditional access policies are active?" and get a clean, structured answer.

Live and functional, but requires integration with a Microsoft tenant to demonstrate — not publicly hostable without auth.`,
    icon_url: '',
    tags: ['AI', 'Microsoft 365', 'Graph API', 'React', 'Node.js'],
    featured: false,
    featured_order: undefined,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 7,
    created_at: '',
    updated_at: '',
  },
  {
    id: 9,
    title: 'This Portfolio — flynnchambers.com',
    slug: 'portfolio',
    description: 'Windows XP-themed personal portfolio site. React + Vite SPA deployed on Cloudflare Pages, with draggable windows, a working Minesweeper, and a boot sequence.',
    long_description: `The site you're looking at right now. A Windows XP-themed portfolio built from scratch with React, Vite, and TypeScript — deployed as a static SPA on Cloudflare Pages.

Features include: draggable, resizable, and maximisable windows using react-draggable; a fully functional Minesweeper game; an XP-style boot sequence on load; mobile-responsive layout; and an Explorer-style navigation shell with sidebar, address bar, and menu.

Styled with xp.css for authentic XP chrome. All content lives in a single static data file — no backend, no CMS.`,
    icon_url: '',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Pages', 'xp.css'],
    featured: false,
    featured_order: undefined,
    github_url: 'https://github.com/Fchamber',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 8,
    created_at: '',
    updated_at: '',
  },
  {
    id: 10,
    title: 'Data Privacy & User Data Control — A NZ Perspective',
    slug: 'data-privacy-paper',
    description: 'Research paper examining data privacy frameworks, user data rights, and control mechanisms through the lens of New Zealand law and policy.',
    long_description: `A research paper examining data privacy and user data control through a New Zealand legislative and policy lens — covering the Privacy Act 2020, comparisons with GDPR and the Australian Privacy Act, and practical implications for organisations handling personal data.

The paper addresses the tension between data utility (for analytics, AI, and business intelligence) and individual rights to access, correction, and erasure. It also looks at emerging challenges: cross-border data flows, AI-generated inferences, and the adequacy of current frameworks for a world where data is the product.`,
    icon_url: '',
    tags: ['Research', 'Data Privacy', 'Policy', 'New Zealand', 'GDPR'],
    featured: false,
    featured_order: undefined,
    github_url: '',
    live_url: '',
    pdf_url: '/assets/Data Privacy and User Data Control - A New Zealand Perspective.pdf',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: true,
    sort_order: 9,
    created_at: '',
    updated_at: '',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
export const about: About = {
  id: 1,
  bio: `I work end to end on technical projects: scoping and selling solutions to customers, then designing and building them. Comfortable across infrastructure, cloud, and security, with a particular focus on AI and full-stack software development, and equally at home in a stakeholder meeting or a build session.

Master of IT in Cybersecurity, with a track record of building tools and systems that solve real operational problems, from an AI-powered XDR triage engine to internal platforms that plug AI into a team's daily workflow.

I'm focusing primarily on AI now, while drawing on my experience across cloud, security, and software.`,
  photo_url: '/assets/me.JPG',
  skill_groups: [
    {
      label: 'Consulting',
      items: ['Solution Scoping', 'Stakeholder Management', 'Technical Pre-Sales', 'Quoting & Pricing', 'Proposals & SOWs'],
    },
    {
      label: 'AI',
      items: ['AI Consulting & Strategy', 'MCP Servers', 'LLM Tooling', 'Agent Deployment', 'Local LLMs', 'Model Routing', 'API Integration'],
    },
    {
      label: 'Development',
      items: ['React', 'TypeScript', 'Next.js', 'Docker', 'REST APIs', 'Cloudflare', 'Firebase', 'SQL', 'PowerShell'],
    },
    {
      label: 'Cloud & Infrastructure',
      items: ['Azure', 'Entra ID', 'Microsoft 365', 'Windows Server', 'VMware', 'Hyper-V', 'Intune', 'Networking (TCP/IP, DNS, DHCP)'],
    },
    {
      label: 'Security',
      items: ['NIST', 'ISO 27001', 'CIS', 'Essential 8', 'Identity', 'Endpoint', 'Cloud Security'],
    },
  ],
  // Flat list (used by the /xp experience). Keep in sync with skill_groups above.
  skills: [
    'Solution Scoping', 'Stakeholder Management', 'Technical Pre-Sales', 'Quoting & Pricing', 'Proposals & SOWs',
    'AI Consulting & Strategy', 'MCP Servers', 'LLM Tooling', 'Agent Deployment', 'Local LLMs', 'Model Routing', 'API Integration',
    'React', 'TypeScript', 'Next.js', 'Docker', 'REST APIs', 'Cloudflare', 'Firebase', 'SQL', 'PowerShell',
    'Azure', 'Entra ID', 'Microsoft 365', 'Windows Server', 'VMware', 'Hyper-V', 'Intune', 'Networking',
    'NIST', 'ISO 27001', 'CIS', 'Essential 8', 'Identity', 'Endpoint', 'Cloud Security',
  ],
  email: 'flynnguychambers@gmail.com',
  phone: '+61 411 679 512',
  linkedin_url: 'https://www.linkedin.com/in/flynn-chambers-tech/',
  github_url: 'https://github.com/Fchamber',
};

// ─────────────────────────────────────────────────────────────────────────────
// CERTS & EDUCATION
// ─────────────────────────────────────────────────────────────────────────────
// type: 'education' | 'certification'

export const certs: Cert[] = [
  {
    id: 1,
    title: 'Master of Information Technology: Cyber Security',
    issuer: 'Whitecliffe College, Auckland · Distinction',
    date: 'Grad. Jul 2025',
    url: '',
    type: 'education',
    sort_order: 0,
    created_at: '',
  },
  {
    id: 2,
    title: 'Level 7 Diploma: Cloud Management',
    issuer: 'Techtorium NZIIT, Auckland',
    date: '2022',
    url: '',
    type: 'education',
    sort_order: 1,
    created_at: '',
  },
  {
    id: 3,
    title: 'Microsoft MS-900: M365 Fundamentals',
    issuer: 'Microsoft',
    date: '',
    url: '',
    type: 'certification',
    sort_order: 0,
    created_at: '',
  },
  {
    id: 4,
    title: 'Microsoft AZ-900: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '',
    url: '',
    type: 'certification',
    sort_order: 1,
    created_at: '',
  },
  {
    id: 5,
    title: 'Fortinet NSE 1–3',
    issuer: 'Fortinet',
    date: '',
    url: '',
    type: 'certification',
    sort_order: 2,
    created_at: '',
  },
  {
    id: 6,
    title: 'NZQA US4098',
    issuer: 'NZQA',
    date: '',
    url: '',
    type: 'certification',
    sort_order: 3,
    created_at: '',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CV
// ─────────────────────────────────────────────────────────────────────────────
// pdf_url: path to a PDF in /public, e.g. '/assets/cv.pdf'
//          leave empty to disable the Download button
// web_content: rendered as the on-screen CV (basic markdown supported)

export const cv: CV = {
  id: 1,
  pdf_url: '/assets/cv.pdf',
  web_content: `# Flynn Chambers
### AI Engineer | Solutions Consultant
Brisbane, Australia · flynnguychambers@gmail.com · +61 411 679 512

## Professional Summary

Solutions consultant and engineer who works end to end on projects: scoping and selling technical solutions to customers, then designing and building them. Comfortable across infrastructure, cloud, and security, with a particular focus on AI and full-stack software development, and equally at home in a stakeholder meeting or a build session.

Master of IT in Cybersecurity, with a track record of developing tools and systems that solve real operational problems. Looking to focus primarily on AI while drawing on my experience across the other verticals.

## Employment History

### Solutions Consultant, Smile IT
*2026 – Present · Brisbane*
- Scope and sell technical solutions to customers, running discovery and stakeholder meetings and translating their requirements into infrastructure, cloud, security, and AI projects.
- Own solutions end to end, from initial conversation through to delivery, ensuring what is sold is what gets built.
- Designed and built the company's internal quoting tool end to end: a full-stack application containerised with Docker, exposing its own REST APIs and an MCP integration to plug into AI workflows.
- Develop internal tooling and automations in TypeScript and Next.js to streamline delivery and embed AI into the team's workflows.
- Built out Smile IT's AI consulting offering, shaping the service, its positioning, and its go-to-market.

### Systems Engineer & Service Lead, Tribe Technology
*2024 – 2026 · Auckland*
- Led service delivery for 20+ enterprise clients, owning escalations and maintaining consistent standards across the client base.
- Deployed AI agents and automation into client environments, including cross-tenant identity synchronisation.
- Rolled out security tooling across the client base: endpoint protection, awareness training, and threat monitoring.
- Produced clear, branded technical documentation for clients and internal teams.

### Co-Director, Nhabit Ltd
*2021 – 2024 · Co-Founder*
- Co-founded a 3D architectural SaaS, growing it to $20K MRR before winding down.
- Built and owned the full-stack infrastructure and a secure, cloud-based MVP on Azure.
- Translated technical detail into business value for boards and investors.

### Trainer, Techtorium
*2023 – 2024 · Auckland*
- Taught 50+ students core IT: networking, virtualisation, cloud, and security.
- Developed tailored course material that improved pass rates by 87%+.

### IT Support Engineer (L1–L2), Intellium
*2023 · Auckland*
- Handled 18–24 daily tickets across software, hardware, and network issues while holding SLAs.
- Implemented fixes that reduced recurring issues and improved client security posture.

## Education

### Master of Information Technology: Cyber Security
*Whitecliffe College, Auckland · Distinction · Grad. Jul 2025*
- Thesis "Argus": an AI-powered XDR alert triage system using local LLMs.

### Level 7 Diploma: Cloud Management
*Techtorium NZIIT, Auckland · 2022*
- Professionalism Award and Excellence Award.

## Certifications

MS-900 · AZ-900 · Fortinet NSE 1–3 · NZQA US4098
`,
};
