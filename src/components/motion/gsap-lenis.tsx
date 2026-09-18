"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function GsapLenis() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash.length < 2) return false;
      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return false;
      lenis.scrollTo(target, { offset: -8 });
      return true;
    };

    if (!scrollToHash()) {
      lenis.scrollTo(0, { immediate: true });
    }

    const retry = window.setTimeout(scrollToHash, 80);
    const retryLate = window.setTimeout(scrollToHash, 480);
    window.addEventListener("hashchange", scrollToHash);
    lenis.resize();

    return () => {
      window.clearTimeout(retry);
      window.clearTimeout(retryLate);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [lenis, pathname]);

  useEffect(() => {
    if (!lenis) return;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      if (hash.length < 2) return;

      const samePage =
        href.startsWith("#") ||
        href.startsWith("/#") ||
        href.startsWith(`${window.location.pathname}#`);
      if (!samePage) return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -8 });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}
