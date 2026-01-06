'use client';
import Link from "next/link";
import React, { useState, useRef } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = () => {
    setTimeout(() => setSearchOpen(false), 150);
  };

  const navItems = [
    { name: "Popular", link: "/#popular-movies" },
    { name: "Movies", link: "/movies" },
    { name: "Series", link: "/series" },
    { name: "Leaderboard", link: "/leaderboard" },
    { name: "Community", link: "/community" },
  ];

  return (
    <header className="fixed top-2 left-0 w-full z-50  text-white">
      <div className="flex items-center justify-between bg-[#0b1220]/60 rounded-lg  backdrop-blur-sm max-w-7xl mx-auto px-4 md:px-3 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <img src="/Images/Auth/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-lg text-gray-200">
          {navItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="hover:text-white cursor-pointer transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 relative">
          {/* Search */}
          {searchOpen && (
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
            onClick={() => setSearchOpen(true)}
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
            {navItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white cursor-pointer transition"
              >
                {item.name}
              </Link>
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
