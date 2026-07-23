import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/anim/Reveal";
import CourseCard from "@/components/sections/CourseCard";
import CtaBand from "@/components/sections/CtaBand";
import Accordion from "@/components/ui/Accordion";
import Tabs from "@/components/ui/Tabs";
import { courses, getChildren, getCourse } from "@/data/courses";

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

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const children = getChildren(course);
  const parent = course.parent ? getCourse(course.parent) : undefined;

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="bg-maroon text-white">
        <div className="container-site pt-32 pb-16 md:pt-44 md:pb-20">
          <div className="grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-20">
            <Reveal group immediate>
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
              <h1 className="display-2 max-w-3xl !text-[clamp(2.25rem,4.5vw,3.75rem)]">
                {course.title}
              </h1>
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
                <Link
                  href="/contact"
                  className="btn-solid !bg-white !text-maroon hover:!bg-white/90"
                >
                  {course.cta.label}
                </Link>
              </div>
            </Reveal>

            {course.sidebar?.length ? (
              <Reveal
                group
                immediate
                delay={0.25}
                className="flex flex-col gap-7 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-14"
              >
                {course.sidebar.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                      {group.label}
                    </p>
                    <p className="font-medium leading-snug">{group.primary}</p>
                    {group.secondary ? (
                      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-white/60">
                        {group.secondary}
                      </p>
                    ) : null}
                  </div>
                ))}
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ intro + facts */}
      <section className="container-site py-20 md:py-28">
        <div
          className={`grid gap-14 ${
            course.facts?.length ? "lg:grid-cols-[1.4fr_1fr] lg:gap-24" : ""
          }`}
        >
          <Reveal group className="flex max-w-3xl flex-col gap-6">
            {course.intro.map((p) => (
              <p key={p.slice(0, 32)} className="lede">
                {p}
              </p>
            ))}
          </Reveal>

          {course.facts?.length ? (
            <Reveal>
              <div className="border-t border-line">
                <p className="eyebrow pt-6 pb-2">At a glance</p>
                <dl>
                  {course.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4"
                    >
                      <dt className="pt-0.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-body">
                        {fact.label}
                      </dt>
                      <dd className="text-[0.9375rem] leading-relaxed text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* ------------------------------------------------------------ objectives */}
      {course.objectives ? (
        <section className="container-site pb-20 md:pb-28">
          <Reveal className="mb-10">
            <RuleHeading>
              {course.objectives.heading ?? "Educational objectives"}
            </RuleHeading>
          </Reveal>
          <Reveal className="border border-line bg-mist p-8 md:p-12">
            {course.objectives.intro ? (
              <p className="mb-9 max-w-3xl text-[1.0625rem] leading-relaxed text-ink">
                {course.objectives.intro}
              </p>
            ) : null}
            <div className="grid gap-x-14 gap-y-6 md:grid-cols-2">
              {course.objectives.items.map((item) => (
                <p key={item.slice(0, 40)} className="flex gap-4 text-[0.9840rem] leading-relaxed text-body">
                  <span
                    aria-hidden="true"
                    className="mt-[0.5rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                  />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ outline */}
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
            <Accordion items={course.outline.items} />
          </Reveal>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ integration */}
      {course.integration ? (
        <section className="container-site pb-20 md:pb-28">
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
        </section>
      ) : null}

      {/* ------------------------------------------------------------ learn list */}
      {course.learn ? (
        <section className="bg-mist">
          <div className="container-site py-20 md:py-28">
            <Reveal className="mb-12 max-w-2xl">
              <RuleHeading>{course.learn.heading}</RuleHeading>
              {course.learn.intro ? (
                <p className="lede mt-6">{course.learn.intro}</p>
              ) : null}
            </Reveal>
            <Reveal group className="grid gap-x-16 md:grid-cols-2">
              {course.learn.items.map((item) => (
                <p
                  key={item}
                  className="flex gap-4 border-b border-line py-4 text-[1.0625rem] text-ink"
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
        </section>
      ) : null}

      {/* ------------------------------------------------------------ sections */}
      {course.sections?.map((section) => (
        <section key={section.heading} className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <Reveal>
              <h2 className="display-3 max-w-sm text-ink">{section.heading}</h2>
              <span aria-hidden="true" className="mt-4 block h-[2px] w-14 bg-maroon" />
              {section.lead ? (
                <p className="mt-5 text-body">{section.lead}</p>
              ) : null}
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
                    <div
                      key={item.title}
                      className="flex gap-6 border-b border-line py-5"
                    >
                      {section.numbered ? (
                        <span className="num-index pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="mt-[0.7rem] block h-1.5 w-1.5 flex-none rounded-full bg-maroon"
                        />
                      )}
                      <div>
                        <h3 className="display-4 text-ink">{item.title}</h3>
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
        </section>
      ))}

      {/* ------------------------------------------------------------ admission */}
      {course.admission ? (
        <section className="container-site pb-20 md:pb-28">
          <Reveal className="mb-10">
            <RuleHeading>
              {course.admission.heading ?? "Admission & enrolment"}
            </RuleHeading>
          </Reveal>
          <Reveal>
            <Tabs tabs={course.admission.tabs} />
          </Reveal>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ policy */}
      {course.policy ? (
        <section className="container-site pb-20 md:pb-28">
          <Reveal className="border-l-2 border-maroon bg-mist p-8 md:p-12">
            <h2 className="display-4 text-ink">{course.policy.title}</h2>
            <div className="mt-4 flex max-w-3xl flex-col gap-4">
              {course.policy.body.map((p) => (
                <p key={p.slice(0, 32)} className="text-[0.9840rem] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ children */}
      {children.length ? (
        <section className="container-site pb-20 md:pb-28">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Programmes in this pathway</p>
            <h2 className="display-2 text-ink">
              {children.length === 1
                ? "One programme, in depth."
                : `${["", "One", "Two", "Three", "Four", "Five"][children.length] || children.length} connected programmes.`}
            </h2>
          </Reveal>
          <Reveal group className="flex flex-col border-t border-line">
            {children.map((child) => (
              <CourseCard key={child.slug} course={child} />
            ))}
          </Reveal>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ cta */}
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
