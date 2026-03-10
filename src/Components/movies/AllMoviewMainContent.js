import Link from 'next/link';
import React from 'react';

const AllMoviewMainContent = ({ movies, isLoading }) => {
    console.log(movies)
    const convertMinutesToHours = (minutes) => {
        if (!minutes) return "N/A";
        const hrs = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hrs}h ${mins}m`;
    };
    return (
        <div>
            {
                isLoading && <p className='text-center text-xl text-red-600 py-10'>Loading...</p>
            }
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {
                    movies?.map((item) => (
                        <Link href={`/movie/${item?.id}`} key={item} className='text-white relative bg-[#1a3248] rounded-lg overflow-hidden'>
                            <img className='w-full max-h-60 object-cover' src={item?.poster} alt="" />
                            <div className='absolute border-2 border-red-500 w-10 h-10 flex items-center justify-center rounded-full top-48 right-2 bg-red-500'>
                                <span>{item?.rating.toFixed(1)}</span>
                            </div>
                            <div className='p-3'>
                                <h2 className='my-3 font-semibold'>{item?.overview.length > 70 ? item?.overview.slice(0, 70) + '...' : item?.overview}</h2>
                                <ul className='list-disc text-xs flex items-center flex-wrap gap-3'>
                                    <li className='ml-3'>Movie</li>
                                    <li className='ml-3'>{item?.release_date}</li>
                                    <li className='ml-3'>{convertMinutesToHours(item?.runtime)}</li>
                                </ul>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default AllMoviewMainContent;
