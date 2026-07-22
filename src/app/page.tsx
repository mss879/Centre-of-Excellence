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
      <section className="relative overflow-hidden container-site pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
        {/* Subtle decorative background light glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-maroon/5 blur-3xl" />
        
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left Column - Main Copy & CTAs */}
          <Reveal group immediate className="lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-maroon/15 bg-maroon-tint/50 px-4 py-1.5 text-xs font-semibold tracking-wider text-maroon uppercase mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
              </span>
              Centre of Excellence at Ananda College
            </div>
            
            <h1 className="display-1 text-ink">
              Where knowledge becomes capability.
            </h1>
            
            <p className="lede mt-7 text-body">
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
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <span className="font-serif text-2xl font-light text-maroon md:text-3xl">10</span>
                <p className="mt-1 text-xs font-medium text-body/80 uppercase tracking-wider">Learning Centres</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-light text-maroon md:text-3xl">STEAM</span>
                <p className="mt-1 text-xs font-medium text-body/80 uppercase tracking-wider">Integrated Approach</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-light text-maroon md:text-3xl">100%</span>
                <p className="mt-1 text-xs font-medium text-body/80 uppercase tracking-wider">Project-Based</p>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Creative Multi-Layered Interactive Hero Showcase */}
          <Reveal immediate className="relative lg:col-span-6 xl:col-span-6 lg:pl-4">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Background Architectural Framing & Accent Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-maroon-tint/80 via-mist to-transparent border border-maroon/10 -rotate-1 sm:-inset-4" />
              
              {/* Main Building Frame */}
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-xl transition-all duration-500 hover:shadow-2xl">
                <Parallax className="img-frame aspect-[4/3] sm:aspect-[14/10] lg:aspect-[4/3]" amount={5}>
                  <div className="absolute inset-0">
                    <Image
                      src="/images/hero-main.jpg"
                      alt="The Ananda College main building with a Centre of Excellence banner"
                      fill
                      priority
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </Parallax>


              </div>

              {/* Overlapping Secondary Active Showcase Card */}
              <div className="group/card absolute -bottom-8 -left-4 z-20 w-3/5 sm:-bottom-10 sm:-left-6 sm:w-2/3 max-w-[280px]">
                <div className="overflow-hidden rounded-xl border border-white/60 bg-paper p-2 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-maroon/20">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src="/images/hero-learning.jpg"
                      alt="Students collaborating on electronics prototype"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2.5 text-[0.7rem] font-semibold text-white tracking-wide uppercase">
                      Hands-on Prototyping
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Discipline Tag Pill */}
              <div className="absolute -top-6 -left-3 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-line bg-paper/95 p-3 shadow-lg backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-maroon text-white font-serif text-sm font-semibold">
                  S
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink">STEAM Learning Ecosystem</div>
                  <div className="text-[0.6875rem] text-body">10 Specialized Disciplines</div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
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
