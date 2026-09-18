"use client";

import { useCallback, useState } from "react";
import { useLenis } from "lenis/react";

import type { Reel } from "@/content/reels";
import { youtubeEmbed } from "@/content/reels";
import { cn } from "@/lib/utils";

export function ReelEmbed({
  reel,
  interactive = false,
}: {
  reel: Reel;
  interactive?: boolean;
}) {
  const [playing, setPlaying] = useState(interactive);
  const lenis = useLenis();

  const play = useCallback(() => {
    setPlaying(true);
  }, []);

  return (
    <div className={cn("reel-embed", playing && "is-live")}>
      {playing ? (
        <iframe
          src={youtubeEmbed(reel.videoId, interactive ? "" : "&autoplay=1")}
          title={reel.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => lenis?.resize()}
        />
      ) : (
        <img
          src={reel.poster}
          alt=""
          className="reel-embed__poster"
          decoding="async"
        />
      )}
      {interactive || playing ? null : (
        <button
          type="button"
          className="reel-embed__hit"
          onClick={play}
          aria-label={`Play ${reel.title}`}
        />
      )}
    </div>
  );
}
