import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";

export function Cta() {
  return (
    <section id="contatti" className="px-4 pb-24 sm:px-6">
      <Reveal>
        <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-teal-ink px-6 py-16 text-paper sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 size-80 rounded-full bg-persimmon/25 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-24 size-72 rounded-full bg-teal/30 blur-[110px]"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Lascia che il ripetitivo
              <br />
              si risolva da solo.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-paper/75">
              Colleghiamo mail, chat e WhatsApp, carichiamo la tua base di
              conoscenza e definiamo insieme quando passare a una persona. La demo
              gira sui tuoi temi reali.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:ciao@sintonia.example"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-persimmon px-7 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-float"
              >
                Richiedi la demo
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#come-funziona"
                className="inline-flex h-12 items-center rounded-full border border-paper/25 px-7 text-base font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Rivedi come funziona
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
