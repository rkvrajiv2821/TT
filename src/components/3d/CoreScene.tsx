"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Shell, type ShellSpec } from "./Shell";
import { Nucleus } from "./Nucleus";
import { ConnectionLine } from "./ConnectionLine";
import { NodeTile } from "@/components/ui/NodeTile";
import { CORE_NODES } from "./coreNodes";
import { fibonacciSphere } from "./fibonacciSphere";

const SHELLS: ShellSpec[] = [
  { radius: 0.95, speed: 0.03, axis: "y", opacity: 0.42, color: "#9361FA" },
  { radius: 1.35, speed: -0.022, axis: "x", opacity: 0.34, color: "#61D3FA" },
  { radius: 1.75, speed: 0.018, axis: "z", opacity: 0.26, color: "#DE61FA" },
  { radius: 2.15, speed: -0.013, axis: "y", opacity: 0.2, color: "#9361FA" },
];

// Fixed tilt so the fibonacci distribution doesn't cluster two nodes near
// the most visually prominent (dead-centre-top) part of the frame.
const BASE_ROTATION: [number, number, number] = [0.42, 0.6, 0.12];

const NODE_RADIUS = 2.6;
const ENTRANCE_DURATION = 1.0;

export function CoreScene({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const entrance = useRef(reducedMotion ? 1 : 0);

  const nodePositions = useMemo(
    () => fibonacciSphere(CORE_NODES.length, NODE_RADIUS),
    []
  );

  useFrame(({ pointer }, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (entrance.current < 1) {
      entrance.current = Math.min(1, entrance.current + delta / ENTRANCE_DURATION);
      const eased = 1 - Math.pow(1 - entrance.current, 3);
      group.scale.setScalar(0.82 + eased * 0.18);
    }

    if (!reducedMotion) {
      targetRotation.current.x = -pointer.y * 0.09;
      targetRotation.current.y = pointer.x * 0.09;
      group.rotation.x += (targetRotation.current.x - group.rotation.x) * 0.035;
      group.rotation.y += (targetRotation.current.y - group.rotation.y) * 0.035;
    }
  });

  return (
    <group ref={groupRef} scale={reducedMotion ? 1 : 0.82}>
      <group rotation={BASE_ROTATION}>
        <Nucleus reducedMotion={reducedMotion} />

        {SHELLS.map((shell, i) => (
          <Shell key={i} {...shell} speed={reducedMotion ? 0 : shell.speed} />
        ))}

        {CORE_NODES.map((node, i) => {
          const [x, y, z] = nodePositions[i];
          return (
            <ConnectionLine
              key={`line-${node.id}`}
              end={new THREE.Vector3(x, y, z)}
              reducedMotion={reducedMotion}
            />
          );
        })}

        {CORE_NODES.map((node, i) => {
          const [x, y, z] = nodePositions[i];
          return (
            <group key={`node-${node.id}`} position={[x, y, z]}>
              <Html center distanceFactor={9} zIndexRange={[10, 0]}>
                <NodeTile label={node.label} Icon={node.icon} delay={i * 0.05} />
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
}
