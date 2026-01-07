'use client';
import React, { useState } from "react";

const ratings = [
    { label: 1, value: 70 },
    { label: 2, value: 65 },
    { label: 3, value: 75 },
    { label: 4, value: 80 },
    { label: 5, value: 85 },
    { label: 6, value: 78 },
    { label: 7, value: 82 },
    { label: 8, value: 88 },
    { label: 9, value: 90 },
    { label: 10, value: 92 },
];

const WmrRatings = () => {
    const [hovered, setHovered] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [rating1, setRating1] = useState(5);
    const [rating2, setRating2] = useState(5);

    return (
        <>
            {/* ================= MAIN SECTION ================= */}
            <section className="w-full bg-[#1a3248] rounded-xl p-6 text-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="mb-5">
                        <img src="/Images/Movies/WmrRatings.png" alt="" />
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="text-red-400 hover:text-red-300 text-sm font-medium"
                    >
                        + Add Your Rating
                    </button>
                </div>

                {/* Content */}
                <div className="flex items-center gap-5">
                    {/* Score */}
                    <div className="min-w-[200px] flex gap-3">
                        <div className="text-5xl font-bold">8.5</div>
                        <div className="text-sm text-gray-300 mt-1">
                            /10 <br /> By 1.9k users
                        </div>
                    </div>

                    {/* Rating Bars */}
                    <div className="flex items-end gap-4 w-full">
                        {ratings.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center w-full relative"
                                onMouseEnter={() => setHovered(item.value)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === item.value && (
                                    <div className="absolute -top-8 text-sm min-w-20 font-semibold text-white bg-black/70 px-2 py-1 rounded">
                                        Rating {item.value}
                                    </div>
                                )}

                                <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
                                    <div
                                        className="h-4 bg-blue-600"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>

                                <span className="text-xs mt-2 text-gray-300">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MODAL ================= */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/80"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal Box */}
                    <div className="relative z-10 w-[95%] max-w-4xl bg-[#1f3a52] rounded-2xl p-8 text-white">

                        {/* Done Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-6 right-6 bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full flex items-center gap-2 text-sm font-semibold"
                        >
                            ✓ Done
                        </button>

                        {/* Rating Section 1 */}
                        <div className="mb-10">
                            <h3 className="uppercase tracking-widest text-sm mb-6">
                                Use the scale to rate this movie
                            </h3>

                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={rating1}
                                onChange={(e) => setRating1(e.target.value)}
                                className="w-full accent-gray-300"
                            />

                            <div className="flex justify-between text-sm text-gray-300 mt-2">
                                {[...Array(10)].map((_, i) => (
                                    <span key={i}>{i + 1}</span>
                                ))}
                            </div>
                        </div>

                        {/* Rating Section 2 */}
                        <div>
                            <h3 className="uppercase tracking-widest text-sm mb-6">
                                How would you rate this movie?
                            </h3>

                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={rating2}
                                onChange={(e) => setRating2(e.target.value)}
                                className="w-full accent-gray-300"
                            />

                            <div className="flex justify-between text-sm text-gray-300 mt-2">
                                {[...Array(10)].map((_, i) => (
                                    <span key={i}>{i + 1}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default WmrRatings;
