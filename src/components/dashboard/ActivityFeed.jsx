function ActivityFeed() {
  const activities = [
    "New user signed up",
    "Payment received from Pro subscription",
    "Team project updated",
    "Analytics report generated",
    "New support ticket submitted",
  ];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {activity}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;