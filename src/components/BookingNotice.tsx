import { dict, type Lang } from "@/i18n/dictionaries";
import { ONLINE_BOOKING_AVAILABLE, PHONE, PHONE_DISPLAY } from "@/lib/site";

export default function BookingNotice({ lang }: { lang: Lang }) {
  if (ONLINE_BOOKING_AVAILABLE) return null;

  const t = dict[lang].bookingNotice;

  return (
    <aside
      aria-labelledby="booking-notice-title"
      className="mb-10 rounded-2xl border border-primary/25 bg-surface-container-lowest p-5 shadow-sm sm:p-6 md:mt-6 md:mb-12"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <svg
          aria-hidden="true"
          className="mt-0.5 h-6 w-6 shrink-0 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 11v6m0-10v.01" />
        </svg>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div>
              <h2 id="booking-notice-title" className="text-base font-semibold leading-snug text-on-surface sm:text-lg">
                {t.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                {t.message}
              </p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-3 text-base font-semibold whitespace-nowrap text-white transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <details className="mt-4 text-sm">
            <summary className="w-fit cursor-pointer rounded-sm text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {t.detailsLabel}
            </summary>
            <div className="mt-3 max-w-3xl space-y-3 leading-relaxed text-on-surface-variant">
              <p>{t.reason}</p>
              <p>{t.restoration}</p>
              <p>{t.thanks}</p>
              <a
                href="https://cert.gov.lv/lv/2026/10/saistiba-ar-globali-atklatam-php-ievainojamibam-latvija-ievies-preventivus-pasakumus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {t.source}
              </a>
            </div>
          </details>
        </div>
      </div>
    </aside>
  );
}
