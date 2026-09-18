"use client";

import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { GsapLenis } from "@/components/motion/gsap-lenis";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function ScrollGuard() {
  const timer = useRef(0);

  useLenis(() => {
    document.documentElement.classList.add("is-scrolling");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      document.documentElement.classList.remove("is-scrolling");
    }, 140);
  });

  useEffect(() => {
    return () => {
      window.clearTimeout(timer.current);
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return children;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.05,
        smoothWheel: true,
        autoResize: true,
      }}
    >
      <ScrollGuard />
      <GsapLenis />
      {children}
    </ReactLenis>
  );
}
