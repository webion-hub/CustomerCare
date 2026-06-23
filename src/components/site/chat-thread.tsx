"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { sampleThread } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ChatThread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? sampleThread.length : 0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView || reduce) return;
    if (shown >= sampleThread.length) return;
    const isAi = sampleThread[shown].role === "ai";
    setTyping(isAi);
    const delay = isAi ? 1100 : 650;
    const id = setTimeout(() => {
      setTyping(false);
      setShown((n) => n + 1);
    }, delay);
    return () => clearTimeout(id);
  }, [inView, shown, reduce]);

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-float"
    >
      {/* intestazione chat */}
      <div className="flex items-center gap-3 border-b border-border bg-teal-ink px-4 py-3 text-paper">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-paper/10">
          <MessageCircle className="size-4.5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">Sintonia · Assistenza</p>
          <p className="font-mono text-[0.65rem] text-teal-soft">
            WhatsApp · online
          </p>
        </div>
      </div>

      {/* messaggi */}
      <div className="flex min-h-[22rem] flex-col gap-2.5 px-4 py-5">
        {sampleThread.slice(0, shown).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug",
              m.role === "ai"
                ? "self-start rounded-bl-md bg-sand text-ink"
                : "self-end rounded-br-md bg-persimmon text-primary-foreground",
            )}
          >
            {m.text}
          </motion.div>
        ))}

        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 self-start rounded-2xl rounded-bl-md bg-sand px-3.5 py-3"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="size-1.5 rounded-full bg-ink/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: d * 0.15,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
