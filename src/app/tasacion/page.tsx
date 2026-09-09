import type { Metadata } from "next";

import ValuationForm from "@/components/forms/ValuationForm";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Tasación",
  description:
    "Solicitá la tasación profesional de tu propiedad con Amabile Negocios Inmobiliarios.",
};

export default function ValuationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tasación profesional"
        title="Conocé el valor real de tu propiedad"
        description="Analizamos cada inmueble considerando su ubicación, características y las condiciones actuales del mercado."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Empecemos</p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-5xl">
              Contanos sobre tu propiedad
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Completá los datos principales y nuestro equipo se pondrá en
              contacto para realizar una evaluación personalizada.
            </p>
          </div>

          <div className="mt-12 max-w-4xl">
            <ValuationForm />
          </div>
        </div>
      </section>
    </main>
  );
}