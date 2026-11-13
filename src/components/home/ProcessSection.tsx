import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Nos contás tu caso",
    description:
      "Conversamos sobre la propiedad, tu objetivo y los tiempos que estás evaluando.",
  },
  {
    number: "02",
    title: "Tasación + plan de venta",
    description:
      "Definimos un valor orientativo de mercado y te explicamos las acciones de comercialización propuestas.",
  },
  {
    number: "03",
    title: "Acordamos cómo avanzar",
    description:
      "Revisamos las condiciones y, si decidís trabajar con nosotros, formalizamos la autorización.",
  },
  {
    number: "04",
    title: "Comercializamos y seguimos",
    description:
      "Coordinamos la presentación, la publicación, las visitas y la devolución sobre lo que va pasando.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Cómo trabajamos</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Un proceso claro, de principio a fin
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Cada propiedad tiene su contexto. Te explicamos los próximos pasos
            y mantenemos una comunicación cercana durante el proceso.
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[var(--color-border)] lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.1}
                className="relative h-full"
              >
                <article className="relative flex h-full flex-col items-start">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white ring-8 ring-white">
                    {step.number}
                  </span>

                  <h3 className="mt-7 text-2xl font-semibold text-[var(--color-primary-dark)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--color-muted)]">
                    {step.description}
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
