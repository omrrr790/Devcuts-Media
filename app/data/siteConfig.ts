/* ─────────────────────────────────────────────────────────────────────────
   siteConfig — the single source of truth for Devcuts SEO + site settings.
   Targeted keywords, per-page meta titles/descriptions, and base config
   all live here so crawlers see consistent signals across the domain.
   ───────────────────────────────────────────────────────────────────────── */

export const siteConfig = {
  /* ── Base site settings ───────────────────────────────────────────── */
  site: {
    url: "https://www.devcuts.com",
    name: "Devcuts Media",
    shortName: "Devcuts",
    tagline: "Premium Digital Studio — Web, Mobile, ERP/CRM & AI",
    description:
      "Devcuts Media is a premium digital studio building bespoke software — Next.js architecture, custom ERP/CRM systems, mobile apps, AI automation, and SEO growth that deliver measurable results.",
    email: "hello@devcuts.com",
    phone: "+923405609087",
    phoneDisplay: "+92 340 5609087",
    whatsapp: "https://wa.me/923405609087",
    locality: "Islamabad",
    country: "PK",
    logo: "/logo.png",
    learn: "https://learn.devcuts.com/login",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
      instagram: "",
    },
  },

  /* ── Targeted keyword bank ────────────────────────────────────────── */
  keywords: {
    /* High-intent phrases we are actively ranking for */
    primary: [
      "premium digital studio",
      "bespoke software development",
      "Next.js architecture",
      "custom software development",
      "top web development agency",
      "best software house in Islamabad",
    ],
    /* Supporting topical terms for authority */
    secondary: [
      "software house in Islamabad",
      "Next.js development company",
      "custom ERP development",
      "CRM development",
      "AI automation agency",
      "mobile app development",
      "SEO services Pakistan",
      "MERN stack development",
      "cloud and DevOps",
    ],
    /* Long-tail, question-led queries */
    longTail: [
      "how much does custom software cost in Pakistan",
      "custom ERP vs off-the-shelf software",
      "best software house in Islamabad for digital growth",
      "Next.js development company in Pakistan",
    ],
  },

  /* ── Per-page meta titles + descriptions ──────────────────────────── */
  meta: {
    home: {
      title: "Devcuts Media — Premium Digital Studio & Bespoke Software",
      description:
        "Devcuts Media is a premium digital studio for bespoke software development — Next.js architecture, custom ERP/CRM, mobile apps, and AI workflows that drive measurable growth.",
      keywords: [
        "premium digital studio",
        "bespoke software development",
        "Next.js architecture",
        "custom software development",
        "top web development agency",
      ],
    },
    about: {
      title: "About Devcuts Media — A Premium Digital Studio in Pakistan",
      description:
        "Devcuts Media is a hands-on premium digital studio designing and building bespoke software — custom ERPs, CRMs, dashboards, and Next.js platforms for growing businesses.",
      keywords: [
        "premium digital studio",
        "software house in Islamabad",
        "bespoke software development",
      ],
    },
    services: {
      title: "Services — Bespoke Software, Next.js, ERP/CRM, AI & Cloud | Devcuts",
      description:
        "Bespoke software development across web, mobile, ERP/CRM, AI automation, SEO, and cloud — senior Next.js architecture and delivery from one Devcuts team.",
      keywords: [
        "bespoke software development",
        "Next.js architecture",
        "custom ERP development",
        "top web development agency",
      ],
    },
    blog: {
      title: "Blog — Web, Mobile, ERP & AI Insights | Devcuts Media",
      description:
        "Practical guides on bespoke software development, ERP/CRM, AI automation, Next.js architecture, and digital growth from the Devcuts Media team.",
      keywords: [
        "bespoke software development",
        "software house in Islamabad",
        "digital growth",
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;
