import Link from "next/link";
import type { Course } from "@/data/courses";
import { ArrowIcon } from "@/components/ui/ArrowLink";

/**
 * Editorial course row. Courses are listed one after another without imagery,
 * so the title and the practical detail carry the comparison.
 */
export default function CourseCard({ course }: { course: Course }) {
  const meta = course.finder;
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col gap-6 border-b border-line py-8 md:flex-row md:items-center md:justify-between md:gap-14 md:py-9"
    >
      <div className="max-w-2xl">
        <p className="eyebrow !text-[0.625rem] mb-3">
          {meta?.categoryLabel ?? course.eyebrow}
        </p>
        <h3 className="display-3 text-ink transition-colors duration-300 group-hover:text-maroon">
          {course.shortTitle}
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
          {course.tagline}
        </p>
        {meta ? (
          <p className="mt-4 text-[0.8125rem] text-body">
            {[meta.ages, meta.duration, meta.level, meta.format].join(" · ")}
          </p>
        ) : null}
      </div>

      <div className="flex flex-none items-center gap-5 md:flex-col md:items-end md:gap-4">
        <span
          className={`text-[0.75rem] font-medium uppercase tracking-[0.1em] ${
            meta?.status === "In development" ? "text-body" : "text-maroon"
          }`}
        >
          {meta?.status ?? "Explore"}
        </span>
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white">
          <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
