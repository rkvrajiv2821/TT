import type { Metadata } from "next";
import { Nav } from "@/components/navigation/Nav";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { OperatorTiers } from "@/components/solutions/OperatorTiers";
import { CoreCapabilities } from "@/components/solutions/CoreCapabilities";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Solutions — TOUCHTiER",
  description:
    "Solutions built around how you operate — from a single venue to a multi-venue group to enterprise scale, all on one connected core.",
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <SolutionsHero />
        <OperatorTiers />
        <CoreCapabilities />
        <ClosingCTA />
      </main>
    </>
  );
}
