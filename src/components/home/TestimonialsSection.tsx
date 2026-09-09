import { FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { googleReviews } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            <FaStar
              aria-hidden="true"
              className="text-[var(--color-accent)]"
            />
            Lo que dicen nuestros clientes
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
            Experiencias que construyen confianza
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Reseñas reales de Google de personas que eligieron a Amabile para
            acompañarlas en sus operaciones inmobiliarias.
          </p>

          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
          >
            <FcGoogle aria-hidden="true" className="size-6" />

            <span>
              {googleReviews.rating.toLocaleString("es-AR")} de 5 ·{" "}
              {googleReviews.total} reseñas
            </span>

            <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-12">
          <TestimonialsCarousel />
        </ScrollReveal>
      </div>
    </section>
  );
}