"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problema", label: "Il problema" },
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#risultati", label: "Risultati" },
  { href: "#estensioni", label: "Estensioni" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled &&
            "mt-2 max-w-5xl rounded-full border border-border bg-paper/80 px-4 py-2 shadow-lift backdrop-blur-md",
        )}
      >
        <a href="#top" className="shrink-0" aria-label="Sintonia, torna in cima">
          <Logo />
        </a>
        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sand hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="#contatti"
            className="hidden text-sm font-medium text-ink transition-colors hover:text-persimmon sm:inline"
          >
            Accedi
          </a>
          <a
            href="#contatti"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:bg-persimmon"
          >
            Prova la demo
          </a>
        </div>
      </div>
    </motion.header>
  );
}
