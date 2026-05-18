import { useState } from "react";
import pricingData from "../../data/pricingData";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-gray-50 px-6 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Pricing
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Simple pricing for every team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Choose a plan that fits your business needs. Upgrade anytime as your
            team grows.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <PricingToggle
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;