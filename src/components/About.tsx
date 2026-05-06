import Image from "next/image";

export default function About() {
  return (
    <section id="par-mums" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Par mums
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.1] mb-6">
              Podoloģijas prakse, kurai
              <br />
              varat uzticēties
            </h2>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-6">
              Mūsu klīnikā strādā sertificēti podoloģijas speciālisti ar ilggadēju
              pieredzi pēdu veselības aprūpē. Mēs izmantojam mūsdienīgas tehnoloģijas
              un individuālu pieeju katram pacientam.
            </p>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-6">
              Neatkarīgi no tā, vai jums nepieciešama profilaktiska aprūpe vai
              specifiska ārstēšana, mēs esam šeit, lai palīdzētu jums spert
              katru soli ar pārliecību.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-on-surface font-medium">Pieņemam akūti</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/5] rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl rounded-br-[2rem] overflow-hidden relative">
              <Image
                src="/images/about.jpg"
                alt="Mūsu klīnika"
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
