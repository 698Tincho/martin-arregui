import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/i18n";
import Roll from "./Roll";

// Cached at build time; the footer year updates on each deploy.
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Contact({
  t,
  lang,
}: {
  t: Dictionary;
  lang: Locale;
}) {
  const c = t.contact;
  const year = await currentYear();

  return (
    <footer id="contact" className="mx-auto max-w-[1240px] px-4 pb-6 sm:px-8">
      <div
        data-anim="pop"
        className="rounded-[32px] bg-ink px-6 py-14 text-white sm:px-14 sm:py-20"
      >
        <p className="mb-4 text-lg text-on-dark">{c.kicker}</p>
        <h2
          data-anim="chars"
          className="mb-10 font-display text-[clamp(52px,8.5vw,120px)] leading-[0.92] font-extrabold tracking-[-0.04em]"
        >
          {c.cta}
          <span className="text-sun">.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${c.email}`}
            className="inline-flex min-h-14 items-center rounded-full bg-sun px-7 text-[17px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
          >
            <Roll>{c.email}</Roll>
          </a>
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center rounded-full border-2 border-line-dark px-6 font-semibold transition-colors duration-300 hover:border-white"
          >
            <Roll>LinkedIn</Roll>
          </a>
          <a
            href={c.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center rounded-full border-2 border-line-dark px-6 font-semibold transition-colors duration-300 hover:border-white"
          >
            <Roll>GitHub</Roll>
          </a>
          <Link
            href={`/${lang}/cv`}
            className="inline-flex min-h-14 items-center rounded-full border-2 border-line-dark px-6 font-semibold transition-colors duration-300 hover:border-white"
          >
            <Roll>{c.cv}</Roll>
          </Link>
        </div>
        <p className="mt-14 text-sm text-on-dark">© {year} Martín Arregui</p>
      </div>
    </footer>
  );
}
