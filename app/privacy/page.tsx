import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMeta, privacySections } from "../legal/data";

const doc = legalMeta[0];

export const metadata: Metadata = {
  title: "Privacy Policy — Devcuts Media",
  description:
    "Learn how Devcuts Media collects, uses, and protects your personal information across our website and services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title={doc.title}
      intro={doc.intro}
      updated={doc.updated}
      sections={privacySections}
    />
  );
}
