import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "Подологическая клиника Пардаугава — уход за здоровьем стоп в Риге";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Здоровье ваших стоп",
    caption: "Курземес проспект 3, Рига · +371 25 455 994",
  });
}
