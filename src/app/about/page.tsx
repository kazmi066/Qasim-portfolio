import { About } from "@/components/sections/about";
import { Craft } from "@/components/sections/craft";
import { RouteTransition } from "@/components/motion/route-transition";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: `${site.name} is a video editor and motion designer working between picture, shorts, and nature cinematography.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <RouteTransition>
      <main id="main">
        <About />
        <Craft />
      </main>
    </RouteTransition>
  );
}
