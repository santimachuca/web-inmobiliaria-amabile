import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PlanIntroSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal>
          <p className="eyebrow">Para propietarios</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Antes de publicar, necesitás un plan
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={0.12}
          className="space-y-6 text-lg leading-8 text-[var(--color-muted)]"
        >
          <p>
            ¿Estás pensando en vender y no sabés por dónde empezar? El precio
            es importante, pero no es lo único. También necesitás saber cómo
            presentar la propiedad, qué acciones hacer y cómo seguir los
            resultados.
          </p>
          <p>
            En Amabile Negocios Inmobiliarios te ayudamos a ordenar esas
            decisiones para salir al mercado con un criterio claro, en lugar de
            publicar y esperar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
