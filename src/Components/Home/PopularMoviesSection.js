import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const movies = [
    {
        id: 1,
        title: "Stranger Things",
        rating: "8.5",
        type: "TV Series",
        year: "2016 - 2025",
        duration: "1h",
        description:
            "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits.",
        image:
            "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
];

const PopularMoviesSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentTrailer, setCurrentTrailer] = useState("");

    const showmodalForShowThisMoviwVideo = (trailer) => {
        setCurrentTrailer(trailer);
        setShowModal(true);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-20">
                {/* Header */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/Images/Home/popular-movies_header.png"
                        alt="Popular Movies"
                    />
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="rounded-xl"
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#1a3248] rounded-xl p-8 md:px-20 py-10">

                                {/* Left Content */}
                                <div className="text-white">
                                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                        {movie.title}
                                    </h2>

                                    <ul className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                                        <span className="text-orange-500 font-semibold">
                                            ⭐ {movie.rating}
                                        </span>
                                        <li className="list-disc ml-3">{movie.type}</li>
                                        <li className="list-disc ml-3">{movie.year}</li>
                                        <li className="list-disc ml-3">{movie.duration}</li>
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {[...Array(6)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="border border-gray-400 px-3 py-1 rounded-lg bg-gray-500 text-white text-sm"
                                            >
                                                Kdrama
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        {movie.description}
                                    </p>

                                    <div className="flex gap-4">
                                        <Link
                                            href={`/movie/${movie.id}`}
                                            className="scoop-btn scoop bg-orange-600 hover:bg-orange-700 px-6 py-3 text-white font-medium"
                                        >
                                            View Details
                                        </Link>

                                        <button
                                            onClick={() =>
                                                showmodalForShowThisMoviwVideo(movie.trailer)
                                            }
                                            className="scoop-btn scoop bg-white text-black px-6 py-3 font-medium flex items-center gap-2"
                                        >
                                            Watch Trailer ▶
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center md:justify-end">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="max-w-sm w-full max-h-96 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* ================= MODAL ================= */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/80"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative z-10 w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-white text-2xl"
                        >
                            ✕
                        </button>

                        <iframe
                            className="w-full h-[250px] md:h-[450px]"
                            src={'https://cdn.pixabay.com/video/2022/09/16/131506-750569073_large.mp4'}
                            title="Movie Trailer"
                            controls
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PopularMoviesSection;
