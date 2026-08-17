// Canonical production origin. Used as `metadataBase` (so canonical/hreflang
// and OG image URLs resolve to absolute URLs) and as the sitemap's base.
export const SITE_URL = "https://podologijasklinika.lv";

// Every indexable route, paired lv ↔ ru. Single source of truth for the
// sitemap so a new page can't be added to one language and forgotten in the
// other.
export const ROUTES = [
  { lv: "/", ru: "/ru", priority: 1 },
  { lv: "/privatuma-politika", ru: "/ru/privatuma-politika", priority: 0.3 },
  { lv: "/arstniecibas-noteikumi", ru: "/ru/arstniecibas-noteikumi", priority: 0.3 },
  {
    lv: "/pacienta-tiesibas-un-pienakumi",
    ru: "/ru/pacienta-tiesibas-un-pienakumi",
    priority: 0.3,
  },
] as const;
