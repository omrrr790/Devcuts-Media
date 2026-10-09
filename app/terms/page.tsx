import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMeta, termsSections } from "../legal/data";

const doc = legalMeta[1];

export const metadata: Metadata = {
  title: "Terms of Service — Devcuts Media",
  description:
    "The terms that govern your access to and use of the Devcuts Media website and software development services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={doc.title}
      intro={doc.intro}
      updated={doc.updated}
      sections={termsSections}
    />
  );
}
