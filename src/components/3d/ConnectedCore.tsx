"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ConnectedCoreStatic } from "./ConnectedCoreStatic";

// The full WebGL scene (three.js + react-three-fiber) only ever loads on
// desktop — it is never fetched at all on mobile, since it sits behind this
// conditional dynamic import.
const ConnectedCoreCanvas = dynamic(
  () => import("./ConnectedCoreCanvas").then((mod) => mod.ConnectedCoreCanvas),
  { ssr: false }
);

export function ConnectedCore() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();

  if (!isDesktop) {
    return <ConnectedCoreStatic reducedMotion={reducedMotion} />;
  }

  return <ConnectedCoreCanvas reducedMotion={reducedMotion} />;
}
