"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Emma Wilson",
    role: "Product Manager",
    company: "ScaleFlow",
    tag: "AI Integration",
    tagColor: "bg-violet-100 text-violet-700",
    initial: "EW",
    gradient: "from-violet-400 to-indigo-500",
    text: "The AI integration they built into our platform has completely automated our customer support. Response times went from hours to seconds. Truly impressive execution — the team knew exactly what they were doing.",
    rating: 5,
  },
  {
    name: "Hassan Malik",
    role: "Director of Operations",
    company: "Logistics Co.",
    tag: "Full Stack",
    tagColor: "bg-indigo-100 text-indigo-700",
    initial: "HM",
    gradient: "from-indigo-400 to-sky-500",
    text: "From design to deployment, the team was professional, responsive, and deeply invested in our success. Our new platform handles 10x the traffic with zero issues. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "StyleHub",
    tag: "Next.js",
    tagColor: "bg-sky-100 text-sky-700",
    initial: "SJ",
    gradient: "from-sky-400 to-cyan-500",
    text: "Their attention to design details — the typography, micro-interactions, overall aesthetic — is absolutely incredible. Conversion rates are up 40% since launching the new site. DevCuts delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Ch Shafqat Shafeeq",
    role: "CEO",
    company: "Alniaz Petroleums",
    tag: "Web App",
    tagColor: "bg-emerald-100 text-emerald-700",
    initial: "CS",
    gradient: "from-emerald-400 to-teal-500",
    text: "They built an outstanding website with live fuel rates and a smart pricing calculator. The team is highly professional and delivered on time. We've seen a 3x increase in online inquiries since launch. Highly recommended.",
    rating: 5,
  },
  {
    name: "Hafiz Asif Doger",
    role: "CEO",
    company: "Sports World",
    tag: "E-Commerce",
    tagColor: "bg-amber-100 text-amber-700",
    initial: "HA",
    gradient: "from-amber-400 to-orange-500",
    text: "Complete e-commerce and inventory management system built perfectly to our requirements. Our store operations are now fully digital and our team saved 20+ hours per week. Excellent work by the DevCuts team.",
    rating: 5,
  },
  {
    name: "Ali Usman",
    role: "CTO",
    company: "Sadiq Auto Traders",
    tag: "Next.js",
    tagColor: "bg-rose-100 text-rose-700",
    initial: "AU",
    gradient: "from-rose-400 to-pink-500",
    text: "Our excavator and spare parts business is now easily reachable online. The website is fast, beautiful, and SEO-optimised. Inquiries have increased tremendously since launch — worth every penny.",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative p-8 rounded-3xl bg-white border border-indigo-100/80 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60 hover:-translate-y-2 transition-all duration-500 flex flex-col"
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-indigo-100 mb-4 fill-indigo-100" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Tag */}
      <span className={`inline-block self-start px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${t.tagColor}`}>
        {t.tag}
      </span>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed font-light flex-1 mb-7">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-black text-white text-sm shadow-md shrink-0`}>
          {t.initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="font-black text-gray-900 text-sm truncate">{t.name}</h4>
            <BadgeCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          </div>
          <p className="text-xs text-indigo-600 font-semibold truncate">{t.role}, {t.company}</p>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50/0 to-violet-50/0 group-hover:from-indigo-50/30 group-hover:to-violet-50/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-100/40 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5"
          >
            <MessageCircle className="w-3 h-3" /> Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light max-w-xl mx-auto mb-8"
          >
            Real results from real businesses who trusted us with their digital growth.
          </motion.p>

          {/* Aggregate rating bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-5 px-8 py-4 rounded-2xl bg-white border border-indigo-100 shadow-lg shadow-indigo-100/40"
          >
            <div>
              <p className="text-4xl font-black text-gray-900">5.0</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div className="text-left">
              <p className="font-bold text-gray-800 text-sm">150+ Verified Reviews</p>
              <p className="text-gray-400 text-xs">Fiverr · Upwork · Direct</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} transition={{ delay: i * 0.08 }}>
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Join 150+ businesses that chose DevCuts for their digital growth</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-sm shadow-xl shadow-indigo-200/70 hover:shadow-indigo-300/90 transition-shadow">
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}