"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ACCENT_CLASSES, ACCENT_HEX } from "./accentTokens";
import { PLATFORM_PILLARS, getPillarNodeLabels, type PlatformPillar } from "./platformPillars";

function PlatformCard({ pillar, index }: { pillar: PlatformPillar; index: number }) {
  const accent = ACCENT_CLASSES[pillar.accent];
  const labels = getPillarNodeLabels(pillar);
  const Icon = pillar.icon;
  const gradientId = `platform-gradient-${pillar.id}`;

  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <div
        className={`flex h-full flex-col rounded-xl border border-border bg-surface-raised p-8 transition-all duration-300 hover:-translate-y-[2px] ${accent.hoverBorder} ${accent.hoverGlow}`}
      >
        {/* Gradient-stroke definition for this pillar's icon, echoing the
            hero core's white-to-accent glow language (design-system.md §6.2). */}
        <svg width="0" height="0" aria-hidden className="absolute">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F6F8" />
              <stop offset="100%" stopColor={ACCENT_HEX[pillar.accent]} />
            </linearGradient>
          </defs>
        </svg>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg border ${accent.border} bg-canvas/60`}
        >
          <Icon size={22} strokeWidth={1.5} stroke={`url(#${gradientId})`} />
        </div>

        <h3 className="mt-6 font-display text-h4 text-ink">{pillar.title}</h3>
        <p className="mt-2 text-small text-ink-muted">{pillar.description}</p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          {labels.map((label) => (
            <span
              key={label}
              className={`rounded-full border ${accent.tagBorder} ${accent.tagBg} px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${accent.text}`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            href="/platform"
            className="inline-flex items-center gap-1.5 text-small font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            See how it works
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}

export function Platform() {
  return (
    <section className="relative w-full bg-canvas py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[720px] text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
              <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
              Ten modules. One platform.
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="mt-6 font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink">
              One platform, three layers.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-body-lg text-ink-muted">
              Every pillar is built from modules that already run inside TOUCHTiER — not a
              roadmap, a working platform.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLATFORM_PILLARS.map((pillar, i) => (
            <PlatformCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
