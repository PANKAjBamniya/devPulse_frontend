import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/commn/SideBar";
import Header from "../components/commn/Header";

const HomeLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen bg-app text-primary flex overflow-hidden">

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed lg:static inset-y-0 left-0 z-50 w-64
                    bg-card border-r border-default
                    transform transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >
                <SideBar onClose={() => setSidebarOpen(false)} />
            </aside>

            <div className="flex-1 flex flex-col overflow-hidden">

                <Header onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto px-4 lg:px-6 py-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default HomeLayout;
