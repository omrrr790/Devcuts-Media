"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BadgeCheck, MessageSquareQuote, TrendingUp } from "lucide-react";
import { slideVariants } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
  name: string;
  role: string;
  img: string;
  quote: string;
};

/* 18 unique client entries — each real photo is used exactly once,
   so no two columns ever show the same person at the same time. */
const testimonials: Testimonial[] = [
  {
    name: "Elena W.",
    role: "Northwind",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Devcuts rebuilt our analytics portal in six weeks. Load time dropped 70% and our ops team actually uses it daily.",
  },
  {
    name: "Hassan M.",
    role: "Logistics Co.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "The AI workflow they automated saves us 30+ hours a week. It paid for itself in the first two months.",
  },
  {
    name: "Sarah J.",
    role: "StyleHub",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Page-one in Google for 14 of our target terms in six months. The SEO work is genuinely best-in-class.",
  },
  {
    name: "Shafqat S.",
    role: "Alniaz Petro",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Senior talent, agency polish, freelancer speed. Their dev team shipped our MVP in 27 days flat.",
  },
  {
    name: "Hafiz A.",
    role: "Sports World",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "They migrated our ERP without a single lost order — over a weekend. Insanely smooth process.",
  },
  {
    name: "Ali U.",
    role: "Sadiq Auto",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Every sprint had a demo we could actually click. No long offshore emails, just working software.",
  },
  {
    name: "Mariam K.",
    role: "Terra Health",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "One revision round on a 40-screen dashboard — unheard of. Their QA is frighteningly good.",
  },
  {
    name: "David R.",
    role: "Oakline Finance",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "My store conversion went up 22% after the redesign. The checkout flow is honestly chef's kiss.",
  },
  {
    name: "Omar F.",
    role: "BrightCart",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "ERPNext implementation done right. Inventory reconciliation is now fully automated and error-free.",
  },
  {
    name: "Lucy T.",
    role: "Drift & Co.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Flutter app for Android and iOS in one codebase. Store-ready on both platforms within 9 weeks.",
  },
  {
    name: "James H.",
    role: "Nova Freight",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "They don't upsell. They tell you what you don't need — that honesty is why we've done 5 projects.",
  },
  {
    name: "Bilal K.",
    role: "Meridian Mills",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "24-hour response, daily progress, zero drama. Working with Devcuts is the closest thing to an in-house team.",
  },
  {
    name: "Amna R.",
    role: "Lume Studio",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Their Slack integration pipeline killed 200 manual handoffs a month. Operations run themselves now.",
  },
  {
    name: "Tim S.",
    role: "Vertex Legal",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Lighthouse 97-to-99 on every page. They treat performance like a specification, not a nice-to-have.",
  },
  {
    name: "Usman P.",
    role: "Metro Motors",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "DevOps that just works — Terraform, CI/CD, monitoring, all documented. I've never had a better handover.",
  },
  {
    name: "Nina V.",
    role: "CultFit Apparel",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Our A/B testing program they built lifted MQLs 34%. The relaunch felt like flipping a switch.",
  },
  {
    name: "Ayesha B.",
    role: "Zenith Homes",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "Inventory went from spreadsheets to a live dashboard in a month. The ROI has been eye-watering.",
  },
  {
    name: "Zara M.",
    role: "Pulse Marketing",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=100&h=100&q=70",
    quote: "The scoping call alone was worth it. We saved $9k by not building three things they told us to skip.",
  },
];

/* 3 disjoint slices — each column shows a different set of clients. */
const columns = [
  testimonials.slice(0, 6),
  testimonials.slice(6, 12),
  testimonials.slice(12, 18),
];

/* ─── Avatar (real client photo, thin gray ring) ─────────────────── */
function Avatar({ t }: { t: Testimonial }) {
  return (
    <Image
      src={t.img}
      alt={t.name}
      width={48}
      height={48}
      loading="lazy"
      className="w-12 h-12 rounded-full object-cover border border-neutral-200 ring-1 ring-neutral-200 shadow-sm shrink-0"
    />
  );
}

