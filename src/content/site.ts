export const site = {
  name: "Qasim Abbas",
  shortName: "Q",
  title: "Qasim Abbas, video editor and motion designer",
  description:
    "Qasim Abbas edits picture, motion, and shorts for brands and filmmakers. Nature cinematography, tight rhythm, and color that behaves like weather.",
  tagline: "I wait until the weather is in the frame.",
  headline: "I'm Qasim Abbas. I edit picture and shorts.",
  roles: ["Video editor", "Motion designer", "Shorts editor"],
  availability: "Booking autumn 2026",
  email: "hello@qasim.studio",
  instagram: "https://www.instagram.com/qasim.cuts",
  instagramHandle: "@qasim.cuts",
  youtube: "https://www.youtube.com/@qasimcuts",
  youtubeHandle: "Qasim Cuts",
  url: "https://qasim.studio",
  keywords: [
    "video editor",
    "motion designer",
    "shorts editor",
    "cinematography",
    "nature film",
    "Qasim Abbas",
  ],
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/#contact", label: "Contact" },
] as const;

export const marqueeItems = [
  "Picture edit",
  "Motion titles",
  "YouTube shorts",
  "Brand films",
  "Nature docs",
  "Color",
  "Sound bed",
  "Reels",
] as const;

export const craft = [
  {
    id: "picture",
    title: "Picture",
    copy: "Coverage first, then the sequence that makes it feel inevitable. I hold a wide until the weather changes. Then I get out.",
    icon: "clap",
  },
  {
    id: "motion",
    title: "Motion",
    copy: "Type that behaves like a camera move. Lower thirds, opens, and end cards that do not steal the shot they sit on.",
    icon: "projector",
  },
  {
    id: "shorts",
    title: "Shorts",
    copy: "A different muscle. Hook in the first six frames, hold a face, leave before the joke explains itself.",
    icon: "wind",
  },
  {
    id: "light",
    title: "Light",
    copy: "Color as climate. I grade toward the hour the footage was shot, not toward a LUT that pretends every forest is the same forest.",
    icon: "sunset",
  },
] as const;

export const aboutBody = [
  "I came to editing through walking. A cheap camera, a hillside, and the habit of waiting for wind to move a tree before I rolled. That wait is still the job.",
  "Most of the work now is commercial: brand films, creator shorts, a few longer nature pieces. The brief changes. The sequence still has to feel like a place.",
  "If you want fireworks on every frame, I am the wrong editor. If you want a sequence that still works with the sound off, write.",
];
