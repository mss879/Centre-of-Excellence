"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type ElementType, type ReactNode } from "react";
import { usePreloaderReady } from "./PreloaderProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Animate direct children with a stagger instead of the wrapper itself. */
  group?: boolean;
  /** Play as soon as the preloader lifts instead of waiting for scroll —
      use for hero content that is always above the fold. */
  immediate?: boolean;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Subtle GSAP fade-up on scroll. Elements are hidden via CSS (html.js) until
 * the tween runs, and nothing starts until the preloader has lifted.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  group = false,
  immediate = false,
  delay = 0,
  y = 28,
  duration = 1.1,
  stagger = 0.09,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const ready = usePreloaderReady();

  useGSAP(
    () => {
      if (!ready || !ref.current) return;
      const targets = group
        ? Array.from(ref.current.children)
        : [ref.current];
      if (!targets.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { autoAlpha: 1 });
        return;
      }

      if (immediate) {
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: "power3.out",
            clearProps: "transform",
          },
        );
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ref.current,
            start: "clamp(top 88%)",
            once: true,
          },
        },
      );
    },
    { dependencies: [ready], scope: ref },
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} {...(group ? { "data-reveal-group": "" } : { "data-reveal": "" })}>
      {children}
    </Tag>
  );
}
