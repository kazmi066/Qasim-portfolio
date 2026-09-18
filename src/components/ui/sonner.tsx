"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--ink-soft)",
          "--normal-text": "var(--paper)",
          "--normal-border": "var(--rule)",
          "--border-radius": "0",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
