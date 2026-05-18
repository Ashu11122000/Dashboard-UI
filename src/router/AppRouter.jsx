import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Main Website Layout */}
            <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;