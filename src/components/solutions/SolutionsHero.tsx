"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function SolutionsHero() {
  return (
    <section className="relative w-full bg-canvas pb-16 pt-40 md:pt-48 lg:pt-56">
      <div className="mx-auto max-w-[720px] px-6 text-center md:px-10 lg:px-16">
        <FadeIn>
          <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
            <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
            One platform. Every scale.
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-6 font-display text-h1 font-semibold leading-[1.05] tracking-tight text-ink">
            Solutions built around how you operate.
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 text-body-lg text-ink-muted">
            Whether you run one venue or an entire portfolio, TOUCHTiER is designed to run the
            same way — one connected core, sized to how you operate today.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
