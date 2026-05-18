import FeatureCard from "./FeatureCard";

function FeatureGrid({ features = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
        />
      ))}
    </div>
  );
}

export default FeatureGrid;