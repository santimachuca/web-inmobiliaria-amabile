import ScrollReveal from "@/components/ui/ScrollReveal";
import { zonapropLinks } from "@/lib/zonaprop";

const options = [
  {
    eyebrow: "Comprar",
    title: "Propiedades en venta",
    description:
      "Descubrí casas, departamentos, PH, terrenos y oportunidades de inversión publicadas por Amabile.",
    href: zonapropLinks.sale,
  },
  {
    eyebrow: "Alquilar",
    title: "Propiedades en alquiler",
    description:
      "Consultá la disponibilidad y la información actualizada de nuestros alquileres.",
    href: zonapropLinks.rent,
  },
  {
    eyebrow: "Catálogo completo",
    title: "Todas las propiedades",
    description:
      "Accedé al perfil oficial de Amabile en Zonaprop y explorá toda la oferta vigente.",
    href: zonapropLinks.all,
  },
];

export default function PropertyPortalSection() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow">Encontrá tu próximo lugar</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Propiedades actualizadas, siempre en un solo lugar.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Consultá nuestra oferta vigente en Zonaprop, con precios,
            disponibilidad y características actualizadas.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((option, index) => (
            <ScrollReveal key={option.title} delay={index * 0.1}>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-72 flex-col rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="eyebrow">{option.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-primary-dark)]">
                  {option.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  {option.description}
                </p>
                <span className="mt-auto pt-8 font-semibold text-[var(--color-primary)]">
                  Ver en Zonaprop
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
