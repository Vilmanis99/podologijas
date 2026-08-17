import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Source mark is 1024x675 with transparent padding around the circle, which
// spans roughly 60% of that width. Scaling the image slightly wider than the
// icon lets the circle land at ~2/3 of the final size; only transparent
// padding is clipped.
const MARK_W = 1024;
const MARK_H = 675;
const OVERSCAN = 1.12;

// Shared renderer for icon and apple-icon. The olive fill is deliberately
// opaque: iOS composites a transparent home-screen icon onto black, which
// would swallow the khaki mark.
export async function renderBrandIcon(size: number) {
  const mark = await readFile(
    join(process.cwd(), "public", "logo-symbol-light.png"),
    "base64"
  );
  const width = Math.round(size * OVERSCAN);

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
        }}
      >
        <img
          src={`data:image/png;base64,${mark}`}
          width={width}
          height={Math.round((width * MARK_H) / MARK_W)}
          alt=""
        />
      </div>
    ),
    { width: size, height: size }
  );
}
