import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n";
import { getDictionary } from "@/dictionaries";
import Motion from "@/components/Motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <Motion>
      <Header t={t} lang={lang} />
      <main>
        <Hero t={t} />
        <Work t={t} lang={lang} />
        <About t={t} />
        <Marquee items={t.marquee} />
      </main>
      <Contact t={t} lang={lang} />
    </Motion>
  );
}
