import type { Metadata } from "next";

import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con Amabile Negocios Inmobiliarios en Villa Urquiza.",
};

const contactOptions = [
  {
    title: "Teléfono y WhatsApp",
    description: "+54 9 11 4405-2716",
    href: "https://wa.me/5491144052716",
    external: true,
  },
  {
    title: "Correo electrónico",
    description: "ventas@amabile.com.ar",
    href: "mailto:ventas@amabile.com.ar",
    external: false,
  },
  {
    title: "Nuestra oficina",
    description: "Monroe 5599, Villa Urquiza, Buenos Aires",
    href: "https://www.google.com/maps/search/?api=1&query=Monroe+5599+Villa+Urquiza+Buenos+Aires",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Estamos para ayudarte"
        title="Hablemos de tu próximo paso"
        description="Contactanos para recibir asesoramiento sobre ventas, alquileres, inversiones y tasaciones."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Contacto</p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
              Elegí la forma más cómoda de comunicarte
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Nuestro equipo está disponible para orientarte y responder tus
              consultas de manera personalizada.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactOptions.map((option, index) => (
              <ScrollReveal key={option.title} delay={index * 0.1}>
                <a
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full min-h-64 flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-xl"
                >
                  <p className="eyebrow">Amabile</p>

                  <h3 className="mt-4 text-2xl font-semibold text-[var(--color-primary-dark)]">
                    {option.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--color-muted)]">
                    {option.description}
                  </p>

                  <span className="mt-auto pt-8 font-semibold text-[var(--color-primary)]">
                    Contactar
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

      <section className="bg-[var(--color-primary-dark)] py-20 text-white md:py-24">
        <div className="container">
          <ScrollReveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">¿Querés vender o alquilar?</p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Conocé el valor de tu propiedad
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                Contanos las características principales y coordinaremos una
                evaluación personalizada.
              </p>
            </div>

            <Link
              href="/tasacion"
              className="shrink-0 rounded-full bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
            >
              Solicitar tasación
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}