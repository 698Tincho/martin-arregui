"use client";

import { Fragment, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Star() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-[0.55em] shrink-0 fill-sun">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

/**
 * Endless ticker. Scrolling speeds it up and flips its direction to follow
 * the scroll, then it eases back to its idle pace.
 */
export default function Marquee({ items }: { items: string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector(".marquee-track");
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
        // Start deep into the repeats so playing backwards never hits the start.
        loop.totalTime(loop.duration() * 1000);

        let direction = 1;
        let boost = 0;
        const st = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            direction = self.direction;
            boost = Math.min(6, Math.abs(self.getVelocity()) / 350);
          },
        });
        const tick = () => {
          boost *= 0.93;
          loop.timeScale(direction * (1 + boost));
        };
        gsap.ticker.add(tick);
        return () => {
          gsap.ticker.remove(tick);
          st.kill();
        };
      });
    },
    { scope: root },
  );

  const row = (copy: number) =>
    items.map((item, i) => (
      <Fragment key={`${copy}-${i}`}>
        <span>{item}</span>
        <Star />
      </Fragment>
    ));

  return (
    <div ref={root} className="overflow-hidden py-10 sm:py-14" aria-label={items.join(", ")} role="marquee">
      <div
        aria-hidden
        className="marquee-track flex w-max items-center gap-[0.45em] font-display text-[clamp(48px,8vw,112px)] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap"
      >
        <div className="flex items-center gap-[0.45em] pr-[0.45em]">{row(0)}</div>
        <div className="flex items-center gap-[0.45em] pr-[0.45em]">{row(1)}</div>
      </div>
    </div>
  );
}
