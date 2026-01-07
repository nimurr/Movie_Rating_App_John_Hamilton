'use client';

import { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const castData = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: "Rainn Wilson",
    role: "Dwight Schrute",
    image: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const GastSlider = () => {
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
        <section className="w-full ">

            {/* Title */}
            <div className="flex items-center gap-3 mb-10 ">
                <span className="text-red-500 text-2xl">★</span>
                <h1 className="text-white text-2xl font-bold tracking-widest">CAST</h1>
                <span className="text-red-500 text-2xl">★</span>
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
                    className="flex gap-10 overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar"
                >
                    {castData.map((cast) => (
                        <div
                            key={cast.id}
                            className="flex items-center gap-3 min-w-[250px] text-center text-white"
                        >
                            <img
                                src={cast.image}
                                className="w-28 h-28 mx-auto rounded-full border-4 border-white/20 object-cover"
                            />
                            <div>
                                <h3 className="mt-3 font-semibold">{cast.name}</h3>
                                <p className="text-sm text-gray-300">{cast.role}</p>
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

export default GastSlider;
