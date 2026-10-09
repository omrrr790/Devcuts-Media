"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { postBySlug, relatedPosts, type Block, type Post } from "../blog/data";
import { services } from "../services/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogArticle({ slug }: { slug: string }) {
  const post = postBySlug(slug);
  if (!post) return null;
  const related = relatedPosts(slug);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] overflow-x-hidden font-sans">
      {/* hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-56 -right-52 h-[720px] w-[720px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0.04) 40%, rgba(200,30,30,0) 74%)",
            }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-44 pb-10 sm:pb-12"
        >
          <motion.nav
            variants={fadeUp}
            aria-label="Breadcrumb"
            className="mb-6 text-xs font-medium text-ink-soft/70 flex items-center gap-1.5"
          >
            <Link href="/" className="hover:text-brand-red-600 transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/blog" className="hover:text-brand-red-600 transition-colors">
              Blog
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink-soft truncate max-w-[45vw]">{post.category}</span>
          </motion.nav>

          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-[-0.025em] leading-[1.1] text-ink max-w-4xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-ink-soft font-light leading-relaxed max-w-3xl"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-soft/70"
          >
            <span className="inline-flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-red-500" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-red-500" />
              {post.readingTime}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </motion.div>
        </motion.div>
      </section>

      {/* body + aside */}
      <section className="relative overflow-hidden bg-[var(--color-bg-soft)]">
        <div className="container mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* article */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="bg-white rounded-2xl border border-black/10 shadow-[0_20px_60px_-34px_rgba(122,14,14,0.35)] p-8 sm:p-10 lg:p-14"
            >
              <div className="space-y-5">
                {post.content.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </div>

              {/* tags */}
              <div className="mt-10 pt-8 border-t border-black/10 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-bg-soft)] border border-black/10 text-xs font-semibold text-ink-soft"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-red-600 hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </motion.article>

            {/* aside */}
            <aside className="space-y-6 lg:sticky lg:top-28 self-start">
              {/* author */}
              <div className="rounded-2xl bg-white border border-black/10 shadow-sm p-6">
                <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white font-display font-black mb-4">
                  {post.author
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-soft/60 mb-1">
                  Written by
                </p>
                <p className="text-base font-bold font-display text-ink mb-3">
                  {post.author}
                </p>
                <p className="text-sm text-ink-soft font-light leading-relaxed">
                  Part of the Devcuts Media team building web, mobile, and AI
                  systems for businesses worldwide.
                </p>
              </div>

              {/* services — internal links back to service pages */}
              <div className="rounded-2xl bg-white border border-black/10 shadow-sm p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-soft/60 mb-4">
                  Our services
                </h3>
                <ul className="space-y-3">
                  {services.slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between text-sm font-semibold text-ink-soft hover:text-brand-red-600 transition-colors"
                      >
                        {s.navLabel}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red-600 hover:gap-2.5 transition-all"
                >
                  All services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-[var(--brand-black)] text-white p-7">
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(90% 120% at 100% 0%, rgba(200,30,30,0.22) 0%, rgba(200,30,30,0) 60%)",
                  }}
                />
                <div className="relative">
                  <h3 className="text-lg font-bold font-display leading-snug mb-2">
                    Have a project in mind?
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
                    Get a fixed-scope proposal within 24 hours.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl btn btn-light text-sm"
                  >
                    Start a project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* related */}
          {related.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-xl md:text-2xl font-bold font-display text-ink tracking-tight mb-6">
                More from the blog
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-xl md:text-2xl font-bold font-display text-ink tracking-tight pt-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-lg font-bold font-display text-ink tracking-tight pt-2">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full brand-gradient shrink-0"
                aria-hidden
              />
              <span className="text-sm md:text-base text-ink-soft font-light leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="relative border-l-2 border-brand-red-500 pl-5 py-1">
          <p className="text-base md:text-lg text-ink font-display font-medium leading-relaxed italic">
            {block.text}
          </p>
        </blockquote>
      );
    default:
      return (
        <p className="text-sm md:text-base text-ink-soft font-light leading-relaxed">
          {block.text}
        </p>
      );
  }
}

function RelatedCard({ post }: { post: Post }) {
  return (
    <Link
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
  );
}
