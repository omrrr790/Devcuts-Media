export const site = {
  url: "https://www.devcuts.com",
  name: "Devcuts Media",
  shortName: "Devcuts",
  tagline: "Web, Mobile, ERP/CRM & AI Studio",
  description:
    "Devcuts Media is a senior digital studio building Next.js platforms, mobile apps, ERP/CRM systems, AI automation, and SEO growth that deliver measurable results.",
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
} as const;

export const sameAs = Object.values(site.social).filter(Boolean);
