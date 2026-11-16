import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n";
import { getDictionary } from "@/dictionaries";

// Holding page shown on the live domain until launch (see src/launch.ts and src/proxy.ts).
export default async function Soon({ params }: PageProps<"/[lang]/soon">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const h = t.hero;

  const pill =
    "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-ink/15 px-5 font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white";

  return (
    <div className="flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <span className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-[15px] text-white">ma</span>
          martín
        </span>
        <div role="group" aria-label={t.nav.language} className="flex rounded-full border-2 border-ink p-0.5 text-[13px] font-semibold">
          {locales.map((l) => (
            <a
              key={l}
              href={`/${l}`}
              hrefLang={l}
              aria-current={l === lang ? "true" : undefined}
              className={`flex min-h-9 items-center rounded-full px-3 uppercase transition-colors duration-300 ${
                l === lang ? "bg-ink text-white" : "text-muted hover:text-ink"
              }`}
            >
              {l}
            </a>
          ))}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-4 py-10 sm:px-8">
        <div className="rounded-[32px] bg-primary px-6 py-12 text-white sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-sun px-3.5 py-1.5 text-sm font-semibold text-ink">
            <span aria-hidden className="size-2 animate-pulse rounded-full bg-ink" />
            {t.soon.badge}
          </span>
          <h1 className="mt-6 font-display text-[clamp(40px,6.4vw,84px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
            <span className="block">{h.line1}</span>
            <span className="block">
              {h.line2Before} <span className="text-sun">{h.line2Highlight}</span>
              {h.line2After}
            </span>
          </h1>
        </div>

        <nav aria-label={t.nav.contact} className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-white transition-colors duration-300 hover:bg-primary"
          >
            {t.soon.email}
          </a>
          <a href={t.contact.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a href={t.contact.github} target="_blank" rel="noopener noreferrer" className={pill}>
            GitHub <span aria-hidden>↗</span>
          </a>
        </nav>
      </main>

      <footer className="mx-auto w-full max-w-[1240px] px-4 py-6 text-sm text-muted sm:px-8">
        Martín Arregui · Montevideo
      </footer>
    </div>
  );
}
