import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    FiGrid,
    FiLink,
    FiFileText,
    FiPlusCircle,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../feature/auth/authSlice";

const SideBar = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const linkBase = "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition";

    const linkInactive = "text-secondary hover:bg-card-hover";

    const linkActive = "bg-blue-500/10 text-blue-400";


    const handleLogout = () => {
        dispatch(clearUser());
        navigate("/login");
        onClose?.();
    };

    return (
        <div className="w-64 bg-card border-r border-default flex flex-col h-screen">
            {/* Logo */}
            <Link to="/">
                <div className="p-6 border-b border-default">
                    <h1 className="text-2xl font-bold text-blue-400">
                        DevPulse
                    </h1>
                    <p className="text-xs text-muted mt-1">
                        AI Auto Posting
                    </p>
                </div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                >
                    <FiGrid className="w-5 h-5" />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/platforms"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                >
                    <FiLink className="w-5 h-5" />
                    Platforms
                </NavLink>

                <NavLink
                    to="/posts"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                >
                    <FiFileText className="w-5 h-5" />
                    Posts
                </NavLink>

                <NavLink
                    to="/create"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                >
                    <FiPlusCircle className="w-5 h-5" />
                    Create Post
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                >
                    <FiSettings className="w-5 h-5" />
                    Settings
                </NavLink>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                           text-sm font-medium text-red-400
                           hover:bg-red-500/10 transition"
                >
                    <FiLogOut className="w-5 h-5" />
                    Logout
                </button>
            </nav>

            {/* User Footer */}
            <div className="p-4 border-t border-default">
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-card-hover">
                    <div className="w-10 h-10 bg-blue-500 rounded-full center text-white font-semibold">
                        {user?.name?.[0] || "U"}
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-primary">
                            {user?.name}
                        </div>
                        <div className="text-xs text-muted truncate">
                            {user?.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
