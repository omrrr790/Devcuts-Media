import { GraduationCap, ArrowUpRight } from "lucide-react";

/* Single source of truth for the Devcuts Learn (LMS) destination.
   Change here and every placement updates. */
export const LEARN_URL = "https://devcuts.vercel.app/login";

type Variant = "header" | "drawer";

/* Devcuts Learn is a separate product from the agency services, so it
   wears a maroon gradient fill instead of the flat-black `btn-primary`
   used by every service CTA. That keeps the two offers visually
   distinct while still reading as the header's primary action. */
const variants: Record<Variant, string> = {
  header: "gap-2 px-5 py-2.5 text-sm",
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
      className={`group relative inline-flex items-center overflow-hidden rounded-full brand-gradient-maroon font-bold text-white shadow-[0_14px_34px_-16px_rgba(122,14,14,0.60)] transition-all duration-300 hover:brightness-[1.08] hover:shadow-[0_20px_44px_-14px_rgba(122,14,14,0.75)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600 ${variants[variant]} ${className}`}
    >
      {/* top edge highlight — gives the pill a little depth */}
      <span
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/30"
        aria-hidden
      />

      {/* light sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        aria-hidden
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </span>

      <GraduationCap
        className="relative h-[1.15rem] w-[1.15rem] shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        strokeWidth={2.25}
        aria-hidden
      />

      {isDrawer ? (
        <span className="relative flex min-w-0 flex-col">
          <span className="text-[0.9375rem] leading-tight">Devcuts Learn</span>
          <span className="mt-0.5 text-xs font-medium text-white/75">
            White-label LMS for institutes
          </span>
        </span>
      ) : (
        <span className="relative leading-none">Devcuts Learn</span>
      )}

      <ArrowUpRight
        className="relative h-4 w-4 shrink-0 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />

      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
