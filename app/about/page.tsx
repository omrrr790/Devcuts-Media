import type { Metadata } from "next";
import About from "../components/About";
import { siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: siteConfig.meta.about.title,
  description: siteConfig.meta.about.description,
  keywords: siteConfig.meta.about.keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    title: siteConfig.meta.about.title,
    description: siteConfig.meta.about.description,
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}