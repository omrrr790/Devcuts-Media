"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Layout, Users, Clock, ShieldCheck, Code2, Globe, Award, TrendingUp,
  ArrowUpRight, Activity, Target, Zap, Star, BadgeCheck, Rocket, Heart,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ATOMS
   ═══════════════════════════════════════════════════════════════ */

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

/* Tiny static sparkline — painted once, no animation */
function Sparkline({ values, stroke }: { values: number[]; stroke: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 100;
  const h = 30;
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * (h - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8" preserveAspectRatio="none">
      <polyline
        points={areaPoints}
        fill={stroke}
        opacity="0.10"
        stroke="none"
      />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Circular progress ring — animates strokeDashoffset once on entry (small SVG) */
function Ring({
  pct,
  color,
  label,
  value,
}: {
  pct: number;
  color: string;
  label: string;
  value: string;
}) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[88px] h-[88px]">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#e2e8f0" strokeWidth="7" />
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
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[17px] font-black text-slate-900 tabular-nums">{value}</span>
        </div>
      </div>
      <p className="text-[11.5px] font-bold text-slate-500 text-center leading-tight max-w-[100px]">
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
    color: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    spark: [42, 58, 74, 96, 128, 168, 210, 260],
    sparkColor: "#6366f1",
    trend: "+24%",
    trendLabel: "YoY",
  },
  {
    num: 150,
    suffix: "+",
    label: "Happy Clients",
    sub: "Trusted by startups & enterprises",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    spark: [28, 42, 58, 76, 96, 118, 134, 150],
    sparkColor: "#10b981",
    trend: "+18%",
    trendLabel: "YoY",
  },
  {
    num: 10,
    suffix: "+",
    label: "Years Experience",
    sub: "Hands-on software leadership",
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    spark: [2, 3, 5, 6, 7, 8, 9, 10],
    sparkColor: "#f59e0b",
    trend: "100%",
    trendLabel: "on-time",
  },
  {
    num: 98,
    suffix: "%",
    label: "Client Retention",
    sub: "Clients keep coming back",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    spark: [86, 88, 91, 92, 94, 96, 97, 98],
    sparkColor: "#f43f5e",
    trend: "+9 pts",
    trendLabel: "3 yrs",
  },
];

const accolades = [
  { icon: Code2,      title: "50,000+", desc: "Lines of code shipped monthly" },
  { icon: Globe,      title: "30+",     desc: "Countries clients operate in" },
  { icon: Award,      title: "Top 1%",  desc: "Rated on Fiverr & Upwork" },
  { icon: TrendingUp, title: "3× ROI",  desc: "Average client return" },
];

/* Growth over time — bar chart data */
const growthYears = [
  { year: "2020", value: 32,  projects: 18 },
  { year: "2021", value: 48,  projects: 28 },
  { year: "2022", value: 68,  projects: 44 },
  { year: "2023", value: 86,  projects: 62 },
  { year: "2024", value: 100, projects: 78 },
];

/* Client satisfaction rings */
const rings = [
  { pct: 98, color: "#6366f1", label: "Client satisfaction", value: "98%" },
  { pct: 96, color: "#10b981", label: "On-time delivery",    value: "96%" },
  { pct: 99, color: "#f59e0b", label: "Would recommend",     value: "99%" },
];

/* Trusted avatars strip */
const avatars = [
  {
    name: "Elena W.",
    role: "Northwind",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
  {
    name: "Hassan M.",
    role: "Logistics Co.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
  {
    name: "Sarah J.",
    role: "StyleHub",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
  {
    name: "Shafqat S.",
    role: "Alniaz Petro",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
  {
    name: "Hafiz A.",
    role: "Sports World",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
  {
    name: "Ali U.",
    role: "Sadiq Auto",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
  },
];

/* Bottom mini KPIs */
const kpis = [
  { icon: Activity, label: "Uptime SLA",    value: "99.9%", accent: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Zap,      label: "Avg reply",     value: "2 hrs", accent: "text-amber-600 bg-amber-50 border-amber-100" },
  { icon: Target,   label: "On-budget",     value: "94%",   accent: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { icon: Heart,    label: "Referral rate", value: "62%",   accent: "text-rose-600 bg-rose-50 border-rose-100" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════ */
export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-violet-50/30 relative overflow-hidden"
    >
      <style>{`
        @keyframes dv-stats-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(20px, -24px, 0) scale(1.05); }
        }
        .dv-stats-drift { animation: dv-stats-drift 18s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .dv-stats-drift { animation: none !important; }
        }
      `}</style>

      {/* ═══ BACKGROUND — radial gradients only, no filter:blur ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-stats-drift absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.28) 0%, rgba(129,140,248,0.10) 34%, rgba(129,140,248,0) 70%)",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(196,181,253,0.22) 0%, rgba(196,181,253,0.08) 38%, rgba(196,181,253,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ SECTION HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5">
            <TrendingUp className="w-3 h-3" /> Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Results that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Build Trust
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto">
            A snapshot of the delivery, retention, and experience behind every project we take on.
          </p>
        </motion.div>

        {/* ═══ MAIN 4-STAT GRID — with sparklines + trends ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative p-6 rounded-3xl bg-gradient-to-br ${stat.bg} border ${stat.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-shadow duration-300`}
              >
                {/* icon + trend */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                    {stat.trend}
                  </span>
                </div>

                {/* big number */}
                <div className="text-4xl lg:text-[44px] font-black text-gray-900 leading-none mb-2 tracking-tight">
                  <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                </div>

                {/* label + sub */}
                <p className="font-bold text-gray-800 text-[14px] mb-0.5">{stat.label}</p>
                <p className="text-gray-400 text-[11.5px] font-light leading-snug mb-4">{stat.sub}</p>

                {/* sparkline */}
                <div className="pt-3 border-t border-slate-200/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      8-yr trend
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">{stat.trendLabel}</span>
                  </div>
                  <Sparkline values={stat.spark} stroke={stat.sparkColor} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ GROWTH CHART + RINGS ═══ */}
        <div className="grid lg:grid-cols-5 gap-5 mb-10">

          {/* Growth bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 relative p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)]"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-[15px] font-black text-gray-900">Growth over time</h3>
                </div>
                <p className="text-[12.5px] text-gray-400 font-light">
                  Projects shipped per year
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> +212%
              </span>
            </div>

            {/* bar chart */}
            <div className="flex items-end justify-between gap-3 h-[180px] pb-2">
              {growthYears.map((g, i) => (
                <div key={g.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  {/* tooltip value */}
                  <span className="text-[10.5px] font-black text-slate-700 tabular-nums">
                    {g.projects}
                  </span>
                  {/* bar */}
                  <div className="relative w-full h-full flex items-end">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "bottom" }}
                      className={`w-full rounded-t-xl bg-gradient-to-t ${
                        i === growthYears.length - 1
                          ? "from-indigo-500 to-violet-500 shadow-lg shadow-indigo-300/50"
                          : "from-indigo-200 to-violet-200"
                      }`}
                    >
                      <div style={{ height: `${g.value}%` }} />
                    </motion.div>
                  </div>
                  <span className={`text-[10.5px] font-bold tabular-nums ${
                    i === growthYears.length - 1 ? "text-indigo-600" : "text-slate-400"
                  }`}>
                    {g.year}
                  </span>
                </div>
              ))}
            </div>

            {/* axis hint */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
              <span>2020</span>
              <span className="text-indigo-600">Steady 5-year climb</span>
              <span>2024</span>
            </div>
          </motion.div>

          {/* Satisfaction rings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)]"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <h3 className="text-[15px] font-black text-gray-900">Client satisfaction</h3>
              </div>
              <p className="text-[12.5px] text-gray-400 font-light">
                Verified across 150+ reviews
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {rings.map((r, i) => (
                <div key={i} className="flex justify-center">
                  <Ring pct={r.pct} color={r.color} label={r.label} value={r.value} />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-[11.5px] text-slate-500 font-medium">
              <BadgeCheck className="w-3.5 h-3.5 text-indigo-500" />
              Fiverr · Upwork · Direct clients
            </div>
          </motion.div>
        </div>

        {/* ═══ ACCOLADES STRIP ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {accolades.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-indigo-100/80 shadow-sm hover:shadow-lg hover:shadow-indigo-100/60 transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                  <Icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-[17px] leading-none mb-1 tabular-nums">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-[11px] font-light leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ TRUSTED-BY AVATAR STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)] mb-8"
        >
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-indigo-600" />
              <h3 className="text-[15px] font-black text-gray-900">Trusted by teams worldwide</h3>
            </div>
            <span className="text-[11.5px] font-bold text-slate-500">
              150+ clients · 30+ countries
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {avatars.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors"
              >
                <img
                  src={a.img}
                  alt={a.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[12px] font-black text-slate-900 leading-tight truncate">
                    {a.name}
                  </p>
                  <p className="text-[10.5px] font-medium text-slate-400 truncate">
                    {a.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══ BOTTOM KPI CHIPS ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {kpis.map((k, i) => {
            const Icon = k.icon;
            return (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-indigo-100/80 shadow-sm"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${k.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                    {k.label}
                  </p>
                  <p className="text-[15px] font-black text-slate-900 leading-tight tabular-nums">
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