import React from "react";
import {
  ChevronRight, Mail, MapPin, Phone, ArrowUpRight,
  Sparkles, Heart,
  ArrowUp, CheckCircle2, Zap, Users, Star, Clock,
} from "lucide-react";

// ─── Brand SVG icons (lucide removed these due to licensing) ──────────
type IconProps = { className?: string };

const TwitterIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────
const services = [
  { label: "React & Next.js Development", href: "#services" },
  { label: "Full-Stack MERN Apps",         href: "#services" },
  { label: "AI & ML Integration",          href: "#services" },
  { label: "Flutter Mobile Apps",          href: "#services" },
  { label: "Custom ERP / CRM",             href: "#services" },
  { label: "SEO & Digital Marketing",      href: "#services" },
];

const company = [
  { label: "About DevCuts",   href: "#about" },
  { label: "Our Portfolio",   href: "#work" },
  { label: "How We Work",     href: "#process" },
  { label: "Client Reviews",  href: "#testimonials" },
  { label: "Careers",         href: "#" },
  { label: "Blog & Insights", href: "#" },
];

const social = [
  { icon: TwitterIcon,   href: "#", label: "Twitter",   hover: "hover:bg-sky-500 hover:border-sky-500" },
  { icon: LinkedinIcon,  href: "#", label: "LinkedIn",  hover: "hover:bg-blue-600 hover:border-blue-600" },
  { icon: GithubIcon,    href: "#", label: "GitHub",    hover: "hover:bg-slate-700 hover:border-slate-700" },
  { icon: InstagramIcon, href: "#", label: "Instagram", hover: "hover:bg-pink-600 hover:border-pink-600" },
];

const trustStats = [
  { icon: Users,        value: "150+",  label: "Clients served" },
  { icon: Star,         value: "4.9/5", label: "Average rating" },
  { icon: Zap,          value: "24hr",  label: "Response time" },
  { icon: CheckCircle2, value: "260+",  label: "Projects shipped" },
];

const badges = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Python", "Flutter", "AWS"];

// ─── Footer ────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div
        className="absolute top-0 inset-x-0 h-[420px] pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(79,70,229,0.18) 0%, rgba(79,70,229,0) 70%)",
        }}
      />

      {/* ─── CTA BANNER ─────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 pt-16 pb-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.55)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 140% at 100% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%)",
              }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" aria-hidden>
              <defs>
                <pattern id="ctaDots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaDots)" />
            </svg>

            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-14">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-white text-[11px] font-bold uppercase tracking-[0.14em]">
                    Limited slots · Q2
                  </span>
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-[1.08] tracking-tight mb-4">
                  Ready to ship something<br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-sky-200">
                    {" "}your users love?
                  </span>
                </h3>

                <p className="text-indigo-100/80 font-light text-[15px] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Book a free 30-minute strategy call. You'll leave with a real scope, timeline, and
                  budget — no sales pitch.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-6 text-[12.5px] text-indigo-100/90 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> No commitment
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> NDA on request
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Fixed-scope quote
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-white text-indigo-700 text-[14px] font-black hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  <span>Book Free Consultation</span>
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 border border-white/25 text-white text-[14px] font-bold hover:bg-white/20 transition-colors"
                >
                  View Our Work
                </a>
                <p className="text-center text-[11.5px] text-indigo-100/70 flex items-center justify-center gap-1.5 mt-1">
                  <Clock className="w-3 h-3" />
                  Typical reply within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN FOOTER ────────────────────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-flex items-center group">
              <img
                src="/footer-logo-removebg-preview.png"
                alt="DevCutsMedia Logo"
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] origin-left"
              />
            </a>

            <p className="text-slate-400 text-[14px] leading-relaxed font-light max-w-sm">
              Pakistan's premier digital studio — transforming businesses through
              cutting-edge Next.js architecture, Python backends, AI integration,
              and premium UI/UX.
            </p>

            <div className="grid grid-cols-2 gap-2.5 max-w-sm">
              {trustStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-indigo-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[13px] font-black leading-none">{value}</p>
                    <p className="text-slate-500 text-[10.5px] font-medium mt-1 truncate">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              {social.map(({ icon: Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-5 text-[12px] uppercase tracking-[0.16em] flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 inline-block" />
              Services
            </h4>
            <ul className="space-y-1">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 py-2 text-[13.5px] text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-500/50 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-5 text-[12px] uppercase tracking-[0.16em] flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 inline-block" />
              Company
            </h4>
            <ul className="space-y-1">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 py-2 text-[13.5px] text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-500/50 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter column */}
          <div className="lg:col-span-3 space-y-7">
            <div>
              <h4 className="text-white font-black mb-5 text-[12px] uppercase tracking-[0.16em] flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 inline-block" />
                Get in Touch
              </h4>
              <ul className="space-y-2.5">
                {[
                  { icon: Mail,   value: "hello@devcuts.com",   href: "mailto:hello@devcuts.com" },
                  { icon: Phone,  value: "+92 3XX XXX XXXX",    href: "tel:+923000000000" },
                  { icon: MapPin, value: "Islamabad, Pakistan", href: null },
                ].map(({ icon: Icon, value, href }) => (
                  <li key={value}>
                    <a
                      href={href ?? undefined}
                      className={`flex items-start gap-3 group ${href ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-indigo-300" />
                      </div>
                      <span className="text-slate-400 group-hover:text-white text-[13.5px] leading-tight pt-2 transition-colors">
                        {value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <p className="text-white font-bold text-[13px]">Stay in the loop</p>
              </div>
              <p className="text-slate-500 text-[11.5px] mb-4 font-light leading-relaxed">
                Monthly insights on tech, design & growth. No spam.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-[12.5px] focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-colors"
                />
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[12.5px] font-bold hover:from-indigo-500 hover:to-violet-500 transition-all shrink-0 active:scale-95"
                >
                  Join
                </button>
              </div>
              <p className="text-slate-600 text-[10.5px] mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Join 2,400+ founders & engineers
              </p>
            </div>
          </div>
        </div>

        {/* ─── Tech shelf ──────────────────────────────────────── */}
        <div className="pt-6 pb-8 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-500/[0.06] transition-colors text-[11px] font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Bottom bar ──────────────────────────────────────── */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[12px] flex items-center gap-1.5 text-center md:text-left">
            © {new Date().getFullYear()} DevCuts Media. All rights reserved. Made with{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            by Developer Omar in Islamabad, Pakistan.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] text-slate-500 hover:text-indigo-400 transition-colors"
              >
                {link}
              </a>
            ))}

            <a
              href="#top"
              aria-label="Back to top"
              className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}