import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "STEM.org Accreditation and Partnerships | Ananda COE" },
  description:
    "Learn about the Centre's STEM.org Accredited educational experience and its approach to academic, industry and public-sector collaboration.",
  keywords: [
    "STEM.org Accredited Sri Lanka",
    "STEAM education partners",
    "school industry partnerships Sri Lanka",
    "education collaboration",
  ],
  alternates: { canonical: "/standards-and-partnerships" },
};

const principles = [
  "Educational value comes first",
  "Student safety, privacy and wellbeing are protected",
  "Roles and claims are documented",
  "Conflicts of interest are disclosed",
  "Access and inclusion are considered",
  "Outcomes are reviewed and reported honestly",
];

export default function StandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Standards and partnerships"
        title="Credibility should be visible and verifiable."
        lede="The Centre is committed to clear standards, responsible collaboration and transparent communication about recognition, partners and programme outcomes."
      />

      {/* accreditation */}
      <section className="bg-maroon text-white">
        <div className="container-site grid items-center gap-12 py-24 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-32">
          <Reveal>
            <div className="border border-white/20 p-10 text-center md:p-14">
              <p className="eyebrow eyebrow--light mb-6">Recognition</p>
              <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight">
                STEM.org Accredited™
              </p>
              <p className="mt-3 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-white/60">
                Educational Experience
              </p>
              <span className="mx-auto mt-8 block h-px w-14 bg-white/30" />
              <p className="mt-6 text-[0.9375rem] text-white/70">
                STEAM Education Center at Ananda College
              </p>
              <p className="mt-1 text-[0.8125rem] text-white/50">
                Credentialed 17 June 2026
              </p>
            </div>
          </Reveal>
          <Reveal group>
            <h2 className="display-2">An accredited educational experience.</h2>
            <p className="mt-7 text-lg leading-relaxed text-white/70">
              The STEAM Education Center at Ananda College holds a STEM.org
              Accredited™ Educational Experience credential. The Centre
              displays its recognition using approved wording and links to
              verification where available, because credibility should never
              have to be taken on trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* philosophy */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Partnership philosophy</p>
            <h2 className="display-2 text-ink">
              Expertise should enter the learning experience.
            </h2>
          </Reveal>
          <Reveal group className="flex flex-col gap-6 md:pt-2">
            <p className="lede">
              Academic, industry, public-sector and community partners can
              strengthen programmes through curriculum advice, mentoring,
              equipment, project briefs, educator development and access
              support.
            </p>
            <p className="text-body">
              The strongest partnership is not a logo on a page. It is a
              clearly defined contribution that improves student learning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* principles */}
      <section className="bg-mist">
        <div className="container-site py-24 md:py-32">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Partner principles</p>
            <h2 className="display-2 text-ink">Every collaboration commits to six things.</h2>
          </Reveal>
          <Reveal group className="grid gap-x-16 md:grid-cols-2">
            {principles.map((principle, i) => (
              <p
                key={principle}
                className="flex items-baseline gap-6 border-b border-line py-5 text-[1.0625rem] text-ink"
              >
                <span className="num-index">{String(i + 1).padStart(2, "0")}</span>
                {principle}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        heading="Discuss a partnership."
        body="Bring curriculum advice, mentoring, equipment, project briefs or educator development into the learning experience."
        primary={{ label: "Start the conversation", href: "/contact" }}
        secondary={{ label: "Support the Centre", href: "/support" }}
      />
    </>
  );
}
