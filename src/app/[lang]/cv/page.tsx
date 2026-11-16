import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n";
import { cvPdfPath, getCV } from "@/dictionaries/cv";

export async function generateMetadata({ params }: PageProps<"/[lang]/cv">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const cv = getCV(lang);
  return {
    title: cv.meta.title,
    description: cv.meta.description,
    alternates: { languages: { en: "/en/cv", es: "/es/cv" } },
  };
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-[#e4e4e8] pb-2 font-display text-[18px] leading-none font-extrabold tracking-[-0.01em]">
      {children}
    </h2>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      <path d="M12 0C12.8 7.2 16.8 11.2 24 12C16.8 12.8 12.8 16.8 12 24C11.2 16.8 7.2 12.8 0 12C7.2 11.2 11.2 7.2 12 0Z" />
    </svg>
  );
}

export default async function CVPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const cv = getCV(lang);

  return (
    <div className="cv-screen min-h-screen bg-soft py-6 sm:py-10">
      {/* Screen-only toolbar */}
      <nav className="mx-auto mb-6 flex max-w-[794px] flex-wrap items-center justify-between gap-3 px-4 print:hidden">
        <Link href={`/${lang}`} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 font-semibold hover:bg-white">
          <span aria-hidden>←</span> {cv.toolbar.back}
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border-2 border-ink p-0.5 text-sm font-semibold">
            {locales.map((l) => (
              <a
                key={l}
                href={`/${l}/cv`}
                aria-current={l === lang ? "page" : undefined}
                className={`grid min-h-9 min-w-10 place-items-center rounded-full px-2 uppercase ${l === lang ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={cvPdfPath(lang)}
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 font-semibold text-white transition-colors hover:bg-[#3a3a42]"
          >
            {cv.toolbar.download} <span aria-hidden>↓</span>
          </a>
        </div>
      </nav>

      <div className="overflow-x-auto px-4 print:overflow-visible print:p-0">
        <article className="cv-sheet relative mx-auto flex h-[1123px] w-[794px] shrink-0 flex-col overflow-hidden bg-white text-ink shadow-xl shadow-black/10 print:shadow-none">
          <header className="relative m-6 flex items-center gap-8 overflow-hidden rounded-[24px] bg-[#1f1f24] px-12 py-10 text-white">
            <div className="size-[128px] flex-none overflow-hidden rounded-full border-[5px] border-white bg-white">
              <Image
                src="/cv/photo.jpg"
                alt={cv.name}
                width={256}
                height={256}
                priority
                className="size-full object-cover object-[50%_35%]"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h1 className="font-display text-[46px] leading-none font-extrabold tracking-[-0.03em]">{cv.name}</h1>
              <p className="font-display text-[20px] font-bold tracking-[-0.01em]">
                {cv.titleBefore}
                <span className="rounded-md bg-white px-1.5 text-ink">{cv.titleHighlight}</span>
                {cv.titleAfter}
              </p>
              <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[12.5px] text-[#d4d4da]">
                {cv.contact.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <Star className="absolute top-6 right-7 size-8 fill-[#8a8a94]" />
          </header>

          <div className="grid flex-1 grid-cols-[minmax(0,1fr)_208px] gap-12 px-14 pt-4 pb-6">
            <main className="flex flex-col gap-9">
              <section>
                <Heading>{cv.headings.profile}</Heading>
                <p className="text-[14px] leading-[1.6] text-pretty text-body">{cv.profile}</p>
              </section>

              <section>
                <Heading>{cv.headings.experience}</Heading>
                <ol className="flex flex-col gap-[18px]">
                  {cv.experience.map((job) => (
                    <li key={job.company + job.dates} className="flex flex-col gap-0.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-[14.5px] font-bold">{job.company}</h3>
                        <span className="text-[12.5px] whitespace-nowrap text-muted tabular-nums">{job.dates}</span>
                      </div>
                      <p className="text-[13.5px] font-medium text-body">{job.role}</p>
                      {job.previous && <p className="text-[13px] text-muted">{job.previous}</p>}
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <Heading>{cv.headings.projects}</Heading>
                <ul className="flex flex-col gap-3.5">
                  {cv.projects.map((p) => (
                    <li key={p.name} className="grid grid-cols-[10px_minmax(0,1fr)] gap-3">
                      <span aria-hidden className="mt-[6px] size-2.5 rounded-full bg-ink" />
                      <p className="text-[13.5px] leading-[1.55] text-pretty text-body">
                        <strong className="text-ink">{p.name}</strong> · {p.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            <aside className="flex flex-col gap-8">
              <section>
                <Heading>{cv.headings.skills}</Heading>
                <div className="flex flex-col gap-3.5">
                  {cv.skills.map((s, i) => (
                    <div key={s.group}>
                      <p className="mb-1.5 text-[12px] font-bold text-muted">{s.group}</p>
                      <ul className="flex flex-wrap gap-1.5 text-[12px]">
                        {s.items.map((item) => (
                          <li key={item} className={`rounded-full px-2.5 py-[3px] ${i === 0 ? "bg-[#e4e4e8]" : "bg-soft"}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <Heading>{cv.headings.education}</Heading>
                <p className="text-[13.5px] font-bold">{cv.education.degree}</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-body">
                  {cv.education.school}
                  <br />
                  {cv.education.dates}
                </p>
              </section>

              <section>
                <Heading>{cv.headings.courses}</Heading>
                <ul className="flex flex-col gap-2.5">
                  {cv.courses.map((c) => (
                    <li key={c.name}>
                      <p className="text-[13.5px] font-bold">{c.name}</p>
                      <p className="mt-0.5 text-[13px] text-body">{c.school}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <Heading>{cv.headings.languages}</Heading>
                <ul className="flex flex-col gap-1 text-[13.5px] text-body">
                  {cv.languages.map((l) => (
                    <li key={l.name}>
                      <strong className="text-ink">{l.name}</strong> · {l.level}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
