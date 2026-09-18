"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { EASE } from "@/components/animations/easing";
import { ConnectedCoreStatic } from "@/components/3d/ConnectedCoreStatic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// Ten abstract points (no icons/labels — those already had their one moment
// of full detail in Section 3) converging inward toward the nucleus, the
// visual opposite of the hero's outward assembly.
const NODE_COUNT = 10;
const CENTER = 50;
const RADIUS = 38;

// Rounded to avoid server/client floating-point string mismatches during
// hydration (e.g. "19.257354213751995" vs "19.25735421375199").
function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

const DOTS = Array.from({ length: NODE_COUNT }, (_, i) => {
  const angle = (i / NODE_COUNT) * Math.PI * 2;
  return {
    x: round(CENTER + RADIUS * Math.cos(angle)),
    y: round(CENTER + RADIUS * Math.sin(angle)),
  };
});

export function ClosingCTA() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-surface py-32 md:py-40 lg:py-48">
      {/* Desktop: the core reassembling one final time, behind the content
          at reduced opacity so the closing statement stays legible. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
      >
        <div className="relative aspect-square w-full max-w-3xl opacity-25">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="closing-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5F6F8" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#9361FA" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#9361FA" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="closing-line"
                gradientUnits="userSpaceOnUse"
                x1={CENTER}
                y1={CENTER - RADIUS}
                x2={CENTER}
                y2={CENTER + RADIUS}
              >
                <stop offset="0%" stopColor="#DE61FA" />
                <stop offset="100%" stopColor="#61D3FA" />
              </linearGradient>
            </defs>

            {DOTS.map((dot, i) => (
              <motion.line
                key={i}
                x1={dot.x}
                y1={dot.y}
                x2={CENTER}
                y2={CENTER}
                stroke="url(#closing-line)"
                strokeWidth={0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reducedMotion ? 0 : 2.4, ease: EASE }}
              />
            ))}

            {DOTS.map((dot, i) => (
              <circle
                key={`dot-${i}`}
                cx={dot.x}
                cy={dot.y}
                r={0.8}
                fill="#F5F6F8"
                fillOpacity={0.6}
              />
            ))}

            <circle cx={CENTER} cy={CENTER} r={14} fill="url(#closing-glow)" />
          </svg>

          <div
            className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ${
              reducedMotion ? "" : "animate-pulse"
            }`}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[720px] px-6 text-center md:px-10 lg:px-16">
        {/* Mobile: the same static mark used in the mobile hero */}
        <div aria-hidden className="mb-10 flex justify-center lg:hidden">
          <div className="h-32 w-32">
            <ConnectedCoreStatic reducedMotion={reducedMotion} />
          </div>
        </div>

        <FadeIn>
          <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
            <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
            Every connection. One core.
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="mt-6 font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink sm:text-h1">
            Let&rsquo;s connect yours.
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 text-body-lg text-ink-muted">
            Book a demo and see how TOUCHTiER connects every part of your business.
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-gradient-pulse px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-glow-helio active:scale-[0.98]"
            >
              Book a demo
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-border px-8 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-border-strong"
            >
              Contact sales
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
