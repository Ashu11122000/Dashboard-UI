function StatCard({ stat }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {stat.title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        {stat.value}
      </h3>
    </div>
  );
}

export default StatCard;