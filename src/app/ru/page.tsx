import type { Metadata } from "next";
import SiteHome from "@/components/SiteHome";

export const metadata: Metadata = {
  title: "Подологическая клиника Пардаугава | podologijasklinika.lv",
  description:
    "Профессиональный уход за здоровьем стоп в Пардаугаве. Подология, медицинский педикюр, коррекция ногтей. Запишитесь на приём онлайн.",
  alternates: {
    canonical: "/ru",
    languages: { lv: "/", ru: "/ru" },
  },
};

export default function HomeRu() {
  return <SiteHome lang="ru" />;
}
