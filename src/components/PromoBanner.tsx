import { dict, type Lang } from "@/i18n/dictionaries";
import { BOOKING_URL } from "@/lib/site";

export default function PromoBanner({ lang }: { lang: Lang }) {
  const t = dict[lang].promoBanner;
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-tl-[2.5rem] rounded-tr-xl rounded-bl-xl rounded-br-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary-container p-10 md:p-14">
          {/* Decorative blur orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary-container/5 blur-3xl" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary-container/15 text-secondary-container text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5">
                {t.badge}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4">
                {t.titleLine1}
                <br />
                <span className="text-secondary-container">{t.titleLine2}</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                {t.descPre}{" "}
                <span className="text-white font-semibold">{t.descHours}</span>
                {t.descPost}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary text-sm font-semibold uppercase tracking-[0.05em] px-7 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-black/10"
              >
                {t.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="tel:+37125455994"
                className="text-white/70 hover:text-white text-sm transition-colors text-center md:text-right"
              >
                {t.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
