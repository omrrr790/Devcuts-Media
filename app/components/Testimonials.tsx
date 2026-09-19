"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star, Quote, BadgeCheck, MessageCircle, ArrowRight, ArrowUpRight,
  TrendingUp, Users, Globe, Award, Zap, Target, Activity, Heart,
  Play, ChevronRight, ThumbsUp, Clock,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    name: "Emma Wilson",
    role: "Product Manager",
    company: "ScaleFlow",
    country: "🇺🇸 United States",
    project: "AI Integration",
    tag: "AI Integration",
    tagColor: "bg-violet-100 text-violet-700",
    initial: "EW",
    gradient: "from-violet-400 to-indigo-500",
    accent: "text-violet-600",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "The AI integration they built into our platform has completely automated our customer support. Response times went from hours to seconds. Truly impressive execution — the team knew exactly what they were doing.",
    rating: 5,
    metric: { label: "Response time", value: "−98%" },
    duration: "9 weeks",
  },
  {
    name: "Hassan Malik",
    role: "Director of Operations",
    company: "Logistics Co.",
    country: "🇦🇪 UAE",
    project: "Full Stack Platform",
    tag: "Full Stack",
    tagColor: "bg-indigo-100 text-indigo-700",
    initial: "HM",
    gradient: "from-indigo-400 to-sky-500",
    accent: "text-indigo-600",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "From design to deployment, the team was professional, responsive, and deeply invested in our success. Our new platform handles 10x the traffic with zero issues. We couldn't be happier with the results.",
    rating: 5,
    metric: { label: "Traffic handled", value: "10×" },
    duration: "12 weeks",
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "StyleHub",
    country: "🇬🇧 United Kingdom",
    project: "Next.js Storefront",
    tag: "Next.js",
    tagColor: "bg-sky-100 text-sky-700",
    initial: "SJ",
    gradient: "from-sky-400 to-cyan-500",
    accent: "text-sky-600",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "Their attention to design details — the typography, micro-interactions, overall aesthetic — is absolutely incredible. Conversion rates are up 40% since launching the new site. DevCuts delivered beyond expectations.",
    rating: 5,
    metric: { label: "Conversion", value: "+40%" },
    duration: "6 weeks",
  },
  {
    name: "Ch Shafqat Shafeeq",
    role: "CEO",
    company: "Alniaz Petroleums",
    country: "🇵🇰 Pakistan",
    project: "Live pricing web app",
    tag: "Web App",
    tagColor: "bg-emerald-100 text-emerald-700",
    initial: "CS",
    gradient: "from-emerald-400 to-teal-500",
    accent: "text-emerald-600",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "They built an outstanding website with live fuel rates and a smart pricing calculator. The team is highly professional and delivered on time. We've seen a 3x increase in online inquiries since launch. Highly recommended.",
    rating: 5,
    metric: { label: "Online inquiries", value: "3×" },
    duration: "4 weeks",
  },
  {
    name: "Hafiz Asif Doger",
    role: "CEO",
    company: "Sports World",
    country: "🇵🇰 Pakistan",
    project: "E-Commerce + ERP",
    tag: "E-Commerce",
    tagColor: "bg-amber-100 text-amber-700",
    initial: "HA",
    gradient: "from-amber-400 to-orange-500",
    accent: "text-amber-600",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "Complete e-commerce and inventory management system built perfectly to our requirements. Our store operations are now fully digital and our team saved 20+ hours per week. Excellent work by the DevCuts team.",
    rating: 5,
    metric: { label: "Team hours saved", value: "20+/wk" },
    duration: "10 weeks",
  },
  {
    name: "Ali Usman",
    role: "CTO",
    company: "Sadiq Auto Traders",
    country: "🇵🇰 Pakistan",
    project: "SEO-focused site",
    tag: "Next.js",
    tagColor: "bg-rose-100 text-rose-700",
    initial: "AU",
    gradient: "from-rose-400 to-pink-500",
    accent: "text-rose-600",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=200&h=200&q=75",
    text: "Our excavator and spare parts business is now easily reachable online. The website is fast, beautiful, and SEO-optimised. Inquiries have increased tremendously since launch — worth every penny.",
    rating: 5,
    metric: { label: "Organic inquiries", value: "+180%" },
    duration: "5 weeks",
  },
];

