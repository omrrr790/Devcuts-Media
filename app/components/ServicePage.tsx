"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles, Quote,
} from "lucide-react";
import Reveal from "./Reveal";
import { serviceBySlug, type ServiceShot } from "../services/data";
import { postBySlug } from "../blog/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* Real product capture. Raw screenshots get a browser window frame so they
   read as a shipped product; files that already contain device framing are
   rendered as-is. Both keep their true aspect ratio, so nothing is cropped
   or letterboxed against a fixed box. */
function ProductShot({ shot }: { shot: ServiceShot }) {
  if (shot.chrome === "device") {
    return (
      <div className="relative mx-auto w-full max-w-4xl">
        <div
          className="pointer-events-none absolute -inset-x-6 -top-6 bottom-10 rounded-[2rem] sm:-inset-x-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0) 68%)",
          }}
          aria-hidden
        />
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 1024px) 896px, (min-width: 640px) 90vw, 92vw"
          priority
          className="relative w-full h-auto drop-shadow-[0_40px_70px_-35px_rgba(10,10,10,0.55)]"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div
        className="pointer-events-none absolute -inset-x-6 -top-6 bottom-10 rounded-[2rem] sm:-inset-x-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0) 68%)",
        }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_50px_100px_-45px_rgba(122,14,14,0.45)] sm:rounded-3xl sm:p-3">
        <div className="flex items-center gap-2 px-2 pb-2 pt-1 sm:px-3 sm:pb-3 sm:pt-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
          <span className="ml-2 hidden h-4 flex-1 rounded-full bg-ink/[0.07] sm:block" />
        </div>
        <div className="overflow-hidden rounded-xl bg-[var(--color-bg-soft)] sm:rounded-2xl">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 1024px) 832px, (min-width: 640px) 90vw, 92vw"
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

/* Each service links out to the blog posts most relevant to it, keeping
   topical authority flowing between the service and editorial sections. */
const serviceReading: Record<string, string[]> = {
  "web-development": ["web-app-development-process", "custom-software-cost-pakistan"],
  "mobile-apps": ["web-app-development-process", "ai-automation-for-business"],
  "erp-crm": ["erp-vs-off-the-shelf", "custom-software-cost-pakistan"],
  "ai-automation": ["ai-automation-for-business", "top-software-houses-islamabad"],
  "seo-growth": ["top-software-houses-islamabad", "custom-software-cost-pakistan"],
  "cloud-devops": ["web-app-development-process", "erp-vs-off-the-shelf"],
};

