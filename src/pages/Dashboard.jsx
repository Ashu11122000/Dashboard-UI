function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,450",
    },
    {
      title: "Revenue",
      value: "$48,200",
    },
    {
      title: "Active Projects",
      value: "128",
    },
    {
      title: "Tasks Completed",
      value: "1,024",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, Ashish 👋
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Here’s what’s happening with your SaaS platform today.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h2>
          </div>
        ))}
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              New user signed up
            </div>

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              Payment received from Pro subscription
            </div>

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              Team project updated
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Tasks
          </h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              Review analytics
            </div>

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              Approve new users
            </div>

            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              Update pricing plan
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;