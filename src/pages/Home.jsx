import Hero from "../components/hero/Hero";
import PricingSection from "../components/pricing/PricingSection";
import TeamSection from "../components/team/TeamSection";
import FeatureSection from "../components/features/FeatureSection";

function Home() {
  return (
    <main>
      <Hero />
      <TeamSection />
      <PricingSection />
      <FeatureSection />
    </main>
  );
}

export default Home;