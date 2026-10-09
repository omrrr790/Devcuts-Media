import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMeta, cookiesSections } from "../legal/data";

const doc = legalMeta[2];

export const metadata: Metadata = {
  title: "Cookie Policy — Devcuts Media",
  description:
    "What cookies Devcuts Media uses, why we use them, and how you can control them in your browser.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title={doc.title}
      intro={doc.intro}
      updated={doc.updated}
      sections={cookiesSections}
    />
  );
}
