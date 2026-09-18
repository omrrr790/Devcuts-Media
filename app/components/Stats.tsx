"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Layout, Users, Clock, ShieldCheck, Code2, Globe, Award, TrendingUp } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  useEffect(() => { if (inView) animate(mv, value, { duration: 2.2, ease: "easeOut" }); }, [inView, value, mv]);
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}

const stats = [
  { num: 260, suffix: "+", label: "Projects Delivered", sub: "Across 12+ industries worldwide", icon: Layout, color: "from-indigo-500 to-violet-600", bg: "from-indigo-50 to-violet-50", border: "border-indigo-100" },
  { num: 150, suffix: "+", label: "Happy Clients", sub: "Trusted by startups & enterprises", icon: Users, color: "from-emerald-500 to-teal-500", bg: "from-emerald-50 to-teal-50", border: "border-emerald-100" },
  { num: 10, suffix: "+", label: "Years Experience", sub: "Hands-on software leadership", icon: Clock, color: "from-amber-500 to-orange-500", bg: "from-amber-50 to-orange-50", border: "border-amber-100" },
  { num: 98, suffix: "%", label: "Client Retention", sub: "Clients keep coming back", icon: ShieldCheck, color: "from-rose-500 to-pink-500", bg: "from-rose-50 to-pink-50", border: "border-rose-100" },
];

const accolades = [
  { icon: Code2, title: "50,000+", desc: "Lines of code shipped monthly" },
  { icon: Globe, title: "30+", desc: "Countries clients operate in" },
  { icon: Award, title: "Top 1%", desc: "Rated on Fiverr & Upwork" },
  { icon: TrendingUp, title: "3x ROI", desc: "Average client return on investment" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-violet-50/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/40 to-violet-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative p-7 rounded-3xl bg-gradient-to-br ${stat.bg} border ${stat.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-400 hover:-translate-y-1.5`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                  <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                </div>
                <p className="font-bold text-gray-800 text-base mb-1">{stat.label}</p>
                <p className="text-gray-400 text-xs font-light leading-snug">{stat.sub}</p>

                {/* Inner glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-400`} />
              </motion.div>
            );
          })}
        </div>

        {/* Accolades row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {accolades.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-indigo-100/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg leading-none mb-0.5">{item.title}</p>
                <p className="text-gray-400 text-xs font-light leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}