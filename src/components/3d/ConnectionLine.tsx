"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

const PULSE_DURATION = 1.4;

// A single thin connection line from the nucleus to one ecosystem node,
// carrying an occasional travelling pulse of light (never all lines at once —
// each fires on its own randomised 4–8s interval so the core reads as a live
// system rather than a looping animation).
export function ConnectionLine({
  end,
  reducedMotion,
}: {
  end: THREE.Vector3;
  reducedMotion: boolean;
}) {
  const points = useMemo(() => {
    const origin = new THREE.Vector3(0, 0, 0);
    const mid = end.clone().multiplyScalar(0.5);
    return [origin, mid, end];
  }, [end]);

  const vertexColors = useMemo<[THREE.Color, THREE.Color, THREE.Color]>(
    () => [new THREE.Color("#61D3FA"), new THREE.Color("#9361FA"), new THREE.Color("#DE61FA")],
    []
  );

  const pulseRef = useRef<THREE.Mesh>(null);
  const pulseMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const state = useRef({ active: false, progress: 0, nextFire: 0 });

  // Randomised outside of render (purity rule) — each line gets its own
  // initial delay so pulses never fire in unison.
  useEffect(() => {
    state.current.nextFire = 1 + Math.random() * 5;
  }, []);

  useFrame((_, delta) => {
    if (reducedMotion || !pulseRef.current || !pulseMaterialRef.current) return;
    const s = state.current;

    if (!s.active) {
      s.nextFire -= delta;
      if (s.nextFire <= 0) {
        s.active = true;
        s.progress = 0;
      } else {
        pulseRef.current.visible = false;
        return;
      }
    }

    s.progress += delta / PULSE_DURATION;
    if (s.progress >= 1) {
      s.active = false;
      s.nextFire = 4 + Math.random() * 4;
      pulseRef.current.visible = false;
      return;
    }

    pulseRef.current.visible = true;
    pulseRef.current.position.lerpVectors(points[0], points[2], s.progress);
    pulseMaterialRef.current.opacity = Math.sin(Math.PI * s.progress);
  });

  return (
    <group>
      <Line
        points={points}
        vertexColors={vertexColors}
        lineWidth={1}
        transparent
        opacity={0.28}
      />
      <mesh ref={pulseRef} visible={false}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial
          ref={pulseMaterialRef}
          color="#DE61FA"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
