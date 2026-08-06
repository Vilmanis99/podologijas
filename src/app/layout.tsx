import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poiret_One, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Podoloģijas Klīnika Pārdaugava | podologijasklinika.lv",
  description: "Profesionāla pēdu veselības aprūpe Pārdaugavā. Podoloģija, medicīniskā pedikīra, nagu korekcija. Piesakieties vizītei online.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
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
