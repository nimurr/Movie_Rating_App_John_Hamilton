

'use client'
import Link from "next/link";
import { useState } from "react";
import {
    FaStar,
    FaHeart,
    FaCheck,
    FaTimes,
    FaPlus,
    FaInfoCircle
} from "react-icons/fa";
import { IoArrowUpSharp } from "react-icons/io5";

const Page = () => {
    const [showModal, setShowModal] = useState(false);

    const ShowmodalForDetails = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className=" mx-auto max-w-7xl px-4 py-28">

            <div className="flex items-center py-10">
                <img className="max-w-64" src="/Images/Movies/your_favorites.png" alt="" />
            </div>

            {/* Top bar */}
            <div className="flex text-white  items-center py-3 justify-end flex-wrap gap-3">

                <button className="flex items-center gap-2">
                    Sort By
                    <span className="flex items-center gap-1">
                        1-100 <IoArrowUpSharp />
                    </span>
                </button>
            </div>

            {/* Card */}
            <div className="space-y-3">
                {
                    [...Array(10)].map((item, index) => (
                        <div className="bg-[#16324a] rounded-xl p-4 flex items-center justify-between gap-6">

                            {/* LEFT */}
                            <div className="flex gap-4 items-center">

                                {/* Poster */}
                                <div className="relative w-24 h-28 flex-shrink-0">
                                    <Link href={`/movie/1`} >
                                        <img
                                            src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg"
                                            alt="Movie Poster"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </Link>

                                    <button className="absolute left-2 top-2 bg-black/70 w-8 h-8 rounded flex items-center justify-center text-white">
                                        <FaPlus size={14} />
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="text-white space-y-2">
                                    <span className="bg-[#c53412] px-2 py-1 rounded text-sm font-bold">
                                        #{index + 1}
                                    </span>

                                    <h3 className="text-lg font-semibold">
                                        Spider-Man: Across the Spider-Verse
                                    </h3>

                                    <p className="text-sm text-gray-300">
                                        Movie • 2018 • 2hr 30min
                                    </p>

                                    <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
                                        <div className="flex items-center gap-1">
                                            <FaStar size={14} className="text-yellow-400" />
                                            <span>8.5</span>
                                            <span className="text-xs">(5.2k users)</span>
                                        </div>

                                        <button className="flex items-center gap-1 hover:text-white">
                                            <FaStar size={14} /> Rate
                                        </button>

                                        <button className="flex items-center gap-1 hover:text-white">
                                            <FaCheck size={14} /> Watched
                                        </button>

                                        <button className="flex items-center gap-1 hover:text-white">
                                            <FaHeart size={14} /> Favorite
                                        </button>

                                        <button className="flex items-center gap-1 text-red-400 hover:text-red-500">
                                            <FaTimes size={14} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <button onClick={ShowmodalForDetails} className="text-gray-300 hover:text-white">
                                <FaInfoCircle size={18} />
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center py-5 justify-center">
                <button className="bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center gap-3 border-2 border-[#1a3248] py-3 px-5 rounded-full">Load More</button>
            </div>

            {/* ================= MODAL ================= */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Backdrop */}
                    <div
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/70"
                    />

                    {/* Modal Box */}
                    <div className="relative bg-[#16324a] text-white max-w-lg w-full mx-4 rounded-xl p-6 z-10">

                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-300 hover:text-white"
                        >
                            <FaTimes size={18} />
                        </button>

                        {/* Content */}
                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-1/3 ">
                                <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg" alt="" />
                            </div>
                            <div className="w-full">
                                <h2 className="text-2xl font-semibold mb-3">
                                    Spider-Man: Across the Spider-Verse
                                </h2>

                                <p className="text-sm text-gray-300 mb-4">
                                    Movie • 2018 • 2hr 30min
                                </p>


                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        8.5
                                    </span>
                                    <span className="text-sm text-gray-400">(5.2k ratings)</span>
                                </div>

                            </div>
                        </div>

                        <p className="text-gray-300 mb-6">
                            Miles Morales returns for the next chapter of the Spider-Verse saga,
                            an epic adventure that will transport Brooklyn’s full-time,
                            friendly neighborhood Spider-Man across the Multiverse.
                        </p>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Page;
