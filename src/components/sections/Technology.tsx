"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { NodeTile } from "@/components/ui/NodeTile";
import { CoreBadge } from "@/components/ui/CoreBadge";
import { CORE_NODES } from "@/components/3d/coreNodes";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// "A row of generic system-type icons" (homepage-structure.md) — reusing
// CORE_NODES keeps icons/labels single-sourced with the hero core.
const SYSTEM_NODE_IDS = ["payments", "cloud", "mobile", "data"];
const SYSTEM_NODES = SYSTEM_NODE_IDS.map((id) => {
  const node = CORE_NODES.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown technology node id: ${id}`);
  return node;
});

// Fixed diagram geometry in a 100x40 viewBox — the container below is
// locked to the same 5:2 aspect ratio so these points map to CSS percentages
// with no distortion and no letterboxing.
const VIEWBOX_HEIGHT = 40;
const CORE_POINT = { x: 50, y: 10 };
const ICON_POINTS = [
  { x: 14, y: 34 },
  { x: 38, y: 34 },
  { x: 62, y: 34 },
  { x: 86, y: 34 },
];

function toPercent(point: { x: number; y: number }) {
  return { left: `${point.x}%`, top: `${(point.y / VIEWBOX_HEIGHT) * 100}%` };
}

function connectorPath(icon: { x: number; y: number }) {
  const midY = (CORE_POINT.y + icon.y) / 2 + 5;
  return `M ${CORE_POINT.x} ${CORE_POINT.y} C ${CORE_POINT.x} ${midY}, ${icon.x} ${midY}, ${icon.x} ${icon.y}`;
}

export function Technology() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-canvas py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[720px] text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-sky">
              <span className="h-1.5 w-1.5 rounded-full bg-rx-sky" aria-hidden />
              Cloud. Data. Integrations.
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="mt-6 font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink">
              Built to connect, not to replace.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-body-lg text-ink-muted">
              Built on cloud infrastructure, with an API-first design for real-time data —
              TOUCHTiER connects to the systems you already run, rather than replacing them.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <Link
              href="/technology"
              className="mt-8 inline-flex items-center gap-1.5 text-small font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              View technical overview
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>

        {/* Desktop: full-width connection band, core to system icons */}
        <FadeIn delay={0.2} className="relative mt-20 hidden lg:block">
          <div className="relative mx-auto aspect-[5/2] w-full max-w-3xl">
            <svg viewBox="0 0 100 40" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <linearGradient
                  id="tech-line"
                  gradientUnits="userSpaceOnUse"
                  x1={CORE_POINT.x}
                  y1={CORE_POINT.y}
                  x2={CORE_POINT.x}
                  y2={34}
                >
                  <stop offset="0%" stopColor="#9361FA" />
                  <stop offset="100%" stopColor="#61D3FA" />
                </linearGradient>
              </defs>

              {SYSTEM_NODES.map((node, i) => {
                const d = connectorPath(ICON_POINTS[i]);
                const isActive = activeId === node.id;
                const isDimmed = activeId !== null && !isActive;
                return (
                  <g key={node.id}>
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#tech-line)"
                      strokeWidth={isActive ? 0.6 : 0.35}
                      opacity={isDimmed ? 0.15 : isActive ? 0.9 : 0.4}
                      style={{ transition: "opacity 300ms ease, stroke-width 300ms ease" }}
                    />
                    {!reducedMotion && (
                      <circle r={0.9} fill="#61D3FA" opacity={isDimmed ? 0 : 0.9}>
                        <animateMotion
                          dur="3.2s"
                          begin={`${i * 0.7}s`}
                          repeatCount="indefinite"
                          path={d}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={toPercent(CORE_POINT)}
            >
              <CoreBadge size="lg" />
            </div>

            {SYSTEM_NODES.map((node, i) => {
              const isActive = activeId === node.id;
              const isDimmed = activeId !== null && !isActive;
              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={toPercent(ICON_POINTS[i])}
                  onMouseEnter={() => setActiveId(node.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <NodeTile
                    label={node.label}
                    Icon={node.icon}
                    dimmed={isDimmed}
                    glowClassName={isActive ? "shadow-glow-sky" : undefined}
                  />
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Mobile: static stacked list, connector ticks instead of animated lines */}
        <FadeIn delay={0.2} className="mt-16 flex flex-col items-center gap-6 lg:hidden">
          <CoreBadge size="lg" />
          <div className="flex flex-col items-center gap-4">
            {SYSTEM_NODES.map((node) => (
              <div key={node.id} className="flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-border" />
                <div className="flex items-center gap-2 rounded-md border border-border bg-surface-raised px-3 py-2">
                  <node.icon size={16} strokeWidth={1.5} className="text-ink-muted" />
                  <span className="text-small text-ink">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
