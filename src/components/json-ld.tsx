import { reels } from "@/content/reels";
import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.roles.join(" / "),
        url: site.url,
        email: site.email,
        sameAs: [site.instagram, site.youtube],
        knowsAbout: ["video editing", "motion design", "short-form video", "cinematography"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.title,
        description: site.description,
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ItemList",
        name: "Selected reels",
        itemListElement: reels.map((reel, index) => ({
          "@type": "VideoObject",
          position: index + 1,
          name: reel.title,
          description: reel.logline,
          thumbnailUrl: reel.poster,
          contentUrl: reel.url,
          uploadDate: `${reel.year}-01-15`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
