import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
    <div className="min-h-screen bg-white text-black">
        {/* Navbar will come later */}
        <header className="p-4 border-b">
            <h2>Main Layout Navbar</h2>
            </header>
            
            <main className="p-6">
                <Outlet />
            </main>
            
            {/* Footer will come later */}
            <footer className="p-4 border-t">
                <p>Main Footer</p>
            </footer>
        </div>
    );
}

export default MainLayout;