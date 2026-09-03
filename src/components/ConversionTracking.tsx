"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AW_ID, BOOK_SEND_TO, PHONE_SEND_TO } from "@/lib/ads";

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
    // buttons appear without anyone remembering to wire tracking to them.
    function onClick(event: MouseEvent) {
      const target = event.target;
      // Guards against text nodes and the SVG icons sitting inside buttons.
      if (!(target instanceof Element)) return;

      const href = target.closest("a")?.getAttribute("href");
      if (!href || typeof window.gtag !== "function") return;

      if (href.startsWith("tel:")) {
        window.gtag("event", "conversion", { send_to: PHONE_SEND_TO });
      } else if (href.includes("piearsta.lv")) {
        // Booking finishes on piearsta.lv, so this records the intent to book
        // rather than a completed appointment.
        window.gtag("event", "conversion", { send_to: BOOK_SEND_TO });
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
