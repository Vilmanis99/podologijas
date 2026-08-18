import type { Metadata } from "next";
import Link from "next/link";
import PromoStrip from "@/components/PromoStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pacienta tiesības un pienākumi | Podoloģijas Klīnika Pārdaugava",
  description:
    "Podoloģijas Klīnika Pārdaugava — pacienta tiesības un pienākumi, informētā piekrišana, vizītes atcelšanas kārtība.",
  alternates: {
    canonical: "/pacienta-tiesibas-un-pienakumi",
    languages: { lv: "/pacienta-tiesibas-un-pienakumi", ru: "/ru/pacienta-tiesibas-un-pienakumi" },
  },
};

const UPDATED = "2026. gada 13. jūlijs";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-primary mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default function PatientRights() {
  return (
    <>
      <PromoStrip lang="lv" />
      <Header lang="lv" />

      <main className="bg-surface py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Pacientiem
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Pacienta tiesības un pienākumi
          </h1>
          <p className="text-on-surface-variant text-sm mb-12">
            Pēdējo reizi atjaunināta: {UPDATED}
          </p>

          <div className="space-y-10 text-on-surface-variant text-base leading-[1.7]">
            <p>
              Pacienta tiesības un pienākumi tiek nodrošināti saskaņā ar Pacientu
              tiesību likumu un citiem Latvijas Republikas normatīvajiem aktiem.
            </p>

            <Section title="Pacienta tiesības">
              <p className="font-semibold text-on-surface">Tiesības uz aprūpi un informāciju</p>
              <p>
                Pacients ir tiesīgs saņemt profesionālu, kvalitatīvu un cieņpilnu
                aprūpi, kā arī saprotamu informāciju par savu veselības stāvokli un
                piedāvāto ārstēšanu.
              </p>

              <p className="font-semibold text-on-surface mt-4">Informētā piekrišana</p>
              <p>
                Pacients var piekrist procedūrai vai atteikties no tās. Pirms
                ārstēšanas pacients saņem informāciju par:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">ārstniecības mērķi</strong> — uzlabot pēdu un nagu
                  veselību, mazināt sāpes un diskomfortu;
                </li>
                <li>
                  <strong className="text-on-surface">iespējamiem riskiem</strong> — ādas jūtīgums,
                  apsārtums, asiņošana, infekcijas risks, atkārtotas procedūras
                  nepieciešamība;
                </li>
                <li>
                  <strong className="text-on-surface">sekām atteikuma gadījumā</strong> — veselības
                  stāvokļa pasliktināšanās vai komplikāciju risks;
                </li>
                <li>
                  <strong className="text-on-surface">izmantotajām metodēm</strong> un procedūras gaitu.
                </li>
              </ul>

              <p className="font-semibold text-on-surface mt-4">Piekļuve dokumentiem</p>
              <p>
                Pacients var iepazīties ar savu medicīnisko dokumentāciju un saņemt
                tās izrakstus un kopijas.
              </p>

              <p className="font-semibold text-on-surface mt-4">Sūdzību iesniegšana</p>
              <p>
                Neapmierinātības gadījumā pacients var iesniegt sūdzību iestādes
                vadībai vai atbildīgajām institūcijām.
              </p>

              <p className="font-semibold text-on-surface mt-4">Foto, video un audio ieraksti</p>
              <p>
                Jebkādi foto, video vai audio ieraksti iestādes telpās pieļaujami
                tikai ar ārstniecības personāla piekrišanu.
              </p>
            </Section>

            <Section title="Pacienta pienākumi">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  sniegt patiesu informāciju par savu veselības stāvokli, alerģijām
                  un lietotajiem medikamentiem;
                </li>
                <li>ievērot higiēnas prasības un ierasties uz vizīti norunātajā laikā;</li>
                <li>
                  informēt iestādi par komplikācijām pēc procedūras tuvāko dienu
                  laikā;
                </li>
                <li>
                  ar cieņu izturēties pret personālu un savlaicīgi samaksāt par
                  saņemtajiem pakalpojumiem.
                </li>
              </ul>
            </Section>

            <Section title="Vizītes atcelšana">
              <p>
                Par vizītes atcelšanu vai pārcelšanu lūdzam paziņot ne vēlāk kā 24
                stundas pirms plānotā laika — pa tālruni, e-pastu vai sociālajos
                tīklos. Ja pacients neierodas un par to nav savlaicīgi paziņojis,
                iestāde ir tiesīga pieprasīt priekšapmaksu par nākamo vizīti.
              </p>
            </Section>

            <Section title="Kontaktinformācija">
              <p>
                Jautājumu vai sūdzību gadījumā lūdzam sazināties ar mums pa e-pastu{" "}
                <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                  info@podologijasklinika.lv
                </a>{" "}
                vai pa tālruni{" "}
                <a href="tel:+37125455994" className="text-primary hover:underline">
                  +371 25 455 994
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-14 pt-8 border-t border-on-surface-variant/15">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Atpakaļ uz sākumu
            </Link>
          </div>
        </article>
      </main>

      <Footer lang="lv" />
    </>
  );
}
