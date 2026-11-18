import type { Metadata } from "next";

import ValuationForm from "@/components/forms/ValuationForm";
import PageHero from "@/components/layout/PageHero";

const whatsappMessage =
  "Hola Adrián, estoy evaluando vender una propiedad en Villa Urquiza. Me interesa conocer la propuesta de tasación + plan de venta. ¿Me contás cómo avanzar?";
const whatsappUrl = `https://wa.me/5491144052716?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Tasación y plan de venta en Villa Urquiza",
  description:
    "Conocé un valor orientativo de mercado y un plan de venta para tu propiedad en Villa Urquiza con Amabile Negocios Inmobiliarios.",
};

export default function ValuationPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Para propietarios de Villa Urquiza"
        title="Tasación + plan de venta de tu propiedad en Villa Urquiza"
        description="Conocé un valor orientativo y los pasos para vender tu propiedad en Villa Urquiza."
      />

      <section id="formulario" className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Empecemos</p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-primary-dark)] md:text-4xl">
              Contanos sobre tu propiedad
            </h2>

            <p className="mt-3 text-lg leading-8 text-[var(--color-muted)]">
              Dejanos los datos de tu propiedad para conversar sobre una
              tasación orientativa y un plan de venta adaptado a tu caso.
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <ValuationForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-14 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-primary-dark)] md:text-4xl">
            Qué te llevás
          </h2>

          <ul className="mt-7 grid gap-4 text-[var(--color-muted)] md:grid-cols-3">
            <li className="rounded-2xl border border-[var(--color-border)] bg-white p-6 leading-7">
              Una tasación orientativa basada en tu propiedad y su contexto de
              mercado.
            </li>
            <li className="rounded-2xl border border-[var(--color-border)] bg-white p-6 leading-7">
              Un plan de venta para presentarla y definir acciones de
              comercialización.
            </li>
            <li className="rounded-2xl border border-[var(--color-border)] bg-white p-6 leading-7">
              Próximos pasos claros para decidir si querés avanzar con la venta.
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-primary-dark)] md:text-3xl">
              No se trata solo de poner un precio
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-[var(--color-muted)]">
              Queremos que entiendas cómo se va a trabajar tu propiedad: su
              presentación, la publicación, las visitas y el seguimiento. El
              plan se adapta a tu caso; no es una promesa de venta dentro de un
              plazo fijo.
            </p>
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

      <section className="bg-[var(--color-primary-dark)] py-16 text-white md:py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            ¿Preferís conversar primero?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Escribinos por WhatsApp y contanos sobre tu propiedad en Villa
            Urquiza.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
