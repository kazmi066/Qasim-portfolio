import type { MetadataRoute } from "next";

import { reels } from "@/content/reels";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = ["", "/work", "/about", "/contact", ...reels.map((reel) => `/work/${reel.slug}`)];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path.startsWith("/work/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
