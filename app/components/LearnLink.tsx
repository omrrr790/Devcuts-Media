import { GraduationCap, ArrowUpRight } from "lucide-react";

/* Single source of truth for the Devcuts Learn (LMS) destination.
   Change here and every placement updates. */
export const LEARN_URL = "https://devcuts.vercel.app/login";

type Variant = "header" | "drawer";

/* Devcuts Learn is a separate product from the agency services, so it gets
   its own restrained maroon-tinted treatment instead of the flat black
   `btn-primary` — it must never compete with the primary "Book Now" CTA.
   Label collapses to "Learn" below xl so the header never overflows. */
const variants: Record<Variant, string> = {
  header: "px-4 py-2.5 text-sm",
  drawer: "w-full justify-center px-6 py-3.5 text-sm",
};

export default function LearnLink({
  variant = "header",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={LEARN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand-red-500/25 bg-brand-red-500/[0.06] font-semibold text-brand-red-700 transition-all duration-300 hover:border-brand-red-500/60 hover:bg-brand-red-500/10 hover:shadow-[0_14px_34px_-16px_rgba(200,30,30,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600 ${variants[variant]} ${className}`}
    >
      {/* light sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        aria-hidden
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </span>

      <GraduationCap
        className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={2}
        aria-hidden
      />

      <span className="relative">
        <span className="hidden xl:inline">Devcuts Learn</span>
        <span className="xl:hidden">Learn</span>
      </span>

      <ArrowUpRight
        className="relative h-3.5 w-3.5 shrink-0 opacity-55 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />

      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