/* Rating breakdown */
const ratingBreakdown = [
  { stars: 5, count: 138, pct: 92 },
  { stars: 4, count: 9,   pct: 6 },
  { stars: 3, count: 2,   pct: 1.3 },
  { stars: 2, count: 1,   pct: 0.5 },
  { stars: 1, count: 0,   pct: 0 },
];

/* Aggregate trust strip */
const trustPoints = [
  { icon: Users,      value: "150+",   label: "Verified clients",      accent: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { icon: Globe,      value: "30+",    label: "Countries served",      accent: "text-violet-600 bg-violet-50 border-violet-100" },
  { icon: TrendingUp, value: "3×",     label: "Avg client ROI",        accent: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Heart,      value: "98%",    label: "Retention rate",        accent: "text-rose-600 bg-rose-50 border-rose-100" },
];

/* Where clients are — flag chips */
const regions = [
  { flag: "🇺🇸", name: "United States", count: 42 },
  { flag: "🇬🇧", name: "United Kingdom", count: 28 },
  { flag: "🇦🇪", name: "UAE",            count: 19 },
  { flag: "🇵🇰", name: "Pakistan",       count: 34 },
  { flag: "🇦🇺", name: "Australia",      count: 12 },
  { flag: "🇩🇪", name: "Germany",        count: 15 },
];

/* Featured spotlight (largest review) */
const featured = testimonials[0];

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIAL CARD
   ═══════════════════════════════════════════════════════════════ */
function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-3xl bg-white border border-indigo-100/80 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60 transition-shadow duration-500 flex flex-col overflow-hidden"
    >
      {/* header row: quote icon + metric pill */}
      <div className="flex items-start justify-between mb-5">
        <Quote className="w-7 h-7 text-indigo-100 fill-indigo-100 shrink-0" />
        <span className={`inline-flex items-center gap-1 text-[10.5px] font-black px-2.5 py-1 rounded-full bg-gradient-to-br ${t.gradient} text-white shadow-sm`}>
          <TrendingUp className="w-3 h-3" />
          {t.metric.value}
        </span>
      </div>

      {/* stars + tag row */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${t.tagColor}`}>
          {t.tag}
        </span>
      </div>

      {/* review text */}
      <p className="text-gray-600 text-[13.5px] leading-relaxed font-light flex-1 mb-6">
        "{t.text}"
      </p>

      {/* metric strip — data-focused */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="rounded-xl bg-slate-50 border border-slate-100 p-2.5">
          <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider">
            {t.metric.label}
          </p>
          <p className={`text-[15px] font-black tabular-nums mt-0.5 ${t.accent}`}>
            {t.metric.value}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-100 p-2.5">
          <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            Duration
          </p>
          <p className="text-[15px] font-black text-slate-900 tabular-nums mt-0.5">
            {t.duration}
          </p>
        </div>
      </div>

      {/* author */}
      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <img
          src={t.img}
          alt={t.name}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="font-black text-gray-900 text-[13px] truncate">{t.name}</h4>
            <BadgeCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          </div>
          <p className="text-[11.5px] text-indigo-600 font-semibold truncate">
            {t.role}, {t.company}
          </p>
          <p className="text-[10.5px] text-slate-400 mt-0.5 truncate">
            {t.country} · {t.project}
          </p>
        </div>
      </div>

      {/* bottom accent (transform-only) */}
      <div className={`absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r ${t.gradient} group-hover:scale-x-100 transition-transform duration-500`} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION
   ═══════════════════════════════════════════════════════════════ */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-white relative overflow-hidden"
    >
      <style>{`
        @keyframes dv-test-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(22px, -24px, 0) scale(1.05); }
        }
        .dv-test-drift { animation: dv-test-drift 20s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .dv-test-drift { animation: none !important; }
        }
      `}</style>

      {/* ═══ BACKGROUND — radial gradients only ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-test-drift absolute -top-40 -right-40 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.24) 0%, rgba(129,140,248,0.09) 34%, rgba(129,140,248,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(196,181,253,0.20) 0%, rgba(196,181,253,0.07) 38%, rgba(196,181,253,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ HEADER ═══ */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5"
          >
            <MessageCircle className="w-3 h-3" /> Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-5"
          >
            Don't Take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Our Word
            </span>{" "}
            For It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-gray-500 text-lg font-light max-w-xl mx-auto"
          >
            Real results from real businesses who trusted us with their digital growth.
          </motion.p>
        </div>

        {/* ═══ RATING BREAKDOWN + AGGREGATE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="grid lg:grid-cols-3 gap-5 mb-12"
        >
          {/* Aggregate score */}
          <div className="p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)] flex flex-col justify-center">
            <div className="flex items-end gap-3 mb-3">
              <p className="text-[64px] font-black text-gray-900 leading-none tracking-tighter tabular-nums">
                4.9
              </p>
              <div className="pb-2">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-500">out of 5.0</p>
              </div>
            </div>
            <p className="text-[13px] font-bold text-slate-700">
              150+ verified reviews
            </p>
            <p className="text-[11.5px] text-slate-400 mt-0.5">
              Fiverr · Upwork · Direct clients
            </p>
          </div>

          {/* Rating breakdown */}
          <div className="lg:col-span-2 p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)]">
            <div className="flex items-center gap-2 mb-5">
              <Activity className="w-4 h-4 text-indigo-600" />
              <h3 className="text-[14px] font-black text-slate-900">Rating breakdown</h3>
            </div>
            <div className="space-y-2.5">
              {ratingBreakdown.map((r, i) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="w-12 text-[11.5px] font-bold text-slate-500 flex items-center gap-1 shrink-0">
                    {r.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="relative flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: r.pct / 100 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 1, delay: i * 0.08, ease }}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    />
                  </div>
                  <span className="w-10 text-[11.5px] font-black text-slate-700 tabular-nums text-right shrink-0">
                    {r.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══ TRUST STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
        >
          {trustPoints.map((tp, i) => {
            const Icon = tp.icon;
            return (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-indigo-100/80 shadow-sm"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${tp.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[16px] font-black text-slate-900 leading-none tabular-nums">
                    {tp.value}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 truncate">
                    {tp.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ FEATURED SPOTLIGHT ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 p-8 sm:p-10"
        >
          {/* soft in-panel accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 90% 20%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0) 70%)",
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[10.5px] font-black uppercase tracking-widest text-white mb-5">
                <Award className="w-3 h-3" /> Featured review
              </div>

              <Quote className="w-9 h-9 text-white/30 fill-white/30 mb-4" />

              <p className="text-[19px] sm:text-[21px] leading-relaxed text-white font-light mb-6">
                "{featured.text}"
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <img
                  src={featured.img}
                  alt={featured.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/40 shadow-lg shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-black text-white text-[14px]">{featured.name}</p>
                    <BadgeCheck className="w-4 h-4 text-emerald-300" />
                  </div>
                  <p className="text-[12.5px] text-indigo-100/90">
                    {featured.role}, {featured.company}
                  </p>
                  <p className="text-[11px] text-indigo-200/80 mt-0.5">
                    {featured.country}
                  </p>
                </div>
              </div>
            </div>

            {/* metrics panel */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-100/80 mb-1">
                    Response time
                  </p>
                  <p className="text-[26px] font-black text-white tabular-nums leading-none">
                    −98%
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-100/80 mb-1">
                    Tickets automated
                  </p>
                  <p className="text-[26px] font-black text-white tabular-nums leading-none">
                    87%
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-100/80 mb-1">
                    Time to launch
                  </p>
                  <p className="text-[26px] font-black text-white tabular-nums leading-none">
                    9 wks
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-100/80 mb-1">
                    Rating
                  </p>
                  <p className="text-[26px] font-black text-white tabular-nums leading-none flex items-center gap-1.5">
                    5.0 <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══ TESTIMONIALS GRID ═══ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* ═══ REGIONS STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)]"
        >
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-600" />
              <h3 className="text-[14px] font-black text-slate-900">
                Where our clients are
              </h3>
            </div>
            <span className="text-[11.5px] font-bold text-slate-500">
              150+ clients · 30+ countries
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors"
              >
                <span className="text-[22px] leading-none" aria-hidden>
                  {r.flag}
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-black text-slate-900 leading-tight truncate">
                    {r.name}
                  </p>
                  <p className="text-[10.5px] font-medium text-slate-400 tabular-nums">
                    {r.count} clients
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
                "radial-gradient(circle at 15% 50%, rgba(129,140,248,0.20) 0%, rgba(129,140,248,0.05) 36%, rgba(129,140,248,0) 72%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-[11px] font-black uppercase tracking-widest text-indigo-600 mb-4">
                <ThumbsUp className="w-3 h-3" /> Trusted by 150+ teams
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Join them. Build something worth reviewing.
              </h3>
              <p className="text-[14px] text-slate-500 font-light leading-relaxed">
                Free 20-minute scoping call. Fixed price, clear milestones, no obligation to
                proceed.
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
                Start your project
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