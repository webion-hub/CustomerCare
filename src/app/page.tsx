import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { Value } from "@/components/site/value";
import { Extensions } from "@/components/site/extensions";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Value />
        <Extensions />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
