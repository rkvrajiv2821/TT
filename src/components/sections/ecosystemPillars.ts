import { CORE_NODES } from "@/components/3d/coreNodes";
import { type PillarAccent } from "./accentTokens";

export type EcosystemPillar = {
  id: string;
  title: string;
  description: string;
  accent: PillarAccent;
  nodeIds: string[];
};

// The same three pillars that group the hero's ten ecosystem nodes
// (homepage-structure.md "Why this sequence"). Referencing CORE_NODES by id
// keeps labels/icons single-sourced with the hero core.
export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "experience",
    title: "Experience & Loyalty",
    description: "How customers engage and stay.",
    accent: "berry",
    nodeIds: ["customer", "membership", "loyalty", "marketing"],
  },
  {
    id: "operations",
    title: "Venue & Operations",
    description: "How every venue runs, day to day.",
    accent: "strawberry",
    nodeIds: ["venue", "payments", "mobile"],
  },
  {
    id: "technology",
    title: "Technology & Integration",
    description: "The infrastructure underneath it all.",
    accent: "sky",
    nodeIds: ["cloud", "data", "integrations"],
  },
];

export function getPillarNodes(pillar: EcosystemPillar) {
  return pillar.nodeIds.map((id) => {
    const node = CORE_NODES.find((n) => n.id === id);
    if (!node) throw new Error(`Unknown ecosystem node id: ${id}`);
    return node;
  });
}
