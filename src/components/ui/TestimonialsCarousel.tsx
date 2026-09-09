"use client";

import { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: number) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: carousel.clientWidth * 0.85 * direction,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div
        ref={carouselRef}
        role="region"
        aria-label="Carrusel de reseñas de clientes"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => {
          const initials = testimonial.name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <article
              key={testimonial.id}
              className="flex min-w-[85%] snap-start flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] font-semibold text-white">
                    {initials}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--color-primary-dark)]">
                      {testimonial.name}
                    </h3>

                    <div
                      className="mt-1 flex items-center gap-1 text-amber-400"
                      aria-label={`${testimonial.rating} de 5 estrellas`}
                    >
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <FaStar key={index} aria-hidden="true" />
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <FcGoogle
                  aria-label="Reseña publicada en Google"
                  className="size-6 shrink-0"
                />
              </div>

              <blockquote className="mt-5 line-clamp-7 text-base leading-7 text-[var(--color-muted)]">
                “{testimonial.text}”
              </blockquote>

              <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Reseña publicada en Google
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          aria-label="Mostrar reseñas anteriores"
          className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-dark)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
        >
          <FaArrowLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => moveCarousel(1)}
          aria-label="Mostrar reseñas siguientes"
          className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-dark)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
        >
          <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}