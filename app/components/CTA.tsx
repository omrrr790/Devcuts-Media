"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Send, Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, ArrowUpRight,
  Zap, MessageSquare, FileText, Calendar, Users, Globe, ShieldCheck,
  BadgeCheck, BadgeDollarSign, Building2, Star, Activity, Headphones, Video,
} from "lucide-react";
import { slideVariants } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const secondaryCards = [
  {
    icon: Calendar,
    title: "Free Discovery Call",
    desc: "Book a 30-min call to walk through your project requirements.",
    action: "Book a Call",
    href: "#",
    metric: { value: "30 min", label: "Free slot" },
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Us",
    desc: "Chat with us directly on WhatsApp for fast answers.",
    action: "Open WhatsApp",
    href: "https://wa.me/923405609087",
    metric: { value: "~2 hrs", label: "Avg reply" },
  },
];

const guarantees = [
  { icon: ShieldCheck,  label: "Free Consultation" },
  { icon: FileText,     label: "No Hidden Charges" },
  { icon: Clock,        label: "24hr Response" },
  { icon: BadgeCheck,   label: "NDA Available" },
  { icon: BadgeDollarSign, label: "Money-Back Guarantee" },
  { icon: Headphones,   label: "Post-Launch Support" },
];

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI Integration",
  "E-Commerce",
  "SEO / Marketing",
  "Custom ERP",
];

const budgetRanges = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

const timelines = ["ASAP", "1–2 months", "3–6 months", "Flexible"];

/* Where we work */
const offices = [
  {
    flag: "🇵🇰",
    city: "Islamabad",
    role: "Headquarters",
    tz: "PKT (UTC+5)",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=70",
  },
  {
    flag: "🇦🇪",
    city: "Dubai",
    role: "Client relations",
    tz: "GST (UTC+4)",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=70",
  },
  {
    flag: "🇬🇧",
    city: "London",
    role: "Sales partner",
    tz: "GMT (UTC+0)",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=70",
  },
];

/* Response-time indicator */
const responseTimes = [
  { channel: "WhatsApp", time: "~2 hrs",  pct: 100 },
  { channel: "Email",    time: "~6 hrs",  pct: 33 },
  { channel: "Form",     time: "~24 hrs", pct: 8 },
];

/* Trust strip */
const trustPoints = [
  { icon: Users,    value: "150+",  label: "Active clients",  accent: "text-brand-red-600 bg-brand-red-500/10 border-brand-red-500/15" },
  { icon: Globe,    value: "30+",   label: "Countries served", accent: "text-brand-red-600 bg-brand-red-500/10 border-brand-red-500/15" },
  { icon: Activity, value: "2 hr",  label: "Avg first reply",  accent: "text-brand-red-600 bg-brand-red-500/10 border-brand-red-500/15" },
  { icon: Star,     value: "4.9/5", label: "Client rating",    accent: "text-amber-600 bg-amber-50 border-amber-100" },
];

const contactRows = [
  { icon: Mail,   label: "Email Us",        value: "hello@devcuts.com" },
  { icon: Phone,  label: "Call / WhatsApp", value: "+92 340 5609087" },
  { icon: MapPin, label: "Location",        value: "Islamabad, Pakistan" },
  { icon: Clock,  label: "Working Hours",   value: "Mon–Sat, 9am–8pm PKT" },
];

const inputCls =
  "w-full px-4 py-3.5 rounded-lg border border-brand-red-500/15 bg-brand-red-500/[0.04] text-ink placeholder-[var(--color-ink-soft)]/50 text-sm focus:outline-none focus:border-brand-red-500 focus:bg-white transition-colors";

