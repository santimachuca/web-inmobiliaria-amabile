import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";

const whatsappUrl =
  "https://wa.me/5491144052716?text=Hola%2C%20quisiera%20consultar%20por%20la%20tasaci%C3%B3n%20de%20una%20propiedad.";

export default function ValuationCta() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-[var(--color-primary)] px-7 py-16 text-white shadow-xl md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/20 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />

            <div className="max-w-3xl">
              <p className="eyebrow">Tasación profesional</p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                ¿Querés conocer el valor de tu propiedad?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Contanos sus características principales y nuestro equipo te
                orientará de manera personalizada.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/tasacion"
                  className="rounded-full bg-[var(--color-accent)] px-7 py-4 text-center font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
                >
                  Solicitar tasación
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/35 px-7 py-4 text-center font-semibold text-white transition hover:border-white hover:bg-white hover:text-[var(--color-primary-dark)]"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}