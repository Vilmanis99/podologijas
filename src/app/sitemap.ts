import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Each lv/ru pair is emitted as two entries that point at each other via
  // hreflang, matching the `alternates.languages` on the pages themselves.
  return ROUTES.flatMap(({ lv, ru, priority }) => {
    const languages = { lv: `${SITE_URL}${lv}`, ru: `${SITE_URL}${ru}` };
    return [
      {
        url: `${SITE_URL}${lv}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: `${SITE_URL}${ru}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages },
      },
    ];
  });
}
