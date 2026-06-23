import { Reveal, Eyebrow } from "./primitives";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="come-funziona"
      className="grain relative overflow-hidden bg-teal-ink py-20 text-paper sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 size-96 rounded-full bg-persimmon/15 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="persimmon" className="text-paper/70">
              Come funziona
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Un assistente, dal messaggio alla soluzione.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-paper/70">
              Ogni conversazione segue lo stesso percorso. La differenza è che a
              percorrerlo, quasi sempre, non serve una persona.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={0.1 + i * 0.08} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-medium text-persimmon">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-paper/15" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
