import Hero from "../components/hero/Hero";
import PricingSection from "../components/pricing/PricingSection";
import TeamSection from "../components/team/TeamSection";

function Home() {
  return (
    <main>
      <Hero />
      <TeamSection />
      <PricingSection />
    </main>
  );
}

export default Home;