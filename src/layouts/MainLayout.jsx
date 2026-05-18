import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/common/ThemeToggle";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b flex justify-between items-center dark:border-slate-700">
        <h2>Main Layout Navbar</h2>
        <ThemeToggle />
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="p-4 border-t dark:border-slate-700">
        <p>Main Footer</p>
      </footer>
    </div>
  );
}

export default MainLayout;
