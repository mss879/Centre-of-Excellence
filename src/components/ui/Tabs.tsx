"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useId, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export interface TabEntry {
  label: string;
  intro?: string;
  items: { title: string; body: string }[];
}

/** Boxed tab panel with a quiet GSAP crossfade and full ARIA tabs wiring. */
export default function Tabs({ tabs }: { tabs: TabEntry[] }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  useGSAP(
    () => {
      if (!panelRef.current) return;
      gsap.fromTo(
        panelRef.current.children,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "transform",
        },
      );
    },
    { dependencies: [active], scope: panelRef },
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % tabs.length
        : (active - 1 + tabs.length) % tabs.length;
    setActive(next);
    listRef.current
      ?.querySelector<HTMLButtonElement>(`#${CSS.escape(`${baseId}-tab-${next}`)}`)
      ?.focus();
  };

  const tab = tabs[active];

  return (
    <div className="border border-line">
      <div
        ref={listRef}
        role="tablist"
        aria-label="Programme information"
        onKeyDown={onKeyDown}
        className="flex flex-wrap border-b border-line bg-mist"
      >
        {tabs.map((t, i) => (
          <button
            key={t.label}
            id={`${baseId}-tab-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls={`${baseId}-panel`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative px-6 py-4 text-[0.9375rem] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-maroon md:px-8 ${
              active === i
                ? "bg-paper text-maroon after:absolute after:inset-x-0 after:top-0 after:h-[2px] after:bg-maroon"
                : "text-body hover:text-maroon"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        ref={panelRef}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
        className="flex flex-col gap-7 p-8 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-maroon md:p-12"
      >
        {tab.intro ? (
          <p className="max-w-3xl text-[0.9840rem] leading-relaxed text-body">
            {tab.intro}
          </p>
        ) : null}
        {tab.items.map((item) => (
          <div key={item.title} className="flex gap-5">
            <span
              aria-hidden="true"
              className="mt-[0.55rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
            />
            <div>
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
