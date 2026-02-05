import React, { useState } from 'react'
import { AiFillProfile } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiBell, FiSearch, FiMoreVertical, FiMapPin, FiLogOut } from 'react-icons/fi'

const Header = ({ user }) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="flex items-center justify-between px-4 pt-6 relative">
            {/* Left */}
            <div className="flex items-center gap-3">
                <img
                    src={user?.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border border-zinc-700"
                />
                <div>
                    <p className="text-sm text-gray-400">
                        Welcome back,
                    </p>
                    <h1 className="text-lg font-semibold">{user?.name}</h1>

                </div>
            </div>

            {/* Right */}
            <div className="flex gap-2 items-center">
                <button className="bg-zinc-800 p-4 rounded-lg">
                    <FiSearch />
                </button>

                <button className="bg-zinc-800 p-4 rounded-lg">
                    <FiBell />
                </button>

                {/* Menu Button */}
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="bg-zinc-800 p-4 rounded-lg"
                >
                    <FiMoreVertical />
                </button>
            </div>

            {/* Dropdown Menu */}
            {openMenu && (
                <div className="absolute right-4 top-20 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden z-50">

                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-zinc-800 transition">
                        <FiMapPin />
                        <span>Location</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-zinc-800 transition">
                        <CgProfile />
                        <span>Porfile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-red-500 hover:bg-red-700 transition">
                        <FiLogOut />
                        <span>Logout</span>
                    </button>

                </div>
            )}
        </div>
    )
}

export default Header
