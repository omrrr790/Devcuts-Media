export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  metaTitle: string;
  metaDesc: string;
  tags: string[];
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "custom-software-cost-pakistan",
    title: "How Much Does Custom Software Cost in Pakistan? (2026 Guide)",
    excerpt:
      "A transparent breakdown of what drives cost in custom software projects — and how to budget realistically before you brief an agency.",
    category: "Business",
    date: "2026-02-18",
    readingTime: "7 min read",
    author: "Muhammad Omar Kafeel",
    metaTitle: "Custom Software Cost in Pakistan — 2026 Pricing Guide | Devcuts",
    metaDesc:
      "A transparent 2026 guide to custom software development costs in Pakistan: what drives pricing, typical ranges for web apps, mobile apps and ERP systems, and how to budget.",
    tags: ["Pricing", "Custom Software", "Pakistan", "Planning"],
    content: [
      {
        type: "p",
        text: "If you are planning a custom web application, mobile app, or ERP system, the first question is almost always the same: what will it cost? The honest answer is that price follows scope — but that does not mean you cannot budget with confidence. This guide breaks down exactly what drives cost in Pakistan in 2026.",
      },
      { type: "h2", text: "What actually drives cost" },
      {
        type: "p",
        text: "Two projects with the same feature list can differ by 3x in price. That is because cost is not really about features — it is about complexity, risk, and time.",
      },
      {
        type: "ul",
        items: [
          "Scope and feature depth — a simple CRUD dashboard is a fraction of a multi-tenant platform with billing.",
          "Integrations — payments, WhatsApp, ERP, and third-party APIs each add research, edge cases, and testing.",
          "Design requirements — a bespoke UI needs research and iteration; a template-driven build does not.",
          "Team seniority — senior engineers cost more per hour but ship fewer bugs and fewer rewrites.",
          "Compliance and security — regulated data, audits, and penetration testing add real work.",
        ],
      },
      { type: "h2", text: "Typical ranges in 2026" },
      {
        type: "p",
        text: "Every quote is unique, but these ranges help you sanity-check an estimate. Treat them as starting points, not final prices.",
      },
      {
        type: "ul",
        items: [
          "Marketing website or landing system: $1,500 – $6,000",
          "Custom web application (MVP): $8,000 – $30,000",
          "Mobile app (iOS + Android): $12,000 – $45,000",
          "ERP / CRM system: $15,000 – $80,000+",
          "AI automation or RAG pipeline: $6,000 – $35,000",
        ],
      },
      { type: "h2", text: "How to get an accurate quote" },
      {
        type: "p",
        text: "The fastest way to a fixed quote is a clear brief. Describe the problem, the users, the must-have workflows, and any systems you already use. You do not need a technical spec — you need clarity about outcomes.",
      },
      {
        type: "quote",
        text: "A good brief does not just list features — it explains the business outcome behind them.",
      },
      { type: "h2", text: "Budgeting tips that save money" },
      {
        type: "ul",
        items: [
          "Start with an MVP that proves the core value, then expand.",
          "Reuse proven components instead of rebuilding from scratch.",
          "Fix scope before development, not during it.",
          "Choose a partner who explains trade-offs, not one who just says yes.",
        ],
      },
      {
        type: "p",
        text: "If you want a realistic number for your project, send us a brief and we will respond with a transparent, fixed-scope proposal within 24 hours.",
      },
    ],
  },
  {
    slug: "erp-vs-off-the-shelf",
    title: "Custom ERP vs Off-the-Shelf Software: Which Is Right for You?",
    excerpt:
      "Off-the-shelf tools are cheap and fast, custom ERPs fit your business exactly. Here is how to choose without wasting money.",
    category: "ERP & CRM",
    date: "2026-02-04",
    readingTime: "6 min read",
    author: "Syed Meer Ali Shah",
    metaTitle: "Custom ERP vs Off-the-Shelf Software — How to Choose | Devcuts",
    metaDesc:
      "Custom ERP or off-the-shelf SaaS? Compare cost, flexibility, integration, and long-term risk to decide which is right for your business in 2026.",
    tags: ["ERP", "CRM", "Automation", "Strategy"],
    content: [
      {
        type: "p",
        text: "Every growing business eventually hits the same wall: spreadsheets stop scaling, and operations depend on tribal knowledge. The question is whether to buy an off-the-shelf system or build a custom ERP tailored to how you actually work.",
      },
      { type: "h2", text: "The case for off-the-shelf" },
      {
        type: "ul",
        items: [
          "Fast to deploy — days, not months.",
          "Lower upfront cost and predictable subscription pricing.",
          "Maintained and updated by the vendor.",
          "Good when your processes match the industry standard.",
        ],
      },
      { type: "h2", text: "The case for custom ERP" },
      {
        type: "ul",
        items: [
          "Built around your real workflows, not forced to fit a template.",
          "No per-seat pricing that punishes growth.",
          "Clean integration with your existing tools and data.",
          "You own the system — no vendor lock-in or surprise fee hikes.",
        ],
      },
      { type: "h2", text: "A simple decision framework" },
      {
        type: "p",
        text: "Ask three questions. If most answers point left, buy. If they point right, build.",
      },
      {
        type: "ul",
        items: [
          "Do your processes match an existing product? Standard → buy. Unique → build.",
          "Will you need deep integrations? Light → buy. Heavy → build.",
          "Will you scale beyond 20–30 users? Small team → buy. Large/growing → build.",
        ],
      },
      { type: "h3", text: "The hidden cost of the wrong choice" },
      {
        type: "p",
        text: "A cheap tool that misses a critical workflow creates manual workarounds, data entry errors, and shadow spreadsheets. That hidden tax usually exceeds a custom build within two years.",
      },
      {
        type: "quote",
        text: "The most expensive system is the one your team quietly stops using.",
      },
      {
        type: "p",
        text: "At Devcuts we build Frappe-based and custom ERPs that automate operations and give owners real-time visibility. If you are weighing the options, we will help you map the trade-offs honestly.",
      },
    ],
  },
  {
    slug: "web-app-development-process",
    title: "Our Web App Development Process: From Idea to Launch",
    excerpt:
      "A look inside how we take a product from first call to production — and why structure beats guesswork every time.",
    category: "Engineering",
    date: "2026-01-21",
    readingTime: "6 min read",
    author: "Muhammad Omar Kafeel",
    metaTitle: "Web App Development Process — Idea to Launch | Devcuts Media",
    metaDesc:
      "See how Devcuts takes a web app from idea to launch: discovery, scoping, UI/UX, engineering, QA, and deployment — with a clear process at every step.",
    tags: ["Web Development", "Process", "Next.js", "Product"],
    content: [
      {
        type: "p",
        text: "Great software is not the result of clever improvisation — it is the result of a repeatable process. Here is exactly how we take a web application from a rough idea to a live product.",
      },
      { type: "h2", text: "1. Discovery" },
      {
        type: "p",
        text: "We start by understanding the problem, the users, and the outcome. No code yet — just clarity. You leave discovery with a written scope and a realistic budget.",
      },
      { type: "h2", text: "2. Scoping and architecture" },
      {
        type: "p",
        text: "We map the user journeys, define the data model, and choose the stack. For most modern products that means Next.js on the front end, a typed Python or Node backend, and managed Postgres.",
      },
      { type: "h2", text: "3. UI/UX design" },
      {
        type: "ul",
        items: [
          "Wireframes to validate flow before pixels.",
          "A real design system — typography, color, and components.",
          "Clickable prototypes you can react to before we build.",
        ],
      },
      { type: "h2", text: "4. Engineering" },
      {
        type: "p",
        text: "We build in short, reviewable increments so you see progress every week. Every change goes through code review, automated checks, and a staging environment before it reaches production.",
      },
      { type: "h2", text: "5. QA and testing" },
      {
        type: "ul",
        items: [
          "Automated unit and integration tests for critical logic.",
          "Manual QA across devices and browsers.",
          "Performance, accessibility, and security passes.",
        ],
      },
      { type: "h2", text: "6. Launch and iteration" },
      {
        type: "p",
        text: "We deploy with observability in place, then measure. Real usage always teaches you something — so launch is a milestone, not the finish line.",
      },
      {
        type: "quote",
        text: "Ship small, ship often, and let real users steer the roadmap.",
      },
      {
        type: "p",
        text: "Have a product in mind? Send us a brief and we will map the right process for it.",
      },
    ],
  },
  {
    slug: "ai-automation-for-business",
    title: "5 Ways AI Automation Can Save Your Business Money in 2026",
    excerpt:
      "AI is not just hype — applied well, it removes hours of repetitive work every week. Here are five practical, proven examples.",
    category: "AI & Automation",
    date: "2026-01-07",
    readingTime: "5 min read",
    author: "Syed Meer Ali Shah",
    metaTitle: "5 Ways AI Automation Saves Businesses Money in 2026 | Devcuts",
    metaDesc:
      "Five practical AI automation use cases for 2026 — support, sales, data entry, document processing, and reporting — and how to implement them without hype.",
    tags: ["AI", "Automation", "Productivity", "ROI"],
    content: [
      {
        type: "p",
        text: "AI gets a lot of hype, but the businesses seeing real return treat it as automation, not magic. Here are five ways we help clients cut cost and save time with AI in 2026.",
      },
      { type: "h2", text: "1. Support that answers itself" },
      {
        type: "p",
        text: "A retrieval-augmented chatbot trained on your own docs and past tickets can resolve routine questions instantly — and hand off to a human with full context when needed.",
      },
      { type: "h2", text: "2. Sales and lead qualification" },
      {
        type: "p",
        text: "AI can enrich inbound leads, score them against your best customers, and draft the first reply — so your team spends time on deals most likely to close.",
      },
      { type: "h2", text: "3. Data entry without the typing" },
      {
        type: "p",
        text: "Invoices, orders, and forms can be parsed and pushed straight into your ERP or CRM, eliminating copy-paste errors and freeing staff for higher-value work.",
      },
      { type: "h2", text: "4. Document processing at scale" },
      {
        type: "ul",
        items: [
          "Summarise contracts and flag unusual clauses.",
          "Extract key fields from PDFs into structured data.",
          "Route documents to the right team automatically.",
        ],
      },
      { type: "h2", text: "5. Reporting that writes itself" },
      {
        type: "p",
        text: "Instead of waiting for a monthly report, AI can turn raw operational data into plain-language summaries and alerts, so problems surface while they are still cheap to fix.",
      },
      {
        type: "quote",
        text: "The best AI project is boring: it quietly removes a task nobody wanted to do.",
      },
      { type: "h2", text: "How to start without wasting money" },
      {
        type: "ul",
        items: [
          "Pick one high-volume, low-risk process to automate first.",
          "Measure the baseline — hours and cost — before you build.",
          "Keep a human in the loop for anything customer-facing at first.",
          "Expand only once the first use case proves its ROI.",
        ],
      },
      {
        type: "p",
        text: "Want to find your best automation opportunity? Send us a brief and we will map it for you.",
      },
    ],
  },
];

export const allPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const postBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

export const relatedPosts = (slug: string, limit = 2) =>
  posts.filter((p) => p.slug !== slug).slice(0, limit);
