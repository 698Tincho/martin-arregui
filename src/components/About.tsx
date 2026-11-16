import type { Dictionary } from "@/dictionaries";

const CHIP_STYLES = [
  "bg-primary text-white",
  "bg-sun text-ink",
  "bg-ink text-white",
  "bg-soft text-ink",
  "bg-soft text-ink",
  "bg-primary text-white",
  "bg-soft text-ink",
  "bg-sun text-ink",
];

export default function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-12 px-6 py-20 sm:px-10 sm:py-28">
      <div className="flex-[1_1_360px]">
        <h2
          data-anim="lines"
          className="mb-6 font-display text-[clamp(40px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]"
        >
          {t.about.heading}
        </h2>
        <p data-anim="fade" data-delay="0.15" className="text-[19px] leading-relaxed text-body">
          {t.about.body}
        </p>
      </div>
      <ul data-anim="drop" className="flex flex-[1_1_380px] flex-wrap gap-2.5 pt-2">
        {t.about.skills.map((s, i) => (
          <li key={s} className={`chip rounded-full px-5 py-3 font-semibold ${CHIP_STYLES[i % CHIP_STYLES.length]}`}>
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
