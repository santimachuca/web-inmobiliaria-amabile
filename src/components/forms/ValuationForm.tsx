"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "5491144052716";

export default function ValuationForm() {
  const inputStyles =
    "rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15";

  const labelStyles =
    "text-sm font-semibold text-[var(--color-primary-dark)]";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const operation = String(formData.get("operation") || "");
    const propertyType = String(formData.get("propertyType") || "");
    const area = String(formData.get("area") || "");
    const address = String(formData.get("address") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = [
      "Hola, quiero solicitar una tasación.",
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo electrónico: ${email}`,
      `Operación: ${operation}`,
      `Tipo de propiedad: ${propertyType}`,
      `Superficie aproximada: ${area ? `${area} m²` : "No informada"}`,
      `Dirección: ${address}`,
      `Información adicional: ${message || "No informada"}`,
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
          Nombre y apellido
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
          Teléfono
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
        <label htmlFor="email" className={labelStyles}>
          Correo electrónico
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nombre@correo.com"
          required
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="operation" className={labelStyles}>
          ¿Qué querés hacer?
        </label>

        <select
          id="operation"
          name="operation"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="Vender">Vender</option>
          <option value="Alquilar">Alquilar</option>
          <option value="Necesito asesoramiento">
            Necesito asesoramiento
          </option>
        </select>
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
          <option value="Departamento">Departamento</option>
          <option value="Casa">Casa</option>
          <option value="PH">PH</option>
          <option value="Local comercial">Local comercial</option>
          <option value="Terreno">Terreno</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="area" className={labelStyles}>
          Superficie aproximada
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
          Dirección de la propiedad
        </label>

        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Calle, altura y localidad"
          required
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className={labelStyles}>
          Información adicional
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Contanos brevemente sus ambientes, estado y cualquier otro detalle relevante."
          className={`${inputStyles} resize-y`}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-accent)] px-7 py-4 font-semibold text-[var(--color-primary-dark)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30 sm:w-auto"
        >
          Enviar solicitud por WhatsApp
        </button>

        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
          Al continuar, se abrirá WhatsApp con los datos ingresados para que
          puedas revisar y enviar la consulta.
        </p>
      </div>
    </form>
  );
}