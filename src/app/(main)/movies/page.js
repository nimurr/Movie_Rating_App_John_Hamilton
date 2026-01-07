'use client';
import AllMoviewMainContent from '@/Components/movies/AllMoviewMainContent';
import AllMoviewSidebar from '@/Components/movies/AllMoviewSidebar';
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Page = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [modalImage, setModalImage] = useState('');

    // Function to open modal with an image
    const openModal = (imageUrl) => {
        setModalImage(imageUrl);
        setModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-20 grid grid-cols-4 gap-5">
            {/* Sidebar */}
            <div className='col-span-1 w-full'>
                <AllMoviewSidebar />
            </div>

            {/* Main content */}
            <div className='col-span-3'>
                {/* Pass openModal to your main content if you want clicking images to open modal */}
                <AllMoviewMainContent openModal={openModal} />
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative bg-transparent p-5 rounded-xl max-w-xl w-full">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-2 right-2 text-white text-4xl hover:text-gray-300"
                        >
                            <IoClose />
                        </button>
                        <img
                            src={'/Images/Others/moviews-ads-404.png'}
                            alt="Modal"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
