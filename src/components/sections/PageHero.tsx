import Reveal from "@/components/anim/Reveal";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  status?: string;
  children?: ReactNode;
  /** widths for the title column */
  narrow?: boolean;
}

/**
 * Standard editorial page opening: eyebrow, large serif headline, lede.
 * Sits on white, Harvard-style, with generous top space under the fixed header.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  status,
  children,
  narrow = false,
}: PageHeroProps) {
  return (
    <section className="container-site pt-36 pb-14 md:pt-48 md:pb-20">
      <Reveal group immediate>
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className={`display-1 text-ink ${narrow ? "max-w-3xl" : "max-w-5xl"}`}>
          {title}
        </h1>
        {status ? (
          <p className="mt-8">
            <span className="status-pill">{status}</span>
          </p>
        ) : null}
        {lede ? <p className="lede mt-8 max-w-2xl">{lede}</p> : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Reveal>
    </section>
  );
}
