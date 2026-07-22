"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

gsap.registerPlugin(ScrollTrigger);

interface PreloaderState {
  /** True once the preloader has fully lifted and the page may animate in. */
  ready: boolean;
}

const PreloaderContext = createContext<PreloaderState>({ ready: false });

export const usePreloaderReady = () => useContext(PreloaderContext).ready;

const MIN_SHOW_MS = 1500;
const MAX_WAIT_MS = 4000;
const REVISIT_SHOW_MS = 350;

/** Elements that should not take focus while the overlay covers them. */
const inertTargets = () =>
  Array.from(document.querySelectorAll<HTMLElement>("header, main, footer"));

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progress = useRef({ value: 0 });
  const creepTween = useRef<gsap.core.Tween | null>(null);
  const finished = useRef(false);
  const done = useRef(false);

  const renderCounter = useCallback(() => {
    if (counterRef.current) {
      counterRef.current.textContent = String(
        Math.round(progress.current.value),
      ).padStart(2, "0");
    }
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${progress.current.value / 100})`;
    }
  }, []);

  const forceFinish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    gsap.killTweensOf(progress.current);
    creepTween.current?.kill();
    document.documentElement.classList.remove("coe-loading");
    inertTargets().forEach((el) => {
      el.inert = false;
    });
    setReady(true);
    window.dispatchEvent(new CustomEvent("coe:ready"));
    // Layout can shift once the scroll lock lifts — remeasure scroll animations.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  const lift = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    creepTween.current?.kill();

    /* If rAF is throttled (background tab), the exit tween can stall —
       force-complete rather than trapping the visitor behind the overlay. */
    const hardKill = window.setTimeout(forceFinish, 3000);

    gsap.to(progress.current, {
      value: 100,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: renderCounter,
      onComplete: () => {
        if (done.current || !overlayRef.current || !markRef.current) {
          forceFinish();
          return;
        }
        const tl = gsap.timeline({
          onComplete: () => {
            window.clearTimeout(hardKill);
            forceFinish();
          },
        });
        tl.to([markRef.current, counterRef.current], {
          autoAlpha: 0,
          y: -24,
          duration: 0.55,
          ease: "power3.in",
          stagger: 0.06,
        })
          .to(
            barRef.current,
            { autoAlpha: 0, duration: 0.3, ease: "power2.in" },
            "<",
          )
          .to(overlayRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          });
      },
    });
  }, [renderCounter, forceFinish]);

  useEffect(() => {
    /* The inline script in layout.tsx has already set html.js and, for
       animated visits, html.coe-anim + html.coe-loading before first paint. */
    if (!document.documentElement.classList.contains("coe-anim")) {
      forceFinish();
      return;
    }

    inertTargets().forEach((el) => {
      el.inert = true;
    });

    const revisit = sessionStorage.getItem("coe-visited") === "1";
    sessionStorage.setItem("coe-visited", "1");

    const start = performance.now();

    if (revisit) {
      gsap.to(progress.current, {
        value: 92,
        duration: REVISIT_SHOW_MS / 1000,
        ease: "power1.inOut",
        overwrite: "auto",
        onUpdate: renderCounter,
      });
      const t = window.setTimeout(lift, REVISIT_SHOW_MS);
      return () => window.clearTimeout(t);
    }

    /* Track the assets the hero actually needs: images already in the
       document (the hero renders under the overlay) plus webfonts. */
    let total = 1; // window load
    let doneCount = 0;
    const bump = () => {
      doneCount += 1;
      const target = Math.min(96, (doneCount / total) * 96);
      if (target > progress.current.value) {
        gsap.to(progress.current, {
          value: target,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
          onUpdate: renderCounter,
        });
      }
      if (doneCount >= total) {
        const elapsed = performance.now() - start;
        window.setTimeout(lift, Math.max(0, MIN_SHOW_MS - elapsed));
      }
    };

    const images = Array.from(document.images).slice(0, 10);
    total += images.length + 1; // + fonts
    images.forEach((img) => {
      if (img.complete) bump();
      else {
        img.addEventListener("load", bump, { once: true });
        img.addEventListener("error", bump, { once: true });
      }
    });

    document.fonts.ready.then(bump);

    if (document.readyState === "complete") bump();
    else window.addEventListener("load", bump, { once: true });

    // Never trap the visitor if an asset stalls.
    const failsafe = window.setTimeout(lift, MAX_WAIT_MS);

    // Idle creep so the counter always feels alive.
    creepTween.current = gsap.to(progress.current, {
      value: "+=14",
      duration: 2.4,
      ease: "power1.inOut",
      onUpdate: () => {
        progress.current.value = Math.min(progress.current.value, 90);
        renderCounter();
      },
    });

    return () => {
      window.clearTimeout(failsafe);
      creepTween.current?.kill();
    };
  }, [lift, renderCounter, forceFinish]);

  return (
    <PreloaderContext.Provider value={{ ready }}>
      {!ready && (
        <div
          ref={overlayRef}
          className="coe-preloader fixed inset-0 z-[100] flex-col items-center justify-center bg-maroon text-white"
          aria-hidden="true"
        >
          <div ref={markRef} className="flex flex-col items-center gap-5 px-6 text-center">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-white/60">
              Ananda College
            </span>
            <span className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-tight">
              Centre of Excellence
            </span>
            <span className="block h-px w-14 bg-white/30" />
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/50">
              Where knowledge becomes capability
            </span>
          </div>
          <span
            ref={counterRef}
            className="font-display absolute bottom-10 right-8 text-2xl text-white/70 md:bottom-12 md:right-16"
          >
            00
          </span>
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/15">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-white/70"
            />
          </div>
        </div>
      )}
      {children}
    </PreloaderContext.Provider>
  );
}
