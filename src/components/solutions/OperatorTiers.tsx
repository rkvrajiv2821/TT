"use client";

import { Store, Network, Globe, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

type Tier = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const TIERS: Tier[] = [
  {
    id: "single-venue",
    icon: Store,
    title: "One venue. The full platform.",
    description:
      "Enterprise-grade tools without enterprise complexity — everything runs on one core from day one.",
    points: [
      "Every module available from the start",
      "No multi-location setup required",
      "Ready to scale the moment you are",
    ],
  },
  {
    id: "multi-venue",
    icon: Network,
    title: "One core. Every location.",
    description:
      "Run every venue the same way, with one connected core keeping experience and operations consistent group-wide.",
    points: [
      "Centralized visibility across every venue",
      "Consistent customer experience at every location",
      "Add venues without adding new systems",
    ],
  },
  {
    id: "enterprise",
    icon: Globe,
    title: "Enterprise scale, one architecture.",
    description:
      "Cloud infrastructure and an API-first design that connects to the systems you already run — built for real-time data across your whole estate.",
    points: [
      "API-first integration with existing systems",
      "Real-time data across the entire estate",
      "Built on cloud infrastructure designed to scale",
    ],
  },
];

export function OperatorTiers() {
  return (
    <section className="relative w-full bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <FadeIn>
          <h2 className="mx-auto max-w-[560px] text-center font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink">
            Choose where you&rsquo;re starting from.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <FadeIn key={tier.id} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-surface-raised p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-rx-berry/40 bg-canvas/60">
                    <Icon size={22} strokeWidth={1.5} className="text-rx-berry" />
                  </div>

                  <h3 className="mt-6 font-display text-h4 text-ink">{tier.title}</h3>
                  <p className="mt-2 text-small text-ink-muted">{tier.description}</p>

                  <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-small text-ink-muted">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rx-berry"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
