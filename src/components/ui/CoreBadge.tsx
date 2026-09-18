import Image from "next/image";
import touchtierIcon from "../../../public/brand/touchtier-icon.png";

const SIZES = {
  lg: { badge: "h-16 w-16", icon: "h-7" },
  sm: { badge: "h-10 w-10", icon: "h-4" },
} as const;

// The TOUCHTiER icon in a glowing circular badge — the "core" motif reused
// across the connected-ecosystem diagram and the built-for-scale diagram.
export function CoreBadge({ size = "lg" }: { size?: keyof typeof SIZES }) {
  const dimensions = SIZES[size];

  return (
    <div
      className={`relative flex ${dimensions.badge} shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface-raised shadow-glow-berry`}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-signal opacity-20 blur-md"
      />
      <Image src={touchtierIcon} alt="" className={`relative ${dimensions.icon} w-auto`} />
    </div>
  );
}
