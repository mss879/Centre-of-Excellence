"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useId, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export interface AccordionEntry {
  title: string;
  meta?: string;
  body?: string;
  tag?: string;
}

/**
 * Editorial accordion: hairline rows, serif titles, GSAP height animation.
 * Rows without a body render as plain (non-interactive) list rows.
 */
export default function Accordion({
  items,
  numbered = false,
}: {
  items: AccordionEntry[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const baseId = useId();

  useGSAP(
    () => {
      if (!ref.current) return;
      const panels = ref.current.querySelectorAll<HTMLElement>("[data-acc-panel]");
      panels.forEach((panel) => {
        const i = Number(panel.dataset.accPanel);
        const isOpen = open === i;
        gsap.to(panel, {
          height: isOpen ? "auto" : 0,
          autoAlpha: isOpen ? 1 : 0,
          duration: 0.55,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [open], scope: ref },
  );

  const rowInner = (item: AccordionEntry, i: number, isOpen: boolean, expandable: boolean) => (
    <>
      {numbered ? (
        <span className="num-index w-8 flex-none pt-1">
          {String(i + 1).padStart(2, "0")}
        </span>
      ) : expandable ? (
        <span
          className={`num-index w-4 flex-none pt-1 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="mt-[0.7rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
        />
      )}
      <span className="grow">
        <span
          className={`display-4 block transition-colors duration-300 ${
            isOpen ? "text-maroon" : "text-ink"
          } ${expandable ? "group-hover:text-maroon" : ""}`}
        >
          {item.title}
        </span>
        {item.tag ? (
          <span className="mt-2 inline-block bg-maroon-tint px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-maroon">
            {item.tag}
          </span>
        ) : null}
      </span>
      {item.meta ? (
        <span className="hidden flex-none text-[0.8125rem] text-body md:inline">
          {item.meta}
        </span>
      ) : null}
    </>
  );

  return (
    <div ref={ref} className="border-t border-line">
      {items.map((item, i) => {
        const expandable = Boolean(item.body);
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.title + i} className="border-b border-line">
            {expandable ? (
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-baseline gap-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon md:gap-8"
              >
                {rowInner(item, i, isOpen, true)}
              </button>
            ) : (
              <div className="flex w-full items-baseline gap-5 py-5 md:gap-8">
                {rowInner(item, i, isOpen, false)}
              </div>
            )}
            {expandable ? (
              <div
                id={panelId}
                data-acc-panel={i}
                aria-hidden={!isOpen}
                className="h-0 overflow-hidden opacity-0"
              >
                <p className="max-w-3xl pb-6 pl-9 text-[0.9840rem] leading-relaxed text-body md:pl-16">
                  {item.body}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
