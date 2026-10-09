"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight, MessageCircle,
  Code2, Smartphone, Cloud, Brain, BarChart3, Layers, Sparkles,
} from "lucide-react";
import LearnLink from "./LearnLink";

const ease = [0.22, 1, 0.36, 1] as const;

const MotionLink = motion.create(Link);

const services = [
  {
    group: "Build",
    items: [
      { icon: Code2, name: "Full-Stack Web", href: "/services/web-development", desc: "Next.js · MERN · TypeScript", tag: "Popular" },
      { icon: Smartphone, name: "Mobile Apps", href: "/services/mobile-apps", desc: "Flutter · React Native · Expo" },
      { icon: Layers, name: "ERP & CRM", href: "/services/erp-crm", desc: "Custom internal tooling" },
    ],
  },
  {
    group: "Grow",
    items: [
      { icon: Brain, name: "AI & Automation", href: "/services/ai-automation", desc: "LLMs · agents · RAG pipelines" },
      { icon: BarChart3, name: "SEO & Growth", href: "/services/seo-growth", desc: "Technical SEO + content ops" },
      { icon: Cloud, name: "Cloud & DevOps", href: "/services/cloud-devops", desc: "AWS · Docker · observability" },
    ],
  },
];

/* Home anchors are /#… so they also work from About and service pages. */
const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const contactHref = "/#contact";

