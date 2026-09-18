export type Reel = {
  slug: string;
  title: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  format: "9:16";
  logline: string;
  tools: string[];
  platform: "youtube";
  videoId: string;
  url: string;
  poster: string;
};

export const reels: Reel[] = [
  {
    slug: "salt-line",
    title: "Salt Line",
    client: "North Range Conservancy",
    year: "2026",
    duration: "00:21",
    role: "Picture · sound",
    format: "9:16",
    logline: "Forest drone at last light. The hold waits for the canopy to breathe.",
    tools: ["Premiere", "Resolve"],
    platform: "youtube",
    videoId: "LWozRRk9xys",
    url: "https://www.youtube.com/shorts/LWozRRk9xys",
    poster: "https://i.ytimg.com/vi/LWozRRk9xys/hq2.jpg",
  },
  {
    slug: "pine-cut",
    title: "Pine Cut",
    client: "Fieldcloth",
    year: "2026",
    duration: "00:14",
    role: "Shorts",
    format: "9:16",
    logline: "A walk through Darjeeling pines. No score until the needles move.",
    tools: ["Premiere", "CapCut"],
    platform: "youtube",
    videoId: "yZATXPlS3rk",
    url: "https://www.youtube.com/shorts/yZATXPlS3rk",
    poster: "https://i.ytimg.com/vi/yZATXPlS3rk/hq2.jpg",
  },
  {
    slug: "afterglow",
    title: "Afterglow",
    client: "Canopy Podcast",
    year: "2025",
    duration: "00:18",
    role: "Edit · motion",
    format: "9:16",
    logline: "Dancing forest, held until the trunks start to feel like type.",
    tools: ["Premiere", "After Effects"],
    platform: "youtube",
    videoId: "NmhZJi2JN5k",
    url: "https://www.youtube.com/shorts/NmhZJi2JN5k",
    poster: "https://i.ytimg.com/vi/NmhZJi2JN5k/hq2.jpg",
  },
  {
    slug: "cliff-note",
    title: "Cliff Note",
    client: "Personal",
    year: "2025",
    duration: "00:16",
    role: "Picture",
    format: "9:16",
    logline: "Puffin on a ledge. The hold is the whole joke.",
    tools: ["Resolve"],
    platform: "youtube",
    videoId: "b6hCIUwCjZ8",
    url: "https://www.youtube.com/shorts/b6hCIUwCjZ8",
    poster: "https://i.ytimg.com/vi/b6hCIUwCjZ8/hq2.jpg",
  },
  {
    slug: "white-fall",
    title: "White Fall",
    client: "Mira Walks",
    year: "2025",
    duration: "00:22",
    role: "Shorts",
    format: "9:16",
    logline: "Marmore from the air. Hook on the drop, out before the mist explains it.",
    tools: ["Premiere"],
    platform: "youtube",
    videoId: "fB6UHpEX5fY",
    url: "https://www.youtube.com/shorts/fB6UHpEX5fY",
    poster: "https://i.ytimg.com/vi/fB6UHpEX5fY/hq2.jpg",
  },
  {
    slug: "veil",
    title: "Veil",
    client: "Private",
    year: "2025",
    duration: "00:19",
    role: "Picture · grade",
    format: "9:16",
    logline: "Dynjandi in Iceland. Color as climate, not as a LUT.",
    tools: ["Resolve"],
    platform: "youtube",
    videoId: "j6FiwiX-eoU",
    url: "https://www.youtube.com/shorts/j6FiwiX-eoU",
    poster: "https://i.ytimg.com/vi/j6FiwiX-eoU/hq2.jpg",
  },
  {
    slug: "green-hour",
    title: "Green Hour",
    client: "Stillwater Tea",
    year: "2025",
    duration: "00:24",
    role: "Edit · sound",
    format: "9:16",
    logline: "Aurora over the Alps. Room tone, then the sky does the rest.",
    tools: ["Premiere", "Audition"],
    platform: "youtube",
    videoId: "kZS17TORX18",
    url: "https://www.youtube.com/shorts/kZS17TORX18",
    poster: "https://i.ytimg.com/vi/kZS17TORX18/hq2.jpg",
  },
  {
    slug: "rec-709",
    title: "Rec. 709",
    client: "Personal",
    year: "2024",
    duration: "00:12",
    role: "Color",
    format: "9:16",
    logline: "Ungraded versus the grade. The weather is in the second pass.",
    tools: ["Resolve"],
    platform: "youtube",
    videoId: "GQGtQ6Dsysg",
    url: "https://www.youtube.com/shorts/GQGtQ6Dsysg",
    poster: "https://i.ytimg.com/vi/GQGtQ6Dsysg/hq2.jpg",
  },
];

export const featuredReels = reels.slice(0, 4);

export function getReel(slug: string) {
  return reels.find((reel) => reel.slug === slug);
}

export function youtubeEmbed(id: string, extra = "") {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${extra}`;
}
