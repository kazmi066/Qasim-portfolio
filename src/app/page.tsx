import { RouteTransition } from "@/components/motion/route-transition";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Craft } from "@/components/sections/craft";
import { Hero } from "@/components/sections/hero";
import { Reels } from "@/components/sections/reels";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <RouteTransition>
      <main id="main">
        <Hero />
        <Reels />
        <About />
        <Craft />
        <Contact />
      </main>
    </RouteTransition>
  );
}
