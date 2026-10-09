import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] flex items-center justify-center px-6 font-sans relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-40 h-[600px] w-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,30,30,0.10) 0%, rgba(200,30,30,0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-500/5 border border-brand-red-500/15 text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-6">
          <Search className="w-3 h-3" /> Error 404
        </span>

        <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight text-ink mb-4">
          Page not{" "}
          <span className="bg-clip-text text-transparent brand-gradient">
            found.
          </span>
        </h1>

        <p className="text-base md:text-lg text-ink-soft font-light leading-relaxed mb-9">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn btn-primary rounded-full px-7 py-3.5 text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back home
          </Link>
          <Link
            href="/services"
            className="btn btn-secondary rounded-full px-7 py-3.5 text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Explore services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
