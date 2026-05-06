export default function Contacts() {
  return (
    <section id="kontakti" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Kontakti
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary">
            Sazinieties ar mums
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-base text-on-surface mb-1">Adrese</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  TC &ldquo;Imanta&rdquo; – K3<br />
                  Kurzemes prospekts 3<br />
                  Rīga, Imanta
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-base text-on-surface mb-1">Tālrunis</h4>
                <a href="tel:+37125455994" className="text-on-surface-variant hover:text-primary text-sm transition-colors">
                  +371 25 455 994
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-base text-on-surface mb-1">E-pasts</h4>
                <a href="mailto:info@podologijasklinika.lv" className="text-on-surface-variant hover:text-primary text-sm transition-colors break-all">
                  info@podologijasklinika.lv
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-base text-on-surface mb-1">Darba laiks</h4>
                <div className="text-on-surface-variant text-sm leading-relaxed">
                  <p>P. – Pk. 9:00 – 19:00</p>
                  <p>Sestd. 10:00 – 17:00</p>
                  <p>Svētd. — slēgts</p>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9-1.5h12m-12 0a1.5 1.5 0 01-1.5-1.5V8.25a3 3 0 013-3h7.5a3 3 0 013 3v8.25m-13.5 0h13.5m0 0a1.5 1.5 0 001.5-1.5v-6a3 3 0 00-3-3h-1.5m-12 9V8.25m13.5 9h.008v.008h-.008v-.008zm-9 0h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-base text-on-surface mb-1">Sabiedriskais transports</h4>
                <div className="text-on-surface-variant text-sm leading-relaxed space-y-1">
                  <p>
                    <span className="text-on-surface font-medium">Pieturas:</span> &ldquo;Progresa iela&rdquo;,
                    &ldquo;Kurzemes prospekts&rdquo;, &ldquo;Dammes iela&rdquo;,
                    &ldquo;Observatorijas iela&rdquo;, &ldquo;Jūrmalas gatve&rdquo;
                  </p>
                  <p>
                    <span className="text-on-surface font-medium">Tramvajs:</span> Nr. 1
                  </p>
                  <p>
                    <span className="text-on-surface font-medium">Autobuss:</span> Nr. 36, Nr. 37, Nr. 41
                  </p>
                  <p>
                    <span className="text-on-surface font-medium">Autobuss Nr. 46:</span> &ldquo;Observatorijas iela&rdquo;
                  </p>
                  <p>
                    <span className="text-on-surface font-medium">Autobuss Nr. 21:</span> &ldquo;Observatorijas iela&rdquo;
                  </p>
                  <p>
                    <span className="text-on-surface font-medium">Autobuss Nr. 4:</span> &ldquo;Kurzemes prospekts&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden min-h-[400px] md:min-h-full">
            <iframe
              title="Podoloģijas Klīnika Pārdaugava karte"
              src="https://www.google.com/maps?q=Kurzemes+prospekts+3,+R%C4%ABga&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
