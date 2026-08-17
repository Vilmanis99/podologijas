import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared renderer for the lv and ru `opengraph-image` routes. The wordmark is
// baked into logo-light.png, so the card needs no custom font for the brand
// name — only the short caption below it uses the built-in face.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export async function renderOgImage({
  eyebrow,
  caption,
}: {
  eyebrow: string;
  caption: string;
}) {
  const logo = await readFile(join(process.cwd(), "public", "logo-light.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5E620C",
          padding: 32,
        }}
      >
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(205, 196, 141, 0.45)",
            borderRadius: 24,
            padding: "36px 64px",
          }}
        >
          <img
            src={`data:image/png;base64,${logo}`}
            width={430}
            height={430}
            style={{ marginTop: -28 }}
            alt=""
          />
          <div
            style={{
              width: 96,
              height: 2,
              backgroundColor: "rgba(205, 196, 141, 0.5)",
              marginTop: -18,
              marginBottom: 26,
            }}
          />
          <div
            style={{
              color: "#CDC48D",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "rgba(246, 241, 221, 0.75)",
              fontSize: 25,
              marginTop: 16,
            }}
          >
            {caption}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
