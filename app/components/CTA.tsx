"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send, Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, ArrowUpRight,
  Zap, MessageSquare, FileText, Calendar, Users, Globe, ShieldCheck,
  BadgeCheck, Building2, Star, TrendingUp, Activity, Headphones, Video,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const contactOptions = [
  {
    icon: Zap,
    title: "Quick Quote",
    desc: "Fill the form and get a detailed proposal within 24 hours.",
    action: "Get Instant Quote",
    gradient: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
    accent: "text-indigo-600",
    metric: { value: "24 hr", label: "Turnaround" },
  },
  {
    icon: Calendar,
    title: "Free Discovery Call",
    desc: "Book a 30-min call to walk through your project requirements.",
    action: "Book a Call",
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    accent: "text-emerald-600",
    metric: { value: "30 min", label: "Free slot" },
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Us",
    desc: "Chat with us directly on WhatsApp for fast answers.",
    action: "Open WhatsApp",
    gradient: "from-sky-500 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    accent: "text-sky-600",
    metric: { value: "~2 hrs", label: "Avg reply" },
  },
];

const guarantees = [
  { icon: ShieldCheck,  label: "Free Consultation" },
  { icon: FileText,     label: "No Hidden Charges" },
  { icon: Clock,        label: "24hr Response" },
  { icon: BadgeCheck,   label: "NDA Available" },
  { icon: TrendingUp,   label: "Money-Back Guarantee" },
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

const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
];

const timelines = [
  "ASAP",
  "1–2 months",
  "3–6 months",
  "Flexible",
];

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
  { channel: "WhatsApp", time: "~2 hrs", pct: 92, accent: "from-emerald-500 to-teal-500" },
  { channel: "Email",    time: "~6 hrs", pct: 78, accent: "from-indigo-500 to-violet-500" },
  { channel: "Form",     time: "~24 hrs", pct: 60, accent: "from-amber-500 to-orange-500" },
];