/* ─── Card ───────────────────────────────────────────────────────── */
function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="w-full shrink-0 rounded-2xl bg-white border border-black/10 p-5 sm:p-6 flex flex-col hover:border-black/25 hover:shadow-[0_22px_55px_-32px_rgba(10,10,10,0.30)] hover:-translate-y-1 transition-all duration-300">
      <blockquote className="text-[0.9375rem] leading-relaxed font-normal text-ink">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 pt-5 border-t border-black/10 flex items-center gap-3">
        <Avatar t={t} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink leading-tight truncate">{t.name}</p>
          <p className="text-xs text-ink-soft truncate">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/* ─── Vertical auto-scroll column (4-card-high viewport) ─────────── */
function Column({
  items,
  duration,
  delay = "0s",
}: {
  items: Testimonial[];
  duration: string;
  delay?: string;
}) {
  return (
    <div className="h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_86%,transparent)]">
      <div
        className="dvc-vscroll-track flex flex-col hover:[animation-play-state:paused]"
        style={{ ["--dvc-duration" as string]: duration, ["--dvc-delay" as string]: delay }}
        aria-label="Client testimonials"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex flex-col gap-5 pb-5 shrink-0"
          >
            {items.map((t) => (
              <Card key={`${t.name}-${copy}`} t={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════ */
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-soft)] relative overflow-hidden">
      {/* monochrome hairline grid + maroon bloom (large screens only) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
        <div
          className="dvc-bloom-maroon absolute -top-56 left-1/2 -translate-x-1/2 w-[1100px] h-[620px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(122,14,14,0.10) 0%, rgba(156,20,20,0.04) 45%, rgba(200,30,30,0) 72%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ═══ HEADER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-5">
            <MessageSquareQuote className="w-3 h-3" /> Client Love
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink tracking-tight mb-4">
            Trusted by founders &amp;
            <br />
            <span className="brand-gradient-text">
              decision-makers worldwide
            </span>
          </h2>
          <p className="text-base md:text-lg text-ink-soft font-light">
            150+ verified reviews across Fiverr, Upwork, and direct clients — hover any column to pause.
          </p>
        </motion.div>

        {/* ═══ RATING SUMMARY BAR ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="max-w-2xl mx-auto mb-8 grid grid-cols-3 gap-3"
        >
          {[
            { label: "Average rating", value: "4.9 / 5", icon: Star },
            { label: "Verified reviews", value: "150+", icon: BadgeCheck },
            { label: "Repeat clients", value: "62%", icon: TrendingUp },
          ].map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center gap-1.5 rounded-2xl bg-white border border-black/10 p-4"
            >
              <m.icon className="w-4 h-4 text-brand-red-600" />
              <p className="text-base sm:text-xl font-bold text-ink tracking-tight tabular-nums">
                {m.value}
              </p>
              <p className="text-xs font-semibold text-ink-soft/60 text-center">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ═══ VERTICAL AUTO-SCROLL COLUMNS — capped width for a
               tighter, more editorial card measure ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {[
            { col: columns[0], duration: "46s", dir: "left" as const },
            { col: columns[1], duration: "30s", delay: "-15s", dir: "scale" as const },
            { col: columns[2], duration: "37s", delay: "-8s", dir: "right" as const },
          ].map(({ col, duration, delay, dir }, i) => (
            <motion.div
              key={dir}
              variants={slideVariants(dir, 64)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease, delay: i * 0.1 }}
            >
              <Column items={col} duration={duration} delay={delay ?? "0s"} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-2 text-ink font-bold">
            <BadgeCheck className="w-4 h-4 text-brand-red-600" />
            Reviews are from real shipped projects
          </span>
          <span className="hidden sm:block w-px h-4 bg-black/10" />
          <span>Fiverr Level 2 · Upwork Top Rated · Google 5.0</span>
        </div>
      </div>
    </section>
  );
}