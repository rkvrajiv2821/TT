"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ConnectedCore } from "@/components/3d/ConnectedCore";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(55%_50%_at_78%_45%,rgba(147,97,250,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto grid min-h-svh max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-[45fr_55fr] lg:gap-6 lg:px-16 lg:pt-24">
        <div className="order-2 max-w-xl lg:order-1">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.08em] text-rx-berry">
              <span className="h-1.5 w-1.5 rounded-full bg-rx-berry" aria-hidden />
              One core. Every connection.
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 font-display text-h2 font-semibold leading-[1.05] tracking-tight text-ink sm:text-h1 lg:text-display">
              Every experience, connected.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-[46ch] text-body-lg leading-[1.6] text-ink-muted">
              From customer experience and loyalty to venue operations and payments,
              TOUCHTiER runs mobile, cloud, data and integrations through one connected
              core — so every system works as one.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-gradient-pulse px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-glow-helio active:scale-[0.98]"
              >
                Talk to us
              </Link>
              <Link
                href="#platform"
                className="rounded-md border border-border px-8 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-border-strong"
              >
                Explore platform
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="relative order-1 mx-auto h-40 w-40 md:mx-0 md:h-[420px] md:w-full lg:order-2 lg:h-full lg:min-h-[560px]">
          <ConnectedCore />
        </div>
      </div>
    </section>
  );
}
