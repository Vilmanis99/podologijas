import type { Metadata } from "next";
import Link from "next/link";
import PromoStrip from "@/components/PromoStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privātuma politika | Podoloģijas Klīnika Pārdaugava",
  description:
    "Podoloģijas Klīnika Pārdaugava (SIA “AK Podo”) privātuma politika un informācija par personas datu apstrādi saskaņā ar VDAR.",
};

const UPDATED = "2026. gada 13. jūlijs";

export default function PrivacyPolicy() {
  return (
    <>
      <PromoStrip lang="lv" />
      <Header lang="lv" />

      <main className="bg-surface py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Datu aizsardzība
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Privātuma politika
          </h1>
          <p className="text-on-surface-variant text-sm mb-12">
            Pēdējo reizi atjaunināta: {UPDATED}
          </p>

          <div className="space-y-10 text-on-surface-variant text-base leading-[1.7]">
            <section>
              <p>
                Šī privātuma politika apraksta, kā Podoloģijas Klīnika Pārdaugava
                apstrādā fizisko personu (pacientu, mājaslapas apmeklētāju un
                pakalpojumu pieteicēju) personas datus saskaņā ar Eiropas
                Parlamenta un Padomes Regulu (ES) 2016/679 (Vispārīgā datu
                aizsardzības regula, turpmāk — VDAR) un Latvijas Republikas
                normatīvajiem aktiem.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                1. Pārzinis
              </h2>
              <p className="mb-3">
                Jūsu personas datu pārzinis ir:
              </p>
              <div className="rounded-2xl border border-primary/15 bg-surface-container-low p-5 text-sm space-y-1 text-on-surface">
                <p className="font-semibold">SIA &ldquo;AK Podo&rdquo;</p>
                <p>Reģistrācijas Nr. 40203720722</p>
                <p>Juridiskā adrese: Zentenes iela 22-60, Rīga, LV-1069</p>
                <p>Klīnikas adrese: TC &ldquo;Imanta&rdquo; – K3, Kurzemes prospekts 3, Rīga</p>
                <p>
                  E-pasts:{" "}
                  <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                    info@podologijasklinika.lv
                  </a>
                </p>
                <p>
                  Tālrunis:{" "}
                  <a href="tel:+37125455994" className="text-primary hover:underline">
                    +371 25 455 994
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                2. Kādus personas datus mēs apstrādājam
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Identifikācijas dati</strong> — vārds, uzvārds.
                </li>
                <li>
                  <strong className="text-on-surface">Kontaktinformācija</strong> — tālruņa numurs, e-pasta adrese.
                </li>
                <li>
                  <strong className="text-on-surface">Veselības dati (īpašu kategoriju dati)</strong> —
                  informācija par pēdu un nagu veselības stāvokli, sūdzībām,
                  diagnozi un ārstēšanas gaitu, kas nepieciešama podoloģijas
                  pakalpojuma sniegšanai.
                </li>
                <li>
                  <strong className="text-on-surface">Pieraksta un vizīšu dati</strong> — vizītes datums,
                  laiks, izvēlētais pakalpojums.
                </li>
                <li>
                  <strong className="text-on-surface">Norēķinu dati</strong> — informācija, kas saistīta
                  ar samaksu par pakalpojumiem.
                </li>
                <li>
                  <strong className="text-on-surface">Tehniskie dati</strong> — sīkdatnes un ar mājaslapas
                  lietošanu saistīta informācija (skatīt sadaļu &ldquo;Sīkdatnes&rdquo;).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                3. Apstrādes nolūki un tiesiskais pamats
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Podoloģijas pakalpojumu sniegšana</strong> — līguma
                  ar Jums izpilde (VDAR 6. panta 1. punkta &ldquo;b&rdquo; apakšpunkts).
                  Veselības datu apstrāde notiek, lai nodrošinātu veselības aprūpi
                  (VDAR 9. panta 2. punkta &ldquo;h&rdquo; apakšpunkts).
                </li>
                <li>
                  <strong className="text-on-surface">Vizīšu pieraksts un saziņa ar pacientu</strong> —
                  līguma izpilde un pasākumu veikšana pēc Jūsu pieprasījuma.
                </li>
                <li>
                  <strong className="text-on-surface">Grāmatvedības un normatīvo aktu prasību izpilde</strong> —
                  juridisks pienākums (VDAR 6. panta 1. punkta &ldquo;c&rdquo; apakšpunkts).
                </li>
                <li>
                  <strong className="text-on-surface">Mājaslapas uzturēšana un uzlabošana</strong> — mūsu
                  leģitīmās intereses vai Jūsu piekrišana (sīkdatņu gadījumā).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                4. Personas datu saņēmēji
              </h2>
              <p className="mb-3">
                Jūsu datus var apstrādāt tikai tam pilnvarotas personas. Datus
                varam nodot šādām saņēmēju kategorijām:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>tiešsaistes pieraksta sistēmas pakalpojuma sniedzējam;</li>
                <li>grāmatvedības pakalpojumu sniedzējiem;</li>
                <li>IT un mājaslapas uzturēšanas pakalpojumu sniedzējiem;</li>
                <li>
                  valsts un pašvaldību iestādēm normatīvajos aktos noteiktajos
                  gadījumos.
                </li>
              </ul>
              <p className="mt-3">
                Personas dati netiek nodoti ārpus Eiropas Savienības un Eiropas
                Ekonomikas zonas.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                5. Datu glabāšanas termiņš
              </h2>
              <p>
                Personas datus glabājam tik ilgi, cik nepieciešams attiecīgā
                apstrādes nolūka sasniegšanai vai cik to nosaka normatīvie akti.
                Medicīniskā rakstura dokumentāciju glabājam normatīvajos aktos
                noteiktajā termiņā, savukārt grāmatvedības dokumentus — saskaņā ar
                grāmatvedību regulējošo normatīvo aktu prasībām. Pēc glabāšanas
                termiņa beigām dati tiek droši dzēsti vai anonimizēti.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                6. Jūsu tiesības
              </h2>
              <p className="mb-3">Saistībā ar savu personas datu apstrādi Jums ir tiesības:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>piekļūt saviem personas datiem un saņemt to kopiju;</li>
                <li>pieprasīt neprecīzu vai nepilnīgu datu labošanu;</li>
                <li>pieprasīt datu dzēšanu (&ldquo;tiesības tikt aizmirstam&rdquo;), ciktāl to pieļauj normatīvie akti;</li>
                <li>pieprasīt apstrādes ierobežošanu;</li>
                <li>iebilst pret datu apstrādi;</li>
                <li>izmantot tiesības uz datu pārnesamību;</li>
                <li>atsaukt savu piekrišanu, ja apstrāde pamatota ar piekrišanu;</li>
                <li>
                  iesniegt sūdzību uzraudzības iestādei — Datu valsts inspekcijai.
                </li>
              </ul>
              <div className="rounded-2xl border border-primary/15 bg-surface-container-low p-5 mt-4 text-sm space-y-1 text-on-surface">
                <p className="font-semibold">Datu valsts inspekcija</p>
                <p>Elijas iela 17, Rīga, LV-1050</p>
                <p>
                  E-pasts:{" "}
                  <a href="mailto:pasts@dvi.gov.lv" className="text-primary hover:underline">
                    pasts@dvi.gov.lv
                  </a>
                </p>
                <p>
                  Mājaslapa:{" "}
                  <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.dvi.gov.lv
                  </a>
                </p>
              </div>
              <p className="mt-4">
                Lai īstenotu savas tiesības, lūdzam sazināties ar mums, izmantojot
                sadaļā &ldquo;Pārzinis&rdquo; norādīto kontaktinformāciju.
              </p>
            </section>

            <section id="sikdatnes" className="scroll-mt-28">
              <h2 className="font-heading text-2xl text-primary mb-3">
                7. Sīkdatnes
              </h2>
              <p className="mb-3">
                Sīkdatnes ir nelielas teksta datnes, ko Jūsu ierīcē saglabā
                mājaslapa, lai nodrošinātu tās darbību un uzlabotu lietošanas
                pieredzi. Mūsu mājaslapa izmanto:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Tehniski nepieciešamās sīkdatnes</strong> — nodrošina
                  mājaslapas pamatdarbību un drošību. Tās ir obligātas, un to
                  izmantošanai piekrišana nav nepieciešama.
                </li>
                <li>
                  <strong className="text-on-surface">Analītiskās sīkdatnes</strong> — palīdz saprast, kā
                  apmeklētāji izmanto mājaslapu, lai to uzlabotu. Tās tiek
                  izmantotas tikai ar Jūsu piekrišanu.
                </li>
              </ul>
              <p className="mt-3">
                Sīkdatnes varat pārvaldīt vai dzēst sava interneta pārlūka
                iestatījumos. Atsevišķu sīkdatņu atspējošana var ietekmēt mājaslapas
                funkcionalitāti.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                8. Politikas izmaiņas
              </h2>
              <p>
                Mēs varam laiku pa laikam atjaunināt šo privātuma politiku.
                Aktuālā versija vienmēr ir pieejama šajā mājaslapā, norādot pēdējās
                atjaunināšanas datumu.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                9. Kontaktinformācija
              </h2>
              <p>
                Ja Jums ir jautājumi par personas datu apstrādi vai vēlaties
                īstenot savas tiesības, lūdzam sazināties ar mums pa e-pastu{" "}
                <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                  info@podologijasklinika.lv
                </a>{" "}
                vai pa tālruni{" "}
                <a href="tel:+37125455994" className="text-primary hover:underline">
                  +371 25 455 994
                </a>
                .
              </p>
            </section>
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
