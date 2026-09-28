"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Layout, Users, Clock, ShieldCheck, Star, TrendingUp,
  Activity, Target, Zap, BadgeCheck, Rocket, Heart,
} from "lucide-react";
import { slideVariants } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   ATOMS
   ═══════════════════════════════════════════════════════════════ */

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  useEffect(() => {
    if (inView) animate(mv, value, { duration: 2, ease: "easeOut" });
  }, [inView, value, mv]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* Circular progress ring — animates strokeDashoffset once on entry */
function Ring({ pct, color, label, value }: { pct: number; color: string; label: string; value: string }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[88px] h-[88px]">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#ece7e4" strokeWidth="7" />
          <motion.circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-black text-ink tabular-nums">{value}</span>
        </div>
      </div>
      <p className="text-xs font-bold text-ink-soft text-center leading-tight max-w-[100px]">
        {label}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const stats = [
  {
    num: 260,
    suffix: "+",
    label: "Projects Delivered",
    sub: "Across 12+ industries worldwide",
    icon: Layout,
  },
  {
    num: 150,
    suffix: "+",
    label: "Happy Clients",
    sub: "Trusted by startups & enterprises",
    icon: Users,
  },
  {
    num: 10,
    suffix: "+",
    label: "Years Experience",
    sub: "Hands-on software leadership",
    icon: Clock,
  },
  {
    num: 98,
    suffix: "%",
    label: "Client Retention",
    sub: "Clients keep coming back",
    icon: ShieldCheck,
  },
];

const growthYears = [
  { year: "2020", value: 32, projects: 18 },
  { year: "2021", value: 48, projects: 28 },
  { year: "2022", value: 68, projects: 44 },
  { year: "2023", value: 86, projects: 62 },
  { year: "2024", value: 100, projects: 78 },
];

/* Trend geometry — 5 equal columns in a 0–100 viewBox, bar tops trace
   the growth path (y) at each column center (x). */
const trendPoints = growthYears.map((g, i) => ({ x: i * 20 + 10, y: 100 - g.value }));
const trendLine = `M${trendPoints.map((p) => `${p.x} ${p.y}`).join(" L")}`;
const trendArea = `${trendLine} L${trendPoints[trendPoints.length - 1].x} 100 L${trendPoints[0].x} 100 Z`;

const rings = [
  { pct: 98, color: "#c81e1e", label: "Client satisfaction", value: "98%" },
  { pct: 96, color: "#9c1414", label: "On-time delivery", value: "96%" },
  { pct: 99, color: "#7a0e0e", label: "Would recommend", value: "99%" },
];

const avatars = [
  { name: "Elena W.", role: "Northwind", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
  { name: "Hassan M.", role: "Logistics Co.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
  { name: "Sarah J.", role: "StyleHub", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
  { name: "Shafqat S.", role: "Alniaz Petro", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
  { name: "Hafiz A.", role: "Sports World", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
  { name: "Ali U.", role: "Sadiq Auto", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70" },
];

const kpis = [
  { icon: Activity, label: "Uptime SLA", value: "99.9%" },
  { icon: Zap, label: "Avg reply", value: "2 hrs" },
  { icon: Target, label: "On-budget", value: "94%" },
  { icon: Heart, label: "Referral rate", value: "62%" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════ */
export default function Stats() {
  return (
    <section id="stats" className="py-24 lg:py-28 bg-[var(--color-bg)] relative overflow-hidden">
      {/* ═══ BACKGROUND — soft brand washes ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.08) 0%, rgba(200,30,30,0.03) 36%, rgba(200,30,30,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(122,14,14,0.06) 0%, rgba(122,14,14,0.02) 38%, rgba(122,14,14,0) 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ═══ SECTION HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
            <TrendingUp className="w-3 h-3" /> Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4">
            Results that{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              Build Trust
            </span>
          </h2>
          <p className="text-base md:text-lg text-ink-soft font-light max-w-xl mx-auto">
            A snapshot of the delivery, retention, and experience behind every project we take on.
          </p>
        </motion.div>

        {/* ═══ MAIN 4-STAT GRID ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const dir = i % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={stat.label}
                variants={slideVariants(dir, 44)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: i * 0.12, ease }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_24px_60px_-24px_rgba(122,14,14,0.25)] transition-shadow duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* gradient hairline on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* muted icon above the number */}
                <div className="w-11 h-11 rounded-full bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center mb-3 group-hover:bg-brand-red-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-red-600" />
                </div>

                <div className="text-4xl lg:text-5xl font-black leading-none tracking-tight mb-2">
                  <span className="bg-clip-text text-transparent brand-gradient">
                    <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                  </span>
                </div>

                <p className="font-bold text-ink text-sm mb-0.5">{stat.label}</p>
                <p className="text-ink-soft/60 text-xs font-light leading-snug">{stat.sub}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ GROWTH CHART + RINGS ═══ */}
        <div className="grid lg:grid-cols-5 gap-5 mb-8">
          {/* Growth bar chart — slides in from the left */}
          <motion.div
            variants={slideVariants("left", 60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-3 relative p-7 rounded-2xl bg-white border border-black/10 shadow-sm"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Activity className="w-4 h-4 text-brand-red-500" />
                  <h3 className="text-lg md:text-xl font-bold font-display text-ink">Growth over time</h3>
                </div>
                <p className="text-xs text-ink-soft/60 font-light">Projects shipped per year</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-black text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> +212%
              </span>
            </div>

            <div className="relative">
              {/* value labels — one source for each column */}
              <div className="flex items-end justify-between gap-3 mb-1.5">
                {growthYears.map((g) => (
                  <span key={g.year} className="flex-1 text-center text-xs font-black text-ink-soft/60 tabular-nums">
                    {g.projects}
                  </span>
                ))}
              </div>

              {/* bar band + trend overlay */}
              <div className="relative h-36">
                <div className="absolute inset-0 flex items-end gap-3">
                  {growthYears.map((g, i) => (
                    <div key={g.year} className="relative flex-1 h-full flex items-end">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
                        style={{ transformOrigin: "bottom", height: `${g.value}%` }}
                        className={`w-full rounded-t-lg ${
                          i === growthYears.length - 1
                            ? "brand-gradient shadow-lg shadow-brand-red-500/30"
                            : "bg-brand-red-500/20"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* trend line + soft area fill connecting the points */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(200,30,30,0.16)" />
                      <stop offset="100%" stopColor="rgba(200,30,30,0)" />
                    </linearGradient>
                  </defs>
                  <path d={trendLine} fill="none" stroke="#c81e1e" strokeWidth="1.1"
                    strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  <path d={trendArea} fill="url(#trendFill)" />
                </svg>
              </div>

              {/* x-axis — the only place years appear */}
              <div className="flex items-start justify-between gap-3 mt-2">
                {growthYears.map((g, i) => (
                  <span key={g.year} className={`flex-1 text-center text-xs font-bold tabular-nums ${
                    i === growthYears.length - 1 ? "text-ink" : "text-ink-soft/60"
                  }`}>
                    {g.year}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-black/10 flex items-center justify-center text-xs font-semibold text-ink-soft/60">
              Steady 5-year climb
            </div>
          </motion.div>

          {/* Satisfaction rings — slides in from the right */}
          <motion.div
            variants={slideVariants("right", 60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="lg:col-span-2 relative p-7 rounded-2xl bg-white border border-black/10 shadow-sm"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <h3 className="text-lg md:text-xl font-bold font-display text-ink">Client satisfaction</h3>
              </div>
              <p className="text-xs text-ink-soft/60 font-light">Verified across 150+ reviews</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {rings.map((r) => (
                <div key={r.label} className="flex justify-center">
                  <Ring pct={r.pct} color={r.color} label={r.label} value={r.value} />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-black/10 flex items-center justify-center gap-2 text-xs text-ink-soft font-medium">
              <BadgeCheck className="w-3.5 h-3.5 text-brand-red-500" />
              Fiverr · Upwork · Direct clients
            </div>
          </motion.div>
        </div>

        {/* ═══ TRUSTED-BY AVATAR STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="p-6 sm:p-7 rounded-2xl bg-white border border-black/10 shadow-sm mb-8"
        >
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-brand-red-500" />
              <h3 className="text-lg md:text-xl font-bold font-display text-ink">Trusted by teams worldwide</h3>
            </div>
            <span className="text-xs font-bold text-ink-soft/60">
              150+ clients · 30+ countries
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {avatars.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.75, ease }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-3 rounded-2xl border border-black/10 hover:border-brand-red-500/30 hover:bg-[var(--color-bg-soft)] transition-colors"
              >
                <Image
                  src={a.img}
                  alt={a.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="object-cover shrink-0 rounded-full border-2 border-white shadow-md w-10 h-10"
                />
                <div className="min-w-0">
                  <p className="text-xs font-black text-ink leading-tight truncate">{a.name}</p>
                  <p className="text-xs font-medium text-ink-soft/60 truncate">{a.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══ BOTTOM KPI CHIPS ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (kpis.indexOf(k)) * 0.08, duration: 0.75, ease }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/10 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brand-red-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">
                    {k.label}
                  </p>
                  <p className="text-base font-black text-ink leading-tight tabular-nums">
                    {k.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}