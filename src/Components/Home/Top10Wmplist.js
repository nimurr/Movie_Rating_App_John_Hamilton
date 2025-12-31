
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const data = {
    Today: Array(10).fill({
        episode: "01",
        title: "The Strangers Things day : Season 1",
        rating: "8.5",
        year: "2022",
    }),
    Week: Array(10).fill({
        episode: "01",
        title: "The Strangers Things week : Season 1",
        rating: "8.5",
        year: "2021",
    }),
    Month: Array(10).fill({
        episode: "01",
        title: "The Strangers Things month : Season 1",
        rating: "8.5",
        year: "2022",
    }),
};

const Top10Wmplist = () => {
    const [activeTab, setActiveTab] = useState("Today");

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            <div className="flex items-center justify-center mb-10">
                <img src="/Images/Home/top_10_wmp.png" alt="" />
            </div>

            {/* Tabs */}
            <div className="flex justify-center ">
                <div className="bg-[#122433] flex items-center p-3 rounded-lg w-auto gap-3 mb-8">
                    {["Today", "Week", "Month"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg font-medium py-2 px-5  pb-2 transition ${activeTab === tab
                                ? "bg-[#0f172a] rounded-lg text-white"
                                : "border-transparent text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data[activeTab].map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/movie/1`} className="bg-[#122433] cursor-pointer gap-3 flex items-center text-white p-5 rounded-xl h-full">
                            <img className="w-20 h-32" src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg" alt="" />
                            <div>
                                <div className="text-sm text-gray-400 mb-2">
                                    Episode {item.episode}
                                </div>

                                <h3 className="text-base font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">⭐ {item.rating}</span>
                                    <span className="text-gray-400">{item.year}</span>
                                </div>
                            </div>

                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Top10Wmplist;