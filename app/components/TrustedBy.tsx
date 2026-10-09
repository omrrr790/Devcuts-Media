"use client";

import Image from "next/image";
import { LayoutDashboard, Users, MapPin } from "lucide-react";

const stats = [
  { icon: LayoutDashboard, value: "260+", label: "Projects Delivered" },
  { icon: Users,           value: "150+", label: "Happy Clients" },
];

const projects = [
  { src: "/favicon(mwsd).ico", alt: "Multi-Site Dashboard icon" },
  { src: "/favicon(te).svg",   alt: "Tax ERP Dashboard icon" },
  { src: "/favicon(tf).ico",   alt: "TaskFlow icon" },
  { src: "/crmimg.png",        alt: "CRM icon" },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-[var(--color-bg-strip)] py-16 sm:py-20 lg:py-24">
      {/* maroon bloom — large screens only, so mobile stays flat */}
      <div
        className="dvc-bloom-maroon absolute -bottom-56 left-1/2 -translate-x-1/2 h-[560px] w-[1100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,14,14,0.10) 0%, rgba(156,20,20,0.035) 48%, rgba(200,30,30,0) 72%)",
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* ─── Editorial header: statement left, proof right ─────── */}
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-red-600">
              <MapPin className="h-3 w-3 text-brand-red-600" />
              Our Clients
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-4xl">
              Trusted across
              <br className="hidden sm:block" />{" "}
              <span className="brand-gradient-text">Pakistan &amp; beyond</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-light leading-relaxed text-ink-soft">
              From Karachi and Lahore to Dubai and London — a premium digital
              studio shipping production software for teams that measure
              results, not promises.
            </p>

            <div className="mt-7 flex items-start gap-8 sm:gap-12">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={i > 0 ? "border-l border-black/10 pl-8 sm:pl-12" : ""}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-ink-soft/60" strokeWidth={1.75} />
                    <span className="font-display text-3xl font-black leading-none tracking-tight text-ink tabular-nums sm:text-4xl">
                      {value}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Divider label ─────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-5 lg:mt-16">
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-ink-soft/50">
            Products we&apos;ve shipped
          </span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        {/* ─── Logo marquee inside an inset white panel ───────────── */}
        <div className="relative mt-7 overflow-hidden rounded-2xl border border-black/10 bg-white py-6 sm:py-7">
          {/* edge fades — scoped to the panel background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white via-white/85 to-transparent sm:w-24 md:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white via-white/85 to-transparent sm:w-24 md:w-36" />

          <div className="dvc-marquee-track dvc-marquee-mobile-slow flex w-max items-center gap-14 hover:[animation-play-state:paused] sm:gap-20 md:gap-24">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-14 sm:gap-20 md:gap-24"
              >
                {projects.map((p) => (
                  <span
                    key={`${p.alt}-${copy}`}
                    className="flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-11 w-11 object-contain grayscale opacity-45 transition duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12 sm:w-12"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
