import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Preview lockdown — flip to `allow: "/"` when the site goes public.
      // See also next.config.ts (X-Robots-Tag) and layout.tsx (robots.index).
      disallow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
