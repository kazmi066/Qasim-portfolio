import Link from "next/link";

import { InstagramMark } from "@/components/icons/instagram-mark";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule" style={{ viewTransitionName: "site-footer" }}>
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <p className="text-paper/80">
          {site.name} · {year}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href={site.instagram}
            className="inline-flex items-center gap-2 text-paper no-underline hover:opacity-80"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramMark size={22} />
            <span>{site.instagramHandle}</span>
          </Link>
          <Link
            href={site.youtube}
            className="text-paper no-underline hover:text-sun"
            rel="noreferrer"
            target="_blank"
          >
            {site.youtubeHandle}
          </Link>
        </div>
      </div>
    </footer>
  );
}
