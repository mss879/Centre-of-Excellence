import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "News and Ideas | Ananda College Centre of Excellence" },
  description:
    "Read student project stories, Centre updates and perspectives on STEAM education, creativity, technology and learning in Sri Lanka.",
  keywords: [
    "STEAM education Sri Lanka",
    "STEM education articles",
    "student innovation stories",
    "project-based learning examples",
  ],
  alternates: { canonical: "/news-and-ideas" },
};

const categories = [
  "Student work",
  "Educator perspectives",
  "Centre updates",
  "Research and ideas",
  "Events and exhibitions",
  "Partnerships",
];

const upcoming = [
  "What is STEAM education, and what does it look like in practice?",
  "From question to prototype: the Centre's learning cycle",
  "How students can learn AI without treating it as magic",
  "Why mathematical thinking matters outside the mathematics classroom",
  "Making science visible through observation and experiment",
  "Media literacy in an age of synthetic content",
  "Design thinking for students: begin with people, not the solution",
  "What responsible entrepreneurship can teach young people",
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and ideas"
        title="Follow the work. Learn from the process."
        lede="Read about student projects, educators, programme developments, partnerships, events and practical ideas from across the Centre."
      />

      <section className="container-site pb-24 md:pb-32">
        <Reveal className="mb-12 border-t border-line pt-10">
          <p className="eyebrow mb-6">Content categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="border border-line px-4 py-2 text-[0.8125rem] font-medium text-body"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-10 max-w-2xl pt-6">
          <p className="eyebrow mb-6">Coming first</p>
          <h2 className="display-2 text-ink">
            Stories we are preparing for launch.
          </h2>
        </Reveal>
        <Reveal group>
          {upcoming.map((title, i) => (
            <article
              key={title}
              className="group flex items-baseline gap-6 border-b border-line py-6 first:border-t md:gap-10"
            >
              <span className="num-index w-8 flex-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display-4 max-w-3xl text-ink transition-colors duration-300 group-hover:text-maroon">
                {title}
              </h3>
              <span className="ml-auto hidden text-[0.75rem] font-medium uppercase tracking-[0.12em] text-body md:inline">
                In preparation
              </span>
            </article>
          ))}
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Stay close"
        heading="Hear it as it happens."
        body="Register for updates and be first to read student stories, programme announcements and ideas from the Centre."
        primary={{ label: "Register for updates", href: "/contact" }}
      />
    </>
  );
}
