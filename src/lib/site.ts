// Canonical production origin. Used as `metadataBase` (so canonical/hreflang
// and OG image URLs resolve to absolute URLs) and as the sitemap's base.
export const SITE_URL = "https://podologijasklinika.lv";

// Booking page on piearsta.lv. There is no Russian variant — /ru/ redirects
// back to /lv/ — so both language versions of the site point here.
export const BOOKING_URL =
  "https://www.piearsta.lv/lv/iestazu-katalogs/podologijas-klinika-pardaugava-1830/";

// The clinic's phone, in dialling and display form. Older components still
// carry their own copies; new code should use these.
export const PHONE = "+37125455994";
export const PHONE_DISPLAY = "+371 25 455 994";

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
