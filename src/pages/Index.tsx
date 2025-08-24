import { ScacchieraHero } from "@/components/ScacchieraHero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductFeatures } from "@/components/ProductFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <ScacchieraHero />
      <ProblemSection />
      <ProductFeatures />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
};

export default Index;
