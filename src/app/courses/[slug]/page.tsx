import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/anim/Reveal";
import ImageBanner from "@/components/sections/ImageBanner";
import CourseCard from "@/components/sections/CourseCard";
import CtaBand from "@/components/sections/CtaBand";
import Accordion from "@/components/ui/Accordion";
import Tabs from "@/components/ui/Tabs";
import { courses, getChildren, getCourse } from "@/data/courses";
import type { CourseSection, Zone } from "@/data/courses";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: { absolute: course.seoTitle },
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: course.seoTitle,
      description: course.metaDescription,
      images: [{ url: course.image }],
    },
  };
}

/** Small serif heading with the short brand rule beneath it. */
function RuleHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="display-3 text-ink">{children}</h2>
      <span aria-hidden="true" className="mt-4 block h-[2px] w-14 bg-maroon" />
    </div>
  );
}

/** Band opener: eyebrow label above a display heading. */
function ZoneHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow mb-6">{label}</p>
      <h2 className="display-2 text-ink">{title}</h2>
    </Reveal>
  );
}

/** Editorial section block — heading left, content right. */
function SectionBlock({ section }: { section: CourseSection }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24">
      <Reveal>
        <h3 className="display-3 max-w-sm text-ink">{section.heading}</h3>
        <span aria-hidden="true" className="mt-4 block h-[2px] w-14 bg-maroon" />
        {section.lead ? <p className="mt-5 text-body">{section.lead}</p> : null}
      </Reveal>
      <div>
        {section.body?.length ? (
          <Reveal group className="flex max-w-2xl flex-col gap-5">
            {section.body.map((p) => (
              <p key={p.slice(0, 32)} className="lede">
                {p}
              </p>
            ))}
          </Reveal>
        ) : null}
        {section.items?.length ? (
          <Reveal
            group
            className={
              section.items.every((it) => !it.body)
                ? "grid gap-x-12 sm:grid-cols-2"
                : "flex flex-col"
            }
          >
            {section.items.map((item, i) => (
              <div key={item.title} className="flex gap-6 border-b border-line py-5">
                {section.numbered ? (
                  <span className="num-index pt-1">{String(i + 1).padStart(2, "0")}</span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                  />
                )}
                <div>
                  <h4 className="display-4 text-ink">{item.title}</h4>
                  {item.body ? (
                    <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const children = getChildren(course);
  const parent = course.parent ? getCourse(course.parent) : undefined;

  /* Content is authored once and routed to the band where a reader needs it. */
  const sectionsIn = (zone: Zone) =>
    (course.sections ?? []).filter((s) => (s.zone ?? "learn") === zone);
  const tabsIn = (zone: Zone) =>
    (course.admission?.tabs ?? []).filter((t) => (t.zone ?? "qualify") === zone);

  const qualifyTabs = tabsIn("qualify");
  const assessmentTabs = tabsIn("learn");
  const achieveTabs = tabsIn("achieve");
  const learnSections = sectionsIn("learn");
  const achieveSections = sectionsIn("achieve");
  const trustSections = sectionsIn("trust");

  const quickFacts = course.finder
    ? [
        ["Subject", course.finder.categoryLabel],
        ["Ages", course.finder.ages],
        ["Level", course.finder.level],
        ["Duration", course.finder.duration],
        ["Format", course.finder.format],
      ]
    : [];

  const hasAchieve =
    achieveTabs.length > 0 || achieveSections.length > 0 || Boolean(course.integration);
  const hasTrust = Boolean(course.policy) || trustSections.length > 0;

  /* The authored admission heading covers a tab group that now spans bands, so
     the first band carrying any of its tabs keeps it; the rest get band titles. */
  const headingOwner = (["qualify", "learn", "achieve"] as Zone[]).find(
    (z) => tabsIn(z).length > 0,
  );
  const tabsHeading = (zone: Zone, fallback: string) =>
    zone === headingOwner && course.admission?.heading
      ? course.admission.heading
      : fallback;

  return (
    <>
      {/* ═══════════════════════════════════════════ ZONE 1 — ORIENT */}
      <section className="bg-maroon text-white">
        <div className="container-site pt-32 pb-16 md:pt-44 md:pb-20">
          <Reveal group immediate className="max-w-4xl">
            <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6875rem] font-semibold uppercase tracking-[0.22em]">
              <Link href="/courses" className="link-underline text-white/60 hover:text-white">
                Courses
              </Link>
              <span aria-hidden="true" className="text-white/30">/</span>
              {parent ? (
                <>
                  <Link
                    href={`/courses/${parent.slug}`}
                    className="link-underline text-white/60 hover:text-white"
                  >
                    {parent.shortTitle}
                  </Link>
                  <span aria-hidden="true" className="text-white/30">/</span>
                </>
              ) : null}
              <span className="text-white/90">{course.eyebrow}</span>
            </p>
            <h1 className="display-2 !text-[clamp(2.25rem,4.5vw,3.75rem)]">{course.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
              {course.tagline}
            </p>
            {course.status ? (
              <p className="mt-7">
                <span className="status-pill !border-white/25 !text-white/80 before:!bg-white">
                  {course.status}
                </span>
              </p>
            ) : null}
            <div className="mt-9">
              <Link href="/contact" className="btn-solid !bg-white !text-maroon hover:!bg-white/90">
                {course.cta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ImageBanner src={course.image} alt={course.imageAlt} priority />

      {/* At a glance — quick facts and detail groups in one band */}
      {quickFacts.length || course.sidebar?.length ? (
        <section className="border-b border-line bg-mist">
          <div className="container-site py-12 md:py-16">
            <Reveal className="mb-9">
              <p className="eyebrow">At a glance</p>
            </Reveal>

            {quickFacts.length ? (
              <Reveal group className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
                {quickFacts.map(([label, value]) => (
                  <div key={label} className="border-t border-line pt-4">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-maroon">
                      {label}
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] leading-snug text-ink">{value}</dd>
                  </div>
                ))}
              </Reveal>
            ) : null}

            {course.sidebar?.length ? (
              <Reveal
                group
                className={`grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 ${
                  quickFacts.length ? "mt-12 border-t border-line pt-11" : ""
                }`}
              >
                {course.sidebar.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-body">
                      {group.label}
                    </p>
                    <p className="font-medium leading-snug text-ink">{group.primary}</p>
                    {group.secondary ? (
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-body">
                        {group.secondary}
                      </p>
                    ) : null}
                  </div>
                ))}
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* ═══════════════════════════════════════════ ZONE 2 — QUALIFY */}
      {qualifyTabs.length ? (
        <section className="container-site py-20 md:py-28">
          <ZoneHeading label="Eligibility" title={tabsHeading("qualify", "Who it's for.")} />
          <Reveal>
            <Tabs tabs={qualifyTabs} />
          </Reveal>
        </section>
      ) : null}

      {/* ═══════════════════════════════════════════ ZONE 3 — LEARN */}
      <section className="container-site py-20 md:py-28">
        <Reveal group className="flex max-w-3xl flex-col gap-6">
          {course.intro.map((p) => (
            <p key={p.slice(0, 32)} className="lede">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Outcomes — programme aims beside student competencies */}
      {course.objectives || course.learn ? (
        <section className="container-site pb-20 md:pb-28">
          <div
            className={`grid gap-14 ${
              course.objectives && course.learn ? "lg:grid-cols-2 lg:gap-20" : ""
            }`}
          >
            {course.objectives ? (
              <div>
                <Reveal className="mb-8">
                  <RuleHeading>
                    {course.objectives.heading ?? "Educational objectives"}
                  </RuleHeading>
                </Reveal>
                <Reveal className="border border-line bg-mist p-8 md:p-10">
                  {course.objectives.intro ? (
                    <p className="mb-8 text-[1.0625rem] leading-relaxed text-ink">
                      {course.objectives.intro}
                    </p>
                  ) : null}
                  <div
                    className={`grid gap-x-14 gap-y-6 ${
                      course.learn ? "" : "md:grid-cols-2"
                    }`}
                  >
                    {course.objectives.items.map((item) => (
                      <p
                        key={item.slice(0, 40)}
                        className="flex gap-4 text-[0.9840rem] leading-relaxed text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.5rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                        />
                        {item}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
            ) : null}

            {course.learn ? (
              <div>
                <Reveal className="mb-8">
                  <RuleHeading>{course.learn.heading}</RuleHeading>
                  {course.learn.intro ? (
                    <p className="mt-5 text-body">{course.learn.intro}</p>
                  ) : null}
                </Reveal>
                <Reveal group>
                  {course.learn.items.map((item) => (
                    <p
                      key={item}
                      className="flex gap-4 border-b border-line py-3.5 text-[1.0625rem] text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                      />
                      {item}
                    </p>
                  ))}
                </Reveal>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Curriculum — stepped timeline, first step already open */}
      {course.outline ? (
        <section className="container-site pb-20 md:pb-28">
          <Reveal className="mb-8">
            <RuleHeading>{course.outline.heading ?? "Programme outline"}</RuleHeading>
          </Reveal>
          {course.outline.badges?.length ? (
            <Reveal className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              {course.outline.badges.map((badge, i) => (
                <span key={badge} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
                  ) : null}
                  <span
                    className={`text-[0.8125rem] font-medium ${
                      i === 0 ? "bg-maroon-tint px-2.5 py-1 text-maroon" : "text-body"
                    }`}
                  >
                    {badge}
                  </span>
                </span>
              ))}
            </Reveal>
          ) : null}
          <Reveal>
            <Accordion items={course.outline.items} defaultOpen={0} />
          </Reveal>
        </section>
      ) : null}

      {learnSections.map((section) => (
        <section key={section.heading} className="container-site pb-16 md:pb-24">
          <SectionBlock section={section} />
        </section>
      ))}

      {/* How the work is assessed */}
      {assessmentTabs.length ? (
        <section className="bg-mist">
          <div className="container-site py-20 md:py-28">
            <ZoneHeading label="Assessment" title={tabsHeading("learn", "How the work is measured.")} />
            <Reveal>
              <Tabs tabs={assessmentTabs} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* ═══════════════════════════════════════════ ZONE 4 — ACHIEVE */}
      {hasAchieve ? (
        <section className="container-site py-20 md:py-28">
          <ZoneHeading label="Outcomes" title={tabsHeading("achieve", "Where it leads.")} />

          {achieveTabs.length ? (
            <Reveal className="mb-20">
              <Tabs tabs={achieveTabs} />
            </Reveal>
          ) : null}

          {achieveSections.map((section) => (
            <div key={section.heading} className="mb-16 last:mb-0 md:mb-24">
              <SectionBlock section={section} />
            </div>
          ))}

          {course.integration ? (
            <div className="mt-16 md:mt-24">
              <Reveal className="mb-10">
                <RuleHeading>
                  {course.integration.heading ?? "Interdisciplinary integration"}
                </RuleHeading>
              </Reveal>
              <Reveal className="mb-10 border-l-2 border-maroon bg-mist p-8 md:p-10">
                <p className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink">
                  {course.integration.intro}
                </p>
              </Reveal>
              <Reveal>
                <Accordion
                  items={course.integration.items.map((item) => ({
                    title: item.title,
                    body: item.body,
                    tag: `Accommodated by: ${item.centre}`,
                  }))}
                />
              </Reveal>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* ═══════════════════════════════════════════ ZONE 5 — TRUST */}
      {hasTrust ? (
        <section className="bg-mist">
          <div className="container-site py-20 md:py-28">
            <ZoneHeading label="Good to know" title="Governance and safeguards." />

            {course.policy ? (
              <Reveal className="border-l-2 border-maroon bg-paper p-8 md:p-12">
                <h3 className="display-4 text-ink">{course.policy.title}</h3>
                <div className="mt-4 flex max-w-3xl flex-col gap-4">
                  {course.policy.body.map((p) => (
                    <p key={p.slice(0, 32)} className="text-[0.9840rem] leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {trustSections.map((section) => (
              <div key={section.heading} className="mt-16 md:mt-20">
                <SectionBlock section={section} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ═══════════════════════════════════════════ ZONE 6 — ACT */}
      {children.length ? (
        <section className="container-site py-20 md:py-28">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Programmes in this pathway</p>
            <h2 className="display-2 text-ink">
              {children.length === 1
                ? "One programme, in depth."
                : `${["", "One", "Two", "Three", "Four", "Five"][children.length] || children.length} connected programmes.`}
            </h2>
          </Reveal>
          <Reveal group className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <CourseCard key={child.slug} course={child} />
            ))}
          </Reveal>
        </section>
      ) : null}

      <CtaBand
        eyebrow={course.eyebrow}
        heading={course.cta.heading}
        body={course.cta.body}
        primary={{
          label: course.cta.label,
          href:
            children.length && course.children?.length === 1
              ? `/courses/${course.children[0]}`
              : "/contact",
        }}
        secondary={{ label: "All courses", href: "/courses" }}
      />
    </>
  );
}
