import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const IntheSpotLight = () => {

    const buttons = [
        'Animation', 'Slice of Life', 'Fiction', 'Heros', 'Comedy', 'Romance',
        'Drama', 'Thriller', 'Sci-Fi', 'Adventure', 'Mystery'
    ];

    const visibleCount = 6; // how many show at once
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + visibleCount < buttons.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            {/* Header */}
            <div className="flex items-center justify-center mb-10">
                <img src="/Images/Home/IntheSpotLight_Header.png" alt="" />
            </div>

            {/* Category */}
            <div className='text-white flex items-center justify-center gap-5 md:gap-20 flex-wrap'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/trending.png" alt="" />
                    <span>Trending</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/fire.png" alt="" />
                    <span>Popular</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/add.png" alt="" />
                    <span>Recently Added</span>
                </div>
            </div>

            {/* Sliding Buttons */}
            <div className='my-10 flex items-center justify-center gap-4'>

                {/* Left Arrow */}
                <button onClick={handlePrev} disabled={startIndex === 0}>
                    <FaChevronLeft
                        className={`text-2xl ${startIndex === 0 ? 'text-gray-600' : 'text-white'
                            }`}
                    />
                </button>

                {/* Buttons Container */}
                <div className="overflow-hidden max-w-[900px]">
                    <div
                        className="flex gap-4 transition-transform duration-300"
                        style={{
                            transform: `translateX(-${startIndex * 140}px)`
                        }}
                    >
                        {buttons.map((item, index) => (
                            <button
                                key={index}
                                className="text-white px-8 py-2 border border-gray-400 rounded-full bg-gray-700 whitespace-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button onClick={handleNext} disabled={startIndex + visibleCount >= buttons.length}>
                    <FaChevronRight
                        className={`text-2xl ${startIndex + visibleCount >= buttons.length
                            ? 'text-gray-600'
                            : 'text-white'
                            }`}
                    />
                </button>

            </div>


            {/* items all here after click button item */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                {
                    [...Array(20)].map((item) => (
                        <div className='text-white relative bg-[#1a3248] rounded-lg overflow-hidden'>
                            <img className='w-full max-h-60 object-cover' src="https://i.ibb.co.com/8nSPBNBD/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547-screen.jpg" alt="" />
                            <div className='absolute top-52 right-5'>
                                <span>8.5</span>
                            </div>
                            <div className='p-3'>
                                <h2 className='my-3 font-semibold'>Spider-Man: Across the Spider-Verse</h2>
                                <ul className='list-disc text-xs flex items-center gap-5'>
                                    <li className='ml-3'>Movie</li>
                                    <li className='ml-3'>2018</li>
                                    <li className='ml-3'>2hr 30min</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default IntheSpotLight;
