import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import DashboardStats from "../components/dashboard/DashboardStats";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import TaskList from "../components/dashboard/TaskList";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader fullScreen text="Loading dashboard..." />;
  }

  return (
    <div className="space-y-6">
      <DashboardStats />
      <AnalyticsChart />
      <ActivityFeed />
      <TaskList />
    </div>
  );
}
