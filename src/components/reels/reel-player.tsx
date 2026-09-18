import { ViewTransition } from "react";
import Link from "next/link";

import { ReelEmbed } from "@/components/reels/reel-embed";
import type { Reel } from "@/content/reels";

export function ReelPlayer({ reel }: { reel: Reel }) {
  return (
    <div className="reel-player">
      <ViewTransition name={`reel-${reel.slug}`} share="morph" default="none">
        <ReelEmbed reel={reel} interactive />
      </ViewTransition>
      <p className="mt-4">
        <Link
          href={reel.url}
          className="text-mist no-underline hover:text-paper"
          target="_blank"
          rel="noreferrer"
        >
          Watch on YouTube
        </Link>
      </p>
    </div>
  );
}
