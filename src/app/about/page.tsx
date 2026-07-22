import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ImageBanner from "@/components/sections/ImageBanner";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "About the Centre of Excellence | Ananda College" },
  description:
    "Learn why Ananda College is creating a multidisciplinary Centre of Excellence for practical STEAM learning, leadership and national contribution.",
  keywords: [
    "Ananda College Centre of Excellence",
    "education innovation Sri Lanka",
    "STEAM centre Colombo",
    "practical education Sri Lanka",
  ],
  alternates: { canonical: "/about" },
};

const principles = [
  ["Curiosity", "We begin with questions and make space for exploration."],
  ["Practical learning", "We connect ideas with experiments, projects, performances and real work."],
  ["Connection", "We bring disciplines, people and perspectives together."],
  ["Integrity", "We value evidence, honesty, responsible practice and respect for others."],
  ["Stewardship", "We use spaces, resources, technology and support with care."],
  ["Contribution", "We encourage students to apply learning in ways that benefit their communities."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Centre"
        title="A place for knowledge, practice and contribution."
        lede="The Centre of Excellence is a multidisciplinary learning initiative at Ananda College. It is being created to help students connect academic knowledge with practical capability, creative confidence, ethical judgement and service to society."
      />

      <ImageBanner
        src="/images/hero-about.jpg"
        alt="Arched veranda corridor of a heritage building at Ananda College"
        priority
      />

      {/* why */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Why the Centre exists</p>
            <h2 className="display-2 text-ink">
              Knowledge matters most when it can be used well.
            </h2>
          </Reveal>
          <Reveal group className="flex flex-col gap-6 md:pt-2">
            <p className="lede">
              Young people are entering a world shaped by rapid technological,
              social and environmental change. They need strong academic
              foundations, but they also need opportunities to investigate
              unfamiliar problems, work with others, communicate clearly and
              act responsibly.
            </p>
            <p className="text-body">
              The Centre creates those opportunities by bringing specialist
              learning environments into one connected educational model.
              Students can explore a discipline in depth while also seeing how
              it relates to other forms of knowledge.
            </p>
          </Reveal>
        </div>
      </section>

      {/* mission / vision */}
      <section className="bg-maroon text-white">
        <div className="container-site grid gap-14 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal group>
            <p className="eyebrow eyebrow--light mb-6">Our mission</p>
            <p className="display-3">
              To develop capable, creative and responsible young people through
              interdisciplinary, hands-on learning that connects knowledge with
              purposeful action.
            </p>
          </Reveal>
          <Reveal group>
            <p className="eyebrow eyebrow--light mb-6">Our vision</p>
            <p className="display-3">
              To become a trusted model for practical STEAM education:
              beginning at Ananda College and contributing ideas, experience
              and opportunity to the wider education community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* principles */}
      <section className="container-site py-24 md:py-32">
        <Reveal className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-6">Guiding principles</p>
          <h2 className="display-2 text-ink">What shapes our work.</h2>
        </Reveal>
        <Reveal group className="grid gap-12 sm:grid-cols-2 md:gap-16">
          {principles.map(([title, body]) => (
            <div key={title} className="border-t border-line pt-8">
              <h3 className="display-4 text-ink">{title}</h3>
              <p className="mt-4 text-body">{body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* heritage */}
      <section className="bg-mist">
        <div className="container-site grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal group>
            <p className="eyebrow mb-6">Ananda College</p>
            <h2 className="display-2 text-ink">
              A long tradition of education in service to the nation.
            </h2>
            <p className="lede mt-7">
              The Centre grows from Ananda College&rsquo;s educational heritage
              and its commitment to developing knowledgeable, disciplined and
              socially responsible citizens. It extends that tradition through
              new spaces for science, technology, enterprise, communication and
              the arts.
            </p>
          </Reveal>
          <Reveal group className="md:pt-2">
            <p className="eyebrow mb-6">More than a building</p>
            <p className="lede">
              The redeveloped Pasmahala Science Building will give the Centre a
              physical home. Its lasting importance will depend on the quality
              of its programmes, educators, partnerships, governance and
              access.
            </p>
            <p className="mt-5 text-body">
              The aim is not simply to equip rooms, but to create a learning
              community that remains active, useful and accountable.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Continue"
        heading="Explore how learning works."
        body="Questions become projects. Projects become capability: see how the Centre's learning cycle turns curiosity into considered outcomes."
        primary={{ label: "Our learning approach", href: "/learning" }}
        secondary={{ label: "Explore the centres", href: "/centres" }}
      />
    </>
  );
}
