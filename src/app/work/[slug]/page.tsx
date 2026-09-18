import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RouteTransition } from "@/components/motion/route-transition";
import { ReelPlayer } from "@/components/reels/reel-player";
import { getReel, reels } from "@/content/reels";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reels.map((reel) => ({ slug: reel.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const reel = getReel(slug);
  if (!reel) return createMetadata({ title: "Work" });

  return createMetadata({
    title: reel.title,
    description: reel.logline,
    path: `/work/${reel.slug}`,
  });
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const reel = getReel(slug);
  if (!reel) notFound();

  return (
    <RouteTransition>
      <main id="main" className="section-space">
        <article className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Link
              href="/work"
              transitionTypes={["nav-back"]}
              className="text-meta inline-flex items-center gap-2 text-mist no-underline hover:text-paper"
            >
              ← Index
            </Link>
            <h1 className="display-title mt-6">{reel.title}</h1>
          <p className="mt-4 max-w-[42ch] text-step-1 text-paper/80">{reel.logline}</p>
          <div className="mt-10">
            <ReelPlayer reel={reel} />
          </div>
        </div>
        <aside className="space-y-8 border-t border-rule pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <div>
            <p className="text-meta text-mist">Client</p>
            <p className="mt-2 text-step-2">{reel.client}</p>
          </div>
          <div>
            <p className="text-meta text-mist">Role</p>
            <p className="mt-2">{reel.role}</p>
          </div>
          <div>
            <p className="text-meta text-mist">Duration</p>
            <p className="mt-2">{reel.duration}</p>
          </div>
          <div>
            <p className="text-meta text-mist">Year</p>
            <p className="mt-2">{reel.year}</p>
          </div>
          <div>
            <p className="text-meta text-mist">Tools</p>
            <p className="mt-2">{reel.tools.join(" · ")}</p>
          </div>
          </aside>
        </article>
      </main>
    </RouteTransition>
  );
}
