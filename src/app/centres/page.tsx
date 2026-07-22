import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import ArrowLink from "@/components/ui/ArrowLink";
import { centres } from "@/data/centres";

export const metadata: Metadata = {
  title: { absolute: "Ten STEAM Learning Centres | Ananda College COE" },
  description:
    "Explore ten connected centres for AI, science, mathematics, languages, STEAM, arts, media, enterprise, leadership and performance.",
  keywords: [
    "STEAM learning centres Sri Lanka",
    "AI centre school",
    "science centre Colombo",
    "mathematics lab",
    "school media studio",
    "STEAM hub Sri Lanka",
  ],
  alternates: { canonical: "/centres" },
};

export default function CentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Ten connected centres"
        title="Different disciplines. Shared purpose."
        lede="Each centre offers a distinct environment for learning. Together, they allow students to connect ideas, tools and forms of expression as their work develops."
      />

      {/* alternating editorial list */}
      <section className="container-site pb-8">
        <div className="flex flex-col gap-24 md:gap-32">
          {centres.map((centre, i) => (
            <article
              key={centre.id}
              id={centre.id}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-20"
            >
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <Parallax className="img-frame aspect-[3/2]" amount={7}>
                  <div className="absolute inset-0">
                    <Image
                      src={centre.image}
                      alt={centre.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </Parallax>
              </Reveal>
              <Reveal group className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="num-index">{centre.index}</span>
                <h2 className="display-3 mt-3 text-ink">{centre.name}</h2>
                <p className="display-4 mt-4 text-maroon">{centre.tagline}</p>
                <p className="mt-5 max-w-xl text-body">{centre.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {centre.topics.map((topic) => (
                    <li
                      key={topic}
                      className="border border-line px-3 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-body"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                {centre.courseSlug ? (
                  <div className="mt-8">
                    <ArrowLink href={`/courses/${centre.courseSlug}`}>
                      Related programmes
                    </ArrowLink>
                  </div>
                ) : null}
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32">
        <Reveal className="border-t border-line pt-10">
          <p className="max-w-2xl text-body">
            A scientific investigation may require a sensor, mathematical
            analysis, visual communication and a public presentation. The
            strongest learning often happens at those connections:{" "}
            <Link href="/learning" className="link-underline font-medium text-maroon">
              see how the learning cycle works
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Begin"
        heading="Find your centre. Find your course."
        body="Explore developing programmes across all ten centres, from artificial intelligence to the performing arts."
        primary={{ label: "Explore programmes", href: "/courses" }}
        secondary={{ label: "Support the Centre", href: "/support" }}
      />
    </>
  );
}
