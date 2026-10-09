import type { Metadata } from "next";
import Hero from "./components/hero";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import FloatingButtons from "./components/FloatingButtons";
import { faqs } from "./data/faq";
import { siteConfig } from "./data/site";

export const metadata: Metadata = {
  title: siteConfig.meta.home.title,
  description: siteConfig.meta.home.description,
  keywords: siteConfig.meta.home.keywords,
  alternates: { canonical: "/" },
};

export default function LandingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
        <Hero />
        <TrustedBy />
        <Stats />
        <Process />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
        <FloatingButtons />
      </div>
    </>
  );
}
