import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PresentationSection() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal>
          <p className="eyebrow">Comercialización</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Una presentación que muestre la propiedad
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={0.12}
          className="space-y-6 text-lg leading-8 text-[var(--color-muted)]"
        >
          <p>
            Nuestra propuesta de comercialización incluye fotografía y video
            profesionales, plano y recorrido virtual 360.
          </p>
          <p>
            A eso le sumamos seguimiento para que sepas qué acciones se
            hicieron, qué consultas aparecieron y qué conviene revisar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
