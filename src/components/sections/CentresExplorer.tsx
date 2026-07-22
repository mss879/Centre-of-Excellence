"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { centres } from "@/data/centres";
import { ArrowIcon } from "@/components/ui/ArrowLink";

gsap.registerPlugin(useGSAP);

/**
 * Interactive index of the ten centres: hovering a row crossfades the
 * sticky image panel (desktop). On mobile the imagery is inlined per row.
 */
export default function CentresExplorer({ detailed = false }: { detailed?: boolean }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!panelRef.current) return;
      const frames = panelRef.current.querySelectorAll("[data-centre-frame]");
      frames.forEach((frame, i) => {
        gsap.to(frame, {
          autoAlpha: i === active ? 1 : 0,
          scale: i === active ? 1 : 1.04,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
      const caption = panelRef.current.querySelector("[data-centre-caption]");
      if (caption) {
        gsap.fromTo(
          caption,
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", overwrite: "auto" },
        );
      }
    },
    { dependencies: [active], scope: panelRef },
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
      <ol className="flex flex-col">
        {centres.map((centre, i) => (
          <li key={centre.id} className="border-b border-line first:border-t">
            <div
              onMouseEnter={() => setActive(i)}
              onFocusCapture={() => setActive(i)}
              className="group"
            >
              <Link
                href={centre.courseSlug ? `/courses/${centre.courseSlug}` : "/centres"}
                id={centre.id}
                className="flex items-baseline gap-6 py-5 md:py-6"
              >
                <span className="num-index w-8 flex-none">{centre.index}</span>
                <span className="grow">
                  <span
                    className={`display-4 block transition-colors duration-300 ${
                      active === i ? "text-maroon" : "text-ink"
                    }`}
                  >
                    {centre.name}
                  </span>
                  {detailed ? (
                    <span className="mt-2 block max-w-xl text-[0.9375rem] leading-relaxed text-body">
                      {centre.tagline}
                    </span>
                  ) : null}
                </span>
                <span
                  className={`hidden h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-300 md:flex ${
                    active === i
                      ? "border-maroon bg-maroon text-white"
                      : "border-line text-ink"
                  }`}
                >
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </Link>

              {/* Inline image for small screens */}
              <div className="img-frame mb-6 aspect-[3/2] lg:hidden">
                <Image
                  src={centre.image}
                  alt={centre.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Sticky crossfade panel */}
      <div className="relative hidden lg:block" ref={panelRef} aria-hidden="true">
        <div className="sticky top-32">
          <div className="img-frame relative aspect-[3/2] w-full">
            {centres.map((centre, i) => (
              <div
                key={centre.id}
                data-centre-frame
                className="absolute inset-0"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {/* Eager: these swap on hover, so they must already be in cache —
                    lazy images inside hidden frames never fetch until hovered. */}
                <Image
                  src={centre.image}
                  alt={centre.imageAlt}
                  fill
                  loading="eager"
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div data-centre-caption className="mt-6">
            <p className="eyebrow !text-[0.625rem] mb-2">
              {centres[active].index} · {centres[active].name}
            </p>
            <p className="display-4 max-w-md text-ink">{centres[active].tagline}</p>
            {detailed ? (
              <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-body">
                {centres[active].description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
