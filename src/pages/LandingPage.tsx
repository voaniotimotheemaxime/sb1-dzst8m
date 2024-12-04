import { HeroSection } from "@/components/landing/HeroSection";
import { ChallengesSection } from "@/components/landing/ChallengesSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ContactSection } from "@/components/landing/ContactSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}