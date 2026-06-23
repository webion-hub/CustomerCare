"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------- *
 *  Reveal — fade + rise quando entra nel viewport.
 * -------------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------- *
 *  Counter — conta fino a `value` quando è visibile.
 * -------------------------------------------------------------------- */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, mv, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------- *
 *  Eyebrow — etichetta mono sopra ai titoli.
 * -------------------------------------------------------------------- */
export function Eyebrow({
  children,
  className,
  tone = "persimmon",
}: {
  children: ReactNode;
  className?: string;
  tone?: "persimmon" | "teal" | "muted";
}) {
  const dot =
    tone === "teal"
      ? "bg-teal"
      : tone === "muted"
        ? "bg-muted-foreground"
        : "bg-persimmon";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", dot)} />
      {children}
    </span>
  );
}
