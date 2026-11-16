import { locales, type Locale } from "@/i18n";
import type { Dictionary } from "@/dictionaries";
import Roll from "./Roll";

export default function Header({ t, lang }: { t: Dictionary; lang: Locale }) {
  return (
    <header data-header className="site-header sticky top-0 z-40 bg-white/85 backdrop-blur-md">
      <div
        data-anim="fade-down"
        data-intro
        data-at="1.1"
        className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-4 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight">
          <span className="logo-mark grid size-10 place-items-center rounded-full bg-primary text-[15px] text-white">
            ma
          </span>
          martín
        </a>

        <nav aria-label="Main" className="flex items-center gap-2 text-[15px] font-medium">
          <a href="#work" className="hidden min-h-11 items-center rounded-full bg-soft px-4 transition-colors duration-300 hover:bg-sun sm:inline-flex">
            <Roll>{t.nav.work}</Roll>
          </a>
          <a href="#about" className="hidden min-h-11 items-center rounded-full bg-soft px-4 transition-colors duration-300 hover:bg-sun sm:inline-flex">
            <Roll>{t.nav.about}</Roll>
          </a>
          <a href="#contact" className="hidden min-h-11 items-center rounded-full bg-ink px-4 text-white transition-colors duration-300 hover:bg-primary md:inline-flex">
            <Roll>{t.nav.contact}</Roll>
          </a>
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
        </nav>
      </div>
    </header>
  );
}
