import { Contact } from "@/components/sections/contact";
import { RouteTransition } from "@/components/motion/route-transition";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Write Qasim Abbas with a brief, a folder, and a deadline.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <RouteTransition>
      <main id="main">
        <Contact />
      </main>
    </RouteTransition>
  );
}
