"use client";

import { Layers, TrendingUp, Repeat, Plug, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

type Capability = {
  id: string;
  icon: LucideIcon;
  label: string;
};

const CAPABILITIES: Capability[] = [
  { id: "core", icon: Layers, label: "One connected core" },
  { id: "grow", icon: TrendingUp, label: "No re-platforming as you grow" },
  { id: "consistent", icon: Repeat, label: "Consistent experience everywhere" },
  { id: "api", icon: Plug, label: "API-first from day one" },
];

export function CoreCapabilities() {
  return (
    <section className="relative w-full bg-canvas py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.id}
                delay={i * 0.06}
                className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised">
                  <Icon size={16} strokeWidth={1.5} className="text-ink-muted" />
                </div>
                <span className="text-small text-ink">{item.label}</span>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
