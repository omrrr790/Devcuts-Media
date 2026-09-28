"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Gem, ShieldCheck, Check, ArrowRight, Waypoints, CircleDollarSign, FileCheck2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

function cardDir(i: number): "left" | "up" | "right" {
  return (["left", "up", "right"] as const)[i % 3];
}

const steps = [
  {
    title: "Free scoping call",
    desc: "We map your goals, stack, and constraints on a call. You get honest feasibility, a rough timeline, and a fixed-scope quote — no obligation.",
  },
  {
    title: "Design sprint",
    desc: "Wireframes, mood boards, and a clear technical blueprint so you can approve the direction before a line of code is written.",
  },
  {
    title: "Agile development",
    desc: "Senior engineers build in short sprints you can watch. You get staging links every week and chat support all day.",
  },
  {
    title: "Launch & QA",
    desc: "QA passes, load tests, and a security review. We deploy to production and monitor until every metric is green.",
  },
  {
    title: "Grow & optimize",
    desc: "Analytics, performance tuning, and SEO. We stay close after launch so the product keeps compounding value.",
  },
];

const cards = [
  {
    icon: FileCheck2,
    title: "Free 20-min — No obligation",
    desc: "See what’s possible before spending anything.",
  },
  {
    icon: CircleDollarSign,
    title: "Paid Scoping ($250)",
    desc: "Dedicated deep dive, credited back against build.",
  },
  {
    icon: Gem,
    title: "Premium Engagement",
    desc: "Fully-managed design → deploy for time-critical work.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PROCESS — simple numbered-circle step track
   ═══════════════════════════════════════════════════════════════ */
export default function Process() {
  const reduced = useReducedMotion();

  return (
    <section id="process" className="py-24 lg:py-28 bg-[var(--color-bg-soft)] relative overflow-hidden">
      {/* soft wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -bottom-48 -right-40 w-[720px] h-[720px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.08) 0%, rgba(200,30,30,0.02) 42%, rgba(200,30,30,0) 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ═══ HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
            <Waypoints className="w-3 h-3" /> The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4">
            From first call to{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              compounding growth
            </span>
          </h2>
          <p className="text-base md:text-lg text-ink-soft font-light">
            A transparent, five-phase path with a fixed price and a weekly heartbeat.
          </p>
        </motion.div>

        {/* ═══ NUMBERED-CIRCLE STEP TRACK ═══ */}
        <div className="relative">
          {/* dashed connector line running through the circles (large screens) */}
          <div
            className="hidden lg:block absolute left-[6%] right-[6%] top-[28px] border-t-2 border-dashed border-black/15 pointer-events-none"
            aria-hidden
          />

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-y-0"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={item}
                className="relative flex flex-col items-center text-center"
              >
                {/* dark numbered circle */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-black)] text-white font-black text-lg shadow-md">
                  {i + 1}
                </div>

                <h3 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-ink-soft font-light leading-relaxed max-w-[260px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ═══ WAYS TO ENGAGE ═══ */}
        <div className="grid sm:grid-cols-3 gap-5 mt-20">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: cardDir(i) === "left" ? -44 : cardDir(i) === "right" ? 44 : 0, y: cardDir(i) === "up" ? 32 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: i * 0.1, ease }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="relative overflow-hidden p-7 rounded-2xl border bg-white border-black/10 shadow-sm"
              >
                {i === 2 && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(120% 90% at 85% 0%, rgba(200,30,30,0.14) 0%, rgba(200,30,30,0) 55%)",
                    }}
                  />
                )}
                <div
                  className={`relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                    i === 2 ? "bg-[var(--brand-black)] border border-black/20" : "bg-brand-red-500/10 border border-brand-red-500/15"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${i === 2 ? "text-white" : "text-brand-red-600"}`} />
                </div>
                <h4 className="relative z-10 text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-2">
                  {c.title}
                </h4>
                <p className="relative z-10 text-sm leading-relaxed text-ink-soft font-light">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ BOTTOM ASSURANCE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-soft border border-black/10 rounded-2xl bg-white p-6 shadow-sm"
        >
          <span className="inline-flex items-center gap-2 font-black text-ink">
            <ShieldCheck className="w-4 h-4 text-brand-red-500" />
            Every project backed by:
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-brand-red-500" /> Fixed-scope pricing
          </span>
          <span className="hidden sm:block w-px h-4 bg-black/10" />
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-brand-red-500" /> Weekly demos
          </span>
          <span className="hidden sm:block w-px h-4 bg-black/10" />
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-brand-red-500" /> 30-day post-launch support
          </span>
          <a href="#contact" className="inline-flex items-center gap-1 font-black text-brand-red-600 hover:gap-2 transition-all">
            Book yours <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}