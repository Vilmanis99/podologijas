"use client";

import { useState } from "react";
import { dict, type Lang } from "@/i18n/dictionaries";
import { PHONE, PHONE_DISPLAY } from "@/lib/site";

const BOOKING_URL = "https://www.piearsta.lv/";

type GroupKey = keyof (typeof dict)["lv"]["services"]["groups"];

interface ServiceDef {
  key: string;
  price: string;
}
interface GroupDef {
  key: GroupKey;
  icon: React.ReactNode;
  services: ServiceDef[];
}

const heartIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);
const starIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);
const sparkleIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>
);
const sparklesIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);
const adjustIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);
const infoIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const groupDefs: GroupDef[] = [
  {
    key: "arstnieciska",
    icon: heartIcon,
    services: [
      { key: "pirmreizeja", price: "55 €" },
      { key: "atkartota", price: "50 €" },
      { key: "konsultacija", price: "35 €" },
      { key: "akuts", price: "40 €" },
    ],
  },
  {
    key: "seniori",
    icon: starIcon,
    services: [{ key: "pedu", price: "30 €" }],
  },
  {
    key: "estetiska",
    icon: sparkleIcon,
    services: [
      { key: "peduParklajums", price: "60 €" },
      { key: "rokuGellaku", price: "45 €" },
      { key: "rokuGelu", price: "55 €" },
      { key: "manikirs", price: "30 €" },
    ],
  },
  {
    key: "naguKorekcija",
    icon: sparklesIcon,
    services: [
      { key: "ieaugusa", price: "30 €" },
      { key: "parsiesana", price: "15 €" },
      { key: "skava", price: "40 €" },
      { key: "atkartotaSkava", price: "20 €" },
      { key: "protezesana", price: "20 €" },
    ],
  },
  {
    key: "tehniskaOrtopedija",
    icon: adjustIcon,
    services: [
      { key: "pieaugusajiem", price: "60 €" },
      { key: "berniem", price: "50 €" },
    ],
  },
  {
    key: "papildu",
    icon: infoIcon,
    services: [
      { key: "varzacs", price: "20 €" },
      { key: "karpu", price: "20 €" },
      { key: "bruces", price: "25 €" },
      { key: "rokuArstnieciska", price: "30 €" },
    ],
  },
];

function ServiceRow({
  name,
  price,
  description,
  bookLabel,
  isOpen,
  onToggle,
}: {
  name: string;
  price: string;
  description?: string;
  bookLabel: string;
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
            {name}
          </h4>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-primary text-base sm:text-lg font-semibold tracking-tight min-w-[3rem] text-right">
            {price}
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
            {description && (
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                {description}
              </p>
            )}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white text-xs font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-lg hover:scale-[1.02] transition-transform duration-200 flex-shrink-0 w-full sm:w-auto"
            >
              {bookLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Deliberately a note, not a second call to action — the booking button sits
// right below it, and two equally loud buttons would compete.
function GiftCard({ lang }: { lang: Lang }) {
  const t = dict[lang].services.giftCard;
  return (
    <div className="mt-10 rounded-2xl bg-secondary-container/40 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/70 flex items-center justify-center text-primary flex-shrink-0">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-secondary text-xs font-semibold uppercase tracking-[0.15em] mb-1">
            {t.badge}
          </p>
          <h3 className="font-heading text-xl sm:text-2xl text-primary mb-2">
            {t.title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
            {t.desc}
          </p>
        </div>

        <div className="sm:text-right flex-shrink-0">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.1em] mb-1">
            {t.phoneLabel}
          </p>
          <a
            href={`tel:${PHONE}`}
            className="text-primary font-semibold hover:underline whitespace-nowrap"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services({ lang }: { lang: Lang }) {
  const t = dict[lang].services;
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
            {t.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-3">
            {t.title}
          </h2>
        </div>

        <div className="space-y-8">
          {groupDefs.map((group) => {
            const g = t.groups[group.key];
            return (
              <div
                key={group.key}
                className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center text-primary">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl text-primary">
                      {g.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs">{g.accent}</p>
                  </div>
                </div>

                {/* Services */}
                <div className="mt-4 space-y-1">
                  {group.services.map((svc) => {
                    const s = (g.services as Record<string, { name: string; desc: string }>)[svc.key];
                    const key = `${group.key}-${svc.key}`;
                    return (
                      <ServiceRow
                        key={key}
                        name={s.name}
                        price={svc.price}
                        description={s.desc}
                        bookLabel={t.book}
                        isOpen={openItems.has(key)}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-on-surface-variant/70 text-xs mt-8 text-center max-w-2xl mx-auto leading-relaxed">
          {t.footnote}
        </p>

        <GiftCard lang={lang} />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-on-surface-variant text-sm mb-4">
            {t.bottomText}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200"
          >
            {t.bottomCta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
