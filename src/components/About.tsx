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
              <br className="hidden sm:block" />
              varat uzticēties
            </h2>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-6">
              Mūsu klīnikā strādā sertificēti podoloģijas speciālisti ar ilggadēju
              pieredzi pēdu veselības aprūpē. Mēs izmantojam mūsdienīgas tehnoloģijas
              un individuālu pieeju katram pacientam.
            </p>
            <p className="text-on-surface-variant text-base leading-[1.6]">
              Neatkarīgi no tā, vai jums nepieciešama profilaktiska aprūpe vai
              specifiska ārstēšana, mēs esam šeit, lai palīdzētu jums spert
              katru soli ar pārliecību.
            </p>
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 md:mt-20">
          {[
            { value: "10+", label: "Gadu pieredze" },
            { value: "5000+", label: "Apmierināti pacienti" },
            { value: "15+", label: "Pakalpojumi" },
            { value: "4.9", label: "Vidējais vērtējums" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-container-low rounded-2xl p-5 sm:p-6 text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-on-surface-variant text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
