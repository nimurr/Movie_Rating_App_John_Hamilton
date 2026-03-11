'use client'
import React, { useState } from 'react';
import GastSlider from '@/Components/movieDetails/GastSlider';
import { FaPlay } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import Keywords from '@/Components/movieDetails/Keywords';
import Top10WMRListForDetails from '@/Components/movieDetails/Top10WMRListForDetails';
import AllSeasons from '@/Components/movieDetails/AllSeasons';
import WmrRatings from '@/Components/movieDetails/WmrRatings';
import UserRatingsAll from '@/Components/movieDetails/UserRatingsAll';
import AllMedia from '@/Components/movieDetails/AllMedia';
import RecommendationsMovie from '@/Components/movieDetails/RecommendationsMovie';
import { Modal } from 'antd';
import { useGetMovieQuery } from '@/redux/fetures/movies/movies';

const Page = ({ params }) => {
    const { id } = params;
    const { data, isLoading } = useGetMovieQuery(id);
    const movieDetails = data?.data?.attributes;
    console.log(movieDetails)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModalForRunVideo = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const convertMinutesToHours = (minutes) => {
        if (!minutes) return "N/A";
        const hrs = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hrs}h ${mins}m`;
    };

    return (
        <div>
            {
                isLoading && <p className='text-center text-xl text-red-600 py-32'>Loading...</p>
            }
            {/* Hero Section */}
            <div style={{ backgroundImage: `url(${movieDetails?.banner})` }} className={`bg-cover flex items-center justify-center w-full min-h-[80vh] object-cover  bg-no-repeat h-full xl:px-0 px-5 py-10 relative`}>

                <div className="absolute inset-0 bg-black/50  " />

                <div className="max-w-7xl z-10 mx-auto w-full flex xl:flex-row flex-col items-center gap-5 lg:pt-0 pt-20">
                    <img className='max-w-48 lg:max-w-60 rounded' src={movieDetails?.poster} alt="" />
                    <div>
                        <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
                            {movieDetails?.overview?.length > 70
                                ? movieDetails?.overview.slice(0, 70) + '...'
                                : movieDetails?.overview
                            }
                        </h2>
                        <ul className='text-white my-3 flex items-center gap-3 list-disc'>
                            <li className='ml-5'>{movieDetails?.title}</li>
                            <li className='ml-5'>S1-S9</li>
                            <li className='ml-5'>{convertMinutesToHours(movieDetails?.runtime)}</li>
                        </ul>
                        <ul className='text-white my-3 flex items-center gap-5 '>
                            <li className='flex items-center gap-1 text-xl font-semibold'>
                                <img className='w-8' src="/Images/Others/rate_stroke.png" alt="" />
                                {movieDetails?.rating?.toFixed(1)}
                            </li>
                            <button
                                onClick={handleShowModalForRunVideo}
                                className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center gap-3 border-2 border-[#1a3248] py-3 px-5 rounded-full'
                            >
                                Watch Trailer <FaPlay />
                            </button>
                        </ul>
                        <div className='flex items-center gap-2'>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'>
                                <IoCheckmarkDoneSharp className='text-2xl' />
                            </button>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'>
                                <FaRegHeart className='text-2xl' />
                            </button>
                            <button className='bg-[#1a3248] hover:bg-[#274c6e] text-white flex items-center justify-center gap-3 border-2 border-[#1a3248]  w-12 h-12 rounded-full'>
                                <CiBookmarkPlus className='text-2xl' />
                            </button>
                        </div>
                        <br />
                        <div className='text-gray-300'>
                            <h2 className='text-xl mb-2'>Overview</h2>
                            <p>{movieDetails?.overview}</p>
                            <br />
                            <p>Genre: {movieDetails?.genres?.join(', ') || "N/A"}</p>
                            <p>Year: {movieDetails?.release_date?.split('-')[0]}</p>
                            <p>Director: {movieDetails?.director || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Trailer */}
            <Modal
                open={isModalOpen}
                onCancel={handleCloseModal}
                footer={null}
                width={800}
                bodyStyle={{ padding: 0 }}
            >
                <div className='w-full h-[450px] p-5'>
                    <iframe
                        className='w-full h-full'
                        src={movieDetails?.trailer}
                        title="Trailer"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>

            {/* Movie Details Sections */}
            <div className='flex xl:flex-row flex-col gap-10 max-w-7xl mx-auto py-10 xl:px-0 px-5'>
                <div className='xl:w-2/3'>
                    <GastSlider />
                    <AllSeasons />
                    <WmrRatings />
                    <UserRatingsAll />
                    <AllMedia />
                    <RecommendationsMovie />
                </div>
                <div className='xl:w-1/3 '>
                    <Keywords />
                    <Top10WMRListForDetails />
                </div>
            </div>
        </div>
    );
};

export default Page;