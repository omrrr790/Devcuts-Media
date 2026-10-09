"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Brain, Globe, Cloud, ShieldCheck, Layers, FileText, Users,
  ArrowRight, Check, Sparkles, Zap, ChevronDown,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* Text and visual come from opposite sides, mirroring the grid order. */
function blockDirs(reverse: boolean) {
  return reverse
    ? { text: "right", visual: "left" }
    : { text: "left", visual: "right" };
}

const blockItem = (dir: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -56 : 56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
});

const block: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

/* ─── Featured projects — shown by default ────────────────────────
   NOTE: CRM screenshot path assumed as "/CRM.png" — update this to
   match whatever filename you saved it as in /public. */
const featuredBlocks = [
  {
    reverse: false,
    eyebrow: "CRM",
    icon: Users,
    href: "/services/erp-crm",
    title: "Custom CRM — Sales & Client Management",
    desc: "A full sales CRM built to replace scattered spreadsheets and WhatsApp chats — every lead, deal, and client conversation lives in one place, with live analytics on pipeline value, conversion rate, and deal velocity.",
    points: [
      "Leads, deals & campaign pipelines",
      "Built-in call logs & WhatsApp inbox",
      "Contacts, organizations & notes",
      "Live sales analytics dashboard",
    ],
    src: "/tablet-black-crm.png",
    alt: "Custom CRM dashboard screenshot",
    width: 1968,
    height: 999,
  },
  {
    reverse: true,
    eyebrow: "Enterprise Systems",
    icon: Layers,
    href: "/services/erp-crm",
    title: "Full-Scale ERP Platform",
    desc: "A complete back-office command center covering client CRM with an encrypted credentials vault, a Kanban case board with stage-based workflows, billing and invoicing, time tracking, accounting reports, document templates, a compliance calendar, and a secure client portal — all searchable from a single command-palette home screen.",
    points: ["CRM + encrypted vault", "Kanban case board", "Billing, time & reports"],
    src: "/tablet-black-erpnext.webp",
    alt: "ERP platform dashboard screenshot",
    width: 1413,
    height: 963,
  },
  {
    reverse: false,
    eyebrow: "Operations",
    icon: Zap,
    href: "/services/web-development",
    title: "TaskFlow — Ticketing & Task Assignment",
    desc: "An internal ticketing platform where any department can raise a request, route it to the right owner, and track it from open to resolved — replacing scattered WhatsApp threads with a single accountable queue.",
    points: ["Multi-department intake", "Smart owner routing", "Open → resolved tracking"],
    src: "/taskflow.png",
    alt: "TaskFlow ticketing dashboard screenshot",
    width: 2255,
    height: 1416,
  },
];

/* ─── Remaining projects — revealed via "View All Projects" ──────── */
const moreBlocks = [
  {
    reverse: true,
    eyebrow: "Tax & Compliance",
    icon: FileText,
    href: "/services/erp-crm",
    title: "Tax Consultation ERP",
    desc: "A dedicated ERP built for tax practices — tracks every client's NTN filer and non-filer status, moves each case through a structured filing workflow, and keeps compliance deadlines, documents, and billing together in one encrypted, audit-ready system.",
    points: ["NTN filer / non-filer tracking", "Structured filing workflow", "Encrypted, audit-ready vault"],
    src: "/taxERP.png",
    alt: "Tax Consultation ERP dashboard screenshot",
    width: 924,
    height: 591,
  },
  {
    reverse: false,
    eyebrow: "Analytics",
    icon: Brain,
    href: "/services/ai-automation",
    title: "Reports Generator",
    desc: "A reporting layer built on top of TaskFlow that breaks down exactly how many tickets each person or department has resolved, giving managers a clear, data-backed view of turnaround time and team workload.",
    points: ["Per-person resolution stats", "Department breakdowns", "Turnaround & workload views"],
    src: "/repotsgenerator.png",
    alt: "Reports Generator analytics screenshot",
    width: 2257,
    height: 1417,
  },
  {
    reverse: true,
    eyebrow: "Multi-Site Management",
    icon: Globe,
    href: "/services/web-development",
    title: "Unified Multi-Site Dashboard",
    desc: "One dashboard that pulls leads, admissions, contact messages, career applications, and other form submissions from multiple company websites into a single unified view — so teams stop checking six different site backends and see everything in one place.",
    points: ["Cross-site lead intake", "Unified inbox & filters", "One-palette search"],
    src: "/Dashboard.png",
    alt: "Unified multi-site dashboard screenshot",
    width: 1186,
    height: 700,
  },
];

/* ─── Compact secondary cards ────────────────────────────────────── */
const secondary = [
  {
    icon: Globe,
    href: "/services/seo-growth",
    title: "SEO & Growth",
    desc: "Technical SEO, content strategy, and CRO testing that turn traffic into revenue.",
  },
  {
    icon: Cloud,
    href: "/services/cloud-devops",
    title: "Cloud & DevOps",
    desc: "Zero-downtime AWS/Azure deploys, Docker & k8s, monitoring and 99.9% uptime.",
  },
  {
    icon: ShieldCheck,
    href: "/services/ai-automation",
    title: "AI & Automation",
    desc: "LLMs, RAG pipelines and workflow automation that remove manual busywork.",
  },
];

