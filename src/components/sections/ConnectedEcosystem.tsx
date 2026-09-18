"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { EASE } from "@/components/animations/easing";
import { NodeTile } from "@/components/ui/NodeTile";
import { CoreBadge } from "@/components/ui/CoreBadge";
import { ACCENT_CLASSES, ACCENT_HEX } from "./accentTokens";
import { ECOSYSTEM_PILLARS, getPillarNodes, type EcosystemPillar } from "./ecosystemPillars";

function PillarCard({
  pillar,
  isActive,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  cardRef,
}: {
  pillar: EcosystemPillar;
  isActive: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  const accent = ACCENT_CLASSES[pillar.accent];
  const nodes = getPillarNodes(pillar);

  return (
    <div
      ref={cardRef}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`rounded-xl border bg-surface-raised p-8 transition-all duration-300 ${
        isActive ? accent.border : "border-border"
      } ${isDimmed ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
        <h3 className="font-display text-h4 text-ink">{pillar.title}</h3>
      </div>
      <p className="mt-2 text-small text-ink-muted">{pillar.description}</p>

      <div className="mt-6 flex flex-wrap gap-4">
        {nodes.map((node, i) => (
          <NodeTile
            key={node.id}
            label={node.label}
            Icon={node.icon}
            delay={i * 0.05}
            dimmed={isDimmed}
            glowClassName={isActive ? accent.glow : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function ConnectedEcosystem() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [paths, setPaths] = useState<string[] | null>(null);

  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      const core = coreRef.current;
      if (!container || !core) return;

      const containerRect = container.getBoundingClientRect();
      const coreRect = core.getBoundingClientRect();
      const coreX = coreRect.left + coreRect.width / 2 - containerRect.left;
      const coreY = coreRect.bottom - containerRect.top;

      const nextPaths = cardRefs.current.map((card) => {
        if (!card) return "";
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const cardY = cardRect.top - containerRect.top;
        const midY = (coreY + cardY) / 2;
        return `M ${coreX} ${coreY} C ${coreX} ${midY}, ${cardX} ${midY}, ${cardX} ${cardY}`;
      });
      setPaths(nextPaths);
    }

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="relative w-full bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[720px] text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
              <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
              One platform. Three pillars.
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="mt-6 font-display text-h2 font-semibold leading-[1.1] tracking-tight text-ink">
              One connected ecosystem.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-body-lg text-ink-muted">
              Every part of a modern venue — how it&rsquo;s experienced, how it runs, and
              the technology underneath — connects back to a single TOUCHTiER core.
            </p>
          </FadeIn>
        </div>

        {/* Desktop / large tablet: core fanning out to a 3-column grid */}
        <div ref={containerRef} className="relative mt-20 hidden lg:block">
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {paths?.map((d, i) => {
              const pillar = ECOSYSTEM_PILLARS[i];
              const isActive = activePillar === pillar.id;
              const isDimmed = activePillar !== null && !isActive;
              return (
                <motion.path
                  key={pillar.id}
                  d={d}
                  fill="none"
                  stroke={ACCENT_HEX[pillar.accent]}
                  strokeWidth={isActive ? 1.75 : 1.25}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{
                    pathLength: 1,
                    opacity: isDimmed ? 0.12 : isActive ? 0.85 : 0.35,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    pathLength: { duration: 1, delay: 0.3 + i * 0.1, ease: EASE },
                    opacity: { duration: 0.3, ease: EASE },
                  }}
                />
              );
            })}
          </svg>

          <FadeIn rise={0} className="relative z-10 flex justify-center">
            <div ref={coreRef}>
              <CoreBadge />
            </div>
          </FadeIn>

          <div className="relative z-10 mt-16 grid grid-cols-3 gap-8">
            {ECOSYSTEM_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.id} rise={0} delay={0.1 + i * 0.08}>
                <PillarCard
                  pillar={pillar}
                  isActive={activePillar === pillar.id}
                  isDimmed={activePillar !== null && activePillar !== pillar.id}
                  onHoverStart={() => setActivePillar(pillar.id)}
                  onHoverEnd={() => setActivePillar(null)}
                  cardRef={(el) => {
                    cardRefs.current[i] = el;
                  }}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tablet / mobile: core and pillars stacked on a simple vertical spine */}
        <div className="relative mt-16 lg:hidden">
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 bg-gradient-signal opacity-20"
          />

          <div className="relative flex flex-col items-center gap-10">
            <FadeIn rise={0}>
              <CoreBadge />
            </FadeIn>

            {ECOSYSTEM_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.id} rise={0} delay={i * 0.08} className="w-full">
                <PillarCard
                  pillar={pillar}
                  isActive={activePillar === pillar.id}
                  isDimmed={activePillar !== null && activePillar !== pillar.id}
                  onHoverStart={() => setActivePillar(pillar.id)}
                  onHoverEnd={() => setActivePillar(null)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
