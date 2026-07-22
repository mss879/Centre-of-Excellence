import Link from "next/link";
import Reveal from "@/components/anim/Reveal";

interface Cta {
  label: string;
  href: string;
}

interface CtaBandProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: Cta;
  secondary?: Cta;
}

/** Deep-burgundy closing band with primary/secondary actions. */
export default function CtaBand({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
}: CtaBandProps) {
  return (
    <section className="bg-maroon text-white">
      <div className="container-site py-20 md:py-28">
        <Reveal group className="flex flex-col items-start gap-8 md:max-w-3xl">
          {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
          <h2 className="display-2">{heading}</h2>
          {body ? (
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              {body}
            </p>
          ) : null}
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href={primary.href}
              className="btn-solid !bg-white !text-maroon hover:!bg-white/90"
            >
              {primary.label}
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="btn-outline btn-outline--light">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
