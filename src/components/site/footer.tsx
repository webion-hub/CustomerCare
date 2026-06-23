import { Logo } from "./logo";

const groups = [
  {
    title: "Prodotto",
    links: ["Come funziona", "Risultati", "Estensioni", "Sicurezza dati"],
  },
  {
    title: "Canali",
    links: ["Email", "Chat sul sito", "WhatsApp", "Ticketing"],
  },
  {
    title: "Azienda",
    links: ["Chi siamo", "Lavora con noi", "Contatti"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              L&apos;assistente AI per l&apos;assistenza tecnica e il customer care.
              Le domande di sempre, risolte da sole.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink/80 transition-colors hover:text-persimmon"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {2026} Sintonia — demo dimostrativa, dati fittizi.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Termini</a>
            <a href="#" className="hover:text-ink">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
