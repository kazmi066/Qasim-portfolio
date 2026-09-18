import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c100e",
          color: "#ede6d6",
          padding: "56px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
          <span>{site.roles[0]}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 0.9 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 32, fontStyle: "italic", color: "#d6a45a" }}>
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
