"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowUpRight, Phone,
  Code2, Smartphone, Cloud, Brain, BarChart3, Layers, Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    group: "Build",
    items: [
      { icon: Code2, name: "Full-Stack Web", desc: "Next.js · MERN · TypeScript", tag: "Popular" },
      { icon: Smartphone, name: "Mobile Apps", desc: "Flutter · React Native · Expo" },
      { icon: Layers, name: "ERP & CRM", desc: "Custom internal tooling" },
    ],
  },
  {
    group: "Grow",
    items: [
      { icon: Brain, name: "AI & Automation", desc: "LLMs · agents · RAG pipelines" },
      { icon: BarChart3, name: "SEO & Growth", desc: "Technical SEO + content ops" },
      { icon: Cloud, name: "Cloud & DevOps", desc: "AWS · Docker · observability" },
    ],
  },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
];

// Magnetic wrapper — only fires on hover, no scroll cost
function Magnetic({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // rAF-throttled scroll listener — prevents layout thrash
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress rail — single element, GPU-composited */}
      <motion.div
        style={{ scaleX: progress, willChange: "transform" }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[80] bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500"
      />

      <header
        className={`fixed top-0 inset-x-0 z-[70] transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white border-b border-indigo-100 shadow-[0_8px_40px_-20px_rgba(79,70,229,0.25)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              scrolled ? "h-16" : "h-20 lg:h-24"
            }`}
          >
            {/* Logo — original overflow image */}
            <a
              href="/"
              className="relative flex items-center group w-40 md:w-56 h-11 md:h-12 shrink-0"
            >
              <img
                src="/logo-header-removebg-preview.png"
                alt="DevCuts Media"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[160%] md:h-[200%] w-auto object-contain transition-transform duration-500 group-hover:scale-105 origin-left"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <a
                href="#about"
                className="relative px-3.5 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 transition-colors group"
              >
                About
                <span className="absolute left-3.5 right-3.5 bottom-1 h-[1.5px] bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>

              {/* Services mega menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium transition-colors group ${
                    servicesOpen ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-3.5 right-3.5 bottom-1 h-[1.5px] bg-gradient-to-r from-indigo-500 to-violet-500 origin-left transition-transform duration-300 ${
                      servicesOpen ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                    >
                      <div className="relative bg-white rounded-3xl border border-indigo-100 shadow-[0_32px_80px_-28px_rgba(79,70,229,0.35)] overflow-hidden">
                        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500" />

                        <div className="grid grid-cols-2">
                          {services.map((col, ci) => (
                            <div
                              key={col.group}
                              className={`p-5 ${ci === 0 ? "border-r border-indigo-50" : ""}`}
                            >
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                                {col.group}
                              </p>
                              <div className="space-y-0.5">
                                {col.items.map((s, ii) => (
                                  <motion.a
                                    key={s.name}
                                    href="#services"
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * (ci * 3 + ii), duration: 0.3, ease }}
                                    className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-indigo-50/70 transition-colors group/item"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-500 group-hover/item:to-violet-500 transition-colors">
                                      <s.icon className="w-4 h-4 text-indigo-600 group-hover/item:text-white transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-[13px] font-semibold text-slate-900 flex items-center gap-1.5">
                                        {s.name}
                                        {s.tag && (
                                          <span className="text-[9px] font-bold uppercase tracking-wide text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                                            {s.tag}
                                          </span>
                                        )}
                                      </p>
                                      <p className="text-[11.5px] text-slate-500 mt-0.5 truncate">
                                        {s.desc}
                                      </p>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-indigo-500 opacity-0 group-hover/item:opacity-100 ml-auto mt-1 transition-all" />
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-indigo-50 px-5 py-3 flex items-center justify-between bg-gradient-to-r from-indigo-50/60 to-violet-50/40">
                          <p className="text-[12px] text-slate-600 inline-flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            Not sure where to start?{" "}
                            <span className="text-slate-900 font-semibold">
                              Book a 20-min scoping call.
                            </span>
                          </p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 text-[12px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                          >
                            Book now
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-3.5 py-2 text-[13.5px] font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-3.5 right-3.5 bottom-1 h-[1.5px] bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+92300000000"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+92 300 000 0000</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>

              <Magnetic strength={0.28}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[13px] font-bold shadow-[0_10px_30px_-8px_rgba(79,70,229,0.6)] hover:shadow-[0_14px_36px_-8px_rgba(79,70,229,0.75)] transition-shadow"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </Magnetic>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden relative w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 hover:bg-indigo-100 active:scale-95 transition"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[65] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease }}
              className="absolute top-0 inset-x-0 bg-white rounded-b-3xl shadow-2xl pt-24 pb-8 max-h-[100dvh] overflow-y-auto"
            >
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 absolute top-0 left-0 right-0" />

              <div className="px-6 space-y-1">
                {[
                  { label: "Services", href: "#services", desc: "6 practice areas" },
                  { label: "Work", href: "#work", desc: "260+ shipped projects" },
                  { label: "Process", href: "#process", desc: "How we engage" },
                  { label: "Reviews", href: "#testimonials", desc: "150+ verified" },
                  { label: "About", href: "#about", desc: "The team behind DevCuts" },
                ].map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 * i + 0.12, duration: 0.4, ease }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3.5 border-b border-slate-100 last:border-0 group"
                  >
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease }}
                className="px-6 mt-6 space-y-3"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-[0_14px_36px_-12px_rgba(79,70,229,0.6)]"
                >
                  <span className="relative">Start a project</span>
                  <ArrowUpRight className="relative w-4 h-4" />
                </a>
                <a
                  href="tel:+92300000000"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-indigo-100 text-slate-700 font-semibold text-sm hover:bg-indigo-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call us directly
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}