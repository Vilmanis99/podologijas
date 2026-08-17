import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "Podoloģijas Klīnika Pārdaugava — pēdu veselības aprūpe Rīgā";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Pēdu veselības aprūpe",
    caption: "Kurzemes prospekts 3, Rīga · +371 25 455 994",
  });
}
