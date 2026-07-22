import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ImageBanner from "@/components/sections/ImageBanner";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Hands-on STEAM Learning | Centre of Excellence" },
  description:
    "See how project-based STEAM learning develops critical thinking, creativity, collaboration and practical capability at Ananda College.",
  keywords: [
    "hands-on STEAM learning",
    "project-based learning Sri Lanka",
    "practical STEM education",
    "design thinking for students",
    "interdisciplinary education",
  ],
  alternates: { canonical: "/learning" },
};

const cycle = [
  ["Ask", "Notice a need, pattern or possibility and frame a useful question."],
  ["Explore", "Research the context, gather evidence and understand what is already known."],
  ["Imagine", "Generate possibilities and decide which ideas are worth testing."],
  ["Make", "Create an experiment, model, prototype, performance or first version."],
  ["Test", "Observe what happens, collect feedback and identify limitations."],
  ["Improve", "Revise the work, explain the learning and consider the next step."],
] as const;

const capabilities = [
  ["Critical thinking", "Assess evidence, recognise assumptions and make reasoned decisions."],
  ["Creativity", "Generate possibilities and express ideas in original, useful forms."],
  ["Problem-solving", "Break unfamiliar challenges into manageable parts and persist through uncertainty."],
  ["Collaboration", "Share responsibility, listen, contribute and improve work together."],
  ["Communication", "Explain ideas clearly through speech, writing, visuals, demonstrations and performance."],
  ["Digital and technical confidence", "Use tools with growing independence while understanding their limits."],
  ["Agency and reflection", "Take ownership of learning, respond to feedback and recognise personal growth."],
] as const;

export default function LearningPage() {
  return (
    <>
      <PageHero
        eyebrow="How students learn"
        title="Questions become projects. Projects become capability."
        lede="Learning at the Centre is active, interdisciplinary and reflective. Students investigate, design, make, test, communicate and improve, supported by educators and mentors who help them connect practical work with deeper understanding."
      />

      <ImageBanner
        src="/images/hero-learning.jpg"
        alt="Students collaborating on an electronics prototype"
        priority
      />

      {/* what steam means */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">What STEAM means here</p>
            <h2 className="display-2 text-ink">
              Subjects connect when the work is real.
            </h2>
          </Reveal>
          <Reveal group className="flex flex-col gap-6 md:pt-2">
            <p className="lede">
              STEAM brings science, technology, engineering, the arts and
              mathematics into conversation. It does not weaken individual
              subjects. It helps students understand when and how to use them
              together.
            </p>
            <p className="text-body">
              A project may require scientific observation, mathematical
              reasoning, a digital tool, physical design, visual communication
              and a clear explanation. Students learn the value of each
              discipline by using it with purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* learning cycle */}
      <section className="bg-maroon text-white">
        <div className="container-site py-24 md:py-32">
          <Reveal className="mb-14 max-w-2xl md:mb-20">
            <p className="eyebrow eyebrow--light mb-6">The learning cycle</p>
            <h2 className="display-2">From question to considered outcome.</h2>
          </Reveal>
          <Reveal group className="grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
            {cycle.map(([title, body], i) => (
              <div key={title} className="border-t border-white/15 py-7 pr-4">
                <span className="num-index !text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 mt-3">{title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                  {body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* capabilities */}
      <section className="container-site py-24 md:py-32">
        <Reveal className="mb-14 max-w-3xl md:mb-20">
          <p className="eyebrow mb-6">What students develop</p>
          <h2 className="display-2 text-ink">
            Capabilities that travel across subjects and through life.
          </h2>
        </Reveal>
        <Reveal group className="grid gap-x-16 md:grid-cols-2">
          {capabilities.map(([title, body]) => (
            <div key={title} className="border-b border-line py-6 first:border-t md:first:border-t-0">
              <h3 className="display-4 text-ink">{title}</h3>
              <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-body">
                {body}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* values + mentors */}
      <section className="bg-mist">
        <div className="container-site grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal group>
            <p className="eyebrow mb-6">Learning with values</p>
            <h2 className="display-3 text-ink">
              Capability must be joined with responsibility.
            </h2>
            <p className="mt-6 text-body">
              Technical skill alone is not enough. Students are encouraged to
              consider who benefits, who may be affected, what evidence is
              missing and how a solution can be used responsibly.
            </p>
          </Reveal>
          <Reveal group>
            <p className="eyebrow mb-6">Educators and mentors</p>
            <h2 className="display-3 text-ink">
              Guided by people who know learning and practice.
            </h2>
            <p className="mt-6 text-body">
              Teachers provide academic foundations and educational care.
              Approved mentors can add specialist knowledge, professional
              context and feedback. Together, they help students attempt
              ambitious work without losing sight of safety, inclusion or
              learning.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Continue"
        heading="Explore the centres."
        body="Ten specialist environments. One learning ecosystem. See where the work happens."
        primary={{ label: "Explore the centres", href: "/centres" }}
        secondary={{ label: "View courses", href: "/courses" }}
      />
    </>
  );
}