export default function ServicePage({ slug }: { slug: string }) {
  const service = serviceBySlug(slug);
  if (!service) return null;

  const relatedServices = service.related
    .map((s) => serviceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];

  const reading = (serviceReading[service.slug] ?? [])
    .map((s) => postBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof postBySlug>>[];

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
      {/* b) hero */}
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
          <motion.div variants={fadeUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft/70 hover:text-brand-red-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All services
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
              <Icon className="w-3 h-3" /> {service.eyebrow}
            </span>
            <span className="ml-3 text-xs font-semibold text-ink-soft/60">
              {service.tagline}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] text-ink max-w-4xl"
          >
            {service.heroTitleTop}
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent brand-gradient">
              {" "}{service.heroTitleAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            {service.heroLead}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-9">
            <Link
              href="/#contact"
              className="btn btn-primary px-7 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2.5"
            >
              Start this project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#work"
              className="btn btn-secondary px-7 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2"
            >
              View our work
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 sm:mt-20">
            <ProductShot shot={service.shot} />
          </motion.div>
        </motion.div>
      </section>

      {/* c) feature grid */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3 h-3" /> What&apos;s Included
            </span>
            <Reveal dir="up" amount={0.3}>
              <p className="text-sm font-bold text-ink-soft mb-1 max-w-2xl mx-auto">
                Everything you need, from one senior team.
              </p>
            </Reveal>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.includes.map((inc, i) => {
              const IncIcon = inc.icon;
              const enter =
                i % 3 === 0
                  ? { opacity: 0, x: -48 }
                  : i % 3 === 1
                    ? { opacity: 0, y: 32 }
                    : { opacity: 0, x: 48 };
              return (
                <motion.div
                  key={inc.title}
                  initial={enter}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, ease }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-7 pb-8 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-11 h-11 rounded-2xl bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center mb-5 group-hover:bg-brand-red-600 transition-colors">
                    <IncIcon className="w-5 h-5 text-brand-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-ink tracking-tight mb-2">
                    {inc.title}
                  </h3>
                  <p className="text-sm text-ink-soft font-light leading-relaxed flex-1">
                    {inc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* d) bullets + stack */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
          <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
                  <Check className="w-3 h-3" /> What you get
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4"
              >
                Built the way we run{" "}
                <span className="brand-gradient bg-clip-text text-transparent">
                  every project.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-xl mb-6"
              >
                No hand-offs, no account-manager fog. The same senior people who scope
                your build stay on it through launch and beyond.
              </motion.p>
              <ul className="space-y-2.5">
                {service.bullets.map((p) => (
                  <motion.li
                    key={p}
                    variants={fadeUp}
                    className="flex items-center gap-2.5 text-sm font-medium text-ink-soft"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-red-500/10 border border-brand-red-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-red-600" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* stack */}
            <Reveal dir="right" amount={0.2} className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[var(--brand-black)] p-8 lg:p-10 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(90% 120% at 100% 0%, rgba(200,30,30,0.22) 0%, rgba(200,30,30,0) 60%)",
                  }}
                />
                <p className="relative text-white/50 text-xs font-bold uppercase tracking-[0.18em] mb-6">
                  The stack we bring
                </p>
                <div className="relative flex flex-wrap gap-2.5">
                  {service.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold hover:text-white hover:border-brand-red-500/50 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* e) related services */}
      {relatedServices.length > 0 && (
        <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28">
            <Reveal dir="up" amount={0.3}>
              <div className="flex items-center justify-center gap-5 mb-10">
                <div className="h-px w-14 bg-black/10" aria-hidden />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-ink-soft">
                  Explore more services
                </span>
                <div className="h-px w-14 bg-black/10" aria-hidden />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((r, i) => {
                const RIcon = r.icon;
                const enter =
                  i % 3 === 0
                    ? { opacity: 0, x: -48 }
                    : i % 3 === 1
                      ? { opacity: 0, y: 32 }
                      : { opacity: 0, x: 48 };
                return (
                  <motion.div
                    key={r.slug}
                    initial={enter}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.85, ease }}
                    whileHover={{ y: -5 }}
                    className="group relative p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-red-500/10 border border-brand-red-500/15 flex items-center justify-center group-hover:bg-brand-red-600 transition-colors">
                        <RIcon className="w-4.5 h-4.5 text-brand-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ink-soft/50 group-hover:text-brand-red-600 transition-colors" />
                    </div>
                    <h4 className="text-base font-bold font-display text-ink tracking-tight mb-1">
                      {r.navLabel}
                    </h4>
                    <p className="text-xs text-ink-soft/60 mb-4">{r.tagline}</p>
                    <Link
                      href={`/services/${r.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-red-600 hover:gap-2 transition-all"
                    >
                      View service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* e2) related reading — internal links to the blog */}
      {reading.length > 0 && (
        <section className="relative overflow-hidden bg-[var(--color-bg)]">
          <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24">
            <Reveal dir="up" amount={0.3}>
              <div className="flex items-center justify-center gap-5 mb-10">
                <div className="h-px w-14 bg-black/10" aria-hidden />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-ink-soft">
                  From the blog
                </span>
                <div className="h-px w-14 bg-black/10" aria-hidden />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {reading.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-[11px] font-bold uppercase tracking-wider self-start mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold font-display text-ink tracking-tight mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-soft font-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red-600">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-9">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-red-600 hover:gap-3 transition-all"
              >
                Browse all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* f) final CTA band */}
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
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-bold uppercase tracking-widest">
              <Quote className="w-3 h-3 text-[var(--brand-glow)]" />
              {service.name}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight max-w-3xl mx-auto"
          >
            Ready to get {service.heroTitleAccent.toLowerCase()}
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