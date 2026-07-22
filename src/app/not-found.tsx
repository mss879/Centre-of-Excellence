import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col justify-center py-40">
      <p className="eyebrow mb-6">Page not found</p>
      <h1 className="display-1 max-w-3xl text-ink">
        This page hasn&rsquo;t been built yet.
      </h1>
      <p className="lede mt-8 max-w-xl">
        Like the Centre itself, this corner of the site may still be in
        development. Let us guide you somewhere useful.
      </p>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
        <ArrowLink href="/" variant="filled">
          Return home
        </ArrowLink>
        <ArrowLink href="/courses">Explore courses</ArrowLink>
      </div>
    </section>
  );
}
