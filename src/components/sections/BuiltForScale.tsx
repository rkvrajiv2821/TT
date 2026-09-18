"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { CoreBadge } from "@/components/ui/CoreBadge";

// Fixed positions on a 0–100 viewBox — this diagram is intentionally simple
// (no DOM measurement, no draw-on animation) per homepage-structure.md's
// "deliberate pacing contrast" after the denser Platform section.
const CORE_POSITION = { x: 50, y: 16 };
const VENUE_POSITIONS = [
  { id: "a", x: 16, y: 82 },
  { id: "b", x: 50, y: 92 },
  { id: "c", x: 84, y: 82 },
];

export function BuiltForScale() {
  return (
    <section className="relative w-full bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16">
        <div className="max-w-xl">
          <FadeIn>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
              <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
              One core. Every venue.
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="mt-6 font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink">
              Built for one venue. Ready for a hundred.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-body-lg text-ink-muted">
              Whether it&rsquo;s one venue or a hundred, TOUCHTiER runs the same way — every
              location connects back to the same core, without losing consistency as you grow.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-small font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              Talk to us about your venues
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {/* Desktop: one core, radiating to smaller repeated instances of itself */}
          <FadeIn delay={0.16} className="relative hidden aspect-square lg:block">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                {/* userSpaceOnUse avoids a Chrome rendering bug where the
                    default objectBoundingBox gradient fails to paint on a
                    perfectly vertical line (zero-width bounding box). */}
                <linearGradient
                  id="scale-line"
                  gradientUnits="userSpaceOnUse"
                  x1={CORE_POSITION.x}
                  y1={CORE_POSITION.y}
                  x2={CORE_POSITION.x}
                  y2={92}
                >
                  <stop offset="0%" stopColor="#9361FA" />
                  <stop offset="100%" stopColor="#61D3FA" />
                </linearGradient>
              </defs>
              {VENUE_POSITIONS.map((venue) => (
                <line
                  key={venue.id}
                  x1={CORE_POSITION.x}
                  y1={CORE_POSITION.y}
                  x2={venue.x}
                  y2={venue.y}
                  stroke="url(#scale-line)"
                  strokeWidth={0.4}
                  opacity={0.4}
                />
              ))}
            </svg>

            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${CORE_POSITION.x}%`, top: `${CORE_POSITION.y}%` }}
            >
              <CoreBadge size="lg" />
            </div>

            {VENUE_POSITIONS.map((venue) => (
              <div
                key={venue.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
                style={{ left: `${venue.x}%`, top: `${venue.y}%` }}
              >
                <CoreBadge size="sm" />
              </div>
            ))}
          </FadeIn>

          {/* Mobile: the same idea, simplified to a small static icon row */}
          <FadeIn delay={0.16} className="flex items-center justify-center gap-3 lg:hidden">
            <CoreBadge size="sm" />
            {VENUE_POSITIONS.map((venue) => (
              <div key={venue.id} className="flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-border" />
                <CoreBadge size="sm" />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
