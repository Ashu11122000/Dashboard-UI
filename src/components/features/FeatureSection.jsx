import FeatureGrid from "./FeatureGrid";
import { featuresData } from "../../data/featuresData";

function FeatureSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Powerful Features for Modern Teams
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Everything you need to manage analytics, collaboration,
            notifications, and business workflows in one SaaS dashboard.
          </p>
        </div>

        <FeatureGrid features={featuresData} />
      </div>
    </section>
  );
}

export default FeatureSection;