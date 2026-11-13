import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";

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
              <p className="eyebrow">Tu próximo paso</p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                ¿Querés evaluar la venta de tu propiedad en Villa Urquiza?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Empecemos por la tasación y un plan concreto.
              </p>

              <Link
                href="/tasacion"
                className="mt-9 inline-block rounded-full bg-[var(--color-accent)] px-7 py-4 text-center font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
              >
                Pedí tu tasación + plan de venta
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
