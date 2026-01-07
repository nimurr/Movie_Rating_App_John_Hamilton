'use client';

import React, { useState } from "react";
import Link from "next/link";

const data = {
    Today: Array(10).fill({
        episode: "01",
        title: "The Stranger Things Day : Season 1",
        rating: "8.5",
        year: "2022",
    }),
    Week: Array(10).fill({
        episode: "01",
        title: "The Stranger Things Week : Season 1",
        rating: "8.5",
        year: "2021",
    }),
    Month: Array(10).fill({
        episode: "01",
        title: "The Stranger Things Month : Season 1",
        rating: "8.5",
        year: "2020",
    }),
};

const Top10WMRListForDetails = () => {
    const [activeTab, setActiveTab] = useState("Today");

    return (
        <div className="max-w-7xl mx-auto lg:px-4 py-16">

            {/* Title */}
            <div className="flex items-center justify-center mb-10">
                <img src="/Images/Home/top_10_wmp.png" alt="Top 10" />
            </div>

            {/* Tabs */}
            <div className="flex justify-center w-full mb-10">
                <div className="bg-[#122433] w-full flex items-center justify-center p-3 rounded-lg gap-3">
                    {["Today", "Week", "Month"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg font-medium py-2 px-5 transition rounded-lg
                ${activeTab === tab
                                    ? "bg-[#0f172a] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="flex flex-col gap-3">
                {data[activeTab].map((item, index) => (
                    <Link
                        key={index}
                        href="/movie/1"
                        className="bg-[#122433] cursor-pointer flex gap-4 text-white p-5 rounded-xl hover:bg-[#0e1d29] transition"
                    >
                        <img
                            className="w-20 h-32 object-cover rounded-md"
                            src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg"
                            alt="movie poster"
                        />

                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-sm text-gray-400 mb-2">
                                    Episode {item.episode}
                                </div>

                                <h3 className="text-base font-semibold mb-4 leading-snug">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-orange-500">⭐ {item.rating}</span>
                                <span className="text-gray-400">{item.year}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Top10WMRListForDetails;