// The brand logo — one source of truth so the header + dropdown reuse it
const LOGO = { src: "/logo.png", width: 669, height: 373, alt: "Devcuts Media" };


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");

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
      {/* Scroll progress rail — brand gradient */}
      <motion.div
        style={{ scaleX: progress, willChange: "transform" }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[80] brand-gradient"
      />

      <header
        className={`fixed top-0 inset-x-0 z-[70] transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-black/10 shadow-[0_12px_40px_-24px_rgba(122,14,14,0.25)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              scrolled ? "h-16" : "h-20 lg:h-24"
            }`}
          >
            {/* Logo — crisp next/image */}
            <Link
              href="/"
              aria-label="Devcuts Media — home"
              className="relative group h-14 md:h-16 lg:h-[4.5rem] w-auto shrink-0"
            >
              <Image
                src={LOGO.src}
                alt={LOGO.alt}
                width={LOGO.width}
                height={LOGO.height}
                priority
                sizes="(min-width: 1024px) 160px, 115px"
                className="h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain transition-transform duration-500 origin-left group-hover:scale-105"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <Link
                href="/"
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors group ${
                  isHome ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                Home
                <span
                  className={`absolute  h-[2px] brand-gradient rounded-full origin-left transition-transform duration-300 ${
                    isHome ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              {/* Services mega menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors group ${
                    servicesOpen || isServices ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute  h-[2px] brand-gradient origin-left transition-transform duration-300 rounded-full ${
                      servicesOpen || isServices ? "scale-x-100" : "scale-x-0"
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
                      <div className="relative bg-white rounded-2xl border border-black/10 shadow-[0_32px_80px_-28px_rgba(122,14,14,0.35)] overflow-hidden">
                        <div className="h-1 w-full brand-gradient" />

                        <div className="grid grid-cols-2">
                          {services.map((col, ci) => (
                            <div
                              key={col.group}
                              className={`p-5 ${ci === 0 ? "border-r border-black/10" : ""}`}
                            >
                              <p className="text-xs font-bold text-ink-soft/60 uppercase tracking-[0.16em] mb-3">
                                {col.group}
                              </p>
                              <div className="space-y-0.5">
                                {col.items.map((s, ii) => (
                                  <motion.a
                                    key={s.name}
                                    href={s.href}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * (ci * 3 + ii), duration: 0.3, ease }}
                                    className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-[var(--color-bg-soft)] transition-colors group/item"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-brand-red-500/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/item:bg-brand-red-600">
                                      <s.icon className="w-4 h-4 text-brand-red-600 transition-colors group-hover/item:text-white" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-semibold text-ink flex items-center gap-1.5">
                                        {s.name}
                                        {s.tag && (
                                          <span className="text-xs font-bold uppercase tracking-wide text-brand-red-600 bg-brand-red-500/10 px-1.5 py-0.5 rounded">
                                            {s.tag}
                                          </span>
                                        )}
                                      </p>
                                      <p className="text-xs text-ink-soft/60 mt-0.5 truncate">
                                        {s.desc}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-soft/60 group-hover/item:text-brand-red-500 opacity-0 group-hover/item:opacity-100 ml-auto mt-1 transition-all" />
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-black/10 px-5 py-3 flex items-center justify-between bg-[var(--color-bg-soft)]">
                          <p className="text-xs text-ink-soft inline-flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-brand-red-500" />
                            Not sure where to start?{" "}
                            <span className="text-ink font-semibold">
                              Book a 20-min scoping call.
                            </span>
                          </p>
                          <Link
                            href="/#contact"
                            className="inline-flex items-center gap-1 text-xs font-bold text-brand-red-600 hover:text-brand-red-500 transition-colors"
                          >
                            Book now
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((l) => {
                const active =
                  (l.label === "About" && isAbout) ||
                  (l.label === "Blog" && isBlog) ||
                  (l.label !== "About" && l.label !== "Blog" && isHome);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors group ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute h-[2px] brand-gradient rounded-full origin-left transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3.5 xl:gap-5">
              <a
                href={contactHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-brand-red-600 transition-colors"
              >
                Contact
              </a>

              <LearnLink variant="header" />
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden relative w-11 h-11 rounded-lg bg-brand-red-500/5 text-brand-red-600 hover:bg-brand-red-500/10 active:scale-95 transition"
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
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease }}
              className="absolute top-0 inset-x-0 bg-white rounded-b-2xl shadow-2xl pt-24 pb-8 max-h-[100dvh] overflow-y-auto"
            >
              <div className="h-1 w-full brand-gradient absolute top-0 left-0 right-0" />

              <div className="px-6 space-y-1">
                {[
                  { label: "Services", href: "/services", desc: "Dedicated pages for each practice area" },
                  { label: "Work", href: "/#work", desc: "260+ shipped projects" },
                  { label: "Process", href: "/#process", desc: "How we engage" },
                  { label: "Reviews", href: "/#testimonials", desc: "150+ verified" },
                  { label: "Blog", href: "/blog", desc: "Guides & insights" },
                  { label: "About", href: "/about", desc: "The team behind Devcuts Media" },
                ].map((item, i) => {
                  const active =
                    (item.label === "About" && isAbout) ||
                    (item.label === "Services" && isServices) ||
                    (item.label === "Blog" && isBlog) ||
                    (item.label === "Work" && isHome);
                  return (
                    <MotionLink
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.07 * i + 0.12, duration: 0.4, ease }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-black/10 last:border-0 group"
                    >
                      <div>
                        <p className={`text-base font-semibold ${active ? "text-brand-red-600" : "text-ink"}`}>{item.label}</p>
                        <p className="text-xs text-ink-soft/60 mt-0.5">{item.desc}</p>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${active ? "text-brand-red-500" : "text-ink-soft/60 group-hover:text-brand-red-500"} group-hover:translate-x-0.5 transition-all`} />
                    </MotionLink>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease }}
                className="px-6 mt-6 space-y-3"
              >
                <LearnLink variant="drawer" />
                <a
                  href={contactHref}
                  onClick={() => setMobileOpen(false)}
                  className="relative btn btn-primary rounded-full w-full py-3.5 text-sm"
                >
                  <span className="relative">Start a project</span>
                  <ArrowRight className="relative w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923405609087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-black/10 text-ink-soft font-semibold text-sm hover:bg-[var(--color-bg-soft)] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}