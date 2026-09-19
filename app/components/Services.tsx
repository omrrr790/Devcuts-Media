"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal, Code2, LayoutTemplate, Layers, Database, Sparkles, ShieldCheck, Rocket,
  ArrowRight, ArrowUpRight, CheckCircle2, Clock, Users, Zap, TrendingUp,
  Award, Activity, BadgeCheck, Target, Star, Cpu,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    icon: Code2,
    tag: "Web Dev",
    title: "MERN Stack Development",
    desc: "High-performance, scalable web applications powered by MongoDB, Express, React, and Node.js — built for modern businesses that demand speed and reliability.",
    features: ["REST & GraphQL APIs", "Real-time with WebSockets", "Auth & role management"],
    gradient: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    accent: "text-indigo-600",
    chip: "bg-indigo-100 text-indigo-700",
    img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Projects", value: "84" },
    timeline: "6–12 wks",
  },
  {
    icon: Terminal,
    tag: "Frontend",
    title: "Next.js & TypeScript",
    desc: "Enterprise-grade architectures leveraging Next.js App Router, server components, and edge functions — delivering blazing-fast SEO-optimized experiences.",
    features: ["Server-side rendering", "Edge deployment", "Core Web Vitals A+"],
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    accent: "text-violet-600",
    chip: "bg-violet-100 text-violet-700",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Sites", value: "62" },
    timeline: "3–8 wks",
  },
  {
    icon: LayoutTemplate,
    tag: "Design",
    title: "Premium UI/UX Design",
    desc: "Immersive, conversion-focused interfaces with sophisticated micro-interactions, glassmorphism effects, and pixel-perfect responsiveness across all devices.",
    features: ["Figma to code", "Motion design", "A/B tested layouts"],
    gradient: "from-sky-500 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    accent: "text-sky-600",
    chip: "bg-sky-100 text-sky-700",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Designs", value: "120+" },
    timeline: "2–5 wks",
  },
  {
    icon: Database,
    tag: "AI",
    title: "AI & ML Integration",
    desc: "Intelligent automation, predictive analytics, and smart agent pipelines powered by OpenAI, LangChain, and custom ML models tuned to your business domain.",
    features: ["LLM fine-tuning", "RAG pipelines", "Predictive dashboards"],
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    accent: "text-emerald-600",
    chip: "bg-emerald-100 text-emerald-700",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Pipelines", value: "28" },
    timeline: "4–10 wks",
  },
  {
    icon: Layers,
    tag: "Enterprise",
    title: "Custom ERP & CRM",
    desc: "Tailored enterprise resource planning and customer relationship tools that replace off-the-shelf software — automating workflows and centralising your operations.",
    features: ["Multi-role dashboards", "Workflow automation", "Data migration"],
    gradient: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    accent: "text-orange-600",
    chip: "bg-orange-100 text-orange-700",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Systems", value: "34" },
    timeline: "8–16 wks",
  },
  {
    icon: Rocket,
    tag: "Growth",
    title: "SEO & Digital Marketing",
    desc: "Data-driven SEO strategies, content campaigns, and performance marketing that compound month over month — turning search intent into qualified revenue.",
    features: ["Technical SEO audits", "Content strategy", "Rank tracking"],
    gradient: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    accent: "text-rose-600",
    chip: "bg-rose-100 text-rose-700",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Campaigns", value: "46" },
    timeline: "Ongoing",
  },
  {
    icon: ShieldCheck,
    tag: "Infrastructure",
    title: "Cloud & DevOps",
    desc: "Robust cloud architecture on AWS, GCP, and Vercel with CI/CD pipelines, container orchestration, and 99.9% uptime SLA guarantees.",
    features: ["Docker & Kubernetes", "CI/CD pipelines", "Monitoring & alerts"],
    gradient: "from-blue-500 to-indigo-500",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    accent: "text-blue-600",
    chip: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Deploys", value: "1.2k" },
    timeline: "Ongoing",
  },
  {
    icon: Sparkles,
    tag: "Mobile",
    title: "Flutter App Development",
    desc: "Cross-platform mobile applications for iOS and Android with native-level performance, beautiful animations, and deep platform integrations.",
    features: ["Single codebase", "Native performance", "App Store publishing"],
    gradient: "from-teal-500 to-cyan-600",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
    accent: "text-teal-600",
    chip: "bg-teal-100 text-teal-700",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=70",
    metric: { label: "Apps", value: "22" },
    timeline: "6–14 wks",
  },
];

/* Filter categories */
const categories = ["All", "Web", "AI / ML", "Mobile", "Design", "Enterprise", "Growth"];

