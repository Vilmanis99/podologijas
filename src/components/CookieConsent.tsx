"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { dict, type Lang } from "@/i18n/dictionaries";
import { CONSENT_STORAGE_KEY as STORAGE_KEY } from "@/lib/ads";

// The stored choice never changes underneath us — only this component writes
// it — so there is nothing to subscribe to.
const subscribe = () => () => {};

function hasDecided() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    // Private mode or blocked storage: treat as decided rather than showing a
    // banner on every page view whose answer could never be remembered.
    return true;
  }
}

// The server cannot know the visitor's choice, so it renders nothing and the
// banner appears on hydration. Reading through useSyncExternalStore keeps that
// out of an effect and avoids a hydration mismatch.
const hasDecidedOnServer = () => true;

export default function CookieConsent({ lang }: { lang: Lang }) {
  const t = dict[lang].cookieConsent;
  const decided = useSyncExternalStore(subscribe, hasDecided, hasDecidedOnServer);
  const [dismissed, setDismissed] = useState(false);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {}
    window.gtag?.("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
    setDismissed(true);
  }

  if (decided || dismissed) return null;

  const policyHref = lang === "ru" ? "/ru/privatuma-politika" : "/privatuma-politika";

  return (
    <div
      role="dialog"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl shadow-primary/10 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1 min-w-0">
            <h2 className="font-heading text-lg text-primary mb-1">{t.title}</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {t.text}{" "}
              <Link href={policyHref} className="text-primary underline hover:no-underline">
                {t.more}
              </Link>
            </p>
          </div>

          {/* Reject and accept carry the same size and weight: refusing must be
              no harder than agreeing. */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => decide(false)}
              className="flex-1 sm:flex-none text-primary text-sm font-semibold uppercase tracking-[0.05em] px-6 py-3 rounded-xl border border-primary/25 hover:bg-primary/5 transition-colors"
            >
              {t.reject}
            </button>
            <button
              onClick={() => decide(true)}
              className="flex-1 sm:flex-none bg-primary text-white text-sm font-semibold uppercase tracking-[0.05em] px-6 py-3 rounded-xl hover:scale-[1.02] transition-transform"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
