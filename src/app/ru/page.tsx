import type { Metadata } from "next";
import SiteHome from "@/components/SiteHome";

const TITLE = "Подологическая клиника Пардаугава | podologijasklinika.lv";
const DESCRIPTION =
  "Профессиональный уход за здоровьем стоп в Пардаугаве. Подология, медицинский педикюр, коррекция ногтей. Запишитесь на приём онлайн.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ru",
    languages: { lv: "/", ru: "/ru" },
  },
  // `openGraph` replaces the parent's block wholesale rather than merging, so
  // the shared fields are repeated here with the Russian locale.
  openGraph: {
    type: "website",
    siteName: "Подологическая клиника Пардаугава",
    locale: "ru_RU",
    alternateLocale: "lv_LV",
    url: "/ru",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomeRu() {
  return <SiteHome lang="ru" />;
}
