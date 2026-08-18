import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poiret_One, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poiretOne = Poiret_One({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const TITLE = "Podoloģijas Klīnika Pārdaugava | podologijasklinika.lv";
const DESCRIPTION =
  "Profesionāla pēdu veselības aprūpe Pārdaugavā. Podoloģija, medicīniskā pedikīra, nagu korekcija. Piesakieties vizītei online.";

export const metadata: Metadata = {
  // Required for canonical/hreflang and OG image URLs to resolve as absolute.
  metadataBase: new URL(SITE_URL),
  // Proves ownership to Google Search Console. The DNS TXT method was not an
  // option: the zone lives at Sigmanet, which we do not control.
  verification: { google: "hnSwVofQOysNqU6WoIc2_C3EBbVUAMYUXtgx7YwNM_Y" },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Podoloģijas Klīnika Pārdaugava",
    locale: "lv_LV",
    alternateLocale: "ru_RU",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "lv";
  return (
    <html lang={lang} className={`${poiretOne.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
