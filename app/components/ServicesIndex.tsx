"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "../services/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
      {/* hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-56 -right-52 h-[760px] w-[760px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0.04) 40%, rgba(200,30,30,0) 74%)",
            }}
          />
          <div
            className="absolute -bottom-64 -left-56 h-[720px] w-[720px]"
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
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> What We Do
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] text-ink max-w-4xl"
          >
            Services that{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              scale your business.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            One senior team across web, mobile, data, and cloud — no hand-offs, no
            bloat. Pick a practice area below to see exactly what&apos;s included.
          </motion.p>
        </motion.div>
      </section>

      {/* services grid */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              const enter =
                i % 3 === 0
                  ? { opacity: 0, x: -48 }
                  : i % 3 === 1
                    ? { opacity: 0, y: 32 }
                    : { opacity: 0, x: 48 };
              return (
                <motion.div
                  key={s.slug}
                  initial={enter}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, ease }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-7 pb-8 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center group-hover:bg-brand-red-600 transition-colors">
                      <Icon className="w-5 h-5 text-brand-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-soft/50 group-hover:text-brand-red-600 transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-1.5">
                    {s.navLabel}
                  </h3>
                  <p className="text-xs text-ink-soft/60 mb-3">
                    {s.tagline}
                  </p>
                  <p className="text-sm text-ink-soft font-light leading-relaxed mb-6 flex-1">
                    {s.heroLead}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red-600 hover:gap-2.5 transition-all self-start"
                  >
                    Explore {s.navLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-[var(--brand-black)]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(80% 120% at 50% 0%, rgba(200,30,30,0.18) 0%, rgba(200,30,30,0) 60%)",
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28 relative z-10 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight max-w-3xl mx-auto"
          >
            Not sure where to start?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl mx-auto"
          >
            Book a free 20-min scoping call — we&apos;ll map the right stack to your
            goals, no sales pitch.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <Link
              href="/#contact"
              className="btn btn-light rounded-full px-8 py-4 text-sm inline-flex items-center justify-center gap-2.5"
            >
              Book a Scoping Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}