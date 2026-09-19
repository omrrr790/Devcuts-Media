"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search, Map, Cpu, TestTube2, Rocket, HeartHandshake,
  Clock, CheckCircle2, ChevronRight, ArrowRight, ArrowUpRight,
  ShieldCheck, Zap, Users, Activity, Target, Star, FileText,
  BadgeCheck, Sparkles, TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Requirement Gathering",
    desc: "We begin with an in-depth discovery session to deeply understand your business goals, target audience, technical stack, and project constraints — aligning vision before writing a single line of code.",
    deliverables: ["Project brief document", "Scope of work", "Timeline estimate"],
    duration: "1–2 days",
    color: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    chip: "bg-indigo-100 text-indigo-700",
    accent: "text-indigo-600",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Free call", value: "20 min" },
  },
  {
    num: "02",
    icon: Map,
    title: "Planning & Architecture",
    desc: "We define milestones, map system architecture, draft UI/UX wireframes, and establish your tech stack. Every decision is documented and shared with you for transparent collaboration.",
    deliverables: ["Architecture diagrams", "Wireframes & flows", "Sprint roadmap"],
    duration: "2–3 days",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    chip: "bg-violet-100 text-violet-700",
    accent: "text-violet-600",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Iterations", value: "3×" },
  },
  {
    num: "03",
    icon: Cpu,
    title: "Design & Development",
    desc: "Our team builds iteratively through agile sprints — pixel-perfect UI design, robust backend architecture, and seamless API integrations. You receive live demos at each milestone.",
    deliverables: ["Responsive UI/UX", "Backend APIs", "Database schema"],
    duration: "1–8 weeks",
    color: "from-sky-500 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    chip: "bg-sky-100 text-sky-700",
    accent: "text-sky-600",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Sprint", value: "2 wks" },
  },
  {
    num: "04",
    icon: TestTube2,
    title: "Testing & QA",
    desc: "Rigorous quality assurance across functional, performance, security, and cross-browser testing. We don't ship until every edge case is handled and your Core Web Vitals score is green.",
    deliverables: ["QA test report", "Performance audit", "Security scan"],
    duration: "3–5 days",
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    chip: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-600",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Lighthouse", value: "95+" },
  },
  {
    num: "05",
    icon: Rocket,
    title: "Deployment & Launch",
    desc: "We manage the full deployment pipeline — DNS, SSL, CDN, environment configs, and zero-downtime releases. Your product goes live on schedule with full monitoring in place.",
    deliverables: ["Live deployment", "Domain setup", "Monitoring alerts"],
    duration: "1–2 days",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    chip: "bg-amber-100 text-amber-700",
    accent: "text-amber-600",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Downtime", value: "Zero" },
  },
  {
    num: "06",
    icon: HeartHandshake,
    title: "Support & Growth",
    desc: "Post-launch is where long-term partnerships begin. We provide ongoing maintenance, feature iterations, performance tuning, and dedicated support to keep your product evolving.",
    deliverables: ["Monthly reports", "Priority bug fixes", "Feature roadmap"],
    duration: "Ongoing",
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    chip: "bg-rose-100 text-rose-700",
    accent: "text-rose-600",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Free support", value: "30 days" },
  },
];

