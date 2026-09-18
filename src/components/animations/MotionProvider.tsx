"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Globally respects prefers-reduced-motion for every framer-motion animation
// in the app (Hero copy entrance, mobile nav reveal, node-tile fade-in).
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
