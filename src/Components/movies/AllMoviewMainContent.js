import Link from 'next/link';
import React from 'react';

const AllMoviewMainContent = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    [...Array(20)].map((item) => (
                        <Link href={`/movie/1`} key={item} className='text-white relative bg-[#1a3248] rounded-lg overflow-hidden'>
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
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default AllMoviewMainContent;
