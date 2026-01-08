import Link from 'next/link';
import React from 'react';
import { FaCheck, FaHeart, FaPlus, FaStar, FaTimes } from 'react-icons/fa';

const CommunityLeftSide = () => {
    return (
        <div className=''>
            <div className="flex items-center mb-5">
                <img className='w-64' src="/Images/Movies/wmrLeaderboard.png" alt="" />
            </div>
            <div className='space-y-2'>
                {
                    [...Array(5)].map((item) => (
                        <div className="bg-[#16324a] rounded-xl p-2 flex items-center justify-between gap-6">

                            {/* LEFT */}
                            <div className="flex gap-4 items-center">

                                {/* Poster */}
                                <div className="relative flex-shrink-0">
                                    <Link href={`/movie/1`} >
                                        <img
                                            src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg"
                                            alt="Movie Poster"
                                            className="w-20 h-full object-cover rounded-lg"
                                        />
                                    </Link>

                                    <button className="absolute left-2 top-2 bg-black/70 w-8 h-8 rounded flex items-center justify-center text-white">
                                        <FaPlus size={14} />
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="text-white space-y-2">

                                    <h3 className=" font-semibold">
                                        Spider-Man: Across the Spider-Verse
                                    </h3>

                                    <div className="flex items-center gap-5 text-sm text-gray-300">

                                        <button className="flex items-center gap-1 hover:text-white">
                                            <FaStar size={14} /> Rate
                                        </button>

                                        <button className="flex items-center gap-1 hover:text-white">
                                            <FaCheck size={14} /> Watched
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CommunityLeftSide;
