"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight, Check, Play, Sparkles, ChevronRight,
  ShieldCheck, Clock, Rocket, Layers,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Variants ────────────────────────────────────────────────────── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ─── Data ────────────────────────────────────────────────────────── */
const rotatingWords = ["Real Results.", "Organic Growth.", "Lasting Impact.", "Measurable ROI."];

const trustPills = [
  { icon: ShieldCheck, text: "NDA on request" },
  { icon: Clock,       text: "24hr response" },
  { icon: Check,       text: "Fixed-scope quotes" },
  { icon: Sparkles,    text: "Free 20-min scoping" },
];

/* Mockup is a small animated webp — keep display modest, no upscale */
const MOCKUP = { src: "/tablet-black-erpnext.webp" };

/* ─── Typewriter word ────────────────────────────────────────────── */
function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2800);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block bg-clip-text text-transparent brand-gradient"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── Centered, tilted, floating tablet mockup ───────────────────── */
function Mockup({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const reduced = useReducedMotion();
  const [failed, setFailed] = useState(false);

  // scroll-linked: tilted at rest → straightens + rises while scrolling
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div
      className="relative w-full max-w-[640px] sm:max-w-[880px] lg:max-w-[1120px] mx-auto"
      style={{ perspective: "1200px" }}
    >
      {/* soft red/maroon glow blobs behind the device */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[105%] w-[110%] blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 42% at 32% 34%, rgba(200,30,30,0.16) 0%, rgba(200,30,30,0) 70%), radial-gradient(42% 40% at 70% 66%, rgba(226,59,59,0.12) 0%, rgba(122,14,14,0) 70%)",
        }}
        aria-hidden
      />

      {/* soft ground shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-6 w-[70%] rounded-[100%] bg-black/20 blur-2xl z-0"
        aria-hidden
      />

      <motion.div
        style={
          reduced
            ? undefined
            : {
                rotateX,
                rotateY,
                rotateZ,
                y,
                transformStyle: "preserve-3d",
              }
        }
        className="relative z-10 w-full"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full"
        >
          {failed ? (
            <div className="flex aspect-[960/655] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[var(--color-bg-soft)] p-6 text-center">
              <div className="brand-gradient flex h-12 w-12 items-center justify-center rounded-2xl">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <p className="text-[12px] font-semibold text-ink-soft">
                Product dashboard preview
              </p>
            </div>
          ) : (
            <Image
              src={MOCKUP.src}
              alt="Devcuts Media — ERP dashboard on a tablet mockup"
              width={960}
              height={655}
              sizes="(min-width: 1024px) 1120px, (min-width: 640px) 880px, 640px"
              className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(10,10,10,0.28)]"
              priority
              onError={() => setFailed(true)}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════
   HERO — centered, light, gradient key line, tablet shot below
   ═════════════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[var(--color-bg)]"
    >

      {/* ═══ BACKGROUND — soft brand glows ═══════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden>
        <div
          className="absolute -top-56 -right-52 h-[760px] w-[760px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.13) 0%, rgba(200,30,30,0.05) 36%, rgba(200,30,30,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-64 -left-56 h-[720px] w-[720px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(122,14,14,0.10) 0%, rgba(122,14,14,0.04) 38%, rgba(122,14,14,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(10,10,10,0.07) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ═══ MAIN CONTENT ══════════════════════════════════════ */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 sm:pt-32 lg:pt-40 pb-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* headline — lighter weight (bold, not black), key line in gradient */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] mb-4 text-ink"
          >
            We Build Digital
            <br />
            <span className="bg-clip-text text-transparent brand-gradient">
              Products That Drive{" "}
            </span>
            <span className="relative inline-block">
              <TypewriterWord />
            </span>
          </motion.h1>

          {/* sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-ink-soft mb-6 max-w-2xl mx-auto leading-relaxed font-light"
          >
            From SEO dominance to bespoke{" "}
            <span className="text-brand-red-600 font-semibold">MERN-stack applications</span>,{" "}
            <span className="text-brand-red-600 font-semibold">AI-powered workflows</span>, and{" "}
            <span className="text-brand-red-600 font-semibold">Flutter mobile apps</span> — we craft
            premium technology solutions that transform brands and deliver compounding growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-8 py-4 rounded-full brand-gradient text-white text-[14.5px] font-bold shadow-[0_20px_50px_-14px_rgba(200,30,30,0.55)] hover:shadow-[0_28px_60px_-14px_rgba(200,30,30,0.7)] transition-shadow flex items-center justify-center gap-2.5"
            >
              <Rocket className="w-4 h-4" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 rounded-full bg-white border-2 border-black/10 text-ink text-[14.5px] font-bold hover:border-brand-red-500/40 hover:text-brand-red-600 transition-all shadow-sm flex items-center justify-center gap-2.5"
            >
              <span className="w-7 h-7 rounded-full brand-gradient flex items-center justify-center shadow-md shadow-brand-red-500/30">
                <Play className="w-3 h-3 text-white fill-white" />
              </span>
              Watch Case Studies
              <ChevronRight className="w-4 h-4 text-brand-red-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* trust line — small icon+text pills, wraps on mobile */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {trustPills.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-[12px] font-semibold text-ink-soft"
              >
                <Icon className="w-3.5 h-3.5 text-brand-red-500" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══ CENTERED TABLET MOCKUP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="mt-8 sm:mt-10"
        >
          <Mockup heroRef={heroRef as React.RefObject<HTMLElement>} />
        </motion.div>
      </div>
    </section>
            // {/* <TrustedBy /> */}
  );
}