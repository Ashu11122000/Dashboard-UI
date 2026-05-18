import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
