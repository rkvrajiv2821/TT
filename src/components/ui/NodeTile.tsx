"use client";

import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function NodeTile({
  label,
  Icon,
  delay = 0,
  dimmed = false,
  glowClassName,
}: {
  label: string;
  Icon: LucideIcon;
  delay?: number;
  /** Quiets the tile when a sibling group (e.g. another pillar) is active. */
  dimmed?: boolean;
  /** Applied when this tile's own group is active (e.g. its pillar is hovered) —
   * a shadow-glow-* utility from design-system.md §1.6. */
  glowClassName?: string;
}) {
  return (
    <FadeIn
      delay={delay}
      className={`group relative flex flex-col items-center transition-opacity duration-300 ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-raised/80 backdrop-blur-sm transition-all duration-300 group-hover:border-border-strong group-hover:shadow-glow-berry ${
          glowClassName ?? ""
        }`}
      >
        <Icon
          size={16}
          strokeWidth={1.5}
          className={`transition-colors duration-300 group-hover:text-ink ${
            glowClassName ? "text-ink" : "text-ink-muted"
          }`}
        />
      </div>
      <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-sm bg-surface-overlay px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </FadeIn>
  );
}