const chipBase = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors";
const chipIdle = "bg-white border-brand-red-500/20 text-ink-soft hover:border-brand-red-500/40";
const chipActive = "brand-gradient text-white border-transparent shadow-[0_6px_16px_-8px_rgba(10,10,10,0.6)]";

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-28 bg-[var(--color-bg-soft)] relative overflow-hidden"
    >
      <style>{`
        @keyframes dv-cta-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(20px, -24px, 0) scale(1.05); }
        }
        .dv-cta-drift { animation: dv-cta-drift 20s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .dv-cta-drift { animation: none !important; }
        }
      `}</style>

      {/* hairline separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />

      {/* ═══ BACKGROUND — radial gradients only ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-cta-drift absolute -top-40 -right-40 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.14) 0%, rgba(200,30,30,0.05) 34%, rgba(200,30,30,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(122,14,14,0.10) 0%, rgba(122,14,14,0.04) 38%, rgba(122,14,14,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ HEADER ═══ */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5"
          >
            <Send className="w-3 h-3" /> Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-5"
          >
            Let&apos;s Build Something{" "}
            <span className="brand-gradient bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="text-base md:text-lg text-ink-soft font-light max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? Turn your idea into a powerful digital solution with a team that&apos;s done it 260+ times.
          </motion.p>
        </div>

        {/* ═══ TRUST STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12 max-w-4xl mx-auto"
        >
          {trustPoints.map((tp, i) => {
            const Icon = tp.icon;
            return (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/10 shadow-sm"
              >
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${tp.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg md:text-xl font-bold text-ink leading-none tabular-nums">
                    {tp.value}
                  </p>
                  <p className="text-xs font-medium text-ink-soft/60 mt-1 truncate">
                    {tp.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ CONTACT METHOD CARDS — one primary path + two secondary ═══ */}
        <div className="mb-12">
          {/* PRIMARY — Send a Project Brief (the main form path) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-2xl brand-gradient text-white p-7 sm:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_30px_70px_-30px_rgba(10,10,10,0.6)]"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(80% 140% at 100% 0%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 55%)",
              }}
            />
            <div className="relative flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-black text-white/60 uppercase tracking-wider mb-1">
                  The main form path
                </p>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight mb-1.5">
                  Start a Project Brief
                </h3>
                <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-xl">
                  The fastest route to a fixed quote. Tell us about your project and we&apos;ll reply
                  with a detailed proposal within 24 hours.
                </p>
              </div>
            </div>
            <motion.a
              href="#brief-form"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative btn btn-light px-6 py-3.5 rounded-2xl text-sm shadow-lg shrink-0"
            >
              Start your brief
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* SECONDARY — compact ghost cards (one consistent icon treatment) */}
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            {secondaryCards.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={opt.title}
                  variants={slideVariants(i === 0 ? "left" : "right", 56)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, delay: 0.15 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-6 rounded-2xl bg-white border border-black/10 hover:shadow-[0_30px_60px_-26px_rgba(122,14,14,0.32)] transition-shadow duration-300 flex flex-col overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center group-hover:bg-brand-red-600 transition-colors">
                      <Icon className="w-5 h-5 text-brand-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black tabular-nums bg-clip-text text-transparent brand-gradient">
                        {opt.metric.value}
                      </p>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">
                        {opt.metric.label}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-ink mb-1.5">{opt.title}</h3>
                  <p className="text-sm text-ink-soft font-light leading-relaxed mb-5 flex-1">
                    {opt.desc}
                  </p>

                  <a
                    href={opt.href}
                    className="btn btn-secondary rounded-lg px-4 py-2.5 text-xs shadow-sm self-start"
                  >
                    {opt.action} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ═══ SEPARATOR — quick-contact vs project brief form ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="mb-10 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-black/10" />
          <p className="text-xs font-bold text-ink-soft text-center whitespace-nowrap">
            Prefer a form? <span className="text-brand-red-600 font-black">Send us the details below</span>
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </motion.div>

        {/* ═══ MAIN GRID: FORM + SIDEBAR ═══ */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ═══ FORM — slides in from the left ═══ */}
          <motion.div
            id="brief-form"
            variants={slideVariants("left", 64)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease }}
            className="bg-white rounded-2xl border border-black/10 shadow-[0_20px_60px_-30px_rgba(122,14,14,0.35)] p-7 sm:p-9"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold font-display text-ink mb-1.5">
                  Send a Project Brief
                </h3>
                <p className="text-ink-soft/60 text-sm font-light">
                  We&apos;ll review and respond with a detailed proposal within 24 hours.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-black text-brand-red-600 bg-brand-red-500/5 border border-brand-red-500/15 px-2.5 py-1 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red-500" />
                Accepting briefs
              </span>
            </div>

            <div className="h-px bg-black/5 my-6" />

            <div className="space-y-6">
              {/* name + email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* phone */}
              <div>
                <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                  Phone / WhatsApp <span className="text-ink-soft/60 font-medium normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 340 5609087"
                  className={inputCls}
                />
              </div>

              {/* project type */}
              <div>
                <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                  Project Type
                </label>
                <div
                  role="radiogroup"
                  aria-label="Project Type"
                  className="flex flex-wrap gap-2"
                >
                  {projectTypes.map((pt) => {
                    const active = formData.type === pt;
                    return (
                      <button
                        key={pt}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setFormData({ ...formData, type: pt })}
                        className={`${chipBase} ${active ? chipActive : chipIdle}`}
                      >
                        <span
                          aria-hidden
                          className={`w-1.5 h-1.5 rounded-full ${active ? "bg-white" : "border border-brand-red-500/40"}`}
                        />
                        {pt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* budget + timeline */}
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
                <div>
                  <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                    Budget range
                  </label>
                  <div
                    role="radiogroup"
                    aria-label="Budget range"
                    className="flex flex-wrap gap-2"
                  >
                    {budgetRanges.map((b) => {
                      const active = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`${chipBase} ${active ? chipActive : chipIdle}`}
                        >
                          <span
                            aria-hidden
                            className={`w-1.5 h-1.5 rounded-full ${active ? "bg-white" : "border border-brand-red-500/40"}`}
                          />
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                    Timeline
                  </label>
                  <div
                    role="radiogroup"
                    aria-label="Timeline"
                    className="flex flex-wrap gap-2"
                  >
                    {timelines.map((tl) => {
                      const active = formData.timeline === tl;
                      return (
                        <button
                          key={tl}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setFormData({ ...formData, timeline: tl })}
                          className={`${chipBase} ${active ? chipActive : chipIdle}`}
                        >
                          <span
                            aria-hidden
                            className={`w-1.5 h-1.5 rounded-full ${active ? "bg-white" : "border border-brand-red-500/40"}`}
                          />
                          {tl}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* message */}
              <div>
                <label className="block text-xs font-black text-ink-soft uppercase tracking-wider mb-3">
                  Project Details *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* submit */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`btn w-full py-4 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg ${
                  sent
                    ? "bg-emerald-500 text-white hover:bg-emerald-500"
                    : "btn-primary shadow-brand-red-500/30 hover:shadow-brand-red-500/50"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent! We&apos;ll respond within 24hrs
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Project Brief
                  </>
                )}
              </motion.button>

              <p className="text-xs text-ink-soft/60 text-center font-light">
                No spam, no drip campaigns. One human reply, usually within a few hours.
              </p>
            </div>
          </motion.div>

          {/* ═══ SIDEBAR — slides in from the right ═══ */}
          <motion.div
            variants={slideVariants("right", 64)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, delay: 0.12, ease }}
            className="flex flex-col gap-5"
          >
            {/* contact details with photo strip */}
            <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <div className="relative h-32">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=70"
                  alt="Our team"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority={false}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-1">
                    Our Studio · Islamabad
                  </p>
                  <p className="text-white font-black text-base leading-tight">
                    A team of 40+ engineers, designers & strategists
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[var(--brand-black)] p-7 pt-6 border-t border-white/10">
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(120% 90% at 90% 0%, rgba(200,30,30,0.18) 0%, rgba(200,30,30,0) 55%)",
                  }}
                />
                <h3 className="relative text-white text-lg md:text-xl font-bold font-display mb-5">Contact Details</h3>
                <div className="relative space-y-4">
                  {contactRows.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-black uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-white font-bold text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* response-time indicator */}
            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="w-4 h-4 text-brand-red-600" />
                <h3 className="text-lg md:text-xl font-bold font-display text-ink leading-snug">How fast we reply</h3>
              </div>

              <div className="space-y-3.5">
                {responseTimes.map((r, i) => (
                  <div key={r.channel}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-ink-soft">{r.channel}</span>
                      <span className="text-xs font-black text-ink tabular-nums">{r.time}</span>
                    </div>
                    <div className="relative h-1.5 rounded-full bg-black/5 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: r.pct / 100 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: i * 0.1, ease }}
                        style={{ transformOrigin: "left" }}
                        className="absolute inset-y-0 left-0 w-full rounded-full brand-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink-soft/60 mt-5 font-light">
                Based on last 12 months of incoming messages.
              </p>
            </div>

            {/* guarantees grid */}
            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="w-4 h-4 text-brand-red-600" />
                <h3 className="text-lg md:text-xl font-bold font-display text-ink leading-snug">Our guarantees</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {guarantees.map((g) => {
                  const Icon = g.icon;
                  return (
                    <div
                      key={g.label}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[var(--color-bg-soft)] border border-black/10"
                    >
                      <div className="w-7 h-7 rounded-lg bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-brand-red-600" />
                      </div>
                      <span className="text-xs text-ink-soft font-semibold leading-tight">
                        {g.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* quick response callout */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-red-500/5 border border-brand-red-500/15">
              <div className="brand-gradient w-11 h-11 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-ink text-sm">
                  Average response: under 2 hours
                </p>
                <p className="text-ink-soft/60 text-xs font-light mt-0.5">
                  We respond to every message, every time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ OFFICE LOCATIONS STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-black/10 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-red-600" />
              <h3 className="text-lg md:text-xl font-bold font-display text-ink">Where we work</h3>
            </div>
            <span className="text-xs font-bold text-ink-soft/60">
              Distributed team · Follow-the-sun delivery
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-brand-red-500/30 hover:shadow-[0_20px_50px_-24px_rgba(122,14,14,0.3)] transition-all"
              >
                <div className="relative h-32 overflow-hidden bg-black/5">
                  <Image
                    src={o.img}
                    alt={o.city}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-lg leading-none mb-1">{o.flag}</p>
                      <p className="text-white font-black text-base leading-none">{o.city}</p>
                    </div>
                    <span className="text-xs font-black text-white bg-black/40 px-2 py-1 rounded-full">
                      {o.tz}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white flex items-center justify-between">
                  <span className="text-xs font-bold text-ink-soft">{o.role}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       {/* ═══ BOTTOM PANEL — FINAL SEND-OFF ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-[var(--brand-black)] border border-white/10 shadow-[0_30px_80px_-30px_rgba(10,10,10,0.5)]"
        >
          {/* soft glow from the left */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(70% 120% at 0% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%)",
            }}
          />
          {/* faint dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* oversized ghost icon, desktop only, for depth */}
          <Video
            className="hidden lg:block absolute -right-10 -bottom-14 w-64 h-64 text-white/[0.04] pointer-events-none"
            strokeWidth={1}
            aria-hidden
          />

          <div className="relative p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[var(--brand-glow)] mb-5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-glow)] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-glow)]" />
                </span>
                Prefer a live walkthrough?
              </div>

              <div className="flex items-start gap-4 mb-2">
                <span className="hidden sm:flex shrink-0 w-11 h-11 rounded-2xl bg-white/10 border border-white/15 items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight leading-snug">
                  Book a 20-minute screen-share.
                </h3>
              </div>

              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed sm:pl-[60px]">
                We&apos;ll open a shared whiteboard, map your requirements in real time, and leave
                you with a written scope — no obligation to proceed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <motion.a
                href="#brief-form"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl btn btn-light text-sm shadow-[0_16px_40px_-16px_rgba(255,255,255,0.35)]"
              >
                <Calendar className="w-4 h-4" />
                Pick a time slot
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/923405609087"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl btn btn-secondary text-sm bg-white/10 border-white/15 text-white hover:bg-white/20 hover:border-[var(--brand-glow)] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[var(--brand-glow)]" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}