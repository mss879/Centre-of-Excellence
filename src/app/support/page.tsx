import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ImageBanner from "@/components/sections/ImageBanner";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Support the Centre of Excellence | Ananda College" },
  description:
    "Help create practical STEAM opportunities through transparent donations, equipment, expertise, scholarships and partnerships.",
  keywords: [
    "support STEAM education Sri Lanka",
    "donate to education Sri Lanka",
    "CSR education projects Sri Lanka",
    "sponsor student education",
    "Ananda College projects",
  ],
  alternates: { canonical: "/support" },
};

const purposes = [
  "Course development and delivery",
  "Laboratory and studio equipment",
  "Learning materials and software",
  "Student access and financial support",
  "Educator development",
  "Project showcases and exhibitions",
  "Maintenance and long-term programme quality",
];

const ways = [
  [
    "Make a donation",
    "Support an approved project or priority through the College's verified giving process.",
  ],
  [
    "Fund access",
    "Help reduce financial barriers for students participating in approved programmes.",
  ],
  [
    "Provide equipment or services",
    "Contribute items or professional support that meet an identified educational need.",
  ],
  [
    "Share expertise",
    "Support students and educators through approved mentoring, workshops or curriculum advice.",
  ],
  [
    "Build a partnership",
    "Develop a sustained collaboration with clear educational outcomes.",
  ],
] as const;

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support the Centre"
        title="Help turn educational possibility into lasting opportunity."
        lede="Support for the Centre helps create the spaces, programmes and access that allow students to investigate, make, perform and lead."
      />

      <ImageBanner
        src="/images/centre-auditorium.jpg"
        alt="Burgundy seats of the Centre's auditorium awaiting an audience"
        priority
      />

      {/* defined purpose */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Give to a defined purpose</p>
            <h2 className="display-2 text-ink">
              Every contribution has a clear destination.
            </h2>
          </Reveal>
          <Reveal group className="md:pt-2">
            {purposes.map((p) => (
              <p
                key={p}
                className="flex gap-4 border-b border-line py-4 text-[1.0625rem] text-ink first:border-t"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                />
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ways to contribute */}
      <section className="bg-mist">
        <div className="container-site py-24 md:py-32">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Ways to contribute</p>
            <h2 className="display-2 text-ink">Five ways to help.</h2>
          </Reveal>
          <Reveal group className="grid gap-x-16 md:grid-cols-2">
            {ways.map(([title, body], i) => (
              <div key={title} className="border-t border-line py-8 pr-6">
                <span className="num-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-4 mt-3 text-ink">{title}</h3>
                <p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-body">
                  {body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* accountability */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Trust and accountability</p>
            <h2 className="display-2 text-ink">
              Support should be visible in the work.
            </h2>
          </Reveal>
          <Reveal group className="md:pt-2">
            <p className="lede">
              Every public appeal should identify its purpose, responsible
              owner, target, progress and reporting method. Donors and partners
              should be able to understand how support is used and what it
              makes possible.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Begin"
        heading="Speak with our team."
        body="Tell us how you would like to contribute, and we will connect you with the right people at the Centre."
        primary={{ label: "Support the Centre", href: "/contact" }}
        secondary={{ label: "Discuss a partnership", href: "/standards-and-partnerships" }}
      />
    </>
  );
}
