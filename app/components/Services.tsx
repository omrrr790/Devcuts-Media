"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, LayoutTemplate, Layers, Database, Sparkles, ShieldCheck, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

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
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-50/80 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-50/60 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-5"
            >
              <Sparkles className="w-3 h-3" /> Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-5"
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
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg font-light leading-relaxed"
            >
              Eight specialisations. One dedicated team. Everything you need to build, launch, and scale your digital presence.
            </motion.p>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-indigo-200/70"
          >
            Get Custom Quote <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className={`group relative p-7 rounded-3xl bg-gradient-to-br ${service.bg} border ${service.border} hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500 hover:-translate-y-1.5 flex flex-col`}
            >
              {/* Tag */}
              <span className={`inline-block self-start px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-5 ${service.chip}`}>
                {service.tag}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-black text-gray-900 mb-3 leading-snug">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light mb-5 flex-1">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${service.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`flex items-center gap-1.5 text-sm font-bold ${service.accent} group-hover:gap-3 transition-all`}>
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}