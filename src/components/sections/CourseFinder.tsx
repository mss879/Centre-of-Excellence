"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { finderCourses } from "@/data/courses";
import CourseCard from "@/components/sections/CourseCard";

gsap.registerPlugin(useGSAP);

const ALL = "All";

function uniq(values: string[]) {
  return [ALL, ...Array.from(new Set(values))];
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow !text-[0.625rem] mb-3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={value === opt}
            className={`border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
              value === opt
                ? "border-maroon bg-maroon text-white"
                : "border-line text-body hover:border-maroon hover:text-maroon"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * Interactive course finder: filter the programme catalogue by subject,
 * level, age group and status, with free-text search. Results animate in
 * with a quiet GSAP stagger whenever the filters change.
 */
export default function CourseFinder({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [query, setQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => uniq(finderCourses.map((c) => c.finder!.categoryLabel)),
    [],
  );
  const levels = useMemo(
    () => uniq(finderCourses.map((c) => c.finder!.level)),
    [],
  );
  const statuses = useMemo(
    () => uniq(finderCourses.map((c) => c.finder!.status)),
    [],
  );

  const allResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return finderCourses.filter((c) => {
      const f = c.finder!;
      if (category !== ALL && f.categoryLabel !== category) return false;
      if (level !== ALL && f.level !== level) return false;
      if (status !== ALL && f.status !== status) return false;
      if (q) {
        const haystack = [
          c.title,
          c.shortTitle,
          c.tagline,
          f.categoryLabel,
          f.ages,
          ...c.keywords,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [category, level, status, query]);

  const results = preview ? allResults.slice(0, 3) : allResults;
  const resultsKey = results.map((r) => r.slug).join("|");

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "transform",
          overwrite: "auto",
        },
      );
    },
    { dependencies: [resultsKey], scope: gridRef },
  );

  return (
    <div>
      {/* Controls */}
      <div className="border-y border-line py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col gap-7">
            <FilterGroup
              label="Subject"
              options={categories}
              value={category}
              onChange={setCategory}
            />
            {!preview ? (
              <div className="flex flex-col gap-7 sm:flex-row sm:gap-12">
                <FilterGroup
                  label="Level"
                  options={levels}
                  value={level}
                  onChange={setLevel}
                />
                <FilterGroup
                  label="Status"
                  options={statuses}
                  value={status}
                  onChange={setStatus}
                />
              </div>
            ) : null}
          </div>
          <div className="lg:w-72">
            <label htmlFor="course-search" className="eyebrow !text-[0.625rem] mb-3 block">
              Search
            </label>
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Subject, age, keyword…"
              className="w-full border border-line bg-transparent px-4 py-3 text-[0.9375rem] transition-colors duration-300 placeholder:text-body/80 focus:border-maroon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            />
            <p role="status" aria-live="polite" className="mt-4 text-[0.8125rem] text-body">
              {allResults.length} programme{allResults.length === 1 ? "" : "s"}
              {preview && allResults.length > results.length
                ? ` · showing ${results.length}`
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length ? (
        <>
          <div
            ref={gridRef}
            className="mt-14 flex flex-col border-t border-line"
          >
            {results.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          {preview ? (
            <p className="mt-14 border-t border-line pt-8 text-[0.9375rem] text-body">
              Compare all {finderCourses.length} programmes by subject, level,
              age and status in the{" "}
              <Link
                href="/courses"
                className="link-underline font-medium text-maroon"
              >
                full course finder
              </Link>
              .
            </p>
          ) : null}
        </>
      ) : (
        <div className="py-24 text-center">
          <p className="display-4 text-ink">No programmes match that search.</p>
          <button
            type="button"
            onClick={() => {
              setCategory(ALL);
              setLevel(ALL);
              setStatus(ALL);
              setQuery("");
            }}
            className="link-underline mt-4 font-medium text-maroon"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
