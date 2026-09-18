"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Grain() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grain-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  );
}
