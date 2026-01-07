'use client';
import React, { useState } from "react";

const mediaData = {
    Videos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
    ],
    Photos: [
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpgjpg",
    ],
    Posters: [
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        "https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg",
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    ],
};

const tabs = ["Videos", "Photos", "Posters"];

const AllMedia = () => {
    const [activeTab, setActiveTab] = useState("Videos");

    return (
        <section className="w-full bg-gradient-to-b from-[#0f2537] to-[#071722] py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <div className="mb-5">
                        <img src="/Images/Movies/media_all.png" alt="" />
                    </div>

                    {/* TABS */}
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-1 border-b-2 transition ${activeTab === tab
                                    ? "text-white border-orange-500"
                                    : "border-transparent hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MEDIA LIST */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {mediaData[activeTab].map((img, index) => (
                        <div
                            key={index}
                            className="min-w-[180px] h-[260px] rounded-lg overflow-hidden bg-black/30 hover:scale-105 transition cursor-pointer"
                        >
                            <img
                                src={img}
                                alt="media"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    {/* VIEW MORE */}
                    <div className="min-w-[180px] h-[260px] rounded-lg bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition cursor-pointer">
                        <span className="text-sm font-medium">View More →</span>
                    </div>
                </div>

                {/* DOT INDICATORS */}
                <div className="flex justify-center mt-6 gap-2">
                    {[...Array(6)].map((_, i) => (
                        <span
                            key={i}
                            className="w-2 h-2 rounded-full bg-white/30"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllMedia;
