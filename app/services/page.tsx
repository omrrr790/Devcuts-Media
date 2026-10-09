import type { Metadata } from "next";
import ServicesIndex from "../components/ServicesIndex";
import { siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: siteConfig.meta.services.title,
  description: siteConfig.meta.services.description,
  keywords: siteConfig.meta.services.keywords,
  alternates: { canonical: "/services" },
  openGraph: {
    title: siteConfig.meta.services.title,
    description: siteConfig.meta.services.description,
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesIndex />;
}