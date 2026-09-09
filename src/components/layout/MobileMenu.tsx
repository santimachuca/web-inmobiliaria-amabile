"use client";

import Link from "next/link";
import { useState } from "react";

import { zonapropLinks } from "@/lib/zonaprop";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentState) => !currentState)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
      >
        <span aria-hidden="true" className="text-xl">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen && (
        <nav
          aria-label="Navegación móvil"
          className="absolute right-0 top-14 flex w-64 flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-3 text-[var(--color-primary-dark)] shadow-2xl"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[var(--color-surface)]"
            >
              {item.label}
            </Link>
          ))}

          <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Propiedades
          </p>

          <a
            href={zonapropLinks.sale}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[var(--color-surface)]"
          >
            En venta
          </a>

          <a
            href={zonapropLinks.rent}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[var(--color-surface)]"
          >
            En alquiler
          </a>

          <a
            href={zonapropLinks.all}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[var(--color-surface)]"
          >
            Ver todas
          </a>

          <Link
            href="/tasacion"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold"
          >
            Tasar mi propiedad
          </Link>
        </nav>
      )}
    </div>
  );
}
