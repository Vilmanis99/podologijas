import type { Metadata } from "next";
import { Poiret_One, Inter } from "next/font/google";
import "./globals.css";

const poiretOne = Poiret_One({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className={`${poiretOne.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
