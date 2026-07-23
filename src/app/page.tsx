import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import ArrowLink from "@/components/ui/ArrowLink";
import CentresExplorer from "@/components/sections/CentresExplorer";
import CourseFinder from "@/components/sections/CourseFinder";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "Centre of Excellence at Ananda College | STEAM Sri Lanka" },
  description:
    "Discover hands-on STEAM education at Ananda College, where students learn across science, technology, engineering, arts and mathematics.",
  keywords: [
    "STEAM education Sri Lanka",
    "Ananda College Centre of Excellence",
    "STEM education Sri Lanka",
    "project-based learning Sri Lanka",
    "student innovation Sri Lanka",
  ],
  alternates: { canonical: "/" },
};

const capabilities = [
  ["Critical and analytical thinking", "Assess evidence, recognise assumptions and reach reasoned decisions."],
  ["Creativity and problem-solving", "Generate possibilities and persist through unfamiliar challenges."],
  ["Communication and collaboration", "Share responsibility, listen, contribute and improve work together."],
  ["Digital and technical confidence", "Use tools with growing independence while understanding their limits."],
  ["Ethical judgement", "Consider who benefits, who may be affected and what evidence is missing."],
  ["Resilience and reflection", "Respond to feedback and recognise personal growth."],
  ["Leadership through contribution", "Apply learning in ways that benefit the wider community."],
] as const;

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      {/* Type-only opening — the client asked for the hero imagery to come out
          and the words to carry the page on their own. */}
      <section className="relative overflow-hidden container-site pt-36 pb-20 md:pt-48 md:pb-28 lg:pt-52 lg:pb-32">
        {/* Subtle decorative background light glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-maroon/5 blur-3xl" />

        <Reveal group immediate>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-maroon/15 bg-maroon-tint/50 px-4 py-1.5 text-xs font-semibold tracking-wider text-maroon uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
            </span>
            Centre of Excellence at Ananda College
          </div>

          <h1 className="display-1 max-w-5xl text-ink">
            Where knowledge becomes capability.
          </h1>

          <p className="lede mt-8 max-w-2xl text-body">
            The Centre of Excellence brings science, technology,
            engineering, the arts and mathematics together through
            practical, project-based learning. Here, students investigate
            real questions, develop useful skills and turn ideas into work
            they can test, improve and share.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ArrowLink href="/about" variant="filled">
              Explore the Centre
            </ArrowLink>
            <ArrowLink href="/courses">View courses</ArrowLink>
          </div>

          {/* Micro stats / key features strip */}
          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-8 md:mt-20">
            <div>
              <span className="font-display text-3xl text-maroon md:text-4xl">10</span>
              <p className="mt-1.5 text-xs font-medium text-body/80 uppercase tracking-wider">Learning Centres</p>
            </div>
            <div>
              <span className="font-display text-3xl text-maroon md:text-4xl">STEAM</span>
              <p className="mt-1.5 text-xs font-medium text-body/80 uppercase tracking-wider">Integrated Approach</p>
            </div>
            <div>
              <span className="font-display text-3xl text-maroon md:text-4xl">100%</span>
              <p className="mt-1.5 text-xs font-medium text-body/80 uppercase tracking-wider">Project-Based</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- intro */}
      <section className="container-site py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Rooted in purpose</p>
            <h2 className="display-2 text-ink">Built for what comes next.</h2>
          </Reveal>
          <Reveal group className="flex flex-col gap-6 md:pt-2">
            <p className="lede">
              Ananda College has long understood education as preparation for a
              life of character, service and contribution. The Centre of
              Excellence carries that purpose into a new learning environment,
              designed for curiosity, creativity, collaboration and
              thoughtful action.
            </p>
            <p className="text-body">
              The redevelopment of the Pasmahala Science Building creates a
              home for ten connected learning centres. Its real value, however,
              will be found in what students do there: asking stronger
              questions, working across disciplines, learning from expert
              guidance and applying knowledge with responsibility.
            </p>
            <div className="mt-4">
              <ArrowLink href="/about">Discover our story</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- learning */}
      <section className="bg-mist">
        <div className="container-site grid items-center gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal className="order-2 md:order-1">
            <Parallax className="img-frame aspect-[4/3]" amount={8}>
              <div className="absolute inset-0">
                <Image
                  src="/images/hero-learning.jpg"
                  alt="Students collaborating on an electronics prototype"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </Reveal>
          <Reveal group className="order-1 md:order-2">
            <p className="eyebrow mb-6">Learning at the Centre</p>
            <h2 className="display-2 text-ink">
              Learn by asking. Understand by doing.
            </h2>
            <p className="lede mt-7">
              Students learn deeply when ideas become visible, testable and
              useful. At the Centre, a lesson may begin with a question,
              continue through research and design, and end with a model,
              experiment, performance, prototype, report or public
              presentation.
            </p>
            <p className="mt-5 text-body">
              This is STEAM in practice: subjects working together around
              meaningful challenges.
            </p>
            <div className="mt-8">
              <ArrowLink href="/learning">Our learning approach</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- centres */}
      <section className="container-site py-24 md:py-36">
        <Reveal className="mb-14 max-w-3xl md:mb-20">
          <p className="eyebrow mb-6">Ten connected centres</p>
          <h2 className="display-2 text-ink">
            Many disciplines. One learning ecosystem.
          </h2>
          <p className="lede mt-7">
            Students can work within one discipline or move between centres as
            a project develops. The strongest learning often happens at those
            connections.
          </p>
        </Reveal>
        <CentresExplorer />
        <Reveal className="mt-14">
          <ArrowLink href="/centres">Explore the centres</ArrowLink>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- capabilities */}
      <section className="bg-maroon text-white">
        <div className="container-site py-24 md:py-32">
          <Reveal className="mb-14 max-w-3xl md:mb-20">
            <p className="eyebrow eyebrow--light mb-6">Student capabilities</p>
            <h2 className="display-2">Education for thoughtful action.</h2>
            <p className="mt-7 text-lg leading-relaxed text-white/70">
              The Centre is designed to strengthen capabilities that students
              can carry across subjects and through life.
            </p>
          </Reveal>
          <Reveal group className="grid gap-x-16 sm:grid-cols-2">
            {capabilities.map(([title, body], i) => (
              <div
                key={title}
                className="flex gap-6 border-b border-white/10 py-6"
              >
                <span className="num-index !text-white/60 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-4">{title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/60">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- course finder */}
      <section className="container-site py-24 md:py-36">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Course finder</p>
            <h2 className="display-2 text-ink">
              Find a place to begin, and room to go further.
            </h2>
            <p className="lede mt-7">
              Explore developing programmes in artificial intelligence, STEAM,
              entrepreneurship, media, fine and digital arts, languages,
              science, mathematics, and character and citizenship.
            </p>
          </div>
          <ArrowLink href="/courses" variant="filled">
            Open the course finder
          </ArrowLink>
        </Reveal>
        <CourseFinder preview />
        <Reveal className="mt-16">
          <p className="text-[0.9375rem] text-body">
            Want to hear when an intake opens?{" "}
            <Link href="/contact" className="link-underline font-medium text-maroon">
              Register for course updates
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- support */}
      <CtaBand
        eyebrow="Support the Centre"
        heading="Help create the conditions for discovery."
        body="The Centre will grow through the commitment of educators, students, old Anandians, academic and industry partners, and supporters who believe in practical education with public purpose."
        primary={{ label: "Support the Centre", href: "/support" }}
        secondary={{ label: "Discuss a partnership", href: "/standards-and-partnerships" }}
      />
    </>
  );
}
