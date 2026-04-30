import Image from "next/image";

const BOOKING_URL = "https://www.piearsta.lv/";

export default function Hero() {
  return (
    <section
      id="sakums"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Podoloģijas klīnika"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,224,249,0.1),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <p className="text-secondary-container/80 text-sm font-semibold uppercase tracking-[0.15em] mb-6">
          Podoloģijas Klīnika Pārdaugava
        </p>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] tracking-[-0.02em] mb-6">
          Rūpes par
          <br />
          jūsu pēdu veselību
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Modernā podoloģijas klīnikā apvienojam medicīnisko precizitāti ar
          iejūtīgu pieeju, lai katrs jūsu solis būtu viegls un pārliecināts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-secondary-container to-secondary-container/90 text-primary text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-black/10"
          >
            Pieteikties vizītei
          </a>
          <a
            href="#pakalpojumi"
            className="w-full sm:w-auto text-white/80 hover:text-white text-sm font-medium px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-200 text-center"
          >
            Apskatīt pakalpojumus
          </a>
        </div>
      </div>

      {/* Bottom fade into surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
