import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { zonapropLinks } from "@/lib/zonaprop";

const whatsappMessage =
  "Hola Adrián, estoy evaluando vender una propiedad en Villa Urquiza. Me interesa conocer la propuesta de tasación + plan de venta. ¿Me contás cómo avanzar?";
const whatsappUrl = `https://wa.me/5491144052716?text=${encodeURIComponent(whatsappMessage)}`;

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
            Conocé el valor de tu propiedad y cómo venderla en Villa Urquiza.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Tasación + plan de venta, con el respaldo de una familia con 40 años
            de trayectoria en el barrio. Te ayudamos a definir un precio
            orientativo de mercado y los pasos para comercializar tu casa o
            departamento.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/tasacion#formulario"
            className="rounded-full bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110"
          >
            Pedí tu tasación + plan de venta
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--color-primary-dark)]"
          >
            Escribinos por WhatsApp
          </a>

          <a
            href={zonapropLinks.all}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--color-primary-dark)]"
          >
            Ver propiedades
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
