import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/common/ThemeToggle";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2>Dashboard Sidebar</h2>
      </aside>

      <div className="flex-1">
        <header className="p-4 border-b bg-white dark:bg-slate-800 dark:border-slate-700 flex justify-between">
          <h2>Dashboard Topbar</h2>
          <ThemeToggle />
        </header>

        <main className="p-6 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
