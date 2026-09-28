"use client";

import Hero from "./components/hero";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import FloatingButtons from "./components/FloatingButtons";

export default function LandingPage() {
  return (
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
  );
}