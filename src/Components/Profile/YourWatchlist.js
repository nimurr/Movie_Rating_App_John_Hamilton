
import React from "react";
import { FaTimes, FaHeart, FaCheck } from "react-icons/fa";

const items = Array(3).fill({
    title: "Spider-Man: Across the Spider-Verse",
    date: "05 Dec, 2025",
    desc:
        "Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions. But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.",
    image:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
});

const YourWatchlist = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-10">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <img src="/Images/Movies/your_watchlist.png" alt="" />
                <button className="text-sm text-orange-400 hover:underline">
                    View All
                </button>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-4 rounded-xl bg-[#16324a] p-4 shadow-lg"
                    >
                        {/* Poster */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-36 w-24 rounded-lg object-cover"
                        />

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <h3 className="text-sm font-semibold text-white line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs text-gray-400">{item.date}</p>
                                <p className="mt-2 text-xs text-gray-300 line-clamp-4">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="mt-3 flex items-center gap-5 text-xs text-gray-400">
                                <button className="flex items-center gap-1 hover:text-red-400">
                                    <FaTimes /> Remove
                                </button>
                                <button className="flex items-center gap-1 hover:text-pink-400">
                                    <FaHeart /> Mark as favorite
                                </button>
                                <button className="flex items-center gap-1 hover:text-green-400">
                                    <FaCheck /> Mark as watched
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default YourWatchlist;