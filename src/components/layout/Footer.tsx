import Image from "next/image";
import Link from "next/link";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

import { zonapropLinks } from "@/lib/zonaprop";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-x-6">
        <div className="min-w-0">
          <Link
            href="/"
            aria-label="Amabile Negocios Inmobiliarios - Inicio"
            className="inline-block"
          >
            <Image
              src="/images/brand/amabile-logo.svg"
              alt="Amabile Negocios Inmobiliarios"
              width={354}
              height={132}
              className="h-auto w-40"
            />
          </Link>

          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            Experiencia, cercanía y conocimiento del mercado inmobiliario.
          </p>

          <nav
            aria-label="Redes sociales de Amabile"
            className="mt-5 flex items-center gap-3"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100063892692216"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amabile en Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)]"
            >
              <FaFacebookF aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/amabile.negociosinmobiliarios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amabile en Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)]"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCIRcPMEd_rc0BjiJAOl_QKw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amabile en YouTube"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)]"
            >
              <FaYoutube aria-hidden="true" />
            </a>

            <a
              href="https://www.tiktok.com/@amabile.negocios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amabile en TikTok"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)]"
            >
              <FaTiktok aria-hidden="true" />
            </a>
          </nav>
        </div>

        <nav
          aria-label="Navegación del pie"
          className="flex flex-col items-start gap-3 text-sm text-white/70 md:order-3 md:col-span-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-6 md:gap-y-3 xl:order-2 xl:col-span-1"
        >
          <a
            href={zonapropLinks.sale}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Propiedades en venta
          </a>

          <a
            href={zonapropLinks.rent}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Propiedades en alquiler
          </a>

          <Link href="/tasacion" className="transition hover:text-white">
            Tasación
          </Link>

          <Link href="/nosotros" className="transition hover:text-white">
            Nosotros
          </Link>

          <Link href="/contacto" className="transition hover:text-white">
            Contacto
          </Link>
        </nav>

        <div className="flex min-w-0 flex-col items-start gap-1 text-sm leading-7 text-white/70 md:order-2 md:items-end xl:order-3">
          <a
            href="tel:+5491144052716"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <FaPhone aria-hidden="true" className="shrink-0" />
            +54 9 11 4405-2716
          </a>

          <a
            href="https://www.google.com/maps/place/Amabile+Negocios+Inmobiliarios/@-34.5768767,-58.4946561,17.25z/data=!4m6!3m5!1s0x95bcb65b64f197a5:0x82c258a95c42bcb0!8m2!3d-34.5774073!4d-58.4919513!16s%2Fg%2F1tfrcc89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <FaLocationDot aria-hidden="true" className="shrink-0" />
            Monroe 5599, Villa Urquiza
          </a>

          <a
            href="mailto:ventas@amabile.com.ar"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <FaEnvelope aria-hidden="true" className="shrink-0" />
            ventas@amabile.com.ar
          </a>
        </div>
      </div>

      <div className="container mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Amabile Negocios Inmobiliarios</p>

        <p>Matrícula C.U.C.I.C.B.A. 689</p>
      </div>
    </footer>
  );
}
