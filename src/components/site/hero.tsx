import { ArrowRight, Mail, MessagesSquare, MessageCircle } from "lucide-react";
import { InboxDemo } from "./inbox-demo";
import { Reveal, Eyebrow } from "./primitives";

const channelChips = [
  { icon: Mail, label: "Mail" },
  { icon: MessagesSquare, label: "Chat" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* glow caldo dietro alla demo, unico elemento atmosferico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 size-[42rem] rounded-full bg-persimmon/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12%] -z-10 size-[34rem] rounded-full bg-teal/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* colonna testo */}
        <div>
          <Reveal>
            <Eyebrow>Assistenza tecnica · Customer care</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Le domande di sempre,{" "}
              <span className="relative whitespace-nowrap text-persimmon">
                risolte da sole
                <svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-persimmon/40"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 C 60 2, 120 2, 160 6 S 250 10, 298 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Le richieste arrivano sempre sugli stessi temi e intasano telefono e
              caselle. Sintonia risponde su mail, chat e WhatsApp, apre il ticket
              quando serve e passa all&apos;operatore solo i casi davvero complessi.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#come-funziona"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-persimmon px-6 text-base font-semibold text-primary-foreground shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:shadow-float"
              >
                Guarda come funziona
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#risultati"
                className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-base font-semibold text-ink transition-colors hover:bg-sand"
              >
                Vedi i risultati
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted-foreground">
              <span className="font-mono text-xs uppercase tracking-wider">
                Un solo flusso per
              </span>
              <div className="flex items-center gap-2">
                {channelChips.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-ink"
                  >
                    <Icon className="size-3.5" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* colonna demo */}
        <Reveal delay={0.15} y={28} className="relative">
          <InboxDemo />
        </Reveal>
      </div>
    </section>
  );
}
