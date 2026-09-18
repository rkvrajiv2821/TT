"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CoreScene } from "./CoreScene";

export function ConnectedCoreCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas
      className="!absolute !inset-0"
      camera={{ position: [0, 0, 8.6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <CoreScene reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
