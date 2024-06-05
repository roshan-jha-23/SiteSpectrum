import ClientSection from "@/components/client-section";
import CallToActionSection from "@/components/cta-section";
import FeatureCardSection from "@/components/feature-card-section";
import HeroSection from "@/components/hero-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import PricingSection from "@/components/pricing-section";
import AnimatedTickers from "@/components/ticker-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <FeatureCardSection />
      <AnimatedTickers />
      <SphereMask />
      <PricingSection />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
