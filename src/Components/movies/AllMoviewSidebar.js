'use client';
import React, { useState } from "react";

const genres = [
    "Action", "Adventure", "News", "Crime", "Comedy", "Family",
    "Drama", "Mystery", "Documentary", "Fantasy", "Reality",
    "Kids", "Soap", "Sci-Fi", "Western"
];

const AllMoviewSidebar = () => {
    const [rating, setRating] = useState(5);

    return (
        <aside className="w-full text-white rounded-xl space-y-6">

            {/* Sort */}
            <div className="bg-[#1a3248] p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Sort Results By</h3>
                <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
                    <option>Rating Descending</option>
                    <option>Rating Ascending</option>
                </select>
            </div>

            {/* Genres */}
            <div className="bg-[#1a3248] p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Genres</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    {genres.map((genre) => (
                        <label key={genre} className="flex items-center gap-2">
                            <input type="checkbox" className="accent-red-500" />
                            {genre}
                        </label>
                    ))}
                </div>
            </div>

            {/* Language */}
            <div className="bg-[#1a3248] p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Language</h3>
                <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
                    <option>Select language</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Japanese</option>
                </select>
            </div>

            {/* User Rating */}
            <div className="bg-[#1a3248] p-3 rounded-lg">
                <h3 className="font-semibold mb-2">User Rating</h3>

                <div className="flex justify-between text-xs mb-1">
                    <span>0</span>
                    <span>{rating}</span>
                    <span>10</span>
                </div>

                <input
                    type="range"
                    min="0"
                    max="10"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full accent-red-500"
                />

                {/* Progress bar */}
                {/* <div className="w-full h-2 bg-gray-700 rounded mt-2">
                    <div
                        className="h-2 bg-red-500 rounded"
                        style={{ width: `${rating * 10}%` }}
                    />
                </div> */}
            </div>

            {/* Show Me */}
            <div className="bg-[#1a3248] p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Show Me</h3>
                <div className="space-y-2 text-sm">
                    {[
                        "Everything",
                        "Movies I haven’t watched",
                        "Movies I have watched",
                        "Series I haven’t watched",
                        "Series I have watched"
                    ].map((item) => (
                        <label key={item} className="flex items-center gap-2">
                            <input type="radio" name="show" className="accent-red-500" />
                            {item}
                        </label>
                    ))}
                </div>
                <br />
                <button className="w-full p-2 rounded bg-red-500">Search</button>
            </div>

            {/* Search */}


        </aside>
    );
};

export default AllMoviewSidebar;
