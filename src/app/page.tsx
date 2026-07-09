import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { PersonalService } from "@/components/PersonalService";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { ServicesPreview } from "@/components/ServicesPreview";
import { TeamPreview } from "@/components/TeamPreview";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <PersonalService />
      <TeamPreview />
      <ResourcesPreview />
      <CTASection />
    </>
  );
}