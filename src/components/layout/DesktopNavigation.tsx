"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { zonapropLinks } from "@/lib/zonaprop";

export default function DesktopNavigation() {
  const pathname = usePathname();

  function getLinkStyles(href: string) {
    const isActive = pathname === href;

    return [
      "relative py-3 text-sm font-medium transition",
      "after:absolute after:inset-x-0 after:bottom-1 after:h-0.5",
      "after:origin-left after:bg-[var(--color-accent)] after:transition-transform",
      isActive
        ? "text-white after:scale-x-100"
        : "text-white/75 after:scale-x-0 hover:text-white hover:after:scale-x-100",
    ].join(" ");
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-8 lg:flex"
    >
      <Link href="/" className={getLinkStyles("/")}>
        Inicio
      </Link>

      <div className="group relative">
        <button
          type="button"
          className="flex items-center gap-2 py-3 text-sm font-medium text-white/75 transition hover:text-white"
        >
          Propiedades

          <span
            aria-hidden="true"
            className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          >
            ▾
          </span>
        </button>

        <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-[var(--color-border)] bg-white p-2 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <a
            href={zonapropLinks.sale}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-surface)]"
          >
            Propiedades en venta
          </a>

          <a
            href={zonapropLinks.rent}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-surface)]"
          >
            Propiedades en alquiler
          </a>

          <a
            href={zonapropLinks.all}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-surface)]"
          >
            Ver todas en Zonaprop
          </a>
        </div>
      </div>

      <Link href="/nosotros" className={getLinkStyles("/nosotros")}>
        Nosotros
      </Link>

      <Link href="/contacto" className={getLinkStyles("/contacto")}>
        Contacto
      </Link>

      <Link
        href="/tasacion"
        aria-current={pathname === "/tasacion" ? "page" : undefined}
        className={`rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:brightness-110 ${
          pathname === "/tasacion"
            ? "ring-2 ring-white ring-offset-2 ring-offset-[var(--color-primary-dark)]"
            : ""
        }`}
      >
        Tasar mi propiedad
      </Link>
    </nav>
  );
}