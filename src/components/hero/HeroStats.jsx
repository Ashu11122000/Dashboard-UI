const stats = [
  {
    id: 1,
    value: "10K+",
    label: "Active Users",
  },
  {
    id: 2,
    value: "99.9%",
    label: "System Uptime",
  },
  {
    id: 3,
    value: "24/7",
    label: "Customer Support",
  },
];

function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      {stats.map((stat) => (
        <div key={stat.id}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;