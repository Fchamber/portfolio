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
  "id": 12,
  "title": "Enterprise MCP Integration",
  "slug": "enterprise-mcp",
  "description": "Production integration connecting business data to AI tools, with Entra identity and encrypted token storage.",
  "long_description": "Problem and ownership\nAt Smile IT, I built and deployed a read-only MCP server exposing an existing business application through controlled tools for AI assistants.\n\nArchitecture\nThe integration uses Python, FastMCP and Azure Container Apps. I designed two access gates using Entra ID security-group membership and an app role, plus encrypted OAuth token storage on Azure Files.\n\nSecurity engineering\nI audited the implementation, identified a path-parameter injection issue and verified a tested fix was deployed. I also worked through connector behaviour across Claude and the Microsoft Copilot ecosystem.\n\nStatus\nThe integration is deployed. Security review and access-boundary work continue; deployment does not imply every identified risk has been closed. Client data and implementation details remain private.",
  "tags": [
    "MCP",
    "Python",
    "FastMCP",
    "Azure",
    "Entra ID"
  ],
  "featured": true,
  "featured_order": 1,
  "visible": true,
  "sort_order": 12,
  "created_at": "",
  "updated_at": ""
},
  {
  "id": 13,
  "title": "Iris: Governed Agent Workflows",
  "slug": "iris-agents",
  "description": "An agent platform in development with scoped identity, sandboxed execution and human-controlled outbound communication.",
  "long_description": "Problem and ownership\nI am building Iris at Smile IT to support operational work through governed AI agents, integrating existing agent runtimes with business systems.\n\nEngineering\nThe platform brings together Python, Halo PSA APIs, Microsoft 365, Teams and Docker sandboxing. I designed draft-only workflows in which a human sends the final communication, and refined application-permission scoping for Microsoft 365.\n\nIntegration and operations\nThe work includes replacing a runtime dependency with a read-only Halo client, evaluating model behaviour and developing an operator console from an existing open-source project.\n\nStatus\nDevelopment is ongoing. This case study describes engineering delivered so far, rather than a completed rollout or measured productivity gain.",
  "tags": [
    "Agents",
    "Python",
    "Docker",
    "Microsoft 365",
    "AI Governance"
  ],
  "featured": true,
  "featured_order": 2,
  "visible": true,
  "sort_order": 13,
  "created_at": "",
  "updated_at": ""
},
  {
  "id": 11,
  "title": "BENCH: Quoting and Leads",
  "slug": "quoting-platform",
  "description": "Full-stack quoting and leads software integrated with Halo PSA. Leads is live; quoting was trialled and demonstrated.",
  "long_description": "Problem and ownership\nI built BENCH at Smile IT to connect opportunity qualification, quoting and customer information in one application.\n\nEngineering\nThe application uses Next.js, TypeScript, PostgreSQL and Prisma, with Halo PSA integration, Azure hosting and an MCP interface. I built an incremental sync approach around the API’s available capabilities and developed a layout-aware quote editor.\n\nStatus\nThe quoting module was trialled and demonstrated while the business continued evaluating quoting options. The leads module is live and used by the sales team. These are distinct outcomes; the full quoting platform was not a production rollout.",
  "tags": [
    "AI Integration",
    "MCP",
    "REST APIs",
    "TypeScript",
    "Docker"
  ],
  "featured": false,
  "featured_order": 1,
  "visible": true,
  "sort_order": 0,
  "created_at": "",
  "updated_at": ""
},
  {
    id: 1,
    title: "Argus: Local LLM Security Triage",
    slug: 'argus',
    description: "Master of IT research: a local LLM pipeline for structured XDR alert analysis, evaluated on 1,000 synthetic alerts.",
    long_description: "Problem and ownership\nI developed Argus for my Master of Information Technology thesis to investigate how local LLMs could support security alert triage. The intended users are analysts working through an XDR alert queue.\n\nImplementation\nThe pipeline normalises alerts, adds context and uses a structured prompt chain for threat classification and response recommendations. Outputs include severity, recommended action and analyst notes. Local model hosting was chosen to explore processing without a cloud inference dependency.\n\nEvaluation and limits\nThe research used a corpus of 1,000 synthetic alerts. Synthetic data provided a controlled evaluation; generalisation to operational alerts remains a validation requirement. The linked thesis provides the research detail.\n\nStatus\nResearch prototype. Production use would require validation against representative operational data and an explicit human review process.",
    icon_url: '',
    tags: ['AI', 'Security', 'Local LLMs', 'XDR', 'Python', 'Master of IT Thesis'],
    featured: true,
    featured_order: 3,
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
    long_description: `A parody of ChatGPT built as a fun side project: whatever you type, catGPT responds with a thoughtfully curated cat video.

Built as a static site and deployed on Cloudflare Pages. Surprisingly good UX for a joke app: the "typing" indicator and response format mirror the real ChatGPT experience closely enough to fool people for a second.`,
    icon_url: '',
    tags: ['JavaScript', 'Cloudflare Pages', 'Static Site'],
    featured: false,
    featured_order: 3,
    github_url: '',
    live_url: 'https://catgpt-2kk.pages.dev/',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: false,
    sort_order: 1,
    created_at: '',
    updated_at: '',
  },
  {
    id: 3,
    title: 'thinkd',
    slug: 'thinkd',
    description: 'AI-powered note-taking and project management on an infinite canvas. Dump anything in: AI auto-organises into dashboards, tasks, and timelines.',
    long_description: `thinkd is an AI-native productivity tool built for developers and technical people who think in systems.

The core idea: an infinite canvas where you can dump anything: meeting notes, code snippets, ideas, URLs: and the AI automatically organises it into structured views: dashboards, task lists, timelines, dependency graphs.

No rigid templates, no forced structure. You work naturally; thinkd infers the structure and surfaces what matters. Developer-focused aesthetic: dark mode, keyboard-first, minimal UI overhead.

Currently in active development. Nothing public yet.`,
    icon_url: '',
    tags: ['AI', 'React', 'Product', 'In Progress'],
    featured: false,
    featured_order: 3,
    github_url: '',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: false,
    sort_order: 2,
    created_at: '',
    updated_at: '',
  },
  {
    id: 4,
    title: "Enterprise AI Assistant: Microsoft 365 Integration",
    slug: 'openclaw',
    description: "Client deployment connecting an AI assistant to Microsoft 365, with identity integration and a security risk review.",
    long_description: "Problem and ownership\nI delivered the integration of an existing AI assistant platform, OpenClaw, with a client's Microsoft 365 environment. My contribution was deployment, identity and API integration, and security risk research.\n\nIntegration scope\nThe work covered Entra ID app registration, OAuth scopes, Microsoft Graph access for calendar, email and documents, and Telegram connectivity for asynchronous interaction. These integrations connected the assistant to existing workplace services.\n\nSecurity review\nI researched data handling, token exposure, prompt injection and third-party integration risks, then presented the findings to the client. The findings informed the client discussion around deployment risks and operational use.\n\nEvidence and boundaries\nClient configuration and data are confidential. Technical scope is summarised here at the integration level.",
    icon_url: '',
    tags: ['AI', 'Enterprise', 'Microsoft Entra', 'Graph API', 'Security'],
    featured: false,
    featured_order: 3,
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
    title: 'Nhabit: 3D Architectural SaaS',
    slug: 'nhabit',
    description: "Co-founded a 3D architectural SaaS business, growing the team from 2 to 12 and reaching approximately $20K MRR before closure.",
    long_description: "Commercial ownership\nI co-founded Nhabit, a 3D architectural visualisation SaaS for residential builders and property developers. The business grew from two founders to a team of twelve and reached approximately $20K monthly recurring revenue before closing.\n\nTechnical and delivery responsibility\nI owned the company's cloud infrastructure across Azure, Microsoft 365, Entra ID and SharePoint. I also led engineering specifications, sprint planning and technical operations for the product. This distinguishes my direct infrastructure work from my responsibility for coordinating wider product engineering.\n\nLeadership\nMy role included recruitment, team operations and communicating technical and commercial priorities to investors and the board. The experience developed my ability to scope delivery against business constraints and take responsibility for both execution and outcomes.",
    icon_url: '',
    tags: ['SaaS', 'Startup', 'Azure', 'M365', 'Leadership'],
    featured: true,
    featured_order: 4,
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
    title: 'Jobber: CV Optimiser',
    slug: 'jobber',
    description: 'Tool for tailoring a CV to a specific job description. Paste a JD, get a targeted version of your CV back.',
    long_description: `Jobber is a CV optimisation tool: paste in a job description, and it rewrites or restructures your CV to match the language, priorities, and keywords of that specific role.

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
    visible: false,
    sort_order: 6,
    created_at: '',
    updated_at: '',
  },
  {
    id: 8,
    title: 'AskIT: M365 Tenant AI Assistant',
    slug: 'askit',
    description: "Microsoft Graph-connected assistant for querying tenant configuration and security posture. Demonstration requires an authenticated tenant.",
    long_description: `AskIT is an AI assistant platform that connects to Microsoft 365 tenants via the Graph API, letting you interrogate tenant configuration, security posture, user data, and device compliance using plain English.

Designed for MSPs and IT teams managing multiple environments: making complex tenant data instantly accessible without needing to navigate the admin portals. Ask "which users don't have MFA?" or "what conditional access policies are active?" and get a clean, structured answer.

Live and functional, but requires integration with a Microsoft tenant to demonstrate: not publicly hostable without auth.`,
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
    title: 'This Portfolio: flynnchambers.com',
    slug: 'portfolio',
    description: 'Windows XP-themed personal portfolio site. React + Vite SPA deployed on Cloudflare Pages, with draggable windows, a working Minesweeper, and a boot sequence.',
    long_description: `The site you're looking at right now. A Windows XP-themed portfolio built from scratch with React, Vite, and TypeScript: deployed as a static SPA on Cloudflare Pages.

Features include: draggable, resizable, and maximisable windows using react-draggable; a fully functional Minesweeper game; an XP-style boot sequence on load; mobile-responsive layout; and an Explorer-style navigation shell with sidebar, address bar, and menu.

Styled with xp.css for authentic XP chrome. All content lives in a single static data file: no backend, no CMS.`,
    icon_url: '',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Pages', 'xp.css'],
    featured: false,
    featured_order: undefined,
    github_url: 'https://github.com/Fchamber/portfolio',
    live_url: '',
    pdf_url: '',
    screenshot_url: '',
    iframe_url: '',
    video_url: '',
    visible: false,
    sort_order: 8,
    created_at: '',
    updated_at: '',
  },
  {
    id: 10,
    title: 'Data Privacy & User Data Control: A NZ Perspective',
    slug: 'data-privacy-paper',
    description: 'Research paper examining data privacy frameworks, user data rights, and control mechanisms through the lens of New Zealand law and policy.',
    long_description: `A research paper examining data privacy and user data control through a New Zealand legislative and policy lens: covering the Privacy Act 2020, comparisons with GDPR and the Australian Privacy Act, and practical implications for organisations handling personal data.

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
    visible: false,
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
  bio: `I design and build enterprise AI integrations, agent workflows and adoption programmes. My experience spans Claude, OpenAI, OpenRouter, Microsoft Copilot and local models, combining hands-on development with cloud, identity and security.

At Smile IT, I have built and deployed an MCP integration, developed governed agent workflows, delivered AI readiness assessments and shaped the AI and Automation service offering. I work from the business problem through solution design, implementation, governance and training.

My wider experience includes local LLM security research, service delivery leadership and co-founding a SaaS business. I hold a Master of Information Technology in Cyber Security.`,
  photo_url: '/assets/flynn-chambers-portrait.jpg',
  skill_groups: [
    {
      label: 'Consulting',
      items: ['Solution Scoping', 'Stakeholder Management', 'Technical Pre-Sales', 'Quoting & Pricing', 'Proposals & SOWs'],
    },
    {
      label: 'AI',
      items: ['Claude / Anthropic API', 'Claude Code', 'OpenAI', 'OpenRouter', 'Microsoft Copilot', 'Copilot Studio', 'Cursor', 'AI Readiness Assessments', 'Copilot Readiness', 'Workflow Design', 'AI Consulting & Strategy', 'MCP Servers', 'LLM Tooling', 'Agent Deployment', 'Local LLMs', 'Model Routing', 'API Integration'],
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
    'Claude / Anthropic API', 'Claude Code', 'OpenAI', 'OpenRouter', 'Microsoft Copilot', 'Copilot Studio', 'Cursor', 'AI Readiness Assessments', 'Copilot Readiness', 'Workflow Design', 'AI Consulting & Strategy', 'MCP Servers', 'LLM Tooling', 'Agent Deployment', 'Local LLMs', 'Model Routing', 'API Integration',
    'React', 'TypeScript', 'Next.js', 'Docker', 'REST APIs', 'Cloudflare', 'Firebase', 'SQL', 'PowerShell',
    'Azure', 'Entra ID', 'Microsoft 365', 'Windows Server', 'VMware', 'Hyper-V', 'Intune', 'Networking',
    'NIST', 'ISO 27001', 'CIS', 'Essential 8', 'Identity', 'Endpoint', 'Cloud Security',
  ],
  email: 'flynnguychambers@gmail.com',
  phone: '+61 409 334 038',
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
### Enterprise AI | Solutions Engineering
Brisbane, Australia · flynnguychambers@gmail.com · +61 409 334 038
flynnchambers.com · linkedin.com/in/flynn-chambers-tech

## Professional Summary

Solutions consultant and engineer delivering enterprise AI integrations, agent workflows and adoption programmes. Broad hands-on experience across Claude, OpenAI, OpenRouter, Microsoft Copilot and local models, supported by software engineering, Microsoft cloud, identity and security. Own work from discovery and solution design through implementation and handover. Experience includes production MCP integration, governed agent development and SaaS leadership. Master of Information Technology in Cyber Security.

## Core Capabilities

AI application integration · REST APIs and MCP · Technical solution design · Microsoft cloud and identity · Security and data governance · Workflow discovery · Stakeholder engagement · Delivery ownership

## Employment History

### Solutions Consultant, Smile IT
*April 2026 – Present · Brisbane*
- Built and deployed a read-only MCP server connecting a business platform to AI tools, using FastMCP, Azure Container Apps and Entra ID; designed access gates and encrypted token storage, and shipped a tested security fix.
- Build Iris, a governed agent platform integrating Halo PSA and Microsoft 365, with Docker sandboxing, scoped identity and draft-only workflows requiring a human to send. Development is ongoing.
- Built BENCH with Next.js, TypeScript, PostgreSQL and Halo PSA integration. Quoting was trialled and demonstrated; the leads module is live and used by the sales team.
- Deliver AI readiness assessments and remediation planning across identity, permissions, data exposure and governance; turn findings into practical implementation scopes.
- Developed the AI and Automation service offering, pricing models and reusable delivery collateral; built and delivered foundational and advanced client AI training.
- Build reusable AI workflows with Claude Code, MCP and APIs, including opportunity monitoring, proposal drafting and reporting; apply broad platform experience across Claude, OpenAI, OpenRouter and Copilot.

### Systems Engineer & Service Lead, Tribe Technology
*2024 – 2026 · Auckland*
- Led service delivery for 20+ enterprise clients, managing escalations, stakeholder communication and technical documentation.
- Deployed AI agents and workflow automation into client environments.
- Delivered identity automation, including cross-tenant synchronisation.
- Delivered endpoint protection, security awareness and threat monitoring across the client base.

### Co-Director, Nhabit Ltd
*2021 – 2024 · Co-Founder*
- Co-founded a 3D architectural SaaS business, scaling the team from 2 to 12 and reaching approximately $20K monthly recurring revenue before winding down.
- Owned the technical stack and cloud-based MVP on Azure, alongside product planning, operations and communication with boards and investors.

### Trainer, Techtorium
*2023 – 2024 · Auckland*
- Taught 50+ students networking, virtualisation, cloud and security, with an 87%+ pass rate.
- Developed tailored course materials and practical learning support.

### IT Support Engineer (L1–L2), Intellium
*2023 · Auckland*
- Resolved 18–24 daily tickets across hardware, software and networking while meeting SLAs.
- Investigated recurring issues and implemented fixes to improve reliability and security.

## Selected Projects

### Argus AI XDR Triage
- Master's thesis: developed a local LLM pipeline for security alert analysis and structured triage, evaluated using 1,000 synthetic alerts.

### Enterprise AI Assistant Deployment
- Deployed and integrated an existing AI assistant platform with Microsoft 365 using Entra app registration, OAuth and Microsoft Graph; researched token exposure and prompt injection risks.

## Education

### Master of Information Technology in Cyber Security
*Whitecliffe College, Auckland · Distinction · Graduated July 2025*

### Level 7 Diploma in Cloud Management
*Techtorium NZIIT, Auckland · 2022*
- Professionalism Award and Excellence Award.

## Certifications

Microsoft MS-900 · Microsoft AZ-900 · Fortinet NSE 1–3 · NZQA US4098

## Technical Skills

AI platforms and engineering: Claude / Anthropic API, Claude Code, OpenAI, OpenRouter, Microsoft Copilot, Copilot Studio, Cursor, MCP / FastMCP, local LLMs, Python, TypeScript, React, Next.js, REST APIs, Docker and Git.
Microsoft and governance: Microsoft 365, Entra ID, Intune, Defender, Azure IaaS, AVD, SharePoint, Power Automate, Copilot Studio, Essential Eight, DLP and Conditional Access.
Infrastructure and operations: Windows Server, VMware, Hyper-V, NetBox, UniFi, HaloPSA and IT Glue.
`,
};