/* Trust strip */
const trustPoints = [
  { icon: Users,      value: "150+",  label: "Active clients",       accent: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  { icon: Globe,      value: "30+",   label: "Countries served",     accent: "text-violet-600 bg-violet-50 border-violet-100" },
  { icon: Activity,   value: "2 hr",  label: "Avg first reply",      accent: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Star,       value: "4.9/5", label: "Client rating",        accent: "text-amber-600 bg-amber-50 border-amber-100" },
];

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
      className="py-28 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden"
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

      {/* hairline separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      {/* ═══ BACKGROUND — radial gradients only ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="dv-cta-drift absolute -top-40 -right-40 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.22) 0%, rgba(129,140,248,0.08) 34%, rgba(129,140,248,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(196,181,253,0.20) 0%, rgba(196,181,253,0.06) 38%, rgba(196,181,253,0) 72%)",
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
            <Send className="w-3 h-3" /> Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-5"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Amazing
            </span>{" "}
            Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-gray-500 text-lg font-light max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? Turn your idea into a powerful digital solution with a team that's done it 260+ times.
          </motion.p>
        </div>

        {/* ═══ TRUST STRIP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12 max-w-4xl mx-auto"
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
                  <p className="text-[15px] font-black text-slate-900 leading-none tabular-nums">
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

        {/* ═══ CONTACT METHOD CARDS ═══ */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {contactOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 rounded-3xl bg-gradient-to-br ${opt.bg} border ${opt.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-shadow duration-300 flex flex-col overflow-hidden`}
              >
                {/* top row: icon + metric */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${opt.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <p className={`text-[14px] font-black tabular-nums ${opt.accent}`}>
                      {opt.metric.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {opt.metric.label}
                    </p>
                  </div>
                </div>

                <h3 className="font-black text-gray-900 text-[17px] mb-2">{opt.title}</h3>
                <p className="text-gray-500 text-[13px] font-light leading-relaxed mb-5 flex-1">
                  {opt.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-indigo-200 text-indigo-700 font-bold text-[12.5px] hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors shadow-sm self-start"
                >
                  {opt.action} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ MAIN GRID: FORM + SIDEBAR ═══ */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ═══ FORM ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="bg-white rounded-3xl border border-indigo-100/80 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)] p-7 sm:p-9"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-[22px] font-black text-gray-900 mb-1.5">
                  Send a Project Brief
                </h3>
                <p className="text-gray-400 text-[13px] font-light">
                  We'll review and respond with a detailed proposal within 24 hours.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Accepting briefs
              </span>
            </div>

            <div className="h-px bg-slate-100 my-6" />

            <div className="space-y-5">
              {/* name + email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-[13.5px] focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-[13.5px] focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* phone */}
              <div>
                <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2">
                  Phone / WhatsApp <span className="text-slate-400 font-medium normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 000 0000"
                  className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-[13.5px] focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                />
              </div>

              {/* project type */}
              <div>
                <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2.5">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((pt) => {
                    const active = formData.type === pt;
                    return (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: pt })}
                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-colors ${
                          active
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200/60"
                            : "bg-white border-indigo-100 text-gray-600 hover:border-indigo-300"
                        }`}
                      >
                        {pt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* budget + timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2.5">
                    Budget range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => {
                      const active = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-1.5 rounded-full text-[11.5px] font-semibold border transition-colors ${
                            active
                              ? "bg-violet-600 text-white border-violet-600"
                              : "bg-white border-indigo-100 text-gray-600 hover:border-indigo-300"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2.5">
                    Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((tl) => {
                      const active = formData.timeline === tl;
                      return (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: tl })}
                          className={`px-3 py-1.5 rounded-full text-[11.5px] font-semibold border transition-colors ${
                            active
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-white border-indigo-100 text-gray-600 hover:border-indigo-300"
                          }`}
                        >
                          {tl}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* message */}
              <div>
                <label className="block text-[11px] font-black text-gray-600 uppercase tracking-wider mb-2">
                  Project Details *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-[13.5px] focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* submit */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-black text-[14px] flex items-center justify-center gap-2 transition-colors shadow-lg ${
                  sent
                    ? "bg-emerald-500 text-white shadow-emerald-200"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-200/80 hover:shadow-indigo-300/90"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent! We'll respond within 24hrs
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Project Brief
                  </>
                )}
              </motion.button>

              <p className="text-[11px] text-slate-400 text-center font-light">
                No spam, no drip campaigns. One human reply, usually within a few hours.
              </p>
            </div>
          </motion.div>

          {/* ═══ SIDEBAR ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-col gap-5"
          >
            {/* contact details with subtle photo strip */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* photo band */}
              <div className="relative h-32">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=70"
                  alt="Our team"
                  width={800}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-700 to-indigo-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 via-indigo-700/40 to-transparent" />
                <div className="absolute bottom-3 left-5 right-5">
                  <p className="text-[10.5px] font-black uppercase tracking-widest text-white/70 mb-1">
                    Our Studio · Islamabad
                  </p>
                  <p className="text-white font-black text-[15px] leading-tight">
                    A team of 40+ engineers, designers & strategists
                  </p>
                </div>
              </div>

              {/* contact rows */}
              <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-7 pt-6">
                <h3 className="text-white text-[15px] font-black mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail,   label: "Email Us",        value: "hello@devcuts.com" },
                    { icon: Phone,  label: "Call / WhatsApp", value: "+92 3XX XXX XXXX" },
                    { icon: MapPin, label: "Location",        value: "Islamabad, Pakistan" },
                    { icon: Clock,  label: "Working Hours",   value: "Mon–Sat, 9am–8pm PKT" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-[10.5px] font-black uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-white font-bold text-[13.5px]">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* response-time indicator */}
            <div className="p-6 rounded-3xl bg-white border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="w-4 h-4 text-indigo-600" />
                <h3 className="font-black text-slate-900 text-[14px]">How fast we reply</h3>
              </div>

              <div className="space-y-3.5">
                {responseTimes.map((r, i) => (
                  <div key={r.channel}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-bold text-slate-700">
                        {r.channel}
                      </span>
                      <span className="text-[11.5px] font-black text-slate-900 tabular-nums">
                        {r.time}
                      </span>
                    </div>
                    <div className="relative h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: r.pct / 100 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, delay: i * 0.1, ease }}
                        style={{ transformOrigin: "left" }}
                        className={`absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r ${r.accent}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 mt-5 font-light">
                Based on last 12 months of incoming messages.
              </p>
            </div>

            {/* guarantees grid */}
            <div className="p-6 rounded-3xl bg-white border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="w-4 h-4 text-indigo-600" />
                <h3 className="font-black text-slate-900 text-[14px]">Our guarantees</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {guarantees.map((g) => {
                  const Icon = g.icon;
                  return (
                    <div
                      key={g.label}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-[11.5px] text-slate-700 font-semibold leading-tight">
                        {g.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* quick response callout */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-[13.5px]">
                  Average response: under 2 hours
                </p>
                <p className="text-gray-500 text-[11.5px] font-light mt-0.5">
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
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-14 p-6 sm:p-7 rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.25)]"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <h3 className="text-[14px] font-black text-slate-900">
                Where we work
              </h3>
            </div>
            <span className="text-[11.5px] font-bold text-slate-500">
              Distributed team · Follow-the-sun delivery
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors"
              >
                {/* city image */}
                <div className="relative h-32 overflow-hidden bg-slate-200">
                  <img
                    src={o.img}
                    alt={o.city}
                    width={400}
                    height={200}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[18px] leading-none mb-1">{o.flag}</p>
                      <p className="text-white font-black text-[15px] leading-none">
                        {o.city}
                      </p>
                    </div>
                    <span className="text-[10px] font-black text-white bg-black/40 px-2 py-1 rounded-full">
                      {o.tz}
                    </span>
                  </div>
                </div>
                {/* role row */}
                <div className="px-4 py-3 bg-white flex items-center justify-between">
                  <span className="text-[11.5px] font-bold text-slate-600">
                    {o.role}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══ BOTTOM PANEL — FINAL SEND-OFF ═══ */}
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
                <Video className="w-3 h-3" /> Prefer a live walkthrough?
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Book a 20-minute screen-share.
              </h3>
              <p className="text-[14px] text-slate-500 font-light leading-relaxed">
                We'll open a shared whiteboard, map your requirements in real time, and leave
                you with a written scope — no obligation to proceed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-[13.5px] shadow-lg shadow-indigo-200/70"
              >
                <Calendar className="w-4 h-4" />
                Pick a time slot
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/923000000000"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border-2 border-indigo-100 text-slate-800 font-bold text-[13.5px] hover:border-indigo-300 hover:bg-indigo-50/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}