import type { Metadata } from "next";
import Link from "next/link";
import PromoStrip from "@/components/PromoStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Права и обязанности пациента | Подологическая клиника Пардаугава",
  description:
    "Подологическая клиника Пардаугава — права и обязанности пациента, информированное согласие, порядок отмены визита.",
  alternates: {
    canonical: "/ru/pacienta-tiesibas-un-pienakumi",
    languages: { lv: "/pacienta-tiesibas-un-pienakumi", ru: "/ru/pacienta-tiesibas-un-pienakumi" },
  },
};

const UPDATED = "13 июля 2026 года";

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
      <PromoStrip lang="ru" />
      <Header lang="ru" />

      <main className="bg-surface py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Пациентам
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Права и обязанности пациента
          </h1>
          <p className="text-on-surface-variant text-sm mb-12">
            Последнее обновление: {UPDATED}
          </p>

          <div className="space-y-10 text-on-surface-variant text-base leading-[1.7]">
            <p>
              Права и обязанности пациента обеспечиваются в соответствии с Законом о правах пациентов и другими нормативными актами Латвийской Республики.
            </p>

            <Section title="Права пациента">
              <p className="font-semibold text-on-surface">Право на уход и информацию</p>
              <p>
                Пациент имеет право на профессиональный, качественный и уважительный уход, а также на понятную информацию о состоянии своего здоровья и предлагаемом лечении.
              </p>

              <p className="font-semibold text-on-surface mt-4">Информированное согласие</p>
              <p>
                Пациент может дать согласие на процедуру или отказаться от неё. Перед лечением пациент получает информацию о:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">цели лечения</strong> — улучшить здоровье стоп и ногтей, уменьшить боль и дискомфорт;
                </li>
                <li>
                  <strong className="text-on-surface">возможных рисках</strong> — чувствительность кожи, покраснение, кровотечение, риск инфекции, необходимость повторной процедуры;
                </li>
                <li>
                  <strong className="text-on-surface">последствиях в случае отказа</strong> — риск ухудшения состояния здоровья или развития осложнений;
                </li>
                <li>
                  <strong className="text-on-surface">применяемых методах</strong> и ходе процедуры.
                </li>
              </ul>

              <p className="font-semibold text-on-surface mt-4">Доступ к документам</p>
              <p>
                Пациент может ознакомиться со своей медицинской документацией, а также получить её выписки и копии.
              </p>

              <p className="font-semibold text-on-surface mt-4">Подача жалоб</p>
              <p>
                В случае неудовлетворённости пациент может подать жалобу руководству учреждения или в компетентные органы.
              </p>

              <p className="font-semibold text-on-surface mt-4">Фото-, видео- и аудиозаписи</p>
              <p>
                Любые фото-, видео- или аудиозаписи в помещениях учреждения допускаются только с согласия медицинского персонала.
              </p>
            </Section>

            <Section title="Обязанности пациента">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  предоставлять достоверную информацию о состоянии своего здоровья, аллергиях и принимаемых лекарствах;
                </li>
                <li>соблюдать требования гигиены и приходить на визит в назначенное время;</li>
                <li>
                  сообщать учреждению об осложнениях после процедуры в ближайшие дни;
                </li>
                <li>
                  с уважением относиться к персоналу и своевременно оплачивать полученные услуги.
                </li>
              </ul>
            </Section>

            <Section title="Отмена визита">
              <p>
                Об отмене или переносе визита просим сообщать не позднее чем за 24 часа до запланированного времени — по телефону, электронной почте или в социальных сетях. Если пациент не приходит и заранее не сообщил об этом, учреждение вправе потребовать предоплату за следующий визит.
              </p>
            </Section>

            <Section title="Контактная информация">
              <p>
                При наличии вопросов или жалоб просим связаться с нами по электронной почте{" "}
                <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                  info@podologijasklinika.lv
                </a>{" "}
                или по телефону{" "}
                <a href="tel:+37125455994" className="text-primary hover:underline">
                  +371 25 455 994
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-14 pt-8 border-t border-on-surface-variant/15">
            <Link
              href="/ru"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Вернуться на главную
            </Link>
          </div>
        </article>
      </main>

      <Footer lang="ru" />
    </>
  );
}
