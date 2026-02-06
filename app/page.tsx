import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";
import { AiReadyRoadmap } from "@/components/ai-ready-roadmap";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <FeatureGrid />
      <AiReadyRoadmap />
    </main>
  );
}
