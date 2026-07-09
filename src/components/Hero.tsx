import Image from "next/image";

const BOOKING_URL = "https://www.piearsta.lv/";

export default function Hero() {
  return (
    <section
      id="sakums"
      className="relative min-h-[88vh] flex items-center bg-surface overflow-hidden pt-10 pb-20 md:pt-44 md:pb-28"
    >
      {/* Decorative khaki orb */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-surface-container/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-primary/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
              Podoloģijas Klīnika Pārdaugava
            </p>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-primary leading-[1.05] tracking-[-0.02em] mb-6">
              Rūpes par
              <br />
              Jūsu pēdu veselību
            </h1>

            <p className="text-on-surface-variant text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Mūsu podoloģijas klīnikā apvienojam medicīnisko precizitāti ar
              iejūtīgu pieeju, lai katrs Jūsu solis būtu viegls un pārliecināts.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-primary/15 text-center"
              >
                Pieteikties vizītei
              </a>
              <a
                href="#pakalpojumi"
                className="text-primary text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors duration-200 text-center"
              >
                Apskatīt pakalpojumus
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-tl-[3rem] rounded-tr-xl rounded-bl-xl rounded-br-[3rem] overflow-hidden relative shadow-xl shadow-primary/10">
              <Image
                src="/images/hero.jpg"
                alt="Podoloģijas klīnika"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
