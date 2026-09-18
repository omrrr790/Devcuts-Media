"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Map, Cpu, TestTube2, Rocket, HeartHandshake, Clock, CheckCircle2, ChevronRight } from "lucide-react";

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
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-5"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg font-light"
          >
            A transparent, SDLC-driven process that delivers quality from day one — no surprises, no scope creep.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${step.bg} border ${step.border} hover:shadow-xl hover:shadow-indigo-100/60 hover:-translate-y-1.5 transition-all duration-400 flex flex-col`}
            >
              {/* Step number + icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-black text-gray-200 group-hover:text-gray-300 transition-colors tracking-tighter">
                  {step.num}
                </span>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Duration chip */}
              <span className={`inline-block self-start px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${step.chip}`}>
                <Clock className="w-2.5 h-2.5 inline mr-1" />{step.duration}
              </span>

              <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light mb-5 flex-1">{step.desc}</p>

              {/* Deliverables */}
              <div className="space-y-2">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Deliverables</p>
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>

              {/* Arrow link */}
              <a href="#contact" className="flex items-center gap-1 text-xs font-bold text-indigo-600 mt-5 group-hover:gap-2.5 transition-all">
                Get started <ChevronRight className="w-3.5 h-3.5" />
              </a>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-base mb-5">Ready to start your project? Let's map out step 01 together.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-sm shadow-xl shadow-indigo-200/70 hover:shadow-indigo-300/90 transition-shadow">
            Book Free Discovery Call <Rocket className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}