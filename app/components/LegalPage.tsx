"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, ScrollText } from "lucide-react";
import type { LegalSection } from "../legal/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
      {/* hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-56 -right-52 h-[720px] w-[720px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0.04) 40%, rgba(200,30,30,0) 74%)",
            }}
          />
          <div
            className="absolute -bottom-64 -left-56 h-[640px] w-[640px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(122,14,14,0.08) 0%, rgba(122,14,14,0.03) 44%, rgba(122,14,14,0) 76%)",
            }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16"
        >
          <motion.nav
            variants={fadeUp}
            aria-label="Breadcrumb"
            className="mb-6 text-xs font-medium text-ink-soft/70 flex items-center gap-1.5"
          >
            <Link href="/" className="hover:text-brand-red-600 transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-soft">{title}</span>
          </motion.nav>

          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
              <ScrollText className="w-3 h-3" /> Legal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] text-ink max-w-4xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            {intro}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-ink-soft/70"
          >
            <Clock className="w-3.5 h-3.5 text-brand-red-500" />
            Last updated {updated}
          </motion.p>
        </motion.div>
      </section>

      {/* content */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl border border-black/10 shadow-[0_20px_60px_-34px_rgba(122,14,14,0.35)] p-8 sm:p-10 lg:p-14"
          >
            <div className="space-y-10">
              {sections.map((s) => (
                <section key={s.heading} className="scroll-mt-28">
                  <h2 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-4">
                    {s.heading}
                  </h2>
                  {s.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm md:text-base text-ink-soft font-light leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-3 space-y-2.5">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full brand-gradient shrink-0"
                            aria-hidden
                          />
                          <span className="text-sm md:text-base text-ink-soft font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </motion.article>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto mt-10 text-center"
          >
            <p className="text-sm text-ink-soft font-light mb-5">
              Questions about this policy? Our team is one message away.
            </p>
            <Link
              href="/#contact"
              className="btn btn-primary rounded-full px-7 py-3.5 text-sm inline-flex items-center justify-center gap-2"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
