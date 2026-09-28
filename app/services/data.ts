import type { LucideIcon } from "lucide-react";
import {
  Code2, Smartphone, Layers, Brain, BarChart3, Cloud,
  Globe, ShieldCheck, Zap, Database, Users, FileText,
  Search, TrendingUp, PenLine, Rocket, Server,
} from "lucide-react";

export type ServiceInclude = { icon: LucideIcon; title: string; desc: string };

/* Real product capture used as the service hero visual.
   chrome "browser" wraps a raw screenshot in window chrome;
   chrome "device" means the file already contains device framing. */
export type ServiceShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  chrome: "browser" | "device";
};

export type Service = {
  slug: string;
  navLabel: string;
  name: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  tagline: string;
  heroTitleTop: string;
  heroTitleAccent: string;
  heroLead: string;
  shot: ServiceShot;
  bullets: string[];
  includes: ServiceInclude[];
  stack: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    navLabel: "Full-Stack Web",
    name: "Full-Stack Web Development",
    icon: Code2,
    metaTitle: "Full-Stack Web Development — Next.js & React Studio in Pakistan",
    metaDesc:
      "Production Next.js platforms, MERN backends, and headless e-commerce built by Devcuts Media — one senior team, no hand-offs.",
    eyebrow: "Web Development",
    tagline: "Next.js · MERN · TypeScript",
    heroTitleTop: "Custom web apps,",
    heroTitleAccent: "not templates.",
    heroLead:
      "Production Next.js platforms, React frontends, Node/MERN backends, and headless e-commerce — designed, built, and shipped by one senior team with no hand-offs.",
    shot: {
      src: "/Dashboard.png",
      alt: "Unified multi-site dashboard we built, pulling leads and form submissions from several client websites into one inbox",
      width: 1186,
      height: 700,
      chrome: "browser",
    },
    bullets: [
      "Next.js & React architecture",
      "Node.js · MERN · TypeScript",
      "Headless CMS & e-commerce",
      "Core Web Vitals obsessed",
    ],
    includes: [
      {
        icon: Rocket,
        title: "Next.js platforms",
        desc: "Marketing sites and web apps on modern SSR/ISR/static architecture that stays fast under real traffic.",
      },
      {
        icon: Database,
        title: "Robust backends",
        desc: "Node.js, PostgreSQL, MongoDB, and REST/GraphQL APIs designed to hold up as your usage grows.",
      },
      {
        icon: Globe,
        title: "Headless & e-commerce",
        desc: "Content-driven sites and storefronts that keep publishing easy and browsing fast.",
      },
      {
        icon: ShieldCheck,
        title: "Security & hardening",
        desc: "Auth, rate limiting, sanitisation, and dependency hygiene baked in from day one.",
      },
      {
        icon: Zap,
        title: "Performance budgets",
        desc: "Image optimisation, caching, and edge-ready deploys that keep Core Web Vitals in the green.",
      },
      {
        icon: Users,
        title: "PWA & accessibility",
        desc: "Installable, keyboard-friendly, WCAG-aware frontends that work for every user.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Vercel"],
    related: ["mobile-apps", "erp-crm", "seo-growth"],
  },
  {
    slug: "mobile-apps",
    navLabel: "Mobile Apps",
    name: "Mobile App Development",
    icon: Smartphone,
    metaTitle: "Mobile App Development — Flutter & React Native in Pakistan",
    metaDesc:
      "Flutter and React Native apps that ship to both stores at once — offline-first, push-ready, and wired to your existing backend.",
    eyebrow: "Mobile Apps",
    tagline: "Flutter · React Native · Expo",
    heroTitleTop: "Cross-platform apps,",
    heroTitleAccent: "one codebase.",
    heroLead:
      "Flutter and React Native builds that ship to both stores at once — offline-first, push-ready, and wired to your existing backend.",
    shot: {
      src: "/tablet-black-taskflow.webp",
      alt: "TaskFlow ticketing app running on a tablet, showing the request queue and assignment board",
      width: 2255,
      height: 1416,
      chrome: "device",
    },
    bullets: [
      "Flutter & React Native",
      "Expo dev tooling",
      "Offline-first sync",
      "Store-ready releases",
    ],
    includes: [
      {
        icon: Smartphone,
        title: "Native feel, one codebase",
        desc: "One Dart or React Native project that runs beautifully on iOS and Android.",
      },
      {
        icon: Cloud,
        title: "Offline-first sync",
        desc: "Users keep working without signal; changes sync back the moment they reconnect.",
      },
      {
        icon: Zap,
        title: "Push & analytics",
        desc: "Segmented push campaigns and usage analytics wired through your own account.",
      },
      {
        icon: ShieldCheck,
        title: "Auth & secure storage",
        desc: "Biometric login, secure local storage, and token handling done the right way.",
      },
      {
        icon: Database,
        title: "API integration",
        desc: "Plugs into your existing REST/GraphQL backends — or the ones we build for you.",
      },
      {
        icon: Rocket,
        title: "Store releases",
        desc: "Play Store + App Store rollout, listing copy, screenshots, and review readiness.",
      },
    ],
    stack: ["Flutter", "Dart", "React Native", "Expo", "Firebase", "Supabase"],
    related: ["web-development", "ai-automation", "cloud-devops"],
  },
  {
    slug: "erp-crm",
    navLabel: "ERP & CRM",
    name: "Custom ERP & CRM Systems",
    icon: Layers,
    metaTitle: "Custom ERP & CRM Systems in Pakistan",
    metaDesc:
      "Custom CRMs and back-office ERPs — pipelines, billing, time tracking, encrypted vaults, and client portals in one command-palette interface.",
    eyebrow: "ERP & CRM",
    tagline: "Custom internal tooling",
    heroTitleTop: "Your business,",
    heroTitleAccent: "on one system.",
    heroLead:
      "From sales CRMs to full back-office ERPs — pipelines, billing, time tracking, encrypted vaults, and client portals in a single command-palette interface your team will actually use.",
    shot: {
      src: "/ERPhome.png",
      alt: "Home screen of a custom ERP we built, with CRM, cases, billing and reports in one command-palette interface",
      width: 1854,
      height: 1206,
      chrome: "browser",
    },
    bullets: [
      "Custom CRM pipelines",
      "Billing, time & reports",
      "Encrypted credentials vault",
      "Command-palette UX",
    ],
    includes: [
      {
        icon: Users,
        title: "Custom CRM",
        desc: "Leads, deals, campaigns, call logs, and a WhatsApp inbox — one place for every conversation.",
      },
      {
        icon: Layers,
        title: "Full ERP",
        desc: "Case boards, invoicing, accounting reports, document templates, and a compliance calendar.",
      },
      {
        icon: ShieldCheck,
        title: "Encrypted vault",
        desc: "Credentials and client data stored with modern encryption — audit-ready and role-gated.",
      },
      {
        icon: FileText,
        title: "Docs & templates",
        desc: "Proposals, contracts, and reports generated straight from your systems, on-brand.",
      },
      {
        icon: Database,
        title: "Data you can query",
        desc: "Custom reports and exports that turn operational data into actual answers.",
      },
      {
        icon: Globe,
        title: "Secure client portal",
        desc: "Give clients a window into their projects without exposing your internal tools.",
      },
    ],
    stack: ["Next.js", "Frappe", "ERPNext", "PostgreSQL", "Redis", "Docker"],
    related: ["ai-automation", "web-development", "cloud-devops"],
  },
  {
    slug: "ai-automation",
    navLabel: "AI & Automation",
    name: "AI & Automation",
    icon: Brain,
    metaTitle: "AI & Automation Services — LLM Apps, Agents & RAG Pipelines",
    metaDesc:
      "LLM applications, AI agents, and RAG pipelines that automate reporting and remove manual busywork from your operations.",
    eyebrow: "AI & Automation",
    tagline: "LLMs · agents · RAG pipelines",
    heroTitleTop: "Work that takes days,",
    heroTitleAccent: "done in minutes.",
    heroLead:
      "LLM applications, AI agents, and RAG pipelines that ingest your data, automate report generation, and remove the manual busywork from your operations.",
    shot: {
      src: "/repotsgenerator.png",
      alt: "Automated reports generator we built, breaking down ticket resolutions per person and department",
      width: 2257,
      height: 1417,
      chrome: "browser",
    },
    bullets: [
      "LLM-powered apps",
      "Custom AI agents",
      "RAG knowledge pipelines",
      "Workflow automation",
    ],
    includes: [
      {
        icon: Brain,
        title: "LLM applications",
        desc: "Chat assistants, content generators, and data interpreters built on GPT-class models.",
      },
      {
        icon: Zap,
        title: "Workflow automation",
        desc: "n8n and custom pipelines that move data between your tools — no humans required.",
      },
      {
        icon: Database,
        title: "RAG pipelines",
        desc: "Answer questions from your own documents — contracts, manuals, and support tickets.",
      },
      {
        icon: FileText,
        title: "Automated reporting",
        desc: "Daily or weekly reports generated from your data, in your brand's voice.",
      },
      {
        icon: ShieldCheck,
        title: "Your data stays yours",
        desc: "Bring-your-own-key and self-hosted options keep proprietary data inside your perimeter.",
      },
      {
        icon: Rocket,
        title: "Production-ready",
        desc: "Evaluation, guardrails, and monitoring so the AI behaves predictably in production.",
      },
    ],
    stack: ["OpenAI", "Anthropic", "LangChain", "Python", "Pinecone", "n8n", "Vercel AI SDK"],
    related: ["web-development", "erp-crm", "seo-growth"],
  },
  {
    slug: "seo-growth",
    navLabel: "SEO & Growth",
    name: "SEO & Growth",
    icon: BarChart3,
    metaTitle: "SEO & Growth Services in Pakistan",
    metaDesc:
      "Technical SEO audits, content operations, and CRO testing that move rankings, conversions, and revenue — reported in numbers you can trust.",
    eyebrow: "SEO & Growth",
    tagline: "Technical SEO + content ops",
    heroTitleTop: "More traffic,",
    heroTitleAccent: "measured growth.",
    heroLead:
      "Technical SEO audits, content operations, and CRO testing that move rankings, conversions, and revenue — reported in numbers you can trust.",
    shot: {
      src: "/tablet-black-taskflow-analytics.webp",
      alt: "Analytics view of the traffic and engagement dashboard we use to report SEO and campaign growth",
      width: 2257,
      height: 1417,
      chrome: "device",
    },
    bullets: [
      "Technical SEO audits",
      "Content strategy & ops",
      "CRO & A/B testing",
      "GA4 & reporting",
    ],
    includes: [
      {
        icon: Search,
        title: "Technical SEO",
        desc: "Crawl audits, Core Web Vitals fixes, sitemaps, structured data, and canonical health.",
      },
      {
        icon: TrendingUp,
        title: "Growth strategy",
        desc: "Keyword-led roadmaps that target real intent instead of vanity metrics.",
      },
      {
        icon: PenLine,
        title: "Content operations",
        desc: "Editorial calendars and briefs that keep publishing consistent and on-strategy.",
      },
      {
        icon: Zap,
        title: "CRO & A/B testing",
        desc: "Landing-page experiments that convert existing traffic into more customers.",
      },
      {
        icon: FileText,
        title: "GA4 & analytics",
        desc: "Dashboards that show what happened, what's working, and what to do next.",
      },
      {
        icon: Globe,
        title: "On-page & off-page",
        desc: "Internal linking, schema, and authority signals implemented properly.",
      },
    ],
    stack: ["Next.js", "Google Search Console", "GA4", "Ahrefs", "Screaming Frog"],
    related: ["web-development", "ai-automation", "erp-crm"],
  },
  {
    slug: "cloud-devops",
    navLabel: "Cloud & DevOps",
    name: "Cloud & DevOps",
    icon: Cloud,
    metaTitle: "Cloud & DevOps Services — AWS, Docker & Kubernetes",
    metaDesc:
      "Zero-downtime deploys on AWS and Azure, Docker and Kubernetes orchestration, and observability for 99.9% uptime.",
    eyebrow: "Cloud & DevOps",
    tagline: "AWS · Docker · observability",
    heroTitleTop: "Ship constantly,",
    heroTitleAccent: "break nothing.",
    heroLead:
      "Zero-downtime deploys on AWS and Azure, containerised with Docker and Kubernetes, monitored for 99.9% uptime — infrastructure any engineer can hand over.",
    shot: {
      src: "/laptop-black-erpnext.webp",
      alt: "ERP and operations stack running on a laptop, deployed on containerised cloud infrastructure",
      width: 1854,
      height: 1206,
      chrome: "device",
    },
    bullets: [
      "AWS / Azure architecture",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "99.9% uptime SLA",
    ],
    includes: [
      {
        icon: Cloud,
        title: "Cloud architecture",
        desc: "Cost-efficient AWS and Azure setups sized to your actual load, not your worst case.",
      },
      {
        icon: Server,
        title: "Docker & Kubernetes",
        desc: "Reproducible containers and resilient orchestration across a healthy cluster.",
      },
      {
        icon: Rocket,
        title: "CI/CD pipelines",
        desc: "GitHub Actions and infrastructure-as-code make releasing boring and safe.",
      },
      {
        icon: Zap,
        title: "Zero-downtime deploys",
        desc: "Blue-green and rolling releases that keep users online throughout.",
      },
      {
        icon: ShieldCheck,
        title: "Security & backups",
        desc: "Secrets management, scheduled backups, and recovery runbooks with every setup.",
      },
      {
        icon: Database,
        title: "Observability",
        desc: "Metrics, logs, and traces with alerting that actually wakes someone up.",
      },
    ],
    stack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana", "Prometheus"],
    related: ["web-development", "ai-automation", "erp-crm"],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);