/* Top "why us" strip */
const whyUs = [
  { icon: Clock,       value: "24hr",   label: "Response time",      accent: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { icon: Users,       value: "40+",    label: "In-house engineers", accent: "text-violet-600 bg-violet-50 border-violet-100" },
  { icon: ShieldCheck, value: "100%",   label: "Code ownership",     accent: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Award,       value: "Top 1%", label: "Rated on Upwork",    accent: "text-amber-600 bg-amber-50 border-amber-100" },
];

/* Delivery stats bottom row */
const deliveryStats = [
  { icon: Zap,        value: "98%",     label: "On-time delivery",   sub: "Last 12 months" },
  { icon: TrendingUp, value: "94%",     label: "On-budget projects", sub: "No surprise invoices" },
  { icon: Star,       value: "4.9/5",   label: "Average rating",     sub: "Across 150+ reviews" },
  { icon: Activity,   value: "30 days", label: "Free post-launch",   sub: "Bug-fix window included" },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function Services() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <section
      id="services"
      className="py-28 bg-white relative overflow-hidden"
    >
      <style>{`
        @keyframes dv-svc-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(22px, -26px, 0) scale(1.05); }
        }
        .dv-svc-drift-a { animation: dv-svc-drift-a 18s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .dv-svc-drift-a { animation: none !important; }
        }
      `}</style>

      {/* ═══ BACKGROUND — radial gradients, no blur filter ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-svc-drift-a absolute -top-40 -right-40 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.26) 0%, rgba(129,140,248,0.10) 34%, rgba(129,140,248,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(196,181,253,0.22) 0%, rgba(196,181,253,0.08) 38%, rgba(196,181,253,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ HEADER ═══ */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-5"
            >
              <Sparkles className="w-3 h-3" /> Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] mb-5"
            >
              Premium Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Modern Businesses
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="text-gray-500 text-lg font-light leading-relaxed"
            >
              Eight specialisations. One dedicated team. Everything you need to build, launch, and scale your digital presence.
            </motion.p>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-indigo-200/70"
          >
            Get Custom Quote <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* ═══ WHY-US STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {whyUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-indigo-100/80 shadow-sm"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${w.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-black text-slate-900 leading-none tabular-nums">
                    {w.value}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 truncate">
                    {w.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ CATEGORY FILTER BAR ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {categories.map((cat) => {
            const active = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`relative px-4 py-2 rounded-full text-[12.5px] font-bold transition-colors duration-300 ${
                  active
                    ? "text-white"
                    : "text-slate-600 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="svc-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
          <span className="ml-auto text-[11.5px] font-semibold text-slate-400">
            {services.length} services
          </span>
        </motion.div>

        {/* ═══ SERVICES GRID ═══ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.55, ease }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl bg-gradient-to-br ${service.bg} border ${service.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-shadow duration-300 flex flex-col overflow-hidden`}
              >
                {/* ═ IMAGE HEADER ═ */}
                <div className="relative h-32 overflow-hidden bg-slate-200">
                  <img
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={200}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* tinted gradient (opacity, not mix-blend) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                  {/* tag chip */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-[10px] font-black uppercase tracking-widest text-slate-700 shadow-sm">
                    {service.tag}
                  </span>

                  {/* metric pill (top-right) */}
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 text-white">
                    <BadgeCheck className="w-3 h-3 text-emerald-300" />
                    <span className="text-[10px] font-black tabular-nums">
                      {service.metric.value} {service.metric.label}
                    </span>
                  </div>

                  {/* icon (bottom-right, in white circle) */}
                  <div className="absolute -bottom-6 right-5 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center ring-1 ring-slate-100">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* body */}
                <div className="p-6 pt-8 flex flex-col flex-1">
                  <h3 className="text-[16.5px] font-black text-gray-900 mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-light mb-5 flex-1">
                    {service.desc}
                  </p>

                  {/* features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[12px] text-gray-600 font-medium">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${service.accent}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* footer: timeline + link */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/70">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </span>
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-1 text-[12.5px] font-bold ${service.accent} group-hover:gap-2 transition-all`}
                    >
                      Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* bottom accent bar — animated via transform only */}
                <div className={`absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r ${service.gradient} group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>

        {/* ═══ DELIVERY STATS STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-indigo-100/70 rounded-3xl overflow-hidden border border-indigo-100"
        >
          {deliveryStats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group bg-white px-6 py-7 text-center hover:bg-indigo-50/40 transition-colors"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Icon className="w-4 h-4 text-indigo-600" />
                  </div>
                </div>
                <p className="text-[22px] sm:text-[26px] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight tabular-nums leading-none">
                  {s.value}
                </p>
                <p className="text-[12.5px] font-bold text-slate-700 mt-2">{s.label}</p>
                <p className="text-[11px] text-slate-400 font-light mt-0.5">{s.sub}</p>
              </div>
            );
          })}
        </motion.div>

        {/* ═══ BOTTOM CTA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 sm:p-10"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 85% 30%, rgba(129,140,248,0.22) 0%, rgba(129,140,248,0.06) 34%, rgba(129,140,248,0) 68%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-[11px] font-black uppercase tracking-widest text-indigo-600 mb-4">
                <Cpu className="w-3 h-3" /> Not sure which fits?
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Tell us the outcome — we'll pick the stack.
              </h3>
              <p className="text-[14px] text-slate-500 font-light leading-relaxed">
                A free 20-minute scoping call gives you a written plan, a fixed price and a
                milestone schedule — no obligation to proceed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-[13.5px] shadow-lg shadow-indigo-200/70"
              >
                <Target className="w-4 h-4" />
                Book scoping call
                <ArrowRight className="w-4 h-4" />
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