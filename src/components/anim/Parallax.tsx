"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Wraps an image (or anything) and drifts it a few percent as the page
 * scrolls — the quiet parallax used on hero and banner imagery.
 */
export default function Parallax({
  children,
  className,
  amount = 10,
}: {
  children: ReactNode;
  className?: string;
  /** total yPercent travel */
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const inner = ref.current.firstElementChild;
      if (!inner) return;
      gsap.fromTo(
        inner,
        { yPercent: -amount / 2, scale: 1 + amount / 100 },
        {
          yPercent: amount / 2,
          scale: 1 + amount / 100,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
