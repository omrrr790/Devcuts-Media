"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, PenLine } from "lucide-react";
import { allPosts, type Post } from "../blog/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const [featured, ...rest] = allPosts;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
      {/* hero */}
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
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
              <PenLine className="w-3 h-3" /> Insights
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-[-0.025em] leading-[1.08] text-ink max-w-4xl"
          >
            Ideas on software,{" "}
            <span className="bg-clip-text text-transparent brand-gradient">
              growth & automation.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            Practical guides on building, scaling, and automating digital
            products — written by the team that ships them.
          </motion.p>
        </motion.div>
      </section>

      {/* content */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-28">
          {/* featured */}
          {featured && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12"
            >
              <FeaturedCard post={featured} />
            </motion.div>
          )}

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-[11px] font-bold uppercase tracking-wider">
      {label}
    </span>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-[var(--brand-black)] text-white p-8 sm:p-10 lg:p-14 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(80% 140% at 100% 0%, rgba(200,30,30,0.22) 0%, rgba(200,30,30,0) 55%)",
        }}
      />
      <div className="relative max-w-2xl">
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[var(--brand-glow)] text-[11px] font-bold uppercase tracking-wider">
            Featured
          </span>
          <span className="text-xs font-medium text-white/50">
            {post.category}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight leading-[1.15] mb-4 group-hover:text-white transition-colors">
          {post.title}
        </h2>
        <p className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-7">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50 font-medium">
          <span>{post.author}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[var(--brand-glow)]" />
            {post.readingTime}
          </span>
          <span>{formatDate(post.date)}</span>
        </div>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-glow)]">
          Read article
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative h-full flex flex-col p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-[0_28px_60px_-28px_rgba(122,14,14,0.32)] transition-shadow"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

      <div className="flex items-center justify-between mb-5">
        <CategoryChip label={post.category} />
        <ArrowUpRight className="w-4 h-4 text-ink-soft/50 group-hover:text-brand-red-600 transition-colors" />
      </div>

      <h3 className="text-lg md:text-xl font-bold font-display text-ink tracking-tight mb-3 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-ink-soft font-light leading-relaxed mb-6 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-4 pt-5 border-t border-black/10 text-xs text-ink-soft/70 font-medium">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-red-500" />
          {post.readingTime}
        </span>
        <span>{formatDate(post.date)}</span>
      </div>
    </Link>
  );
}
