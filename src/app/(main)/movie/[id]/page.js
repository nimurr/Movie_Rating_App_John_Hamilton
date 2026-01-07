import GastSlider from '@/Components/movieDetails/GastSlider';
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import Keywords from '@/Components/movieDetails/Keywords';
import Top10WMRListForDetails from '@/Components/movieDetails/Top10WMRListForDetails';
import AllSeasons from '@/Components/movieDetails/AllSeasons';



const Page = () => {
    return (
        <div>
            <div className='bg-cover flex items-center justify-center  w-full min-h-[80vh] object-cover bg-[url("/Images/Movies/detialspage_hero.png")] bg-no-repeat h-full'>
                <div className="max-w-7xl mx-auto w-full flex items-center gap-5">
                    <img className='max-w-60' src="/Images/Movies/Movie_poster.png" alt="" />
                    <div>
                        <h2 className='lg:text-5xl text-3xl font-semibold text-white'>The Office Series</h2>
                        <ul className='text-white my-3 flex items-center gap-3 list-disc'>
                            <li className='ml-5'>TV Series</li>
                            <li className='ml-5'>S1-S9</li>
                            <li className='ml-5'>22m</li>
                        </ul>
                        <ul className='text-white my-3 flex items-center gap-5 '>
                            <li className=' flex items-center gap-1 text-xl font-semibold'><img className='w-8' src="/Images/Others/rate_stroke.png" alt="" />9</li>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center gap-3 border-2 border-[#1a3248] py-3 px-5 rounded-full'>Watch Trailer <FaPlay /></button>
                        </ul>
                        <div className='flex items-center gap-2'>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'><IoCheckmarkDoneSharp className='text-2xl' /></button>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'><FaRegHeart className='text-2xl' /></button>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'><CiBookmarkPlus className='text-2xl' /></button>
                        </div>
                        <br />
                        <div className='text-gray-300'>
                            <h2 className='text-xl mb-2'>Overview</h2>
                            <p>A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance. A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.</p>
                            <br />
                            <p className=''>Genre: Mockumentary, Comedy, Sitcom</p>
                            <p className=''>Year: 2005-2013</p>
                            <p className=''>Director: Kelsey Mann</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-10 max-w-7xl mx-auto py-10'>
                <div className='w-2/3'>
                    <GastSlider />
                    <AllSeasons />
                </div>
                <div className='w-1/3 '>
                    <Keywords />
                    <Top10WMRListForDetails />
                </div>
            </div>

        </div>
    );
}

export default Page;
