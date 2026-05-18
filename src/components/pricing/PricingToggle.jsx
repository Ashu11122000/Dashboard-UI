function PricingToggle({ billingCycle, setBillingCycle }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <button
        type="button"
        onClick={() => setBillingCycle("monthly")}
        className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
          billingCycle === "monthly"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => setBillingCycle("yearly")}
        className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
          billingCycle === "yearly"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}

export default PricingToggle;