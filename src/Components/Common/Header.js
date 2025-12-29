'use client';
import React, { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";

export default function Header() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    const handleBlur = () => {
        setTimeout(() => setOpen(false), 150);
    };

    return (
        <header className="w-full flex items-center justify-center text-white ">
            <div className="max-w-7xl fixed w-full mx-auto top-0 flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-extrabold tracking-wide">
                    <img src="/Images/Auth/logo.png" alt="" />
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-xl text-gray-200">
                    <a className="hover:text-white cursor-pointer">Popular</a>
                    <a className="hover:text-white cursor-pointer">Movies</a>
                    <a className="hover:text-white cursor-pointer">Series</a>
                    <a className="hover:text-white cursor-pointer">Leaderboard</a>
                    <a className="hover:text-white cursor-pointer">Community</a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 relative">
                    {/* Search */}
                    {open && (
                        <input
                            ref={inputRef}
                            autoFocus
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Search..."
                            className="absolute right-24 py-3 bg-[#111827] border border-gray-600 rounded-full px-4 text-sm outline-none w-48"
                        />
                    )}
                    {!open && (
                        <button
                            onClick={() => setOpen(true)}
                            className="p-3 rounded-lg   hover:bg-white/20  bg-white/10"
                        >
                            <IoSearch className="text-xl" />

                        </button>
                    )}

                    {/* Sign In */}
                    <button className="bg-white text-black text-sm font-semibold px-4 py-3 rounded-lg hover:bg-gray-200">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
}
