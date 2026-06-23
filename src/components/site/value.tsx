import { Reveal, Eyebrow, Counter } from "./primitives";
import { ChatThread } from "./chat-thread";
import { metrics } from "@/lib/content";

export function Value() {
  return (
    <section id="risultati" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* metriche */}
          <div>
            <Reveal>
              <Eyebrow tone="teal">Il valore</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Più richieste chiuse, persone libere per i casi difficili.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Quando il ricorrente si risolve da solo, i tempi di risposta
                crollano e il team torna a fare il lavoro che conta davvero.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={0.12 + i * 0.07}>
                  <div className="border-l-2 border-persimmon/30 pl-4">
                    <div className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                      <Counter value={m.value} suffix={m.suffix} />
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-8 font-mono text-xs text-muted-foreground">
                * Valori illustrativi a scopo dimostrativo.
              </p>
            </Reveal>
          </div>

          {/* demo risposta */}
          <Reveal delay={0.15} y={28}>
            <p className="mb-4 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Risposte nel tono del tuo team
            </p>
            <ChatThread />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
