export default function Vakances() {
  return (
    <section id="vakances" className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Vakances
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.1] mb-6">
              Pievienojies
              <br />
              mūsu komandai
            </h2>
            <p className="text-on-surface-variant text-base leading-[1.6] mb-4">
              Meklējam sertificētus podologus, kas vēlas augt profesionāli draudzīgā
              komandā mūsdienīgi aprīkotā klīnikā Pārdaugavā.
            </p>
            <p className="text-on-surface-variant text-base leading-[1.6]">
              Piedāvājam stabilu pacientu plūsmu, kvalifikācijas paaugstināšanas
              iespējas un atbalstošu darba vidi.
            </p>

            <a
              href="mailto:info@podologijasklinika.lv?subject=Vakance%20-%20pieteikums"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-white text-sm font-semibold uppercase tracking-[0.05em] px-7 py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200"
            >
              Sūtīt pieteikumu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>

          <div className="bg-surface-container-low rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl rounded-br-[2rem] p-8 md:p-10">
            <h3 className="font-heading text-2xl text-primary mb-6">
              Ko mēs piedāvājam
            </h3>
            <ul className="space-y-4">
              {[
                "Konkurētspējīgu atalgojumu",
                "Modernu darba vidi un instrumentāriju",
                "Stabilu pacientu plūsmu",
                "Apmācības un kvalifikācijas paaugstināšanu",
                "Draudzīgu, atbalstošu komandu",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-on-surface-variant">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
