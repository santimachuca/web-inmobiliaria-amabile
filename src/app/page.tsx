import HeroSection from "@/components/home/HeroSection";
import PlanIntroSection from "@/components/home/PlanIntroSection";
import ProcessSection from "@/components/home/ProcessSection";
import PropertyPortalSection from "@/components/home/PropertyPortalSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustSection from "@/components/home/TrustSection";
import ValuationCta from "@/components/home/ValuationCta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PlanIntroSection />
      <PropertyPortalSection />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <TestimonialsSection />
      <ValuationCta />
    </main>
  );
}
