import Link from "next/link";
import { footerNav, site } from "@/data/site";

const columns = [
  { title: "Explore", links: footerNav.explore },
  { title: "Programmes", links: footerNav.programmes },
  { title: "Connect", links: footerNav.connect },
];

export default function SiteFooter() {
  return (
    <footer className="bg-maroon-deep text-white">
      <div className="container-site">
        <div className="flex flex-col gap-12 border-b border-white/10 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="eyebrow eyebrow--light mb-5">
              {site.institution} · Colombo
            </p>
            <p className="font-display max-w-xl text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12]">
              Where knowledge becomes capability.
            </p>
          </div>
          <Link
            href="/support"
            className="btn-outline btn-outline--light self-start md:self-auto"
          >
            Support the Centre
          </Link>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg">Centre of Excellence</p>
            <p className="mt-3 max-w-[26ch] text-[0.9375rem] leading-relaxed text-white/50">
              A multidisciplinary learning initiative at {site.institution},
              bringing ten specialist centres into one connected educational
              model.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow eyebrow--light mb-5">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="link-underline text-[0.9375rem] text-white/70 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[0.8125rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>STEM.org Accredited™ Educational Experience</p>
        </div>
      </div>
    </footer>
  );
}
