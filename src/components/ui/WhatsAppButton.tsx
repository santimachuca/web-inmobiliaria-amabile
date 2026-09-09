const WHATSAPP_NUMBER = "5491144052716";

const message =
  "Hola, quisiera recibir información sobre los servicios de Amabile Negocios Inmobiliarios.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  message,
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Amabile por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 2xl:px-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.04 3C8.84 3 3 8.72 3 15.78c0 2.48.73 4.89 2.1 6.94L3 29l6.48-2.04a13.2 13.2 0 0 0 6.56 1.75C23.24 28.71 29 23 29 15.78S23.24 3 16.04 3Zm0 23.54a11 11 0 0 1-5.61-1.53l-.4-.24-3.84 1.21 1.25-3.73-.26-.4a10.51 10.51 0 0 1-1.72-5.75c0-5.82 4.74-10.54 10.58-10.54 5.82 0 10.55 4.72 10.55 10.54 0 5.81-4.73 10.44-10.55 10.44Zm5.79-7.83c-.32-.16-1.87-.91-2.16-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1 1.23-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.62 9.62 0 0 1-1.77-2.18c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.05 1.29 3.26c.16.21 2.24 3.4 5.42 4.77.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.49.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>

      <span className="hidden">
        Chateá con nosotros
      </span>
    </a>
  );
}