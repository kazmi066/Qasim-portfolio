import { RouteTransition } from "@/components/motion/route-transition";
import { ReelCard } from "@/components/reels/reel-card";
import { reels } from "@/content/reels";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description: "Shorts and picture work by Qasim Abbas.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <RouteTransition>
      <main id="main" className="section-space">
        <div className="work-index wrap">
          <h1 className="display-title">Selected shorts</h1>
          <div className="work-index__grid">
            {reels.map((reel) => (
              <ReelCard key={reel.slug} reel={reel} compact />
            ))}
          </div>
        </div>
      </main>
    </RouteTransition>
  );
}
