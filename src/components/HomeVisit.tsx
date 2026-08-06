import { dict, type Lang } from "@/i18n/dictionaries";

const PHONE = "+37125455994";
const PHONE_DISPLAY = "+371 25 455 994";

export default function HomeVisit({ lang }: { lang: Lang }) {
  const t = dict[lang].homeVisit;
  return (
    <section id="majas-vizites" className="bg-surface-container-low py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-tl-[2.5rem] rounded-tr-xl rounded-bl-xl rounded-br-[2.5rem] border border-primary/15 bg-surface-container-lowest p-8 sm:p-10 md:p-14">
          {/* Decorative khaki orb */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1.3fr_auto] gap-10 md:gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-block bg-secondary-container/50 text-primary text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5">
                {t.badge}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
                {t.title}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mb-6">
                {t.desc}
              </p>

              <p className="text-on-surface font-semibold text-sm mb-3">
                {t.suitableTitle}
              </p>
              <ul className="space-y-2">
                {t.suitable.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-on-surface-variant text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col gap-4 md:items-end md:text-right">
              <div className="rounded-2xl bg-secondary-container/40 px-8 py-6 text-center">
                <p className="text-on-surface-variant text-xs uppercase tracking-[0.15em] mb-1">
                  {t.priceLabel}
                </p>
                <p className="font-heading text-5xl text-primary leading-none">{t.price}</p>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold uppercase tracking-[0.05em] px-7 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-primary/15 w-full md:w-auto"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {t.cta}
              </a>
              <p className="text-on-surface-variant text-sm">
                {PHONE_DISPLAY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
