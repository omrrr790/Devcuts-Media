"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, Zap, MessageSquare, FileText, Calendar } from "lucide-react";

const contactOptions = [
  {
    icon: Zap,
    title: "Quick Quote",
    desc: "Fill the form and get a detailed proposal within 24 hours.",
    action: "Get Instant Quote",
    gradient: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100",
  },
  {
    icon: Calendar,
    title: "Free Discovery Call",
    desc: "Book a 30-min call to walk through your project requirements.",
    action: "Book a Call",
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Us",
    desc: "Chat with us directly on WhatsApp for fast answers.",
    action: "Open WhatsApp",
    gradient: "from-sky-500 to-cyan-500",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
  },
];

const guarantees = [
  "Free Consultation",
  "No Hidden Charges",
  "24hr Response",
  "NDA Available",
  "Money-Back Guarantee",
  "Post-Launch Support",
];

const projectTypes = ["Web Application", "Mobile App", "AI Integration", "E-Commerce", "SEO / Marketing", "Custom ERP"];

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-indigo-50/60 to-transparent pointer-events-none" />
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-gradient-to-bl from-violet-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5"
          >
            <Send className="w-3 h-3" /> Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-5"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Amazing
            </span>{" "}
            Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light max-w-xl mx-auto"
          >
            Have a project in mind? Turn your idea into a powerful digital solution with a team that's done it 260+ times.
          </motion.p>
        </div>

        {/* Contact option cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {contactOptions.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-7 rounded-3xl bg-gradient-to-br ${opt.bg} border ${opt.border} hover:shadow-xl hover:shadow-indigo-100/60 hover:-translate-y-1.5 transition-all duration-400 text-center`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${opt.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <opt.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{opt.title}</h3>
              <p className="text-gray-500 text-sm font-light mb-5">{opt.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-indigo-200 text-indigo-700 font-bold text-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
                {opt.action} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-indigo-100/80 shadow-xl shadow-indigo-100/40 p-8 lg:p-10"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-2">Send a Project Brief</h3>
            <p className="text-gray-400 text-sm font-light mb-8">We'll review and respond with a detailed proposal within 24 hours.</p>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-400 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt}
                      onClick={() => setFormData({ ...formData, type: pt })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${formData.type === pt ? "bg-indigo-600 text-white border-indigo-600 shadow-md" : "bg-white border-indigo-100 text-gray-600 hover:border-indigo-300"}`}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2">Project Details *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-indigo-100 bg-indigo-50/40 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-400 focus:bg-white transition-all resize-none"
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${sent ? "bg-emerald-500 text-white shadow-emerald-200" : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-200/80 hover:shadow-indigo-300/90"}`}
              >
                {sent ? (
                  <><CheckCircle2 className="w-4 h-4" /> Sent! We'll respond within 24hrs</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Project Brief</>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact details */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-black mb-6">Contact Details</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@devcuts.com" },
                  { icon: Phone, label: "Call / WhatsApp", value: "+92 3XX XXX XXXX" },
                  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9am–8pm PKT" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">{label}</p>
                      <p className="text-white font-bold text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-3xl border border-indigo-100 shadow-md p-7">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-black text-gray-900">Our Guarantees</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {guarantees.map((g) => (
                  <div key={g} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {g}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm">Average response: under 2 hours</p>
                <p className="text-gray-500 text-xs font-light">We respond to every message, every time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}