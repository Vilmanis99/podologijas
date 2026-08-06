import type { Metadata } from "next";
import Link from "next/link";
import PromoStrip from "@/components/PromoStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Подологическая клиника Пардаугава",
  description:
    "Политика конфиденциальности Подологической клиники Пардаугава (SIA «AK Podo») и информация об обработке персональных данных в соответствии с GDPR.",
};

const UPDATED = "13 июля 2026 года";

export default function PrivacyPolicy() {
  return (
    <>
      <PromoStrip lang="ru" />
      <Header lang="ru" />

      <main className="bg-surface py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-6">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Защита данных
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-on-surface-variant text-sm mb-12">
            Последнее обновление: {UPDATED}
          </p>

          <div className="space-y-10 text-on-surface-variant text-base leading-[1.7]">
            <section>
              <p>
                Настоящая политика конфиденциальности описывает, как Подологическая клиника Пардаугава обрабатывает персональные данные физических лиц (пациентов, посетителей сайта и лиц, записывающихся на услуги) в соответствии с Регламентом (ЕС) 2016/679 Европейского парламента и Совета (Общий регламент по защите данных, далее — GDPR) и нормативными актами Латвийской Республики.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                1. Оператор данных
              </h2>
              <p className="mb-3">
                Оператором Ваших персональных данных является:
              </p>
              <div className="rounded-2xl border border-primary/15 bg-surface-container-low p-5 text-sm space-y-1 text-on-surface">
                <p className="font-semibold">SIA «AK Podo»</p>
                <p>Регистрационный номер 40203720722</p>
                <p>Юридический адрес: Zentenes iela 22-60, Rīga, LV-1069</p>
                <p>Адрес клиники: ТЦ «Imanta» – K3, Kurzemes prospekts 3, Rīga</p>
                <p>
                  Эл. почта:{" "}
                  <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                    info@podologijasklinika.lv
                  </a>
                </p>
                <p>
                  Телефон:{" "}
                  <a href="tel:+37125455994" className="text-primary hover:underline">
                    +371 25 455 994
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                2. Какие персональные данные мы обрабатываем
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Идентификационные данные</strong> — имя, фамилия.
                </li>
                <li>
                  <strong className="text-on-surface">Контактная информация</strong> — номер телефона, адрес электронной почты.
                </li>
                <li>
                  <strong className="text-on-surface">Данные о здоровье (особые категории данных)</strong> — информация о состоянии здоровья стоп и ногтей, жалобах, диагнозе и ходе лечения, необходимая для оказания подологической услуги.
                </li>
                <li>
                  <strong className="text-on-surface">Данные о записи и визитах</strong> — дата и время визита, выбранная услуга.
                </li>
                <li>
                  <strong className="text-on-surface">Расчётные данные</strong> — информация, связанная с оплатой услуг.
                </li>
                <li>
                  <strong className="text-on-surface">Технические данные</strong> — файлы cookie и информация, связанная с использованием сайта (см. раздел «Файлы cookie»).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                3. Цели обработки и правовое основание
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Оказание подологических услуг</strong> — исполнение договора с Вами (пункт «b» части 1 статьи 6 GDPR). Обработка данных о здоровье осуществляется в целях обеспечения медицинского обслуживания (пункт «h» части 2 статьи 9 GDPR).
                </li>
                <li>
                  <strong className="text-on-surface">Запись на визиты и общение с пациентом</strong> — исполнение договора и принятие мер по Вашему запросу.
                </li>
                <li>
                  <strong className="text-on-surface">Ведение бухгалтерского учёта и выполнение требований нормативных актов</strong> — юридическая обязанность (пункт «c» части 1 статьи 6 GDPR).
                </li>
                <li>
                  <strong className="text-on-surface">Поддержка и улучшение работы сайта</strong> — наши законные интересы или Ваше согласие (в случае файлов cookie).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                4. Получатели персональных данных
              </h2>
              <p className="mb-3">
                Ваши данные могут обрабатывать только уполномоченные на это лица. Мы можем передавать данные следующим категориям получателей:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>поставщику услуг системы онлайн-записи;</li>
                <li>поставщикам бухгалтерских услуг;</li>
                <li>поставщикам услуг ИТ и технического обслуживания сайта;</li>
                <li>
                  государственным и муниципальным учреждениям в случаях, предусмотренных нормативными актами.
                </li>
              </ul>
              <p className="mt-3">
                Персональные данные не передаются за пределы Европейского союза и Европейской экономической зоны.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                5. Срок хранения данных
              </h2>
              <p>
                Мы храним персональные данные столько времени, сколько необходимо для достижения соответствующей цели обработки или сколько предусмотрено нормативными актами. Медицинскую документацию мы храним в течение срока, установленного нормативными актами, а бухгалтерские документы — в соответствии с требованиями нормативных актов, регулирующих бухгалтерский учёт. По истечении срока хранения данные безопасно удаляются или анонимизируются.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                6. Ваши права
              </h2>
              <p className="mb-3">В связи с обработкой Ваших персональных данных Вы имеете право:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>получить доступ к своим персональным данным и получить их копию;</li>
                <li>требовать исправления неточных или неполных данных;</li>
                <li>требовать удаления данных («право быть забытым») в той мере, в какой это допускают нормативные акты;</li>
                <li>требовать ограничения обработки;</li>
                <li>возражать против обработки данных;</li>
                <li>воспользоваться правом на переносимость данных;</li>
                <li>отозвать своё согласие, если обработка основана на согласии;</li>
                <li>
                  подать жалобу в надзорный орган — Государственную инспекцию данных.
                </li>
              </ul>
              <div className="rounded-2xl border border-primary/15 bg-surface-container-low p-5 mt-4 text-sm space-y-1 text-on-surface">
                <p className="font-semibold">Государственная инспекция данных</p>
                <p>Elijas iela 17, Rīga, LV-1050</p>
                <p>
                  Эл. почта:{" "}
                  <a href="mailto:pasts@dvi.gov.lv" className="text-primary hover:underline">
                    pasts@dvi.gov.lv
                  </a>
                </p>
                <p>
                  Веб-сайт:{" "}
                  <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.dvi.gov.lv
                  </a>
                </p>
              </div>
              <p className="mt-4">
                Для реализации своих прав просим связаться с нами, используя контактную информацию, указанную в разделе «Оператор данных».
              </p>
            </section>

            <section id="sikdatnes" className="scroll-mt-28">
              <h2 className="font-heading text-2xl text-primary mb-3">
                7. Файлы cookie
              </h2>
              <p className="mb-3">
                Файлы cookie — это небольшие текстовые файлы, которые сайт сохраняет на Вашем устройстве для обеспечения его работы и улучшения опыта использования. Наш сайт использует:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Технически необходимые файлы cookie</strong> — обеспечивают базовую работу и безопасность сайта. Они являются обязательными, и для их использования согласие не требуется.
                </li>
                <li>
                  <strong className="text-on-surface">Аналитические файлы cookie</strong> — помогают понять, как посетители используют сайт, чтобы улучшать его. Они используются только с Вашего согласия.
                </li>
              </ul>
              <p className="mt-3">
                Вы можете управлять файлами cookie или удалять их в настройках своего интернет-браузера. Отключение части файлов cookie может повлиять на функциональность сайта.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                8. Изменения политики
              </h2>
              <p>
                Время от времени мы можем обновлять настоящую политику конфиденциальности. Актуальная версия всегда доступна на этом сайте с указанием даты последнего обновления.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-primary mb-3">
                9. Контактная информация
              </h2>
              <p>
                Если у Вас есть вопросы об обработке персональных данных или Вы желаете реализовать свои права, просим связаться с нами по электронной почте{" "}
                <a href="mailto:info@podologijasklinika.lv" className="text-primary hover:underline">
                  info@podologijasklinika.lv
                </a>{" "}
                или по телефону{" "}
                <a href="tel:+37125455994" className="text-primary hover:underline">
                  +371 25 455 994
                </a>
                .
              </p>
            </section>
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
