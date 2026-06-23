"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Loader2, ArrowUpRight } from "lucide-react";
import { conversations, outcomes } from "@/lib/content";
import { ChannelGlyph, outcomeStyle } from "./channel";
import { cn } from "@/lib/utils";

const STEP_MS = 1900;

export function InboxDemo() {
  const reduce = useReducedMotion();
  // activeStep = riga attualmente "in analisi"; quelle prima sono risolte.
  const [activeStep, setActiveStep] = useState(reduce ? conversations.length : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActiveStep((s) => (s > conversations.length ? 0 : s + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduce]);

  const resolvedCount = Math.min(activeStep, conversations.length);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-float">
      {/* barra finestra */}
      <div className="flex items-center gap-3 border-b border-border bg-paper/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-persimmon/70" />
          <span className="size-2.5 rounded-full bg-sand" />
          <span className="size-2.5 rounded-full bg-teal/60" />
        </div>
        <div className="ml-1 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal/50" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span>
          Coda in tempo reale
        </div>
        <div className="ml-auto font-mono text-[0.7rem] text-muted-foreground">
          oggi · 128 conversazioni
        </div>
      </div>

      {/* righe conversazioni */}
      <ul className="divide-y divide-border">
        {conversations.map((c, i) => {
          const state =
            i < activeStep ? "done" : i === activeStep ? "active" : "queued";
          return (
            <li
              key={c.id}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 transition-colors duration-500",
                state === "active" && "bg-persimmon-soft/30",
                state === "queued" && "opacity-45",
              )}
            >
              <ChannelGlyph channel={c.channel} className="shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm font-semibold text-ink">
                    {c.from}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    · {c.topic}
                  </span>
                  <span className="ml-auto shrink-0 rounded-full border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-muted-foreground sm:ml-0">
                    {c.lang}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {c.preview}
                </p>
              </div>

              {/* esito */}
              <div className="ml-1 w-34 shrink-0 text-right">
                <AnimatePresence mode="wait" initial={false}>
                  {state === "active" ? (
                    <motion.span
                      key="thinking"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-persimmon"
                    >
                      <Loader2 className="size-3.5 animate-spin" />
                      analizzo…
                    </motion.span>
                  ) : state === "done" ? (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-medium ring-1 ring-inset",
                        outcomeStyle[c.outcome].ring,
                        outcomeStyle[c.outcome].text,
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          outcomeStyle[c.outcome].dot,
                        )}
                      />
                      {shortOutcome(c.outcome)}
                      {c.outcome === "operatore" && (
                        <ArrowUpRight className="size-3" />
                      )}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="queued"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-mono text-[0.7rem] text-muted-foreground"
                    >
                      in coda
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ul>

      {/* footer riepilogo */}
      <div className="flex items-center gap-4 border-t border-border bg-paper/60 px-4 py-3 text-xs">
        <span className="text-muted-foreground">
          Risolte da Sintonia:{" "}
          <span className="font-mono font-semibold text-teal">
            {resolvedCount}/{conversations.length}
          </span>
        </span>
        <div className="ml-auto flex items-center gap-3">
          {Object.entries(outcomes).map(([key, o]) => (
            <span
              key={key}
              className="hidden items-center gap-1.5 text-muted-foreground md:inline-flex"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  outcomeStyle[key as keyof typeof outcomeStyle].dot,
                )}
              />
              {o.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function shortOutcome(o: keyof typeof outcomes) {
  if (o === "risolto") return "Risolto";
  if (o === "ticket") return "Ticket";
  return "Operatore";
}
