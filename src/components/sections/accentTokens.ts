// Shared accent-colour mapping for the three ecosystem pillars, used by both
// ConnectedEcosystem.tsx and Platform.tsx so the two sections stay visually
// consistent (design-system.md §1.4 semantic assignments).
export type PillarAccent = "berry" | "strawberry" | "sky";

export const ACCENT_HEX: Record<PillarAccent, string> = {
  berry: "#9361FA",
  strawberry: "#FA617C",
  sky: "#61D3FA",
};

export const ACCENT_CLASSES: Record<
  PillarAccent,
  {
    text: string;
    border: string;
    dot: string;
    glow: string;
    hoverBorder: string;
    hoverGlow: string;
    tagBg: string;
    tagBorder: string;
  }
> = {
  berry: {
    text: "text-rx-berry",
    border: "border-rx-berry/40",
    dot: "bg-rx-berry",
    glow: "shadow-glow-helio",
    hoverBorder: "hover:border-rx-berry/40",
    hoverGlow: "hover:shadow-glow-helio",
    tagBg: "bg-rx-berry/10",
    tagBorder: "border-rx-berry/20",
  },
  strawberry: {
    text: "text-rx-strawberry",
    border: "border-rx-strawberry/40",
    dot: "bg-rx-strawberry",
    glow: "shadow-glow-strawberry",
    hoverBorder: "hover:border-rx-strawberry/40",
    hoverGlow: "hover:shadow-glow-strawberry",
    tagBg: "bg-rx-strawberry/10",
    tagBorder: "border-rx-strawberry/20",
  },
  sky: {
    text: "text-rx-sky",
    border: "border-rx-sky/40",
    dot: "bg-rx-sky",
    glow: "shadow-glow-sky",
    hoverBorder: "hover:border-rx-sky/40",
    hoverGlow: "hover:shadow-glow-sky",
    tagBg: "bg-rx-sky/10",
    tagBorder: "border-rx-sky/20",
  },
};
