import type { Metadata } from "next";

import { site } from "@/content/site";

export const metadataBase = new URL(site.url);

export function pageTitle(title?: string) {
  return title ? `${title} · ${site.name}` : site.title;
}

export function createMetadata({
  title,
  description = site.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = new URL(path, metadataBase);
  const fullTitle = pageTitle(title);

  return {
    title: fullTitle,
    description,
    keywords: [...site.keywords],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    metadataBase,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
