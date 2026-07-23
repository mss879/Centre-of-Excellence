"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav, site } from "@/data/site";

gsap.registerPlugin(useGSAP);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Build the open/close timeline once. */
  useGSAP(
    () => {
      if (!overlayRef.current) return;
      const links = overlayRef.current.querySelectorAll("[data-menu-link]");
      const aside = overlayRef.current.querySelectorAll("[data-menu-aside]");
      tl.current = gsap
        .timeline({ paused: true })
        .set(overlayRef.current, { display: "flex" })
        .fromTo(
          overlayRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "power4.inOut",
          },
        )
        .fromTo(
          links,
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" },
          "-=0.25",
        )
        .fromTo(
          aside,
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.45",
        );
    },
    { scope: overlayRef },
  );

  useEffect(() => {
    if (!tl.current) return;
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (open) {
      document.documentElement.style.overflow = "hidden";
      if (main) main.inert = true;
      if (footer) footer.inert = true;
      tl.current.timeScale(1).play();
      // Move focus into the menu once it is visible.
      window.setTimeout(() => {
        overlayRef.current
          ?.querySelector<HTMLElement>("[data-menu-close]")
          ?.focus();
      }, 350);
    } else {
      document.documentElement.style.overflow = "";
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      tl.current.timeScale(1.6).reverse();
      toggleRef.current?.focus();
    }
  }, [open]);

  /* Close with Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Close the menu if the route changes while it is open */
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-300 ${
          scrolled ? "border-b border-line" : ""
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between md:h-[84px]">
          <Link href="/" className="flex items-center" aria-label={site.fullName}>
            <Image
              src="/textual-logo-2.png"
              alt={site.fullName}
              width={5328}
              height={1220}
              priority
              sizes="(min-width: 768px) 200px, 165px"
              className="h-[38px] w-auto md:h-[46px]"
            />
          </Link>

          <div className="flex items-center">
            <nav className="mr-2 hidden items-center gap-8 lg:flex" aria-label="Primary">
              <Link href="/about" className="link-underline text-[0.9375rem] font-medium text-ink">
                About
              </Link>
              <Link href="/centres" className="link-underline text-[0.9375rem] font-medium text-ink">
                Centres
              </Link>
              <Link href="/courses" className="link-underline text-[0.9375rem] font-medium text-ink">
                Courses
              </Link>
            </nav>
            <Link
              href="/support"
              className="mr-4 hidden border border-maroon px-5 py-2.5 text-[0.875rem] font-medium text-maroon transition-colors duration-300 hover:bg-maroon hover:text-white md:inline-flex"
            >
              Support the Centre
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label="Open menu"
              className="-mr-2 flex h-12 items-center px-2"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] bg-maroon transition-colors duration-300 hover:bg-maroon-deep"
              >
                <span className="block h-px w-[18px] bg-white" />
                <span className="block h-px w-[18px] bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-0 z-[60] hidden flex-col bg-maroon text-white"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        {/* Close button, aligned with the header's hamburger position */}
        <div className="absolute inset-x-0 top-0">
          <div className="container-site flex h-[72px] items-center justify-end md:h-[84px]">
            <button
              type="button"
              data-menu-close
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-12 items-center px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-maroon"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="m2 2 12 12M14 2 2 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="container-site flex grow flex-col justify-center pt-24 pb-12">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
            <nav aria-label="Menu">
              <ul className="flex flex-col">
                {[{ label: "Home", href: "/" }, ...primaryNav].map((item, i) => (
                  <li key={item.href} data-menu-link className="border-b border-white/10">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-3 md:py-[0.85rem]"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="num-index !text-white/55 text-[0.8125rem]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[clamp(1.4rem,3.2vh,2.1rem)] leading-tight transition-colors duration-300 group-hover:text-white/60">
                          {item.label}
                        </span>
                      </span>
                      <span className="hidden text-[0.8125rem] text-white/60 md:inline">
                        {item.description ?? ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden flex-col justify-end gap-10 lg:flex">
              <div data-menu-aside>
                <p className="eyebrow eyebrow--light mb-4">Visit</p>
                <p className="text-white/70">
                  {site.fullName}
                  <br />
                  {site.location}
                </p>
              </div>
              <div data-menu-aside>
                <p className="eyebrow eyebrow--light mb-4">Begin</p>
                <p className="max-w-xs text-white/70">
                  Where knowledge becomes capability: practical, project-based
                  STEAM learning.
                </p>
                <Link
                  href="/courses"
                  onClick={() => setOpen(false)}
                  className="link-underline mt-5 inline-block font-medium text-white"
                >
                  Explore the courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
