import type { Metadata } from "next";

import AboutStorySection from "@/components/about/AboutStorySection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la trayectoria, los valores y la forma de trabajo de Amabile Negocios Inmobiliarios.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nuestra trayectoria"
        title="Más de 40 años construyendo confianza"
        description="Una empresa familiar que acompaña decisiones inmobiliarias con experiencia, transparencia y cercanía."
      />

      <AboutStorySection />
      <AboutValuesSection />
    </main>
  );
}