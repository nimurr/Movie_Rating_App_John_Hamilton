'use client';
import Link from "next/link";
import { useRef } from "react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const followers = Array(8).fill({
    name: "Miranda baju",
    username: "@miris",
    avatar: "https://i.pravatar.cc/100?img=32",
    following: false,
});

const suggestions = Array(3).fill({
    name: "Miranda baju",
    username: "@miris",
    avatar: "https://i.pravatar.cc/100?img=32",
});

const Page = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const inputRef = useRef(null);

    const handleBlur = () => {
        setTimeout(() => setSearchOpen(false), 150);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-24 text-white">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-4">
                {/* FOLLOWERS LIST */}
                <div className="xl:col-span-3 ">
                    <div className="mb-6 flex relative items-center justify-between">

                        <img className="max-w-60" src="/Images/Movies/followers.png" alt="" />

                        {searchOpen && (
                            <input
                                ref={inputRef}
                                autoFocus
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Search..."
                                className="absolute right-14 md:right-14 py-2.5 bg-[#111827] border border-gray-600 rounded-lg px-4 text-sm outline-none w-48"
                            />
                        )}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
                        >
                            <IoSearch className="text-xl" />
                        </button>

                    </div>

                    <div className="rounded-xl bg-[#16324a]">
                        {followers.map((user, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between border-b border-white/20 px-5 py-4 last:border-none"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={user.avatar}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-xs text-gray-400">{user.username}</p>
                                    </div>
                                </div>

                                <button
                                    className={`rounded-full px-5 py-1 text-xs font-semibold transition ${user.following
                                        ? "bg-black/60 text-gray-300 hover:bg-red-600"
                                        : "bg-orange-500 hover:bg-orange-600"
                                        }`}
                                >
                                    {user.following ? "Unfollow" : "Follow"}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button className="rounded-full bg-white/10 px-6 py-2 text-xs hover:bg-white/20">
                            Load More
                        </button>
                    </div>
                </div>

                {/* SUGGESTIONS */}
                <aside className="hidden xl:block">
                    <div className="rounded-xl bg-[#16324a] p-4">
                        <img className="max-w-48 mb-5" src="/Images/Movies/suggestions.png" alt="" />

                        <div className="space-y-4">
                            {suggestions.map((user, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.avatar}
                                            className="h-9 w-9 rounded-full"
                                        />
                                        <div>
                                            <p className="text-sm">{user.name}</p>
                                            <p className="text-xs text-gray-400">{user.username}</p>
                                        </div>
                                    </div>
                                    <button className="rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold hover:bg-orange-600">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Page;
