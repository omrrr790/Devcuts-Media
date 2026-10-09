import { GraduationCap, ArrowUpRight } from "lucide-react";

/* Single source of truth for the Devcuts Learn (LMS) destination.
   Change here and every placement updates. */
export const LEARN_URL = "https://devcuts.vercel.app/login";

type Variant = "header" | "drawer";

/* Header: stays black so the black & white feel is kept and it matches the
   site's `btn-primary` language. Maroon fades in only on hover/focus.
   Drawer: solid maroon, so it never blends into the black "Start a project"
   button right below it. In both cases maroon is the "separate product"
   signal — restrained in the header, structural on mobile. */
const variants: Record<Variant, string> = {
  header: "gap-2 px-4 py-2.5 text-sm",
  drawer: "gap-3.5 w-full justify-start px-6 py-4 text-left",
};

export default function LearnLink({
  variant = "header",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isDrawer = variant === "drawer";

  return (
    <a
      href={LEARN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center overflow-hidden rounded-full bg-[var(--brand-black)] font-bold text-white shadow-[0_14px_34px_-16px_rgba(200,30,30,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_-16px_rgba(200,30,30,0.7)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600 ${variants[variant]} ${className}`}
    >
      {/* maroon gradient: always on in the drawer (so it reads apart from
          the black "Start a project" button below it), hover-only in the
          header to keep the black & white feel */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full brand-gradient-maroon transition-opacity duration-300 ${
          isDrawer
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
        aria-hidden
      />

      {/* light sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        aria-hidden
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </span>

      <GraduationCap
        className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        strokeWidth={2.25}
        aria-hidden
      />

      {isDrawer ? (
        <span className="relative flex min-w-0 flex-col">
          <span className="text-[0.9375rem] leading-tight">Devcuts Learn</span>
          <span className="mt-0.5 text-xs font-medium text-white/70">
            White-label LMS for institutes
          </span>
        </span>
      ) : (
        <span className="relative leading-none">Devcuts Learn</span>
      )}

      <ArrowUpRight
        className="relative h-3.5 w-3.5 shrink-0 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />

      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
