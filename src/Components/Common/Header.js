'use client';
import Link from "next/link";
import React, { useState, useRef } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const inputRef = useRef(null);

    const handleBlur = () => {
        setTimeout(() => setOpen(false), 150);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/90 md:bg-transparent backdrop-blur-sm  md:backdrop-blur-none text-white">
            <div className=" flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-wide">
                    <img src="/Images/Auth/logo.png" alt="Logo" className="h-8 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10 text-lg text-gray-200">
                    {['Popular', 'Movies', 'Series', 'Leaderboard', 'Community'].map((item) => (
                        <a key={item} className="hover:text-white cursor-pointer transition">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3 relative">
                    {/* Search */}
                    {open && (
                        <input
                            ref={inputRef}
                            autoFocus
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Search..."
                            className="absolute right-14 md:right-20 py-2.5 bg-[#111827] border border-gray-600 rounded-lg px-4 text-sm outline-none w-48"
                        />
                    )}


                    <button
                        onClick={() => setOpen(true)}
                        className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    >
                        <IoSearch className="text-xl" />
                    </button>


                    {/* Sign In */}
                    <button className="hidden sm:block bg-white text-black text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-200 transition">
                        Sign In
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    >
                        {menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-[#0b1220]/90 backdrop-blur-sm border-t border-white/10">
                    <nav className="flex flex-col px-6 py-4 gap-4 text-gray-200">
                        {['Popular', 'Movies', 'Series', 'Leaderboard', 'Community'].map((item) => (
                            <a
                                key={item}
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white cursor-pointer transition"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="mt-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg w-fit">
                            Sign In
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
