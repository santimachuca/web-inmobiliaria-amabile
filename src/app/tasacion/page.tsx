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
              Dejanos los datos de tu propiedad para conversar sobre una
              tasación orientativa y un plan de venta adaptado a tu caso.
            </p>
          </div>

          <div className="mt-12 max-w-4xl">
            <ValuationForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <div className="container max-w-4xl">
          <p className="eyebrow">Información útil</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-primary-dark)] md:text-5xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <summary className="cursor-pointer font-semibold text-[var(--color-primary-dark)]">
                ¿Para qué zona está pensado?
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Esta propuesta está enfocada en propiedades de Villa Urquiza.
              </p>
            </details>

            <details className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <summary className="cursor-pointer font-semibold text-[var(--color-primary-dark)]">
                ¿Qué incluye el plan de venta?
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Las acciones propuestas para presentar y comercializar tu
                propiedad, junto con el seguimiento del proceso. Te explicamos
                cómo se aplican a tu caso.
              </p>
            </details>

            <details className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <summary className="cursor-pointer font-semibold text-[var(--color-primary-dark)]">
                ¿Pedir la tasación implica autorizar la venta?
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                No. La autorización de comercialización se conversa y formaliza
                por separado si decidís avanzar.
              </p>
            </details>

            <details className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <summary className="cursor-pointer font-semibold text-[var(--color-primary-dark)]">
                ¿Cuándo coordinamos la tasación?
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Primero revisamos los datos y luego coordinamos según tu
                disponibilidad y la de la propiedad.
              </p>
            </details>

            <details className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <summary className="cursor-pointer font-semibold text-[var(--color-primary-dark)]">
                ¿Garantizan vender en 180 días?
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                No. Ese es el plazo de la autorización de venta, no una garantía
                de resultado. El tiempo de venta depende de factores como el
                precio, el estado de la propiedad, la documentación y la
                respuesta del mercado.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
