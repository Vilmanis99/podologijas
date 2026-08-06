"use client";

import { useState } from "react";
import { dict, type Lang } from "@/i18n/dictionaries";

export default function PromoStrip({ lang }: { lang: Lang }) {
  const t = dict[lang].promoStrip;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-secondary-container text-primary border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm relative">
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary/40" />
        <p className="text-center leading-snug">
          <span className="font-semibold uppercase tracking-[0.1em]">{t.senior} </span>
          {t.text1} <span className="font-bold">{t.price}</span> {t.text2}
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label={t.close}
          className="absolute right-4 text-primary/50 hover:text-primary transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
