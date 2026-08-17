import Image from "next/image";
import { dict, type Lang } from "@/i18n/dictionaries";

export default function About({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  return (
    <section id="par-mums" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              {t.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.1] mb-6">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h2>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-6">
              {t.p1}
            </p>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-6">
              {t.p2}
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span>
                <span className="block text-base font-semibold text-primary leading-tight">
                  {t.acuteTitle}
                </span>
                <span className="block text-sm text-on-surface-variant leading-tight">
                  {t.acuteSub}
                </span>
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/5] rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl rounded-br-[2rem] overflow-hidden relative">
              <Image
                src="/images/about-clinic.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
