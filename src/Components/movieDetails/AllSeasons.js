

'use client';

import { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const castData = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: "Rainn Wilson",
    role: "Dwight Schrute",
    image: `https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg`,
}));

const AllSeasons = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalDots, setTotalDots] = useState(0);

    const scroll = (direction) => {
        if (!sliderRef.current) return;
        const width = sliderRef.current.offsetWidth;

        sliderRef.current.scrollBy({
            left: direction === "left" ? -width : width,
            behavior: "smooth",
        });
    };

    // 🔹 Calculate dots + active index
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const index = Math.round(
                slider.scrollLeft / slider.offsetWidth
            );
            setCurrentIndex(index);
        };

        const dots = Math.ceil(slider.scrollWidth / slider.offsetWidth);
        setTotalDots(dots);

        slider.addEventListener("scroll", handleScroll);
        return () => slider.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔹 Click dot
    const goToSlide = (index) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollTo({
            left: index * sliderRef.current.offsetWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full py-20">

            {/* Title */}
            <div className="mb-5">
                <img src="/Images/Movies/all_season.png" alt="" />
            </div>

            {/* Slider */}
            <div className="relative">
                {/* Left */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute right-16 -top-20 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                >
                    <MdChevronLeft size={30} />
                </button>

                {/* Track */}
                <div
                    ref={sliderRef}
                    className="flex gap-5 overflow-x-scroll scroll-smooth no-scrollbar"
                >
                    {castData.map((cast) => (
                        <div
                            key={cast.id}
                            className="flex min-w-[350px] bg-[#1a3248] rounded-lg p-2 gap-4 text-white flex-shrink-0"
                        >
                            {/* Image */}
                            <img
                                src={cast.image}
                                className="w-28 h-40 rounded border-4 border-white/20 object-cover"
                                alt="Season"
                            />

                            {/* Content */}
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-lg mb-2">Season 1</h3>

                                <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
                                    <li className="text-orange-500 font-semibold">⭐ 9.5</li>
                                    <li className="list-disc ml-4">TV Series</li>
                                    <li className="list-disc ml-4">S1-S9</li>
                                    <li className="list-disc ml-4">22m</li>
                                </ul>

                                <p className="text-xs text-gray-300 max-w-60 leading-relaxed">
                                    This season introduced the main characters and established the general
                                    plot, which revolves around Michael Scott .
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Right */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 -top-20 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                >
                    <MdChevronRight size={30} />
                </button>
            </div>

            {/* 🔹 Dynamic Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalDots }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default AllSeasons;
