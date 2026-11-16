import type { Dictionary } from "@/dictionaries";
import Roll from "./Roll";

function Sticker({ text }: { text: string }) {
  return (
    <div
      data-anim="spin"
      data-intro
      data-at="1.0"
      aria-hidden
      className="absolute right-8 bottom-8 hidden size-36 sm:block lg:right-14 lg:bottom-14 lg:size-48"
    >
      <div data-spin-scroll className="size-full">
        <svg viewBox="0 0 200 200" className="spin-idle size-full">
          <circle cx="100" cy="100" r="100" className="fill-sun" />
          <defs>
            <path
              id="sticker-ring"
              d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
            />
          </defs>
          <text
            className="fill-ink font-display"
            fontSize="17"
            fontWeight="700"
          >
            <textPath
              href="#sticker-ring"
              textLength="438"
              lengthAdjust="spacing"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <span className="absolute inset-0 grid place-items-center font-display text-4xl font-extrabold text-ink">
        ×
      </span>
    </div>
  );
}

export default function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-4 pt-2 sm:px-8">
      <div
        data-anim="panel"
        data-intro
        data-at="0"
        data-hero-panel
        className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-12 text-white sm:px-14 sm:py-16 lg:px-20 lg:py-20"
      >
        <p
          data-anim="fade"
          data-intro
          data-at="0.7"
          className="mb-6 max-w-[36ch] text-[17px] font-medium"
        >
          {h.greeting}
        </p>
        <h1
          data-anim="words"
          data-intro
          data-at="0.75"
          className="font-display text-[clamp(40px,6.4vw,84px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
        >
          <span className="block">{h.line1}</span>
          <span className="block">
            {h.line2Before}{" "}
            <span
              data-anim="highlight"
              data-intro
              data-at="1.35"
              className="hl"
            >
              {h.line2Highlight}
            </span>
            {h.line2After}
          </span>
        </h1>
        <div className="mt-10 flex flex-col items-start gap-8 sm:mt-12">
          <p
            data-anim="fade"
            data-intro
            data-at="1.15"
            className="max-w-[460px] text-[19px] leading-normal text-primary-tint"
          >
            {h.intro}
          </p>
          <div data-anim="fade" data-intro data-at="1.3">
            <a
              href="#work"
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-white px-7 text-[17px] font-semibold text-ink transition-colors duration-300 hover:bg-sun"
            >
              <Roll>{h.cta}</Roll>
              <span aria-hidden className="pill-arrow">
                →
              </span>
            </a>
          </div>
        </div>
        <Sticker text={h.sticker} />
      </div>
    </section>
  );
}
