import type { Metadata } from "next";
import ServicesIndex from "../components/ServicesIndex";

export const metadata: Metadata = {
  title: "Services — Devcuts Media | Web, Mobile, ERP/CRM, AI, SEO & Cloud",
  description:
    "Custom web platforms, mobile apps, ERPs/CRMs, AI automation, SEO growth, and cloud/DevOps — delivered by one senior Devcuts team.",
};

export default function ServicesPage() {
  return <ServicesIndex />;
}