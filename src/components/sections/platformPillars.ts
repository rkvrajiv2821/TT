import { Activity, Layers, Sparkles, type LucideIcon } from "lucide-react";
import { CORE_NODES } from "@/components/3d/coreNodes";
import { type PillarAccent } from "./accentTokens";

export type PlatformPillar = {
  id: string;
  title: string;
  description: string;
  accent: PillarAccent;
  icon: LucideIcon;
  nodeIds: string[];
};

// Same three pillars as ecosystemPillars.ts, given fresh sentence-length copy
// and a pillar-level icon — this section goes one level deeper (nodes shown
// as real modules), so it deliberately doesn't reuse Section 2's wording.
export const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    id: "experience",
    title: "Experience & Loyalty",
    description:
      "Everything that shapes how customers feel about your business, visit after visit.",
    accent: "berry",
    icon: Sparkles,
    nodeIds: ["customer", "membership", "loyalty", "marketing"],
  },
  {
    id: "operations",
    title: "Venue & Operations",
    description:
      "The tools your team runs the floor with, and the payments that keep it moving.",
    accent: "strawberry",
    icon: Activity,
    nodeIds: ["venue", "payments", "mobile"],
  },
  {
    id: "technology",
    title: "Technology & Integration",
    description: "The cloud and data layer that the other two pillars run on.",
    accent: "sky",
    icon: Layers,
    nodeIds: ["cloud", "data", "integrations"],
  },
];

export function getPillarNodeLabels(pillar: PlatformPillar) {
  return pillar.nodeIds.map((id) => {
    const node = CORE_NODES.find((n) => n.id === id);
    if (!node) throw new Error(`Unknown platform node id: ${id}`);
    return node.label;
  });
}
