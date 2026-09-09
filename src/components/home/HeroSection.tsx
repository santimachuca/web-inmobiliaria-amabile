import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { zonapropLinks } from "@/lib/zonaprop";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-32 text-white">
      <Image
        src="/images/brand/frente-amabile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/45" />

      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Amabile Negocios Inmobiliarios</p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            Una nueva forma de encontrar tu lugar.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Más de 40 años acompañando decisiones inmobiliarias con
            experiencia, cercanía y conocimiento del mercado.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-10 flex flex-wrap gap-4">
          <a
            href={zonapropLinks.sale}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
          >
            Propiedades en venta
          </a>

          <a
            href={zonapropLinks.rent}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--color-primary-dark)]"
          >
            Propiedades en alquiler
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
