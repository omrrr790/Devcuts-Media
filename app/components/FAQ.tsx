"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { faqs } from "../data/faq";

const ease = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <motion.div
      layout
      className={`rounded-2xl bg-white border shadow-sm transition-colors ${
        open ? "border-brand-red-500/40 shadow-[0_20px_50px_-26px_rgba(122,14,14,0.35)]" : "border-black/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span className={`text-base font-bold tracking-tight ${open ? "text-brand-red-600" : "text-ink"}`}>
          {q}
        </span>
        <span
          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all ${
            open ? "brand-gradient text-white rotate-180" : "bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-black/5 mb-4" />
              <p className="text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-2xl">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════ */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-28 bg-[var(--color-bg)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.06) 0%, rgba(200,30,30,0) 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
            <HelpCircle className="w-3 h-3" /> FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4">
            Questions,{" "}
            <span className="bg-clip-text text-transparent brand-gradient">answered</span>
          </h2>
          <p className="text-base md:text-lg text-ink-soft font-light">
            Everything founders usually ask before starting a project with us.
          </p>
        </motion.div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((f, i) => (
            <motion.div key={f.q} variants={item}>
              <FaqItem
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-black/10 bg-[var(--color-bg-soft)] p-6 shadow-sm"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-ink">
            <MessageCircle className="w-4 h-4 text-brand-red-500" />
            Didn&apos;t find your answer?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-black text-brand-red-600 hover:gap-2.5 transition-all text-sm"
          >
            Ask us directly <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}