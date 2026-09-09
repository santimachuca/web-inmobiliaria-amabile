import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Compra y venta",
    description:
      "Acompañamiento integral para encontrar oportunidades, comercializar propiedades y tomar decisiones informadas.",
  },
  {
    number: "02",
    title: "Alquileres",
    description:
      "Asesoramiento para propietarios e inquilinos durante cada etapa de la operación.",
  },
  {
    number: "03",
    title: "Administración",
    description:
      "Gestión profesional de propiedades con seguimiento, organización y atención personalizada.",
  },
  {
    number: "04",
    title: "Asesoramiento integral",
    description:
      "Respaldo inmobiliario, jurídico y contable para avanzar con claridad y tranquilidad.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow">Nuestros servicios</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Experiencia para acompañar cada decisión inmobiliaria
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Brindamos una atención cercana y profesional durante todo el
            proceso, desde la primera consulta hasta el cierre de la operación.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="group flex h-full min-h-72 flex-col bg-[var(--color-surface)] p-8 transition duration-300 hover:bg-white md:p-10">
                <span className="text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)]">
                  {service.number}
                </span>

                <h3 className="mt-8 text-3xl font-semibold text-[var(--color-primary-dark)]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-auto pt-8"
                >
                  <span className="block h-0.5 w-12 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-24" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}