import Image from "next/image";
import { dict, type Lang } from "@/i18n/dictionaries";

const BOOKING_URL = "https://www.piearsta.lv/";

type PersonKey = "anete" | "kristine" | "ieva" | "lasma" | "alona" | "roberts";

const people: { name: string; image: string; key: PersonKey; role: "roleP" | "roleM" | "roleT" }[] = [
  { name: "Anete Kuhta", image: "/images/specialist-anete.jpg", key: "anete", role: "roleP" },
  { name: "Kristīne Ozola", image: "/images/specialist-kristine.jpg", key: "kristine", role: "roleP" },
  { name: "Ieva Govša", image: "/images/specialist-ieva.jpg", key: "ieva", role: "roleP" },
  { name: "Lāsma Luksa", image: "/images/specialist-lasma.jpg", key: "lasma", role: "roleP" },
  { name: "Aļona Stambrovska", image: "/images/specialist-alona.jpg", key: "alona", role: "roleM" },
  { name: "Roberts Hrapunovs", image: "/images/specialist-roberts.jpg", key: "roberts", role: "roleT" },
];

export default function Specialists({ lang }: { lang: Lang }) {
  const t = dict[lang].specialists;
  return (
    <section id="specialisti" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary">
            {t.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {people.map((person) => (
            <div key={person.name} className="group flex flex-col h-full">
              {/* Photo — asymmetric rounding per design.md */}
              <div className="aspect-[3/4] rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl rounded-br-[1.5rem] overflow-hidden relative mb-5 bg-surface-container-high">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-on-surface tracking-tight">
                {person.name}
              </h3>
              <p className="text-secondary text-xs font-semibold uppercase tracking-[0.05em] mt-1">
                {t[person.role]}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-3 flex-1">
                {t.people[person.key]}
              </p>

              {/* CTA */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-5 bg-surface-container-highest text-primary text-xs font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-xl hover:scale-[1.02] transition-transform duration-200"
              >
                {t.book}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
