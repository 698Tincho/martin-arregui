"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const EASE = "expo.out";

/**
 * Declarative animations driven by data attributes, so the markup stays in
 * Server Components:
 *
 *   data-anim="lines | chars | words | fade | fade-down | rule | bars | reveal |
 *              count | pop | drop | panel | spin | float | highlight"
 *   data-intro         play in the page-load timeline instead of on scroll
 *   data-at="0.4"      position in the intro timeline (seconds)
 *   data-delay="0.2"   extra delay for scroll-triggered animations
 *   data-value / data-locale   target number for "count"
 *
 * Scroll-linked extras (no entrance state):
 *   data-parallax="6"  drifts ±6% of its height while crossing the viewport
 *   data-spin-scroll   turns a full circle over the length of the page
 *   data-hero-panel    shrinks a little as the hero scrolls away
 *
 * Elements with data-anim start hidden (see globals.css, only when the visitor
 * allows motion) and are revealed here.
 */
function build(el: HTMLElement): gsap.core.Animation {
  gsap.set(el, { visibility: "visible" });

  switch (el.dataset.anim) {
    case "lines": {
      const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line" });
      return gsap.from(split.lines, {
        yPercent: 110,
        duration: 1.2,
        ease: EASE,
        stagger: 0.09,
        onComplete: () => split.revert(),
      });
    }
    case "chars": {
      const split = SplitText.create(el, { type: "lines,chars", mask: "lines", linesClass: "split-line" });
      return gsap.from(split.chars, {
        yPercent: 110,
        duration: 1.1,
        ease: EASE,
        stagger: 0.035,
        onComplete: () => split.revert(),
      });
    }
    case "words": {
      // Not reverted: words stay as inline blocks so nested animated spans survive.
      const split = SplitText.create(el, { type: "words" });
      return gsap.from(split.words, {
        yPercent: 90,
        rotation: 8,
        autoAlpha: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.07,
      });
    }
    case "highlight":
      return gsap.fromTo(
        el,
        { "--hl": 0, color: "#ffffff" },
        { "--hl": 1, color: "#14141a", duration: 0.9, ease: "expo.inOut" },
      );
    case "panel":
      return gsap.fromTo(
        el,
        { clipPath: "inset(8% 12% 24% 12% round 160px)" },
        { clipPath: "inset(0% 0% 0% 0% round 32px)", duration: 1.5, ease: "expo.inOut", clearProps: "clipPath" },
      );
    case "spin":
      return gsap.from(el, { scale: 0, rotation: -140, duration: 1.4, ease: "back.out(1.6)", clearProps: "transform" });
    case "float":
      return gsap.from(el, { yPercent: 60, rotation: "+=14", autoAlpha: 0, duration: 1.5, ease: EASE, clearProps: "transform" });
    case "pop":
      return gsap.from(el, { y: 70, scale: 0.94, autoAlpha: 0, duration: 1.3, ease: EASE, clearProps: "transform" });
    case "drop":
      return gsap.from(el.children, {
        y: -140,
        rotation: () => gsap.utils.random(-35, 35),
        autoAlpha: 0,
        duration: 1.3,
        ease: "bounce.out",
        stagger: 0.07,
        clearProps: "transform",
      });
    case "fade-down":
      return gsap.from(el, { y: -16, autoAlpha: 0, duration: 1, ease: EASE, clearProps: "transform" });
    case "rule":
      return gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.4, ease: "expo.inOut", clearProps: "transform" });
    case "bars":
      return gsap.from(el.children, {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 1.1,
        ease: "back.out(1.4)",
        stagger: 0.05,
        clearProps: "transform",
      });
    case "reveal":
      return gsap.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", clearProps: "clipPath" },
      );
    case "count": {
      const end = Number(el.dataset.value ?? 0);
      const format = new Intl.NumberFormat(el.dataset.locale);
      const counter = { v: 0 };
      el.textContent = format.format(0);
      return gsap.to(counter, {
        v: end,
        duration: 1.8,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = format.format(Math.round(counter.v));
        },
      });
    }
    case "fade":
    default:
      return gsap.from(el, { y: 28, autoAlpha: 0, duration: 1.1, ease: EASE, clearProps: "transform" });
  }
}

export default function Motion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.documentElement.classList.add("motion-ready");

      // Header hides while scrolling down, comes back when scrolling up.
      const header = root.current?.querySelector<HTMLElement>("[data-header]");
      if (header) {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) =>
            header.classList.toggle("is-hidden", self.direction === 1 && self.scroll() > 160),
        });
      }

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        const q = gsap.utils.selector(root);

        // Wait for the webfonts so SplitText measures real line breaks.
        document.fonts.ready.then(() =>
          ctx.add(() => {
            const intro = gsap.timeline({ delay: 0.1 });
            (q("[data-anim][data-intro]") as HTMLElement[]).forEach((el) => {
              intro.add(build(el), Number(el.dataset.at ?? 0));
            });

            (q("[data-anim]:not([data-intro])") as HTMLElement[]).forEach((el) => {
              const anim = build(el);
              anim.pause().delay(Number(el.dataset.delay ?? 0));
              ScrollTrigger.create({
                trigger: el,
                start: "top 88%",
                once: true,
                onEnter: () => anim.play(),
              });
            });

            (q("[data-parallax]") as HTMLElement[]).forEach((el) => {
              const amount = Number(el.dataset.parallax ?? 6);
              gsap.fromTo(
                el,
                { yPercent: -amount },
                {
                  yPercent: amount,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
                },
              );
            });

            (q("[data-spin-scroll]") as HTMLElement[]).forEach((el) => {
              gsap.to(el, {
                rotation: 360,
                ease: "none",
                scrollTrigger: { start: 0, end: "max", scrub: 0.6 },
              });
            });

            const panel = q("[data-hero-panel]")[0];
            if (panel) {
              gsap.to(panel, {
                scale: 0.95,
                ease: "none",
                scrollTrigger: { trigger: panel, start: "top top", end: "bottom top", scrub: true },
              });
            }

            ScrollTrigger.refresh();
          }),
        );
      });
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
