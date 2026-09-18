import Link from "next/link";

import { RouteTransition } from "@/components/motion/route-transition";

export default function NotFound() {
  return (
    <RouteTransition>
      <main id="main" className="flex min-h-[70svh] flex-col justify-end px-[var(--gutter)] pb-24 pt-16">
        <p className="text-meta text-mist">404</p>
        <h1 className="word-art mt-6">Lost</h1>
        <p className="mt-8 max-w-[32ch] text-step-2">
          This frame is not in the timeline. Go back to the selected reels.
        </p>
        <Link href="/work" transitionTypes={["nav-back"]} className="text-meta mt-10 text-sun no-underline hover:text-paper">
          Work index
        </Link>
      </main>
    </RouteTransition>
  );
}
