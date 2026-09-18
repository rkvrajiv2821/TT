"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// The core's only true light source — a small solid centre plus two additive
// halo layers that "breathe" slowly (~4s cycle). No scene lighting is used
// anywhere in the core: everything is self-illuminating by design.
export function Nucleus({ reducedMotion }: { reducedMotion: boolean }) {
  const haloRef = useRef<THREE.Mesh>(null);
  const haloMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    if (reducedMotion || !haloRef.current || !haloMaterialRef.current) return;
    const t = clock.getElapsedTime();
    const wave = Math.sin((t * Math.PI * 2) / 4);
    haloRef.current.scale.setScalar(1.7 + wave * 0.1);
    haloMaterialRef.current.opacity = 0.22 + wave * 0.06;
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshBasicMaterial color="#F5F6F8" />
      </mesh>
      <mesh ref={haloRef} scale={1.7}>
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshBasicMaterial
          ref={haloMaterialRef}
          color="#DE61FA"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh scale={2.6}>
        <sphereGeometry args={[0.26, 16, 16]} />
        <meshBasicMaterial
          color="#9361FA"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
