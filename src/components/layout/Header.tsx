import Link from "next/link";
import Image from "next/image";

import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15">
      <div className="container flex h-24 items-center justify-between">
        <Link
          href="/"
          aria-label="Amabile Negocios Inmobiliarios - Inicio"
          className="block"
        >
          <Image
            src="/images/brand/amabile-logo.svg"
            alt="Amabile Negocios Inmobiliarios"
            width={354}
            height={132}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </Link>

        <DesktopNavigation />

        <MobileMenu />
      </div>
    </header>
  );
}
