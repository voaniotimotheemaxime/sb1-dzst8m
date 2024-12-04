import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceFeatures />
      <ServiceDetails />
      <ServiceCTA />
    </>
  );
}