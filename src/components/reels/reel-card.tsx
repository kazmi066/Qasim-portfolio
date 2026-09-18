import { ViewTransition } from "react";
import Link from "next/link";

import { ReelEmbed } from "@/components/reels/reel-embed";
import type { Reel } from "@/content/reels";
import { cn } from "@/lib/utils";

export function ReelCard({
  reel,
  compact = false,
}: {
  reel: Reel;
  compact?: boolean;
}) {
  return (
    <article className={cn("reel-card", compact && "reel-card--compact")}>
      <ViewTransition name={`reel-${reel.slug}`} share="morph" default="none">
        <ReelEmbed reel={reel} />
      </ViewTransition>
      <div className="reel-card__meta">
        <h3 className="font-display tracking-tight">
          <Link
            href={`/work/${reel.slug}`}
            transitionTypes={["nav-forward"]}
            className="text-paper no-underline"
          >
            {reel.title}
          </Link>
        </h3>
        {compact ? null : <p className="text-mist">{reel.client}</p>}
        {compact ? null : (
          <Link href={`/work/${reel.slug}`} transitionTypes={["nav-forward"]} className="reel-card__link">
            Case file
          </Link>
        )}
      </div>
    </article>
  );
}
