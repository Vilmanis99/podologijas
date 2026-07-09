import Image from "next/image";

const BOOKING_URL = "https://www.piearsta.lv/";

interface Specialist {
  name: string;
  role: string;
  description: string;
  image: string;
}

const specialists: Specialist[] = [
  {
    name: "Anete Kuhta",
    role: "Sertificēts podologs",
    description:
      "Klīnikas vadītāja un sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
    image: "/images/specialist-anete.jpg",
  },
  {
    name: "Kristīne Ozola",
    role: "Sertificēts podologs",
    description:
      "Klīnikas vadītāja un sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē, estētiskajā pēdu aprūpē un roku ārstnieciskajā aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
    image: "/images/specialist-kristine.jpg",
  },
  {
    name: "Ieva Govša",
    role: "Sertificēts podologs",
    description:
      "Sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē un roku ārstnieciskajā aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
    image: "/images/specialist-ieva.jpg",
  },
  {
    name: "Lāsma Luksa",
    role: "Sertificēts podologs",
    description:
      "Sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē un estētiskajā pēdu aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
    image: "/images/specialist-lasma.jpg",
  },
];

export default function Specialists() {
  return (
    <section id="specialisti" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Speciālisti
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary">
            Mūsu komanda
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialists.map((person) => (
            <div key={person.name} className="group">
              {/* Photo — asymmetric rounding per design.md */}
              <div className="aspect-[3/4] rounded-tl-[2rem] rounded-tr-xl rounded-bl-xl rounded-br-[1.5rem] overflow-hidden relative mb-5 bg-surface-container-high">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-on-surface tracking-tight">
                {person.name}
              </h3>
              <p className="text-secondary text-xs font-semibold uppercase tracking-[0.05em] mt-1">
                {person.role}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-3">
                {person.description}
              </p>

              {/* CTA */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-surface-container-highest text-primary text-xs font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-xl hover:scale-[1.02] transition-transform duration-200"
              >
                Pieteikties
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
