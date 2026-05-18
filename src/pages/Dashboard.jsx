import DashboardStats from "../components/dashboard/DashboardStats";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import TaskList from "../components/dashboard/TaskList";
import RecentUsersTable from "../components/dashboard/RecentUserTable";

function Dashboard() {
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

      {/* KPI Stats */}
      <DashboardStats />

      {/* Middle Widgets */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>

        <TaskList />
      </section>

      {/* Users Table */}
      <RecentUsersTable />
    </div>
  );
}

export default Dashboard;