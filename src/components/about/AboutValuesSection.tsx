import { FaEye, FaHandshake, FaPeopleGroup } from "react-icons/fa6";

import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  {
    title: "Transparencia",
    description:
      "Brindamos información clara y precisa para que cada decisión pueda tomarse con seguridad.",
    icon: FaEye,
  },
  {
    title: "Compromiso",
    description:
      "Nos involucramos en cada operación y acompañamos a nuestros clientes durante todo el proceso.",
    icon: FaHandshake,
  },
  {
    title: "Cercanía",
    description:
      "Construimos relaciones duraderas mediante una atención personalizada, humana y accesible.",
    icon: FaPeopleGroup,
  },
];

export default function AboutValuesSection() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Nuestros valores</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            La manera en que elegimos trabajar
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Principios que nos acompañan en cada relación y operación
            inmobiliaria.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <article className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-xl text-[var(--color-primary)]">
                    <Icon aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--color-primary-dark)]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--color-muted)]">
                    {value.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
