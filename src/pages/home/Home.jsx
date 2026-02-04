import { useAuth } from "../../context/authContext";
import {
    FiSearch,
    FiBell,
} from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const { user, loading, getUser, logout } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [])

    return (
        <div className="min-h-screen bg-app text-white pb-24">

            {/* ---------- HEADER ---------- */}
            <div className="flex items-center justify-between px-4 pt-6">
                <div className="flex items-center gap-3">
                    <img
                        src={user?.avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full border border-zinc-700"
                    />
                    <div>
                        <h1 className="text-lg font-semibold">Dashboard</h1>
                        <p className="text-sm text-gray-400">
                            Welcome back,{user?.name}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="bg-zinc-800 p-4 rounded-lg">
                        <FiSearch />
                    </button>
                    <button className="bg-zinc-800 p-4 rounded-lg">
                        <FiBell />
                    </button>
                    <button onClick={logout} className="btn-danger">Logout</button>
                </div>
            </div>

            {/* ---------- AUTOPILOT CARD ---------- */}
            <div className="px-4 mt-6">
                <div className="bg-gradient-to-br from-[#16202b] to-[#0f1722] rounded-2xl p-5 border border-zinc-800 relative overflow-hidden">

                    <span className="absolute top-4 right-4 text-green-400 text-xs flex items-center gap-1">
                        ● ACTIVE
                    </span>

                    <p className="text-xs text-gray-400 tracking-widest">
                        AUTOMATION ENGINE
                    </p>

                    <h2 className="text-xl font-semibold mt-2">
                        LinkedIn Auto-pilot
                    </h2>

                    <p className="text-sm text-gray-400 mt-1">
                        Last run: 12 minutes ago
                    </p>

                    <button className="mt-4 bg-blue-600 px-5 py-2 rounded-lg text-sm font-medium">
                        Manage
                    </button>
                </div>
            </div>

            {/* ---------- OVERVIEW ---------- */}
            <div className="px-4 mt-8">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">Overview</h3>
                    <span className="text-sm text-blue-400">View all</span>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    {/* Next Post */}
                    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                        <p className="text-xs text-gray-400 mb-2">NEXT POST</p>
                        <h4 className="font-semibold">Today, 4:00 PM</h4>
                        <p className="text-sm text-blue-400 mt-1">
                            T-02:45:10
                        </p>
                    </div>

                    {/* Category */}
                    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                        <p className="text-xs text-gray-400 mb-2">ACTIVE CATEGORY</p>
                        <h4 className="font-semibold">React & Web Perf</h4>
                        <p className="text-xs text-gray-400 mt-1">
                            tag: web-perf
                        </p>
                    </div>
                </div>
            </div>

            {/* ---------- PERFORMANCE ---------- */}
            <div className="px-4 mt-8">
                <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">WEEKLY PERFORMANCE</p>
                        <span className="text-green-400 text-sm">+12%</span>
                    </div>

                    <h2 className="text-3xl font-bold mt-2">
                        1,240 <span className="text-sm font-normal text-gray-400">impressions</span>
                    </h2>

                    {/* Fake chart placeholder */}
                    <div className="mt-4 h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg" />
                </div>
            </div>


        </div>
    );
};

export default Home;
