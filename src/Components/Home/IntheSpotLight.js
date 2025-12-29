import React from 'react';
import { FaChevronRight } from "react-icons/fa";


const IntheSpotLight = () => {

    const buttons = ['Animation', 'Slice of Life', 'Fiction', 'Heros', 'Comedy', 'Romace'];
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center justify-center mb-10">
                <img src="/Images/Home/IntheSpotLight_Header.png" alt="" />
            </div>
            <div className='text-white flex items-center justify-center gap-5 md:gap-20 flex-wrap'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/trending.png" alt="" />
                    <span>Trending </span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/fire.png" alt="" />
                    <span>Popular </span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src="/Images/Home/add.png" alt="" />
                    <span>Recently Added </span>
                </div>
            </div>

            <div className='my-10 flex items-center justify-center gap-5 '>
                {
                    buttons.map((item) => <button className='text-white px-8 border-gray-100 border py-2 rounded-full bg-gray-700'>{item}</button>)
                }
                <button><FaChevronRight className='text-3xl text-white' /></button>
            </div>

        </div>
    );
}

export default IntheSpotLight;
