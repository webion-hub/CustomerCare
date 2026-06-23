import { Repeat, PhoneCall, UserCog } from "lucide-react";
import { Reveal, Eyebrow } from "./primitives";

const pains = [
  {
    icon: Repeat,
    title: "Sempre le stesse domande",
    body: "Reset password, stato spedizione, orari, errori noti. Il team risponde alle stesse cose decine di volte al giorno.",
  },
  {
    icon: PhoneCall,
    title: "Telefono e caselle intasati",
    body: "Le richieste semplici occupano le linee e le mail, e le persone che avrebbero un problema serio aspettano in coda.",
  },
  {
    icon: UserCog,
    title: "Dipende da chi è in turno",
    body: "La qualità e i tempi della risposta cambiano in base a chi è disponibile in quel momento. Difficile da garantire.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="muted">Il problema</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Il supporto non è difficile.
              <br />
              È <span className="text-persimmon">ripetitivo</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              La maggior parte delle richieste è ricorrente e prevedibile. Eppure
              passa tutta dalle stesse persone, sugli stessi canali, negli stessi
              momenti di picco.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lift">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-sand text-ink">
                  <p.icon className="size-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
