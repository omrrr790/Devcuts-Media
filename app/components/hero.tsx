"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Star, Check, Play, Sparkles,
  Code2, Brain, Smartphone, BarChart3, Layers,
  ShieldCheck, Clock, MousePointerClick,
  Rocket, ChevronRight, Globe,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Variants (no animated blur filters) ──────────────────────────────
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

// ─── Data ──────────────────────────────────────────────────────────────
const rotatingWords = ["Real Results.", "Organic Growth.", "Lasting Impact.", "Measurable ROI."];

const highlights = [
  { icon: Code2,     label: "Full-Stack Web",  color: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-100" },
  { icon: Brain,     label: "AI & Automation", color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-100" },
  { icon: Smartphone,label: "Mobile Apps",     color: "text-sky-600",     bg: "bg-sky-50",     border: "border-sky-100" },
  { icon: BarChart3, label: "SEO & Growth",    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { icon: Layers,    label: "ERP / CRM",       color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { icon: Globe,     label: "Cloud & DevOps",  color: "text-rose-600",    bg: "bg-rose-50",    border: "border-rose-100" },
];

const trustPills = [
  { icon: ShieldCheck, text: "NDA on request" },
  { icon: Clock,       text: "24hr response" },
  { icon: Check,       text: "Fixed-scope quotes" },
  { icon: Sparkles,    text: "Free 20-min scoping" },
];

const clients = [
  "Northwind", "Lumen Health", "Orin Logistics", "Copperfield",
  "Halden & Co", "Verdant", "Kestrel Labs", "Mera Foods",
];

const techImages = [
  { src: "/tech/nextjs.png",     alt: "Next.js",     label: "Next.js",     bg: "bg-black" },
  { src: "/tech/react.png",      alt: "React",       label: "React",       bg: "bg-[#20232a]" },
  { src: "/tech/typescript.png", alt: "TypeScript",  label: "TypeScript",  bg: "bg-[#3178c6]" },
  { src: "/tech/nodejs.png",     alt: "Node.js",     label: "Node.js",     bg: "bg-[#026e00]" },
  { src: "/tech/python.png",     alt: "Python",      label: "Python",      bg: "bg-[#306998]" },
  { src: "/tech/mongodb.png",    alt: "MongoDB",     label: "MongoDB",     bg: "bg-[#13aa52]" },
  { src: "/tech/tailwind.png",   alt: "Tailwind",    label: "Tailwind",    bg: "bg-[#0ea5e9]" },
  { src: "/tech/flutter.png",    alt: "Flutter",     label: "Flutter",     bg: "bg-[#027DFD]" },
  { src: "/tech/openai.png",     alt: "OpenAI",      label: "OpenAI",      bg: "bg-[#10a37f]" },
  { src: "/tech/aws.png",        alt: "AWS",         label: "AWS",         bg: "bg-[#FF9900]" },
];

const projects = [
  {
    id: "northwind",
    client: "Northwind Retail",
    industry: "E-commerce · United States",
    title: "Headless storefront rebuild",
    summary:
      "Migrated a 40k-SKU catalog from legacy Magento to Next.js with edge caching and Shopify as the commerce backend.",
    stack: ["Next.js", "Shopify", "Redis", "Vercel"],
    metrics: [
      { label: "LCP", value: "1.2s", note: "−68%" },
      { label: "Checkout", value: "2.4×", note: "+140%" },
    ],
    accent: "from-indigo-500 to-violet-500",
    initials: "NW",
  },
  {
    id: "lumen",
    client: "Lumen Health",
    industry: "Health-tech · United Kingdom",
    title: "AI triage assistant",
    summary:
      "RAG pipeline over 40k clinical notes with human-in-the-loop review, integrated into an existing EHR.",
    stack: ["OpenAI", "LangChain", "Postgres", "AWS"],
    metrics: [
      { label: "Accuracy", value: "94%", note: "+22 pts" },
      { label: "Handle time", value: "−41%", note: "per case" },
    ],
    accent: "from-emerald-500 to-teal-500",
    initials: "LH",
  },
  {
    id: "orin",
    client: "Orin Logistics",
    industry: "Supply chain · UAE",
    title: "Fleet ops platform",
    summary:
      "Replaced 6 spreadsheets with a real-time dispatch system tracking 1,200 vehicles across three regions.",
    stack: ["React", "Node", "Postgres", "Mapbox"],
    metrics: [
      { label: "Vehicles", value: "1,200", note: "live" },
      { label: "On-time", value: "+18%", note: "in 90 days" },
    ],
    accent: "from-amber-500 to-orange-500",
    initials: "OL",
  },
];

const stats = [
  { value: 260, suffix: "+",   label: "Projects shipped" },
  { value: 11,  suffix: " yrs",label: "In production" },
  { value: 98,  suffix: "%",   label: "Client retention" },
  { value: 4.9, suffix: "/5",  label: "Avg rating", decimals: 1 },
];

// ─── Typewriter word ──────────────────────────────────────────────────
function TypewriterWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease }}
        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 will-change-transform"
      >
        {rotatingWords[index]}
      </motion.span>
    </AnimatePresence>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────
function Counter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / (duration * 1000));
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(value * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// ─── Project showcase card (no mouse tilt) ────────────────────────────
function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % projects.length), 5200);
    return () => clearInterval(t);
  }, [paused]);

  const p = projects[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      <div className="relative rounded-3xl bg-white border border-indigo-100 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.35)] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-indigo-50 bg-gradient-to-r from-indigo-50/60 to-violet-50/40">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="text-[10.5px] font-bold text-indigo-400 uppercase tracking-[0.16em]">
            Live case file · {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.42, ease }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center text-white text-[13px] font-black shadow-md`}>
                    {p.initials}
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-slate-900 leading-tight">{p.client}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{p.industry}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                  Shipped
                </span>
              </div>

              <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">{p.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mt-2">{p.summary}</p>

              <div className="grid grid-cols-2 gap-2.5 mt-5">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{m.label}</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight mt-1">{m.value}</p>
                    <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">{m.note}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[10.5px] font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-5 sm:px-6 py-3.5 border-t border-indigo-50 flex items-center justify-between bg-gradient-to-r from-indigo-50/40 to-violet-50/20">
          <div className="flex gap-1.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show case ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-7 bg-gradient-to-r from-indigo-600 to-violet-600"
                    : "w-1.5 bg-slate-300 hover:bg-indigo-400"
                }`}
              />
            ))}
          </div>
          <a
            href="#work"
            className="inline-flex items-center gap-1 text-[11.5px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors group"
          >
            View full case study
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Client marquee — CSS animation (GPU composited) ──────────────────
function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className="flex gap-12 w-max will-change-transform"
        style={{ animation: "devcuts-marquee 32s linear infinite" }}
      >
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="text-[15px] font-bold text-slate-300 hover:text-indigo-400 transition-colors whitespace-nowrap tracking-tight"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative flex flex-col pt-24 pb-0 lg:pt-28 overflow-hidden bg-gradient-to-br from-white via-indigo-50/60 to-violet-50/40">
      {/* Marquee keyframes (global) */}
      <style jsx global>{`
        @keyframes devcuts-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform { animation: none !important; }
        }
      `}</style>

      {/* Background layer — static, no scroll parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-32 -left-40 w-[640px] h-[640px] bg-gradient-to-br from-indigo-200/60 to-violet-200/30 rounded-full blur-[90px]" />
        <div className="absolute -bottom-20 -right-20 w-[560px] h-[560px] bg-gradient-to-tl from-sky-200/50 to-cyan-100/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-r from-violet-100/40 to-indigo-100/20 rounded-full blur-[70px]" />

        <svg className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#6366f1" opacity="0.14" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={`${i * 15}%`} y1="0%" x2={`${i * 15 + 10}%`} y2="100%"
              stroke="#6366f1" strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Live badge */}
            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-[0_8px_30px_-12px_rgba(79,70,229,0.35)] text-[12.5px] font-semibold text-indigo-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Now accepting new projects</span>
                <span className="hidden sm:inline text-indigo-200">·</span>
                <span className="hidden sm:inline text-indigo-900 font-bold">Pakistan's Premier Digital Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[44px] sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[76px] font-black tracking-[-0.03em] mb-6 leading-[1.02] text-slate-900"
            >
              We Build{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500">
                  Digital Futures
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.0, duration: 0.75, ease }}
                  className="absolute -bottom-1 left-0 right-0 h-[5px] bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 rounded-full origin-left block"
                />
              </span>
              <br className="hidden sm:block" />
              <span className="text-slate-800"> That Drive </span>
              <br className="hidden sm:block" />
              <TypewriterWord />
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-[17px] sm:text-lg md:text-xl text-slate-500 mb-7 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              From SEO dominance to bespoke{" "}
              <span className="text-indigo-700 font-semibold">MERN-stack applications</span>,{" "}
              <span className="text-violet-700 font-semibold">AI-powered workflows</span>, and{" "}
              <span className="text-sky-700 font-semibold">Flutter mobile apps</span> — we craft
              premium technology solutions that transform brands and deliver compounding growth.
            </motion.p>

            {/* Highlight chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-7">
              {highlights.map(({ icon: Icon, label, color, bg, border }) => (
                <motion.span
                  key={label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full ${bg} border ${border} shadow-sm text-[12.5px] font-semibold ${color} cursor-default`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            {/* Trust pills */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-7 text-[13px] text-slate-500 font-medium"
            >
              {trustPills.map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-emerald-500" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[14.5px] font-black shadow-[0_20px_50px_-16px_rgba(79,70,229,0.7)] hover:shadow-[0_28px_60px_-16px_rgba(79,70,229,0.85)] transition-shadow flex items-center justify-center gap-2.5"
              >
                <Rocket className="w-4 h-4" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#work"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-[17px] rounded-2xl bg-white border-2 border-indigo-100 text-slate-800 text-[14.5px] font-bold hover:border-indigo-300 hover:bg-indigo-50/60 transition-all shadow-lg flex items-center justify-center gap-2.5"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center shadow-md">
                  <Play className="w-3 h-3 text-white fill-white" />
                </span>
                Watch Case Studies
                <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/923000000000"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-[17px] rounded-2xl bg-emerald-500 border-2 border-emerald-400 text-white text-[14.5px] font-bold hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2.5"
              >
                <MousePointerClick className="w-4 h-4" />
                Free Consultation
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    { i: "EW", c: "from-indigo-500 to-violet-500" },
                    { i: "HM", c: "from-emerald-500 to-teal-500" },
                    { i: "SJ", c: "from-amber-500 to-orange-500" },
                    { i: "CS", c: "from-sky-500 to-cyan-500" },
                    { i: "HA", c: "from-rose-500 to-pink-500" },
                    { i: "AU", c: "from-fuchsia-500 to-purple-500" },
                  ].map(({ i, c }, idx) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${c} border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:z-20 cursor-default`}
                      style={{ zIndex: 12 - idx }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1.5 text-[13px] font-black text-slate-900">5.0</span>
                  </div>
                  <p className="text-[12px] text-slate-400 font-medium mt-0.5">
                    150+ verified client reviews
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — showcase card (top-aligned with left column) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <ProjectShowcase />
          </motion.div>
        </div>

        {/* Client marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="mt-16 pt-10 border-t border-indigo-100/70"
        >
          <p className="text-center text-[10.5px] font-bold uppercase tracking-[0.24em] text-slate-400 mb-6 inline-flex items-center gap-3 w-full justify-center">
            <span className="w-8 h-px bg-slate-300" />
            Trusted by teams shipping real products
            <span className="w-8 h-px bg-slate-300" />
          </p>
          <ClientMarquee />
        </motion.div>

        {/* Stats strip with counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.7, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-indigo-100/70 rounded-2xl overflow-hidden border border-indigo-100 mt-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-6 text-center hover:bg-indigo-50/40 transition-colors">
              <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="text-[12px] text-slate-500 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech shelf */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease }}
          className="mt-16 relative"
        >
          <div className="text-center mb-7">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-black text-slate-400 uppercase tracking-[0.22em]">
              <span className="w-8 h-px bg-slate-300 inline-block" />
              Powered by world-class technology
              <span className="w-8 h-px bg-slate-300 inline-block" />
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pb-2">
            {techImages.map((tech, i) => (
              <motion.div
                key={tech.alt}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.1 + i * 0.06, duration: 0.45, ease }}
                whileHover={{ y: -6, scale: 1.08 }}
                className="group flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${tech.bg} flex items-center justify-center shadow-lg border border-white/20 group-hover:shadow-xl group-hover:shadow-indigo-200/60 transition-all duration-300`}>
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white text-[9px] font-black leading-none text-center px-0.5">
                      {tech.alt.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors text-center leading-tight max-w-[60px]">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="relative z-10 flex flex-col items-center gap-2 py-10 mt-6"
      >
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.24em]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-indigo-200 flex items-start justify-center pt-1.5 will-change-transform"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80H1440V30C1200 70 960 10 720 40C480 70 240 0 0 30V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}