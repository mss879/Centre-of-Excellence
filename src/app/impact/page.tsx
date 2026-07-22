import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ImageBanner from "@/components/sections/ImageBanner";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Our Intended Impact | Centre of Excellence Ananda College" },
  description:
    "See how the Centre aims to strengthen student capability, educator practice, public education and opportunity through STEAM learning.",
  keywords: [
    "future-ready education Sri Lanka",
    "student skills development",
    "education innovation Sri Lanka",
    "practical learning impact",
  ],
  alternates: { canonical: "/impact" },
};

const audiences = [
  [
    "For students",
    "From receiving knowledge to using it.",
    "Students gain opportunities to investigate, make, communicate and lead. They build portfolios of work that show not only what they know, but how they think, collaborate and improve.",
  ],
  [
    "For educators",
    "More tools for active, interdisciplinary teaching.",
    "The Centre can support teachers with spaces, equipment, professional learning and collaboration across subjects.",
  ],
  [
    "For public education",
    "A model to learn from, improve and share.",
    "The Centre can document its methods, challenges and results so that useful lessons extend beyond one institution.",
  ],
  [
    "For Sri Lanka",
    "Young people prepared to contribute.",
    "The long-term ambition is to develop capable, ethical and creative young people who can respond thoughtfully to Sri Lanka's scientific, technological, cultural and social needs.",
  ],
] as const;

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Intended impact"
        title="Learning should change what students are able to do."
        lede="The Centre's value should be visible in stronger student work, more confident educators, meaningful partnerships and useful contributions to the wider education community."
      />

      <ImageBanner
        src="/images/hero-impact.jpg"
        alt="A student presenting on stage in the auditorium"
        priority
      />

      <section className="container-site py-24 md:py-32">
        <div className="grid gap-x-16 gap-y-4 md:grid-cols-2">
          {audiences.map(([audience, heading, body], i) => (
            <Reveal key={audience} className="border-t border-line py-10 md:py-12">
              <span className="num-index">{String(i + 1).padStart(2, "0")}</span>
              <p className="eyebrow mt-4 mb-4">{audience}</p>
              <h2 className="display-3 max-w-md text-ink">{heading}</h2>
              <p className="mt-5 max-w-xl text-body">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Be part of it"
        heading="Impact needs partners."
        body="Academic, industry, public-sector and community partners can strengthen programmes through curriculum advice, mentoring, equipment, project briefs and educator development."
        primary={{ label: "Standards & partnerships", href: "/standards-and-partnerships" }}
        secondary={{ label: "Support the Centre", href: "/support" }}
      />
    </>
  );
}
