import React from 'react';

const ProfileOthersAllinfo = () => {
    return (
        <div>
            {/* Stats Bar */}
            <div className="py-20 bg-[#0f2a3d83] text-white px-1 6">
                <div className="grid xl:grid-cols-3 max-w-7xl mx-auto w-full gap-10 items-start">

                    {/* Total Rating */}
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-orange-500">★</span>
                            <h3 className="font-semibold uppercase tracking-wide">
                                Total Rating
                            </h3>
                            <span className="text-orange-500">★</span>
                        </div>
                        <p className='border rounded-lg border-gray-400 p-2 font-semibold text-xl'>10</p>
                    </div>

                    {/* Rating Overview */}
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-orange-500">★</span>
                            <h3 className="font-semibold uppercase tracking-wide">
                                Rating Overview
                            </h3>
                            <span className="text-orange-500">★</span>
                        </div>

                        {/* Bars */}
                        <div className='border rounded-lg border-gray-400 p-2'>
                            <div className="flex justify-between items-end text-xs text-gray-300 mt-1 px-4 h-20">
                                {[20, 40, 25, 60, 30, 45, 70, 35, 55, 65].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-5 bg-orange-600 rounded-sm"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-between text-xs text-gray-300 mt-1 px-4">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <span key={i}>{i + 1}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Watched Genre */}
                    <div className="">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-orange-500">★</span>
                            <h3 className="font-semibold uppercase tracking-wide">
                                Watched Genre
                            </h3>
                            <span className="text-orange-500">★</span>
                        </div>

                        <div className="grid lg:w-1/2 mx-auto grid-cols-2 gap-2 text-sm text-gray-200 border rounded-lg border-gray-400 p-2">
                            <span><span className='text-orange-500 text-2xl'>■</span> Horror</span>
                            <span><span className='text-orange-500 text-2xl'>■</span> Animation</span>
                            <span><span className='text-orange-500 text-2xl'>■</span> Romance</span>
                            <span><span className='text-orange-500 text-2xl'>■</span> Action</span>
                            <span><span className='text-orange-500 text-2xl'>■</span> Adventure</span>
                            <span><span className='text-orange-500 text-2xl'>■</span> Comedy</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileOthersAllinfo;
