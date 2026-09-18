"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export type ShellSpec = {
  radius: number;
  speed: number;
  axis: "x" | "y" | "z";
  opacity: number;
  color: string;
};

// One concentric "tier" ring of the core — a faceted icosahedron rendered as
// edges only (never a filled/glossy surface), rotating slowly and
// independently of the other shells.
export function Shell({ radius, speed, axis, opacity, color }: ShellSpec) {
  const ref = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(radius, 1);
    return new THREE.EdgesGeometry(base);
  }, [radius]);

  useFrame((_, delta) => {
    if (!ref.current || speed === 0) return;
    ref.current.rotation[axis] += delta * speed;
  });

  return (
    <group ref={ref}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </lineSegments>
    </group>
  );
}
