/**
 * Sintonia — contenuti della demo.
 * Tutta la copy in un posto solo, così le sezioni restano leggibili.
 */

export type ChannelKey = "mail" | "chat" | "whatsapp";

export const channels: Record<
  ChannelKey,
  { label: string; short: string }
> = {
  mail: { label: "Email", short: "Mail" },
  chat: { label: "Chat sul sito", short: "Chat" },
  whatsapp: { label: "WhatsApp", short: "WhatsApp" },
};

export type Outcome = "risolto" | "ticket" | "operatore";

export const outcomes: Record<
  Outcome,
  { label: string; note: string }
> = {
  risolto: { label: "Risolto in automatico", note: "nessun intervento umano" },
  ticket: { label: "Ticket aperto", note: "tracciato e assegnato" },
  operatore: { label: "Passato all'operatore", note: "caso complesso" },
};

/** Conversazioni mostrate nella inbox-demo (si auto-animano). */
export const conversations: {
  id: string;
  channel: ChannelKey;
  from: string;
  topic: string;
  preview: string;
  lang: string;
  outcome: Outcome;
}[] = [
  {
    id: "c1",
    channel: "whatsapp",
    from: "Marta D.",
    topic: "Reset password",
    preview: "Non riesco più ad accedere all'area clienti, come reimposto la password?",
    lang: "IT",
    outcome: "risolto",
  },
  {
    id: "c2",
    channel: "mail",
    from: "Studio Belli",
    topic: "Stato della spedizione",
    preview: "Buongiorno, l'ordine #48213 risulta ancora in lavorazione da due giorni.",
    lang: "IT",
    outcome: "risolto",
  },
  {
    id: "c3",
    channel: "chat",
    from: "Visitatore",
    topic: "Errore in fattura",
    preview: "There is a wrong VAT number on my last invoice, can you fix it?",
    lang: "EN",
    outcome: "ticket",
  },
  {
    id: "c4",
    channel: "mail",
    from: "Costruzioni Rea",
    topic: "Integrazione gestionale",
    preview: "Il modulo non sincronizza più i listini dal nostro ERP custom dal rilascio.",
    lang: "IT",
    outcome: "operatore",
  },
  {
    id: "c5",
    channel: "whatsapp",
    from: "Luca P.",
    topic: "Orari assistenza",
    preview: "A che ora aprite il supporto telefonico il sabato?",
    lang: "IT",
    outcome: "risolto",
  },
];

/** Thread di esempio: come risponde l'assistente. */
export const sampleThread: {
  role: "cliente" | "ai";
  text: string;
}[] = [
  {
    role: "cliente",
    text: "Ciao, ho cambiato telefono e l'app non mi fa più accedere. Mi dà errore 403.",
  },
  {
    role: "ai",
    text: "Ciao Marta. L'errore 403 di solito significa che la sessione sul vecchio dispositivo è ancora attiva. Te la chiudo io adesso: fatto. Riprova l'accesso con email e password — se hai dimenticato la password ti mando subito il link di reset.",
  },
  {
    role: "cliente",
    text: "Perfetto, ora entra. Grazie!",
  },
  {
    role: "ai",
    text: "Ottimo. Ho registrato il nuovo dispositivo come affidabile, così non ti ricapita. Conversazione chiusa — se serve altro scrivi pure.",
  },
];

export const steps: {
  n: string;
  title: string;
  body: string;
}[] = [
  {
    n: "01",
    title: "Ascolta ovunque",
    body: "Mail, chat sul sito e WhatsApp arrivano in un unico flusso. Niente caselle separate, niente messaggi che si perdono.",
  },
  {
    n: "02",
    title: "Capisce e smista",
    body: "Riconosce l'intento, la lingua e l'urgenza. Le domande ricorrenti ricevono una risposta completa in pochi secondi.",
  },
  {
    n: "03",
    title: "Apre il ticket quando serve",
    body: "Se la richiesta richiede una lavorazione, crea il ticket già compilato con cliente, contesto e cronologia.",
  },
  {
    n: "04",
    title: "Passa solo i casi difficili",
    body: "L'operatore riceve i pochi casi davvero complessi, con il riassunto pronto. Zero ripartenze da capo.",
  },
];

export const metrics: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}[] = [
  { value: 74, suffix: "%", label: "Richieste chiuse senza operatore", sub: "sui temi ricorrenti" },
  { value: 40, suffix: "s", label: "Tempo di prima risposta", sub: "in media, su ogni canale" },
  { value: 3, suffix: "×", label: "Capacità a parità di team", sub: "nei picchi di richieste" },
  { value: 24, suffix: "/7", label: "Sempre presente", sub: "anche fuori orario" },
];

export const extensions: {
  title: string;
  body: string;
  icon: string;
}[] = [
  {
    title: "Base di conoscenza prodotto",
    body: "Colleghi le tue FAQ, le policy e gli articoli: l'assistente risponde citando sempre la fonte giusta.",
    icon: "book",
  },
  {
    title: "Manualistica tecnica",
    body: "Carica manuali e schede tecniche. Le istruzioni passo-passo arrivano al cliente nel formato giusto.",
    icon: "wrench",
  },
  {
    title: "Integrazione ticketing",
    body: "Si innesta su Zendesk, Jira o il tuo gestionale. I ticket nascono già completi nello strumento che usi.",
    icon: "plug",
  },
  {
    title: "Customer care multilingua",
    body: "Riconosce la lingua del cliente e risponde nella sua. Un solo team, tutti i mercati.",
    icon: "globe",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "L'assistente risponde anche se non conosce la risposta?",
    a: "No. Quando non ha una fonte affidabile non improvvisa: apre un ticket o passa la conversazione a un operatore, con tutto il contesto già pronto. Preferiamo un passaggio in più a una risposta sbagliata.",
  },
  {
    q: "Quanto tempo serve per partire?",
    a: "Per i temi ricorrenti bastano pochi giorni: si collegano i canali, si carica la base di conoscenza e si definiscono le regole di passaggio all'operatore. Poi l'assistente impara dalle conversazioni reali.",
  },
  {
    q: "I nostri operatori vengono sostituiti?",
    a: "No, vengono liberati. L'assistente assorbe il ripetitivo e lascia alle persone i casi che richiedono giudizio, relazione e competenza. È lì che il vostro team fa la differenza.",
  },
  {
    q: "Dove finiscono i dati dei clienti?",
    a: "Restano nei vostri sistemi. Sintonia si integra con il ticketing e la base di conoscenza esistenti, senza creare un'altra isola di dati da gestire.",
  },
];
