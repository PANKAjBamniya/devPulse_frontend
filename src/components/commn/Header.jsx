import { FiMenu, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../../feature/auth/authSlice";

const Header = ({ onMenuClick }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(clearUser());
        navigate("/login");
        onClose?.();
    };

    return (
        <header className="sticky top-0 z-30 bg-app border-b border-default">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">

                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Mobile menu */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg bg-card-hover "
                    >
                        <FiMenu size={22} />
                    </button>

                    {/* Logo / User */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-500 rounded-full center text-white font-semibold">
                            {user?.name?.[0] || "U"}
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-xs text-muted">Welcome back</p>
                            <p className="text-sm font-semibold">
                                {user?.name}
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 ">
                    <Link
                        to="/dashboard"
                        className="sm:inline-block bg-card-hover px-5 py-4 rounded-lg text-sm bg-gray-800 font-bold"
                    >
                        Dashboard
                    </Link>

                    <button
                        onClick={handleLogout}
                        className=" items-center gap-3 px-4 md:py-4 p-3 rounded-xl
                           text-sm font-medium text-red-400
                        bg-red-500/10 transition hover:bg-red-700/50 hidden sm:inline-block"
                    >
                        <FiLogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
