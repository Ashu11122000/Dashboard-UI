function FeatureCard({ feature }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">
        {feature.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export default FeatureCard;