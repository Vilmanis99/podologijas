"use client";

import { useState } from "react";

const BOOKING_URL = "https://www.piearsta.lv/";

interface Service {
  name: string;
  price: string;
  description?: string;
}

interface ServiceGroup {
  title: string;
  accent: string;
  icon: React.ReactNode;
  services: Service[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Ārstnieciskā pēdu aprūpe",
    accent: "Pamats veselām pēdām",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    services: [
      {
        name: "Pirmreizēja ārstnieciskā pēdu aprūpe + konsultācija",
        price: "55 €",
        description:
          "Pirmā vizīte ar padziļinātu konsultāciju un pilnu ārstnieciskās pēdu aprūpes procedūru.",
      },
      {
        name: "Atkārtota ārstnieciskā pēdu aprūpe",
        price: "50 €",
        description:
          "Profesionāla pēdu kopšana ar medicīniskiem instrumentiem, ādas un nagu apstrāde.",
      },
      {
        name: "Estētiskā pēdu aprūpe ar pārklājumu",
        price: "60 €",
        description:
          "Pilna pēdu aprūpe ar ilgnoturīgu nagu pārklājumu.",
      },
      {
        name: "Konsultācija un problēmzonas apstrāde",
        price: "35 €",
        description:
          "Pēdu stāvokļa novērtējums, diagnostika un mērķtiecīga problēmzonas apstrāde.",
      },
      {
        name: "Akūts gadījums",
        price: "40 €",
        description:
          "Steidzama palīdzība akūtu pēdu problēmu gadījumos.",
      },
    ],
  },
  {
    title: "Senioriem 65+",
    accent: "Darba dienās 9:00 – 13:00",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    services: [
      {
        name: "Ārstnieciskā pēdu aprūpe (seniori 65+)",
        price: "30 €",
        description:
          "Pilna ārstnieciskā pēdu aprūpe ar īpašu cenu senioriem darba dienās no plkst. 9:00 līdz 13:00.",
      },
    ],
  },
  {
    title: "Nagu korekcija",
    accent: "Saudzīgas un efektīvas metodes",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    services: [
      {
        name: "Ieauguša naga korekcija",
        price: "30 €",
        description:
          "Bezoperācijas ieauguša naga korekcija.",
      },
      {
        name: "Pārsiešana pie ieauguša naga",
        price: "15 €",
        description:
          "Pārsiešanas procedūra ieauguša naga ārstēšanas laikā.",
      },
      {
        name: "Ieauguša naga korekcija ar skavu metodi",
        price: "40 €",
        description:
          "Speciāla skavas sistēma naga korekcijai bez ķirurģiskas iejaukšanās.",
      },
      {
        name: "Atkārtota skavas korekcija",
        price: "20 €",
        description:
          "Atkārtota skavas pielāgošana ārstēšanas turpinājumā.",
      },
      {
        name: "Viena naga protezēšana",
        price: "20 €",
        description:
          "Bojāta naga atjaunošana ar speciāliem materiāliem.",
      },
    ],
  },
  {
    title: "Papildu pakalpojumi",
    accent: "Specifiska aprūpe",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      {
        name: "Varžacs apstrāde",
        price: "20 €",
        description:
          "Varžacs profesionāla noņemšana un ādas apstrāde.",
      },
      {
        name: "Kārpu apstrāde",
        price: "20 €",
        description:
          "Pēdu kārpu apstrāde ar mērķtiecīgu pieeju.",
      },
      {
        name: "Brūces aprūpe",
        price: "25 €",
        description:
          "Pēdu brūču aprūpe un ārstēšana.",
      },
      {
        name: "Ārstnieciskā roku aprūpe bez pārklājuma",
        price: "30 €",
        description:
          "Profesionāla roku ārstnieciskā aprūpe ar medicīnisku pieeju.",
      },
    ],
  },
];

function ServiceRow({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl transition-colors duration-200 ${
        isOpen ? "bg-surface-container-low" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left p-4 group"
      >
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-medium text-on-surface group-hover:text-primary transition-colors">
            {service.name}
          </h4>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-primary text-base sm:text-lg font-semibold tracking-tight min-w-[3rem] text-right">
            {service.price}
          </span>
          <div
            className={`w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            {service.description && (
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                {service.description}
              </p>
            )}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white text-xs font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-lg hover:scale-[1.02] transition-transform duration-200 flex-shrink-0 w-full sm:w-auto"
            >
              Pieteikties
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section id="pakalpojumi" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Pakalpojumi
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-3">
            Cenu lapa
          </h2>
        </div>

        <div className="space-y-8">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center text-primary">
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-primary">
                    {group.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs">{group.accent}</p>
                </div>
              </div>

              {/* Services */}
              <div className="mt-4 space-y-1">
                {group.services.map((service) => {
                  const key = `${group.title}-${service.name}`;
                  return (
                    <ServiceRow
                      key={key}
                      service={service}
                      isOpen={openItems.has(key)}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-on-surface-variant/70 text-xs mt-8 text-center max-w-2xl mx-auto leading-relaxed">
          * Podologs, novērtējot nagu stāvokli, ir tiesīgs atteikt nagu pārklāšanu ar
          jebkura veida materiālu.
        </p>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-on-surface-variant text-sm mb-4">
            Nav pārliecināti, kas jums nepieciešams?
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200"
          >
            Pieteikties konsultācijai
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
