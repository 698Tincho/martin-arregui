import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/i18n";
import Roll from "./Roll";
import Tilt from "./Tilt";

// Illustrative bar heights for the Finanzas preview (not real data).
const BARS = [42, 55, 48, 62, 58, 70, 66, 74, 61, 80, 72, 88];

const TAG_BORDER = {
  dark: "border-line-dark",
  light: "border-white/40",
  ink: "border-ink/25",
};

function Tags({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: keyof typeof TAG_BORDER;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className={`rounded-full border px-3 py-1.5 text-sm ${TAG_BORDER[tone]}`}
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3" aria-hidden>
      <span className="size-2.5 rounded-full bg-[#55555f]" />
      <span className="size-2.5 rounded-full bg-[#55555f]" />
      <span className="size-2.5 rounded-full bg-[#55555f]" />
      <span className="ml-3 rounded-full bg-[#2e2e38] px-3 py-1 text-xs text-on-dark">
        {label}
      </span>
    </div>
  );
}

function VisitLink({
  href,
  label,
  newTab,
  className,
}: {
  href: string;
  label: string;
  newTab: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Roll>{label}</Roll>
      <span aria-hidden className="pill-arrow pill-arrow-up">
        ↗
      </span>
      <span className="sr-only">({newTab})</span>
    </a>
  );
}

const TILE_THEMES = {
  blue: {
    card: "bg-primary text-white",
    badge: "bg-white/15",
    muted: "text-primary-tint",
    tags: "light",
    button: "bg-white text-ink hover:bg-sun",
  },
  sun: {
    card: "bg-sun text-ink",
    badge: "bg-ink/10",
    muted: "text-ink/75",
    tags: "ink",
    button: "bg-ink text-white hover:bg-primary",
  },
} as const;

type ClientProject = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url: string;
  cta: string;
  image: string;
  imageAlt: string;
  domain: string;
};

/** Client work card: browser-framed screenshot, then the copy. Both tiles share it so they match. */
function ClientTile({
  project: p,
  newTab,
  theme,
  delay,
}: {
  project: ClientProject;
  newTab: string;
  theme: (typeof TILE_THEMES)[keyof typeof TILE_THEMES];
  delay?: string;
}) {
  return (
    <Tilt className="h-full">
      <article
        data-anim="pop"
        data-delay={delay}
        className={`tile flex h-full flex-col gap-5 rounded-[32px] p-6 sm:p-8 ${theme.card}`}
      >
        <div className="mb-2 overflow-hidden rounded-[18px] bg-[#22222b] shadow-xl shadow-black/25">
          <BrowserBar label={p.domain} />
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={p.image}
              alt={p.imageAlt}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="shot object-cover object-top"
            />
          </div>
        </div>
        <span
          className={`self-start rounded-full px-3.5 py-1.5 text-sm font-semibold ${theme.badge}`}
        >
          {p.badge}
        </span>
        <h3 className="font-display text-[clamp(34px,3.6vw,48px)] leading-none font-extrabold tracking-[-0.02em]">
          {p.title}
        </h3>
        <p className={`-mt-2 text-[15px] font-medium ${theme.muted}`}>
          {p.subtitle}
        </p>
        <p className={`text-[17px] leading-relaxed ${theme.muted}`}>
          {p.description}
        </p>
        <Tags items={p.tags} tone={theme.tags} />
        <div className="mt-auto pt-2">
          <VisitLink
            href={p.url}
            label={p.cta}
            newTab={newTab}
            className={`inline-flex min-h-12 items-center gap-2 rounded-full px-6 font-semibold transition-colors duration-300 ${theme.button}`}
          />
        </div>
      </article>
    </Tilt>
  );
}

