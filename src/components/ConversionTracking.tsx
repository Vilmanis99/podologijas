"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AW_ID, BOOK_SEND_TO, PHONE_SEND_TO, reportConversion } from "@/lib/ads";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    // One delegated listener instead of a handler per button. The price list
    // builds its links from data and the team grid from an array, so new
    // buttons appear without anyone remembering to wire tracking to them —
    // and every existing tel:/booking link is covered without touching its
    // JSX, which a handler bolted onto each of the ~36 individual <a> tags
    // could not guarantee once someone edits one of those files later.
    function onClick(event: MouseEvent) {
      const target = event.target;
      // Guards against text nodes and the SVG icons sitting inside buttons.
      if (!(target instanceof Element)) return;

      const href = target.closest("a")?.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) {
        reportConversion(PHONE_SEND_TO);
      } else if (href.includes("piearsta.lv")) {
        // Booking finishes on piearsta.lv, so this records the intent to book
        // rather than a completed appointment.
        reportConversion(BOOK_SEND_TO);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // The consent defaults this depends on are rendered by the root layout.
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
      strategy="afterInteractive"
    />
  );
}
