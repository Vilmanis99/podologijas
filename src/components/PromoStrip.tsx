"use client";

import { useState } from "react";

export default function PromoStrip() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-primary-container text-secondary-container">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm relative">
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary-container/70" />
        <p className="text-center leading-snug">
          <span className="font-semibold uppercase tracking-[0.1em]">Senioriem 65+ </span>
          pilna pēdu aprūpe par <span className="font-bold">30 €</span> · darba dienās 9:00 – 13:00
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Aizvērt paziņojumu"
          className="absolute right-4 text-secondary-container/60 hover:text-secondary-container transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
