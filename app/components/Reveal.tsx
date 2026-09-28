"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export type SlideDir = "up" | "left" | "right" | "scale";

/* Resolved from/to states per direction, so callers can treat them as
   plain motion props (avoids Variants indexing type headaches). */
export function slideTargets(
  dir: SlideDir,
  distance = 48
): { from: TargetAndTransition; to: TargetAndTransition } {
  switch (dir) {
    case "left":
      return {
        from: { opacity: 0, x: -distance },
        to: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        from: { opacity: 0, x: distance },
        to: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        from: { opacity: 0, scale: 0.95 },
        to: { opacity: 1, scale: 1 },
      };
    default:
      return {
        from: { opacity: 0, y: distance },
        to: { opacity: 1, y: 0 },
      };
  }
}

/* One-off directional variants — handy for parent-stagger grids that
   just need per-child entrance directions. */
export function slideVariants(dir: SlideDir, distance = 48): Variants {
  return {
    hidden: slideTargets(dir, distance).from,
    visible: slideTargets(dir, distance).to,
  };
}

/* Standard scroll-reveal wrapper: slides children in once they enter
   the viewport. Direction controls which side they come from. */
export default function Reveal({
  children,
  className,
  dir = "up",
  delay = 0,
  amount = 0.2,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  dir?: SlideDir;
  delay?: number;
  amount?: number;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  const { from, to } = slideTargets(dir);
  return (
    <motion.div
      initial={from}
      whileInView={to}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}