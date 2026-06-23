import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal, Eyebrow } from "./primitives";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <Eyebrow tone="muted">Domande frequenti</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Le cose che ci chiedono prima di iniziare.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion multiple={false} defaultValue={["0"]}>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={String(i)} className="border-border">
                <AccordionTrigger className="py-5 text-base font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
