"use client";

import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/motion/loader";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Loader />
      {children}
      <Toaster />
    </SmoothScroll>
  );
}
