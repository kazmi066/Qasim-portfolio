"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ReelCard } from "@/components/reels/reel-card";
import { featuredReels } from "@/content/reels";

export function Reels() {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const node = track.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setAtStart(node.scrollLeft <= 8);
    setAtEnd(max <= 8 || node.scrollLeft >= max - 8);
  }, []);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    sync();
    node.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(node);
    return () => {
      node.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  const step = useCallback((direction: number) => {
    const node = track.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>(".reel-card");
    const styles = getComputedStyle(node);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const width = (card?.offsetWidth ?? node.clientWidth) + gap;
    node.scrollBy({ left: direction * width, behavior: "smooth" });
  }, []);

  return (
    <section id="shorts" className="reels-rail section-space" aria-labelledby="work-title">
      <div className="reels-rail__inner">
        <div className="reels-rail__head">
          <h2 id="work-title" className="font-display text-step-5 tracking-tight">
            Selected shorts
          </h2>
          <div className="reels-rail__controls">
            <button
              type="button"
              className="reels-rail__btn"
              aria-label="Previous shorts"
              disabled={atStart}
              onClick={() => step(-1)}
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              className="reels-rail__btn"
              aria-label="Next shorts"
              disabled={atEnd}
              onClick={() => step(1)}
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="reels-rail__track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected shorts"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
          }}
        >
          {featuredReels.map((reel) => (
            <ReelCard key={reel.slug} reel={reel} />
          ))}
          <Link href="/work" transitionTypes={["nav-forward"]} className="reel-card reels-more">
            <span className="reels-more__face">
              <span className="reels-more__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
              <span className="reels-more__label">View more</span>
            </span>
            <span className="reel-card__meta">
              <span className="font-display text-step-1 tracking-tight">All shorts</span>
              <span className="text-mist">The full index</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {dir === "left" ? <path d="M15 5 8 12l7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  );
}