/* ═══ REAL PRODUCT SCREENSHOT VISUAL ═══════════════════════════ */
function ShotVisual({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-6 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(200,30,30,0.08) 0%, rgba(200,30,30,0) 68%)",
        }}
        aria-hidden
      />
      <div className="relative rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_45px_90px_-45px_rgba(122,14,14,0.45)] p-2">
        <div className="w-full overflow-hidden rounded-lg bg-[var(--color-bg-soft)]">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 600px, 90vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── One alternating feature block (shared by featured + extra) ─── */
function ServiceBlock({
  b,
  reduced,
}: {
  b: (typeof featuredBlocks)[number];
  reduced: boolean | null;
}) {
  const Icon = b.icon;
  return (
    <motion.div
      variants={block}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
    >
      {/* text */}
      <motion.div variants={blockItem(blockDirs(b.reverse).text as "left" | "right")} className={`lg:col-span-6 ${b.reverse ? "lg:order-2" : ""}`}>
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-5 w-1 rounded-full brand-gradient shrink-0" aria-hidden />
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold">
            <Icon className="w-3 h-3" /> {b.eyebrow}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-4">
          {b.title}
        </h3>
        <p className="text-base md:text-lg text-ink-soft font-light leading-relaxed mb-6 max-w-xl">
          {b.desc}
        </p>
        <ul className="space-y-2.5 mb-6">
          {b.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
              <span className="w-6 h-6 rounded-full bg-brand-red-500/10 border border-brand-red-500/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-brand-red-600" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link
          href={b.href}
          className="btn btn-primary px-5 py-3 rounded-2xl text-sm self-start"
        >
          Start this service
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* visual */}
      <motion.div
        variants={blockItem(blockDirs(b.reverse).visual as "left" | "right")}
        whileHover={reduced ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className={`lg:col-span-6 ${b.reverse ? "lg:order-1" : ""}`}
      >
        <ShotVisual
          src={b.src}
          alt={b.alt}
          width={b.width}
          height={b.height}
        />
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES — alternating feature blocks
   ═══════════════════════════════════════════════════════════════ */
export default function Services() {
  const reduced = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="py-24 lg:py-28 bg-[var(--color-bg)] relative overflow-hidden scroll-mt-24 lg:scroll-mt-28">
      {/* soft wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.06) 0%, rgba(200,30,30,0.02) 40%, rgba(200,30,30,0) 70%)",
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3 h-3" /> What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4">
            Bespoke software development that{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              scales your business
            </span>
          </h2>
          <p className="text-base md:text-lg text-ink-soft font-light">
            One senior team across web, mobile, data, and cloud — from Next.js
            architecture to custom ERP/CRM, with no hand-offs and no bloat.
          </p>
        </motion.div>

        {/* ═══ FEATURED PROJECTS ═══ */}
        <div className="space-y-20 lg:space-y-28">
          {featuredBlocks.map((b) => (
            <ServiceBlock key={b.title} b={b} reduced={reduced} />
          ))}
        </div>

        {/* ═══ EXTRA PROJECTS — revealed on click ═══ */}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              key="more-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease }}
              className="overflow-hidden"
            >
              <div className="space-y-20 lg:space-y-28 pt-20 lg:pt-28">
                {moreBlocks.map((b) => (
                  <ServiceBlock key={b.title} b={b} reduced={reduced} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══ VIEW ALL PROJECTS BUTTON ═══ */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border-2 border-black/10 text-ink text-sm font-bold hover:border-brand-red-500/40 hover:text-brand-red-600 transition-all shadow-sm"
          >
            {showAll ? "Show Fewer Projects" : "View All Projects"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* ═══ COMPACT SECONDARY CARDS — secondary tier ═══ */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="h-px w-14 bg-black/10" aria-hidden />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-ink-soft">
              More ways we help
            </span>
            <div className="h-px w-14 bg-black/10" aria-hidden />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondary.map((s, i) => {
              const Icon = s.icon;
              const enter =
                i % 3 === 0
                  ? { opacity: 0, x: -48 }
                  : i % 3 === 1
                    ? { opacity: 0, y: 32 }
                    : { opacity: 0, x: 48 };
              return (
                <motion.div
                  key={s.title}
                  initial={enter}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, ease }}
                  whileHover={reduced ? undefined : { y: -5, scale: 1.02 }}
                  className="group relative p-7 pb-8 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-11 h-11 rounded-2xl bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center mb-5 group-hover:bg-brand-red-600 transition-colors">
                    <Icon className="w-5 h-5 text-brand-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-2">{s.title}</h4>
                  <p className="text-sm text-ink-soft font-light leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="btn btn-primary px-5 py-3 rounded-2xl text-sm self-start"
                  >
                    Start this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}