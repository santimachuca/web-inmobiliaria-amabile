"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "5491144052716";

export default function ValuationForm() {
  const inputStyles =
    "rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15";

  const labelStyles = "text-sm font-semibold text-[var(--color-primary-dark)]";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const propertyType = String(formData.get("propertyType") || "");
    const relationship = String(formData.get("relationship") || "");
    const area = String(formData.get("area") || "");
    const address = String(formData.get("address") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = [
      "Hola, quiero consultar por una tasación + plan de venta de mi propiedad en Villa Urquiza.",
      "",
      `Nombre: ${name}`,
      `Teléfono o WhatsApp: ${phone}`,
      `Tipo de propiedad: ${propertyType}`,
      `Relación con la propiedad: ${relationship}`,
      `Metros cuadrados aproximados: ${area ? `${area} m²` : "No informada"}`,
      `Dirección o barrio de la propiedad: ${address}`,
      `Qué está evaluando y en qué plazo: ${message || "No informado"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm md:grid-cols-2 md:p-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelStyles}>
          Nombre
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ejemplo: María González"
          required
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelStyles}>
          Teléfono o WhatsApp
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Ejemplo: 11 1234 5678"
          required
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="propertyType" className={labelStyles}>
          Tipo de propiedad
        </label>

        <select
          id="propertyType"
          name="propertyType"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="relationship" className={labelStyles}>
          ¿Sos el propietario o lo representás?
        </label>
        <select
          id="relationship"
          name="relationship"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="Soy propietario">Soy propietario</option>
          <option value="Represento al propietario">
            Represento al propietario
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="area" className={labelStyles}>
          Metros cuadrados aproximados (si los conocés)
        </label>

        <div className="relative">
          <input
            id="area"
            name="area"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Ejemplo: 75"
            className={`${inputStyles} w-full pr-14`}
          />

          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-muted)]">
            m²
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="address" className={labelStyles}>
          Dirección o barrio de la propiedad
        </label>

        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Calle y altura, o barrio"
          required
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className={labelStyles}>
          ¿Qué estás evaluando y en qué plazo? (opcional)
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Contanos si pensás vender pronto, más adelante o si todavía estás evaluando opciones."
          className={`${inputStyles} resize-y`}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30 sm:w-auto"
        >
          Quiero mi tasación + plan de venta
        </button>

        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
          Al continuar, se abrirá WhatsApp con los datos ingresados. Revisá y
          enviá el mensaje para que podamos responder tu consulta y coordinar
          los próximos pasos por ese canal.
        </p>
      </div>
    </form>
  );
}
