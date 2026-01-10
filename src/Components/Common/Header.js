'use client';
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoSearch, IoMenu, IoClose, IoLogOut, IoSettings } from "react-icons/io5";
import { FaBookmark, FaHeart, FaStar, FaEdit, FaUser, FaRedo } from "react-icons/fa";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleBlur = () => {
    setTimeout(() => setSearchOpen(false), 150);
  };

  // Close profile drawer on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Popular", link: "/#popular-movies" },
    { name: "Movies", link: "/movies" },
    { name: "Series", link: "/series" },
    { name: "Leaderboard", link: "/leaderboard" },
    { name: "Community", link: "/community" },
  ];

  return (
    <header className="fixed top-2 left-0 w-full z-50 text-white">
      <div className="flex items-center justify-between bg-[#0b1220]/60 rounded-lg backdrop-blur-sm max-w-7xl mx-auto px-4 md:px-3 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <img src="/Images/Auth/logo.png" alt="Logo" className=" w-28 sm:w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-lg text-gray-200">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className="hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 relative">

          {/* Search */}
          {searchOpen && (
            <input
              autoFocus
              onBlur={handleBlur}
              placeholder="Search..."
              className="absolute md:w-auto right-28 md:right-14 py-2.5 bg-[#111827] border border-gray-600 rounded-lg px-4 text-sm outline-none w-48"
            />
          )}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-3 rounded-lg bg-white/10 hover:bg-white/20"
          >
            <IoSearch className="text-xl" />
          </button>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <img
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white/20"
              src="https://static.vecteezy.com/system/resources/previews/056/673/911/non_2x/businessman-avatar-in-circle-icon-businessman-profile-avatar-illustration-vector.jpg"
              alt="profile"
            />

            {/* Profile Drawer */}
            {profileOpen && (
              <div className="absolute right-0 mt-4 w-64 bg-[#0f172a] rounded-xl shadow-xl border border-white/10 overflow-hidden">

                {/* User Info */}
                <div className="px-4 py-4 border-b border-white/10">
                  <p className="font-semibold">Tasmia Hassan Shabonty</p>
                  <Link href="/profile" className="text-sm text-blue-400 hover:underline">
                    View Profile
                  </Link>
                </div>

                {/* Menu Items */}
                <div className="py-2 text-sm">
                  <Link onClick={() => setProfileOpen(false)} href="/bookmarks">
                    <MenuItem icon={<FaBookmark />} text="Bookmarks" />
                  </Link>

                  <Link onClick={() => setProfileOpen(false)} href="/watchlist">
                    <MenuItem icon={<FaStar />} text="Watchlist" />
                  </Link>
                  <Link onClick={() => setProfileOpen(false)} href="/your-ratings">
                    <MenuItem icon={<FaHeart />} text="Ratings" />
                  </Link>

                  <Link onClick={() => setProfileOpen(false)} href="/reposts">
                    <MenuItem icon={<FaRedo />} text="Repost" />
                  </Link>


                  <Link onClick={() => setProfileOpen(false)} href="/favorite">
                    <MenuItem icon={<FaHeart />} text="Favorite" />
                  </Link>
                  <MenuItem icon={<FaEdit />} text="Edit Profile" />
                  <MenuItem icon={<IoSettings />} text="Settings" />

                  <div className="border-t border-white/10 mt-2">
                    <MenuItem
                      icon={<IoLogOut />}
                      text="Logout"
                      danger
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-3 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* Reusable menu item */
function MenuItem({ icon, text, danger }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 transition ${danger ? "text-red-400 hover:bg-red-500/10" : "text-gray-200"
        }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
