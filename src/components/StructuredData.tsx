import { SITE_URL } from "@/lib/site";
import type { Lang } from "@/i18n/dictionaries";

// schema.org description of the clinic, so search engines and AI assistants
// read it as a real podiatry practice in Rīga with an address, phone and
// opening hours — not just prose that happens to contain those words.
//
// The @id is the same on both language versions on purpose: it is one clinic,
// described twice in different languages, not two businesses.
const NAME: Record<Lang, string> = {
  lv: "Podoloģijas Klīnika Pārdaugava",
  ru: "Подологическая клиника Пардаугава",
};

const DESCRIPTION: Record<Lang, string> = {
  lv: "Profesionāla pēdu veselības aprūpe Pārdaugavā — podoloģija, medicīniskā pedikīra, nagu korekcija, mājas vizītes.",
  ru: "Профессиональный уход за здоровьем стоп в Пардаугаве — подология, медицинский педикюр, коррекция ногтей, визиты на дом.",
};

export default function StructuredData({ lang }: { lang: Lang }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: NAME[lang],
    description: DESCRIPTION[lang],
    url: lang === "ru" ? `${SITE_URL}/ru` : SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/hero.jpg`,
    telephone: "+37125455994",
    email: "info@podologijasklinika.lv",
    medicalSpecialty: "Podiatric",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    availableLanguage: ["lv", "ru"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kurzemes prospekts 3",
      addressLocality: "Rīga",
      postalCode: "LV-1067",
      addressCountry: "LV",
    },
    hasMap: "https://www.google.com/maps?q=Kurzemes+prospekts+3,+R%C4%ABga",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: 'SIA "AK Podo"',
      vatID: "LV40203720722",
    },
    // Register code the Inspekcija assigned on 2026-08-14.
    identifier: {
      "@type": "PropertyValue",
      name: "Ārstniecības iestādes kods",
      value: "001000454",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
