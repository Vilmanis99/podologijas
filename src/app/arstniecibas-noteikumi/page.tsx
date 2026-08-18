import type { Metadata } from "next";
import Link from "next/link";
import PromoStrip from "@/components/PromoStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ārstniecības iestādes nolikums | Podoloģijas Klīnika Pārdaugava",
  description:
    "Podoloģijas Klīnika Pārdaugava (SIA “AK Podo”) ārstniecības iestādes nolikums — darbības tiesiskais pamats, uzdevumi, pacientu uzņemšanas kārtība un kvalitātes nodrošināšana.",
  alternates: {
    canonical: "/arstniecibas-noteikumi",
    languages: { lv: "/arstniecibas-noteikumi", ru: "/ru/arstniecibas-noteikumi" },
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

export default function TreatmentRules() {
  return (
    <>
      <PromoStrip lang="lv" />
      <Header lang="lv" />

      <main className="bg-surface py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Ārstniecības iestāde
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Ārstniecības iestādes nolikums
          </h1>
          <p className="text-on-surface-variant text-sm mb-12">
            Spēkā no: {UPDATED}
          </p>

          <div className="space-y-10 text-on-surface-variant text-base leading-[1.7]">
            <Section title="1. Iestādes identifikācija un darbības tiesiskais pamats">
              <p>
                Ārstniecības iestādi uztur SIA &ldquo;AK Podo&rdquo; (reģistrācijas
                Nr. 40203720722, juridiskā adrese: Zentenes iela 22-60, Rīga,
                LV-1069). Iestādes darbības vieta: TC &ldquo;Imanta&rdquo; – K3,
                Kurzemes prospekts 3, Rīga, LV-1067. Kontakti:{" "}
                <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                  info@podologijasklinika.lv
                </a>
                ,{" "}
                <a href="tel:+37125455994" className="text-primary hover:underline">
                  +371 25 455 994
                </a>
                .
              </p>
              <p>
                Iestādes mērķis ir nodrošināt kvalitatīvus, drošus un pacientam
                pieejamus podoloģijas veselības aprūpes pakalpojumus. Darbība
                pamatojas uz Ārstniecības likumu, Pacientu tiesību likumu un
                citiem Latvijas Republikas normatīvajiem aktiem.
              </p>
            </Section>

            <Section title="2. Iestādes uzdevumi">
              <p>
                Iestāde sniedz podoloģijas un estētiskās pēdu un roku aprūpes
                pakalpojumus, veic pacientu izmeklēšanu, ārstēšanu, aprūpi un
                profilaksi. Iestāde nodrošina pacienta informēšanu par veselības
                stāvokli, ārstēšanas iespējām un iespējamiem riskiem, uztur
                speciālistu kvalifikāciju un veicina sabiedrības informētību par
                pēdu veselību.
              </p>
            </Section>

            <Section title="3. Ārstniecības personas un kompetence">
              <p>
                Pakalpojumus sniedz sertificēti podologi ar spēkā esošu
                sertifikātu un reģistrāciju ārstniecības personu reģistrā.
                Speciālisti atbild par drošu ārstēšanu, medicīniskās
                dokumentācijas aizpildīšanu, pacienta informēšanu un profesionālās
                ētikas ievērošanu, kā arī regulāri pilnveido savas zināšanas.
              </p>
            </Section>

            <Section title="4. Pacientu uzņemšanas un ārstniecības kārtība">
              <p>
                Pacientu uzņemšana notiek pēc iepriekšēja pieraksta — klātienē,
                telefoniski vai elektroniski. Pirms ārstniecības uzsākšanas
                ārstniecības persona veic veselības stāvokļa izvērtēšanu, ievāc
                anamnēzi un iegūst pacienta informētu piekrišanu. Sarežģītos
                gadījumos pacients tiek informēts par nepieciešamību vērsties
                augstāka līmeņa ārstniecības iestādē.
              </p>
            </Section>

            <Section title="5. Medicīniskā dokumentācija un konfidencialitāte">
              <p>
                Medicīniskā dokumentācija tiek veidota un glabāta saskaņā ar
                normatīvo aktu prasībām. Pacienta dati tiek apstrādāti tikai
                ārstniecības nolūkos, ievērojot Vispārīgo datu aizsardzības regulu
                un Fizisko personu datu apstrādes likumu. Pacienta informācija
                netiek izpausta trešajām personām bez tiesiska pamata. Sīkāka
                informācija pieejama{" "}
                <Link href="/privatuma-politika" className="text-primary hover:underline">
                  privātuma politikā
                </Link>
                .
              </p>
            </Section>

            <Section title="6. Kvalitātes un drošības nodrošināšana">
              <p>
                Iestāde ievēro higiēnas un darba drošības standartus. Instrumenti
                tiek sterilizēti atbilstoši normatīvo aktu prasībām. Pacientu
                sūdzības tiek izskatītas iekšējā kārtībā, un atbilde tiek sniegta
                saprātīgā termiņā saskaņā ar normatīvajiem aktiem.
              </p>
            </Section>

            <Section title="7. Neatliekamās medicīniskās palīdzības sniegšana">
              <p>
                Dzīvībai vai veselībai bīstamās situācijās tiek izsaukts
                Neatliekamās medicīniskās palīdzības dienests, zvanot uz 113.
                Iestādē pieejams pirmās palīdzības aprīkojums.
              </p>
            </Section>

            <Section title="8. Pakalpojumu apmaksa">
              <p>
                Apmaksa notiek atbilstoši cenrādim, kas pieejams mājaslapā un
                iestādē. Apmaksu iespējams veikt ar skaidru naudu, maksājumu karti
                vai bankas pārskaitījumu.
              </p>
            </Section>

            <Section title="9. Nobeiguma noteikumi">
              <p>
                Nolikumā neatrunātie jautājumi tiek risināti atbilstoši Latvijas
                Republikas normatīvajiem aktiem un profesionālajiem standartiem.
                Nolikums ir publisks dokuments, un tā grozījumus veic iestādes
                atbildīgās amatpersonas.
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
