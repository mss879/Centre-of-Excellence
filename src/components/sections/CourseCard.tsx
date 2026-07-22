import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { ArrowIcon } from "@/components/ui/ArrowLink";

/** Editorial course card used in the finder, category pages and teasers. */
export default function CourseCard({ course }: { course: Course }) {
  const meta = course.finder;
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col border-t border-line pt-0"
    >
      <div className="img-frame aspect-[3/2]">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex grow flex-col pt-6">
        <p className="eyebrow !text-[0.625rem] mb-3">
          {meta?.categoryLabel ?? course.eyebrow}
        </p>
        <h3 className="display-4 text-ink transition-colors duration-300 group-hover:text-maroon">
          {course.shortTitle}
        </h3>
        {meta ? (
          <p className="mt-3 text-[0.875rem] text-body">
            {[meta.ages, meta.duration, meta.level].join(" · ")}
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between pt-6">
          <span
            className={`text-[0.75rem] font-medium uppercase tracking-[0.1em] ${
              meta?.status === "In development" ? "text-body" : "text-maroon"
            }`}
          >
            {meta?.status ?? "Explore"}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
