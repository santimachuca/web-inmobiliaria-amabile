import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutStorySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/brand/frente-amabile.webp"
              alt="Frente de la oficina de Amabile Negocios Inmobiliarios"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-[var(--color-primary-dark)]/90 px-5 py-4 text-white backdrop-blur-sm">
            <p className="text-3xl font-semibold">40+</p>
            <p className="mt-1 text-sm text-white/70">
              años en el mercado inmobiliario
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="eyebrow">Nuestra historia</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Una trayectoria construida sobre relaciones de confianza.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--color-muted)]">
            <p>
              En Amabile Negocios Inmobiliarios llevamos más de cuatro décadas
              acompañando a nuestros clientes al comprar, vender o alquilar una
              propiedad.
            </p>

            <p>
              Somos una empresa familiar con una fuerte presencia en la Ciudad
              de Buenos Aires, construida sobre valores claros: transparencia,
              compromiso y cercanía.
            </p>

            <p>
              Supimos adaptarnos a los cambios del mercado sin perder nuestra
              esencia: brindar un servicio serio, personalizado y orientado a
              resultados.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}