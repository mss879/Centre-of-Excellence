import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { centres } from "@/data/centres";
import { ArrowIcon } from "@/components/ui/ArrowLink";

/**
 * Text-only index of the ten centres, one row per centre.
 *
 * The client asked for the imagery to come out and the list to carry the
 * section on its own, so there is no hover crossfade panel any more — which
 * means no client state and no GSAP hover work: rows are plain links styled
 * with group-hover. Name and tagline sit in aligned columns on desktop so the
 * row reads as an editorial contents list rather than a bare stack of names.
 */
export default function CentresExplorer({ detailed = false }: { detailed?: boolean }) {
  return (
    <Reveal as="ol" group stagger={0.05} className="flex flex-col border-t border-line">
      {centres.map((centre) => (
        <li key={centre.id} className="border-b border-line">
          <Link
            href={centre.courseSlug ? `/courses/${centre.courseSlug}` : "/centres"}
            id={centre.id}
            className="group grid grid-cols-[2.25rem_1fr_2.25rem] items-start gap-x-5 gap-y-2 py-6 md:grid-cols-[3rem_1.05fr_1.35fr_2.25rem] md:gap-x-10 md:py-8"
          >
            <span className="num-index pt-1 transition-colors duration-300 group-hover:text-maroon">
              {centre.index}
            </span>

            <span className="display-4 text-ink transition-colors duration-300 group-hover:text-maroon">
              {centre.name}
            </span>

            {/* Wraps under the name on mobile, sits in its own column on desktop */}
            <span className="col-start-2 row-start-2 md:col-start-3 md:row-start-1">
              <span className="block max-w-xl text-[0.9375rem] leading-relaxed text-body">
                {centre.tagline}
              </span>
              {detailed ? (
                <span className="mt-3 block max-w-xl text-[0.9375rem] leading-relaxed text-body/80">
                  {centre.description}
                </span>
              ) : null}
            </span>

            {/* Always pinned to the far right of the row, at every breakpoint */}
            <span className="col-start-3 row-start-1 flex h-9 w-9 flex-none items-center justify-center justify-self-end rounded-full border border-line text-ink transition-all duration-300 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white md:col-start-4 md:row-start-1">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}
