import { useState } from "react";
import { FiMenu, FiMoreVertical, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = ({ onMenuClick }) => {
    const user = useSelector((state) => state.auth.user);

    return (
        <header className="sticky top-0 z-30 bg-app border-b border-default">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">

                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Mobile menu */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg bg-card-hover"
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
                <div className="flex items-center gap-2 relative">
                    <Link
                        to="/dashboard"
                        className="hidden sm:inline-block bg-card-hover px-5 py-4 rounded-lg text-sm bg-gray-800 font-bold"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
