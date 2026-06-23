import { BookOpen, Wrench, Plug, Globe, type LucideIcon } from "lucide-react";
import { Reveal, Eyebrow } from "./primitives";
import { extensions } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  wrench: Wrench,
  plug: Plug,
  globe: Globe,
};

export function Extensions() {
  return (
    <section
      id="estensioni"
      className="border-t border-border bg-sand/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Estensioni</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Cresce con il tuo supporto.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Si parte dalle domande ricorrenti. Poi colleghi le tue fonti e i tuoi
              strumenti: l&apos;assistente diventa parte del modo in cui lavori già.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {extensions.map((e, i) => {
            const Icon = icons[e.icon];
            return (
              <Reveal as="li" key={e.title} delay={0.1 + i * 0.07}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors duration-300 group-hover:bg-persimmon-soft group-hover:text-persimmon">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {e.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {e.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
