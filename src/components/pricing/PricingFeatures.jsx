function PricingFeatures({ features }) {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
            ✓
          </span>

          <span className="text-sm text-gray-600 dark:text-gray-300">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default PricingFeatures;