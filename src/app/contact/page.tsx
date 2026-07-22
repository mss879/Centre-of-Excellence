import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/anim/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Contact and Visit | Ananda College Centre of Excellence" },
  description:
    "Contact the Centre about courses, visits, partnerships, media, support and general enquiries.",
  keywords: [
    "Centre of Excellence Ananda College contact",
    "STEAM centre Colombo",
    "visit Ananda College COE",
    "course enquiries",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact and visit"
        title="Start the right conversation."
        lede="Contact the Centre about courses, visits, partnerships, support, media or another enquiry. Choose a subject so your message reaches the right team."
      />

      <section className="container-site pb-24 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal group className="flex flex-col gap-12">
            <div>
              <p className="eyebrow mb-5">Contact</p>
              <p className="display-4 text-ink">{site.fullName}</p>
              <p className="mt-4 leading-relaxed text-body">
                {site.location}
                <br />
                Street address, telephone and office hours will be published
                here once confirmed by the Centre.
              </p>
            </div>
            <div className="border-t border-line pt-10">
              <p className="eyebrow mb-5">Plan your visit</p>
              <p className="leading-relaxed text-body">
                Visits should be arranged in advance. Confirm available dates,
                group size, accessibility needs, arrival instructions and
                photography requirements with the Centre team.
              </p>
            </div>
            <div className="border-t border-line pt-10">
              <p className="eyebrow mb-5">Enquiry options</p>
              <ul className="flex flex-col gap-2 text-[0.9375rem] text-body">
                <li>Course and programme enquiry</li>
                <li>School or educator visit</li>
                <li>Academic or industry partnership</li>
                <li>Donation or support</li>
                <li>Media enquiry</li>
                <li>General enquiry</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="While you're here"
        heading="Explore what students will do."
        body="From artificial intelligence to the fine arts: see the programmes taking shape across the ten centres."
        primary={{ label: "Explore programmes", href: "/courses" }}
        secondary={{ label: "About the Centre", href: "/about" }}
      />
    </>
  );
}
