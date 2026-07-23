import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CourseFinder from "@/components/sections/CourseFinder";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: { absolute: "STEAM Courses for Students in Sri Lanka | Ananda COE" },
  description:
    "Explore AI, STEAM, entrepreneurship, media, arts, science, mathematics and leadership programmes for school students at Ananda College.",
  keywords: [
    "STEAM courses for school students Sri Lanka",
    "STEM courses Sri Lanka",
    "courses for school students Colombo",
    "AI courses for students",
    "media courses for students",
    "art courses Colombo",
  ],
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses and programmes"
        title="Learn by investigating, making and doing."
        lede="Explore practical learning in artificial intelligence, coding, enterprise, media, the arts, science, mathematics and citizenship. Each programme is designed to move beyond passive instruction, giving students opportunities to question, practise, create and present."
      />

      <section className="container-site py-20 md:py-28">
        <Reveal className="mb-14 max-w-3xl">
          <p className="eyebrow mb-6">Course finder</p>
          <h2 className="display-2 text-ink">Find the right place to begin.</h2>
          <p className="lede mt-7">
            Some students arrive with a clear ambition. Others discover a new
            strength by trying something unfamiliar. The Centre supports both:
            focused pathways for students ready to go deeper and accessible
            introductions for those beginning to explore.
          </p>
          <p className="mt-5 text-body">
            Filter programmes by level, or search by subject, age or keyword.
          </p>
        </Reveal>
        <CourseFinder />
      </section>

      <CtaBand
        eyebrow="Stay informed"
        heading="Be first to hear when an intake opens."
        body="Tell us which subjects and age or grade level interest you, and receive the most relevant programme updates."
        primary={{ label: "Register for course updates", href: "/contact" }}
      />
    </>
  );
}
