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
        eyebrow="Para propietarios de Villa Urquiza"
        title="Tasación + plan de venta de tu propiedad en Villa Urquiza"
        description="Conocé un valor orientativo de mercado y los pasos propuestos para vender tu casa o departamento, con el respaldo de una familia con unos 40 años de trayectoria en el barrio."
      />

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-primary-dark)] md:text-4xl">
            Qué te llevás
          </h2>

          <ul className="mt-8 grid gap-5 text-lg leading-8 text-[var(--color-muted)] md:grid-cols-3">
            <li>
              Una tasación orientativa basada en tu propiedad y su contexto de
              mercado.
            </li>
            <li>
              Un plan de venta para presentarla y definir acciones de
              comercialización.
            </li>
            <li>
              Próximos pasos claros para decidir si querés avanzar con la venta.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-white py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-semibold text-[var(--color-primary-dark)] md:text-4xl">
            No se trata solo de poner un precio
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Queremos que entiendas cómo se va a trabajar tu propiedad: su
            presentación, la publicación, las visitas y el seguimiento. El plan
            se adapta a tu caso; no es una promesa de venta dentro de un plazo
            fijo.
          </p>
        </div>
      </section>

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
