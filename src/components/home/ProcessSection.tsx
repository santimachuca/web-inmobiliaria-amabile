import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Conocemos tu situación, tus objetivos y qué necesitás resolver.",
  },
  {
    number: "02",
    title: "Analizamos",
    description:
      "Estudiamos la propiedad, la zona y las condiciones actuales del mercado.",
  },
  {
    number: "03",
    title: "Planificamos",
    description:
      "Definimos una estrategia clara y adecuada para cada operación.",
  },
  {
    number: "04",
    title: "Acompañamos",
    description:
      "Gestionamos el proceso y te asesoramos hasta concretar la operación.",
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
            Cada operación es diferente. Por eso trabajamos con una estrategia
            personalizada y una comunicación cercana en todo momento.
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