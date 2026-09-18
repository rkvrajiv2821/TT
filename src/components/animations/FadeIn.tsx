"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./easing";

export function FadeIn({
  children,
  delay = 0,
  rise = 12,
  className,
}: {
  children: ReactNode;
  delay?: number;
  /** Vertical offset the element rises from. Use 0 for elements whose layout
   * position must be measurable during the reveal (e.g. connector-line
   * anchors), since a transform-based rise is still mid-animation when
   * geometry is read via getBoundingClientRect. */
  rise?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: rise },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
