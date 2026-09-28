"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Building2, AlertTriangle, GitBranch, Quote, Users, Layers, ArrowRight, MessageCircle,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* lucide removed brand/social icons (licensing) — inline brand SVGs
   matching the Footer's set, sized via the same className prop. */
type IconProps = { className?: string };

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

type SocialKey = "whatsapp" | "instagram" | "linkedin" | "twitter";

const socialItems: { key: SocialKey; label: string; Icon: React.ComponentType<IconProps> }[] = [
  { key: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "twitter", label: "Twitter", Icon: TwitterIcon },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const team = [
  {
    name: "Syed Meer Ali Shah",
    role: "Co-Founder",
    bio: "The architect behind Devcuts' technical foundation. Meer designs and builds across the full stack — from frontend interfaces to backend systems — and leads the ERP, Frappe, and CRM architecture that powers our clients' operations. He originally shaped the vision for Devcuts and continues to drive its technical direction.",
    image: null as string | null,
    social: {
      whatsapp: "#",   // e.g. https://wa.me/92XXXXXXXXXX
      instagram: "#",  // e.g. https://instagram.com/username
      linkedin: "#",   // e.g. https://linkedin.com/in/username
      twitter: "#",    // e.g. https://x.com/username
    },
  },
  {
    name: "Muhammad Omar Kafeel",
    role: "Frontend Lead",
    bio: "A frontend specialist with a sharp eye for interface design, Omar also works comfortably across the backend when projects call for it. He's played a key role supporting the ERP and CRM builds, working closely alongside Meer to bring complex systems to life.",
    image: null as string | null,
    social: {
      whatsapp: "#",   // e.g. https://wa.me/92XXXXXXXXXX
      instagram: "#",  // e.g. https://instagram.com/username
      linkedin: "#",   // e.g. https://linkedin.com/in/username
      twitter: "#",    // e.g. https://x.com/username
    },
  },
  {
    name: "Zaki Ul Husnain",
    role: "Full-Stack Developer",
    bio: "Zaki manages the ongoing maintenance and evolution of our ERP systems across both frontend and backend, and built several of our flagship internal products end-to-end, including the Tax ERP dashboard, the multi-site admin dashboard, and TaskFlow. A full-stack web and software developer who keeps our production systems running smoothly.",
    image: null as string | null,
    social: {
      whatsapp: "#",   // e.g. https://wa.me/92XXXXXXXXXX
      instagram: "#",  // e.g. https://instagram.com/username
      linkedin: "#",   // e.g. https://linkedin.com/in/username
      twitter: "#",    // e.g. https://x.com/username
    },
  },
];

const aboutStats = [
  { icon: Users, value: "3", label: "Core Team Members" },
  { icon: Layers, value: "260+", label: "Projects Delivered" },
];

/* Circular team avatar. Renders a clean initials monogram until a real
   photo path is supplied in the team data above (no failed request). */
function TeamPhoto({ src, name }: { src: string | null; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 mx-auto border border-brand-red-500/20 shadow-[0_18px_40px_-18px_rgba(122,14,14,0.45)]">
      {!src || failed ? (
        <div className="flex items-center justify-center w-full h-full bg-brand-red-500/10 text-brand-red-600 font-display font-black text-3xl">
          {initials}
        </div>
      ) : (
        <Image
          src={src}
          alt={`${name} — Devcuts Media`}
          fill
          sizes="128px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
    {children}
  </span>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight leading-tight">
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">

      {/* a) Eyebrow + headline + intro */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-56 -right-52 h-[760px] w-[760px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0.04) 40%, rgba(200,30,30,0) 74%)",
            }}
          />
          <div
            className="absolute -bottom-64 -left-56 h-[720px] w-[720px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(122,14,14,0.08) 0%, rgba(122,14,14,0.03) 44%, rgba(122,14,14,0) 76%)",
            }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Eyebrow>
              <Building2 className="w-3 h-3" /> About Devcuts
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] text-ink max-w-4xl"
          >
            Built for businesses that
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent brand-gradient">
              {" "}need more than a website.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            From branded ERPs to multi-site dashboards and internal tools, we build the software
            layer that Pakistani businesses actually run on — not a template, not an off-the-shelf
            SaaS that almost fits. Devcuts is a small, hands-on studio that designs, builds, and
            maintains real systems for real operations.
          </motion.p>
        </motion.div>
      </section>

      {/* b) The problem we saw */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <Eyebrow>
              <AlertTriangle className="w-3 h-3" /> The Problem We Saw
            </Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mb-6">
            <SectionHeading>Fragmented tools, manual busywork.</SectionHeading>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            Most growing businesses in Pakistan run on a patchwork of WhatsApp groups, spreadsheets,
            and disconnected tools — tax filings tracked manually, leads scattered across six
            different website backends, support requests lost in chat threads. Off-the-shelf
            software either doesn&apos;t fit the workflow or charges enterprise prices for a fraction
            of what&apos;s needed. Hiring a full internal engineering team isn&apos;t realistic for most
            teams this size. None of the existing options actually solve the problem.
          </motion.p>
        </motion.div>
      </section>

      {/* c) What Devcuts does differently */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <Eyebrow>
              <GitBranch className="w-3 h-3" /> What Devcuts Does Differently
            </Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mb-6">
            <SectionHeading>Software built around your workflow.</SectionHeading>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            We design and build custom ERPs, CRMs, admin dashboards, and internal tools tailored to
            how a specific business actually operates — not a generic template stretched to fit.
            Every engagement is scoped, fixed-price, and delivered by the same small team from
            first call to post-launch support, so nothing gets lost in handoffs. We stay close
            after launch too — maintaining, extending, and evolving the system as the business
            grows.
          </motion.p>
        </motion.div>
      </section>

      {/* d) Our mission — quote block */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-40 -right-40 w-[700px] h-[700px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,30,30,0.07) 0%, rgba(200,30,30,0.03) 36%, rgba(200,30,30,0) 70%)",
            }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="relative p-8 sm:p-10 lg:p-14 rounded-2xl bg-[var(--color-bg-soft)] border border-black/10 shadow-[0_30px_80px_-40px_rgba(122,14,14,0.25)] max-w-4xl mx-auto"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient rounded-t-2xl" />
            <Quote className="w-8 h-8 text-brand-red-500 mb-5" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-ink tracking-tight leading-snug">
              &ldquo;Every growing business deserves software built around how it actually works —
              not the other way around. We handle the engineering so our clients can focus on
              running their business.&rdquo;
            </p>
            <p className="mt-6 text-xs font-black uppercase tracking-widest text-ink-soft/60">
              — Devcuts Media
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* e) The team behind Devcuts */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <div className="inline-block mb-5">
              <Eyebrow>
                <Users className="w-3 h-3" /> The Team Behind Devcuts
              </Eyebrow>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight">
              The hands-on studio behind the software.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_24px_60px_-24px_rgba(122,14,14,0.25)] transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <TeamPhoto src={m.image} name={m.name} />
                <h3 className="mt-4 text-lg font-bold font-display text-ink">{m.name}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-widest text-brand-red-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-ink-soft font-light leading-relaxed flex-1">{m.bio}</p>

                {/* Hover-reveal social icons — reserved height so the
                    row fades/slides in without shifting the card layout. */}
                <div
                  className="flex items-center justify-center gap-2.5 pt-6 mt-6 border-t border-black/10 w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  {socialItems.map(({ key, label, Icon }) => {
                    const href = m.social[key];
                    const inactive = href === "#";
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={inactive ? (e) => e.preventDefault() : undefined}
                        aria-label={`${m.name} on ${label}`}
                        aria-disabled={inactive}
                        className={`group/icon w-9 h-9 rounded-full border border-black/10 shadow-sm flex items-center justify-center transition-all duration-200 ${
                          inactive
                            ? "bg-white text-ink-soft/40 cursor-default"
                            : "bg-white text-ink-soft hover:brand-gradient hover:text-white hover:shadow-[0_10px_26px_-10px_rgba(200,30,30,0.7)]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* f) Stats row */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {aboutStats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group relative p-6 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_24px_60px_-24px_rgba(122,14,14,0.25)] transition-shadow duration-300 flex flex-col items-center text-center overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-11 h-11 rounded-full bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center mb-3 group-hover:bg-brand-red-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-red-600" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black leading-none tracking-tight mb-2">
                    <span className="bg-clip-text text-transparent brand-gradient">{s.value}</span>
                  </div>
                  <p className="font-bold text-ink text-sm">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* g) Final CTA band */}
      <section className="relative overflow-hidden bg-[var(--brand-black)]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(80% 120% at 50% 0%, rgba(200,30,30,0.18) 0%, rgba(200,30,30,0) 60%)",
          }}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28 relative z-10 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight max-w-3xl mx-auto"
          >
            Ready to build your next project?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl mx-auto"
          >
            Tell us what you&apos;re working on — we&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <Link
              href="/#contact"
              className="btn btn-light rounded-full px-8 py-4 text-sm inline-flex items-center justify-center gap-2.5"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}