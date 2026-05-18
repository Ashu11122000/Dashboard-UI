import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
            <Outlet />
        </div>
    </div>
    );
}

export default AuthLayout;