export default function Work({ t, lang }: { t: Dictionary; lang: Locale }) {
  const { finanzas: fin, turchii: jt, ferro } = t.work;
  const number = new Intl.NumberFormat(lang);

  return (
    <section
      id="work"
      className="mx-auto max-w-[1240px] px-4 pt-20 pb-6 sm:px-8 sm:pt-28"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 px-2">
        <h2
          data-anim="lines"
          className="font-display text-[clamp(40px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]"
        >
          {t.work.heading}
        </h2>
        <span data-anim="fade" className="text-[15px] text-muted tabular-nums">
          (03)
        </span>
      </div>

      {/* Featured: Finanzas, with links to the live demo (made-up data) and its code */}
      <article
        data-anim="pop"
        className="relative overflow-hidden rounded-[32px] bg-ink text-white"
      >
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12 lg:p-12">
          <div className="flex flex-col gap-5">
            <span className="self-start rounded-full bg-sun px-3.5 py-1.5 text-sm font-semibold text-ink">
              {fin.badge}
            </span>
            <h3
              data-anim="lines"
              className="font-display text-[clamp(44px,6vw,76px)] leading-[0.95] font-extrabold tracking-[-0.03em]"
            >
              {fin.title}
            </h3>
            <p className="text-[15px] font-medium text-on-dark">
              {fin.subtitle}
            </p>
            <p className="text-lg leading-relaxed text-on-dark">
              {fin.description}
            </p>
            <Tags items={fin.tags} tone="dark" />
            <div className="mt-auto flex flex-col gap-3 pt-4">
              <div className="flex flex-wrap gap-3">
                <VisitLink
                  href={fin.demoUrl}
                  label={fin.cta}
                  newTab={t.work.opensInNewTab}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-sun px-6 font-semibold text-ink transition-colors duration-300 hover:bg-white"
                />
                <VisitLink
                  href={fin.codeUrl}
                  label={fin.code}
                  newTab={t.work.opensInNewTab}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white/25 px-6 font-semibold transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
                />
              </div>
              <p className="text-sm text-on-dark">{fin.note}</p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl bg-[#22222b] shadow-2xl shadow-black/40">
            <BrowserBar label={fin.domain} />
            <div
              className="flex flex-1 flex-col gap-4 bg-primary p-4 sm:p-6"
              role="img"
              aria-label={`${fin.title}: ${fin.chartLabel} (${fin.demo})`}
            >
              <div className="flex justify-between text-[13px] text-primary-tint">
                <span>{fin.chartLabel}</span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 font-semibold text-white">
                  {fin.demo}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {fin.kpis.map((k, i) => (
                  <div
                    key={k.label}
                    className={`rounded-[14px] p-3 sm:p-4 ${i === 2 ? "bg-sun text-ink" : "bg-white/10"}`}
                  >
                    <div
                      className={`text-[12px] ${i === 2 ? "text-ink/70" : "text-primary-tint"}`}
                    >
                      {k.label}
                    </div>
                    <div className="mt-1 font-display text-[clamp(18px,2.2vw,28px)] font-extrabold tracking-tight tabular-nums">
                      $
                      <span
                        data-anim="count"
                        data-value={k.value}
                        data-locale={lang}
                        data-delay="0.5"
                      >
                        {number.format(k.value)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative min-h-[170px] flex-1 sm:min-h-[200px]">
                <div
                  data-anim="bars"
                  data-delay="0.45"
                  className="absolute inset-0 flex items-end gap-1.5 sm:gap-2"
                >
                  {BARS.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-[6px] ${i === BARS.length - 1 ? "bg-sun" : "bg-white/85"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div
                aria-hidden
                className="flex gap-1.5 text-[11px] text-primary-tint sm:gap-2"
              >
                {fin.months.map((m, i) => (
                  <span key={i} className="flex-1 text-center">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ClientTile
          project={jt}
          newTab={t.work.opensInNewTab}
          theme={TILE_THEMES.blue}
        />
        <ClientTile
          project={ferro}
          newTab={t.work.opensInNewTab}
          theme={TILE_THEMES.sun}
          delay="0.12"
        />
      </div>
    </section>
  );
}
