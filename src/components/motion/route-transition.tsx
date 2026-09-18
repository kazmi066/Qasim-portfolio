import { ViewTransition } from "react";
import type { ReactNode } from "react";

const navMotion = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={navMotion} exit={navMotion} default="none">
      {children}
    </ViewTransition>
  );
}
