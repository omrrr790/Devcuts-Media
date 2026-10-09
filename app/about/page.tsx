import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Devcuts Media — A Hands-On Software Studio in Pakistan",
  description:
    "Devcuts is a small, hands-on studio designing, building, and maintaining custom ERPs, CRMs, admin dashboards, and internal tools for Pakistani businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Devcuts Media — A Hands-On Software Studio in Pakistan",
    description:
      "Devcuts is a small, hands-on studio designing, building, and maintaining custom ERPs, CRMs, admin dashboards, and internal tools for Pakistani businesses.",
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}