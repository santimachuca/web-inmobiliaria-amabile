import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";

const trustPoints = [
  {
    value: "40+",
    label: "años de experiencia",
    description:
      "Una trayectoria construida acompañando operaciones inmobiliarias.",
  },
  {
    value: "689",
    label: "matrícula C.U.C.I.C.B.A.",
    description:
      "Ejercicio profesional respaldado por la normativa correspondiente.",
  },
  {
    value: "Local",
    label: "conocimiento de la zona",
    description:
      "Experiencia en Villa Urquiza y los principales barrios cercanos.",
  },
];

export default function TrustSection() {
  return (
    <section className="overflow-hidden bg-[var(--color-primary-dark)] py-20 text-white md:py-28">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ScrollReveal>
            <p className="eyebrow">Trayectoria y confianza</p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Más de cuatro décadas haciendo las cosas con seriedad
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Amabile es una inmobiliaria familiar que combina experiencia,
              conocimiento del mercado y una atención cercana en cada
              operación.
            </p>

            <Link
              href="/nosotros"
              className="mt-8 inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[var(--color-primary-dark)]"
            >
              Conocé nuestra historia
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map((point, index) => (
              <ScrollReveal
                key={point.label}
                delay={index * 0.1}
                className="h-full"
              >
                <article className="flex h-full min-h-72 flex-col rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                  <p className="text-5xl font-semibold text-[var(--color-accent)]">
                    {point.value}
                  </p>

                  <h3 className="mt-5 text-lg font-semibold">
                    {point.label}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {point.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}