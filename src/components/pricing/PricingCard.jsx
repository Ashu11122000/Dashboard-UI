import PricingFeatures from "./PricingFeatures";

function PricingCard({ plan, billingCycle }) {
  const price =
    billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.recommended
          ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30"
          : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
      }`}
    >
      {plan.recommended && (
        <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {plan.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {plan.description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>

          <span className="pb-2 text-sm text-gray-500 dark:text-gray-400">
            /{billingCycle === "monthly" ? "month" : "year"}
          </span>
        </div>
      </div>

      <div className="mb-8 grow">
        <PricingFeatures features={plan.features} />
      </div>

      <button
        type="button"
        className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
          plan.recommended
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;