/* At-a-glance strip */
const glance = [
  { icon: Clock,        value: "6–14 wks", label: "Typical timeline",   accent: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { icon: Activity,     value: "2-week",   label: "Sprint cadence",     accent: "text-violet-600 bg-violet-50 border-violet-100" },
  { icon: ShieldCheck,  value: "Fixed",    label: "Scope pricing",      accent: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Users,        value: "1 lead",   label: "Point of contact",   accent: "text-amber-600 bg-amber-50 border-amber-100" },
];

/* Guarantees strip */
const guarantees = [
  { icon: Target,     title: "Fixed-scope quotes",   desc: "Written price before we start" },
  { icon: Clock,      title: "On-time or 10% off",   desc: "Milestone dates we set ourselves" },
  { icon: FileText,   title: "Full IP transfer",     desc: "Code + assets + accounts are yours" },
  { icon: Star,       title: "30 days free support", desc: "Bug-fix window after launch" },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function Process() {
  return (
    <section
      id="process"
      className="py-28 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden"
    >
      <style>{`
        @keyframes dv-proc-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(20px, -22px, 0) scale(1.05); }
        }
        .dv-proc-drift { animation: dv-proc-drift 20s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .dv-proc-drift { animation: none !important; }
        }
      `}</style>

      {/* hairline separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      {/* ═══ BACKGROUND — radial gradients, no blur filter ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-proc-drift absolute -top-40 left-1/4 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.20) 0%, rgba(129,140,248,0.07) 36%, rgba(129,140,248,0) 72%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(196,181,253,0.18) 0%, rgba(196,181,253,0.06) 38%, rgba(196,181,253,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ HEADER ═══ */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5"
          >
            <Sparkles className="w-3 h-3" /> Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-5"
          >
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Work
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed"
          >
            A transparent, SDLC-driven process that delivers quality from day one — no surprises, no scope creep.
          </motion.p>
        </div>

        {/* ═══ AT-A-GLANCE STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16 max-w-4xl mx-auto"
        >
          {glance.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-indigo-100/80 shadow-sm"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${g.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-black text-slate-900 leading-none">
                    {g.value}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 truncate">
                    {g.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ PROGRESS LINE (desktop only, above cards) ═══ */}
        <div className="relative mb-10 hidden lg:block" aria-hidden>
          <div className="absolute top-1/2 left-[8%] right-[8%] h-[2px] -translate-y-1/2 bg-indigo-100 rounded-full" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease }}
            style={{ transformOrigin: "left" }}
            className="absolute top-1/2 left-[8%] right-[8%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 rounded-full"
          />
          {/* endpoint dots */}
          <div className="relative flex justify-between px-[8%]">
            {steps.map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-white border-2 border-indigo-400 shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* ═══ STEP CARDS ═══ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (i % 3) * 0.09, duration: 0.55, ease }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl bg-gradient-to-br ${step.bg} border ${step.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-shadow duration-300 flex flex-col overflow-hidden`}
              >
                {/* ═ IMAGE HEADER ═ */}
                <div className="relative h-36 overflow-hidden bg-slate-200">
                  <img
                    src={step.img}
                    alt={step.title}
                    width={400}
                    height={200}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* tinted gradient (opacity, not mix-blend) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* big number overlay */}
                  <span className="absolute top-3 left-4 text-[52px] font-black text-white/25 leading-none tracking-tighter select-none">
                    {step.num}
                  </span>

                  {/* duration chip */}
                  <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${step.chip} shadow-sm`}>
                    <Clock className="w-2.5 h-2.5" />
                    {step.duration}
                  </span>

                  {/* metric pill (top-right) */}
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 text-white">
                    <BadgeCheck className="w-3 h-3 text-emerald-300" />
                    <span className="text-[10px] font-black tabular-nums">
                      {step.metric.value} {step.metric.label}
                    </span>
                  </div>

                  {/* icon badge (bottom-right, floating) */}
                  <div className="absolute -bottom-6 right-5 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center ring-1 ring-slate-100">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* body */}
                <div className="p-6 pt-8 flex flex-col flex-1">
                  <h3 className="text-[17px] font-black text-gray-900 mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-light mb-5 flex-1">
                    {step.desc}
                  </p>

                  {/* deliverables */}
                  <div className="space-y-2 mb-5">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Deliverables
                    </p>
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-[12px] text-gray-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* footer link */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-[12.5px] font-bold ${step.accent} group-hover:gap-2.5 transition-all`}
                  >
                    Get started <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* bottom accent bar — transform only */}
                <div className={`absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r ${step.color} group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>

        {/* ═══ GUARANTEES PANEL ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)] p-7 sm:p-9 relative overflow-hidden"
        >
          {/* soft accent inside panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 90% 10%, rgba(129,140,248,0.14) 0%, rgba(129,140,248,0.04) 36%, rgba(129,140,248,0) 72%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mb-7">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight mb-1.5">
                The on-time delivery guarantee
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-light">
                If we miss a milestone date that <em>we</em> set, you get 10% off the remaining
                invoice — no arguments, no fine print. We've paid it twice in eleven years, and
                both times we learned something.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white text-[13px] font-bold hover:bg-slate-800 transition-colors"
            >
              Book a scoping call
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* guarantees mini grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-black text-slate-900 leading-tight">
                      {g.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-light mt-1 leading-snug">
                      {g.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ═══ BOTTOM CTA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-14 relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 sm:p-10"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 20% 40%, rgba(129,140,248,0.20) 0%, rgba(129,140,248,0.05) 36%, rgba(129,140,248,0) 72%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-[11px] font-black uppercase tracking-widest text-indigo-600 mb-4">
                <Zap className="w-3 h-3" /> Ready when you are
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Let's map out step 01 together.
              </h3>
              <p className="text-[14px] text-slate-500 font-light leading-relaxed">
                A free 20-minute discovery call. You leave with a scope, a fixed price, and a
                milestone schedule — whether or not you work with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-[13.5px] shadow-lg shadow-indigo-200/70"
              >
                <Rocket className="w-4 h-4" />
                Book Free Discovery Call
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border-2 border-indigo-100 text-slate-800 font-bold text-[13.5px] hover:border-indigo-300 hover:bg-indigo-50/60 transition-colors"
              >
                See case studies
                <ArrowUpRight className="w-4 h-4 text-indigo-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}