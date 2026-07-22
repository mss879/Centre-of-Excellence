import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/learning",
    "/centres",
    "/courses",
    "/impact",
    "/standards-and-partnerships",
    "/news-and-ideas",
    "/support",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${site.url}/courses/${course.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
