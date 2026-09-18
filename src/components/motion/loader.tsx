"use client";

import { useEffect, useRef, useState } from "react";

import { LumaSpin } from "@/components/ui/luma-spin";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function Loader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const hidden = useRef(false);

  useEffect(() => {
    const reveal = () => {
      document.documentElement.classList.add("is-ready");
      window.dispatchEvent(new Event("qasim:ready"));
    };

    const hide = () => {
      if (hidden.current) return;
      hidden.current = true;
      if (reduced) {
        reveal();
        setVisible(false);
        return;
      }
      setLeaving(true);
      window.setTimeout(() => {
        reveal();
        setVisible(false);
      }, 380);
    };

    const minTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, reduced ? 180 : 720);
    });
    const maxTime = window.setTimeout(hide, reduced ? 320 : 1400);
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.all([fonts, minTime]).then(hide);

    return () => window.clearTimeout(maxTime);
  }, [reduced]);

  if (!visible) return null;

  return (
    <div
      className={cn("loader", leaving && "is-leaving")}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <LumaSpin />
    </div>
  );
}
