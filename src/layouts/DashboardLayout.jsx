import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
        {/* Sidebar placeholder */}
        <aside className="w-64 bg-slate-900 text-white p-6">
            <h2>Dashboard Sidebar</h2>
        </aside>

        {/* Main content */}
        <div className="flex-1">
            {/* Topbar placeholder */}
            <header className="p-4 border-b bg-white">
                <h2>Dashboard Topbar</h2>
            </header>

            <main className="p-6 bg-slate-50 min-h-[calc(100vh-64px)]">
                <Outlet />
            </main>
        </div>
    </div>
    );
}

export default DashboardLayout;