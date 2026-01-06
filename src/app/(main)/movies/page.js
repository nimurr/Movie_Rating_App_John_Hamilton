import AllMoviewMainContent from '@/Components/movies/AllMoviewMainContent';
import AllMoviewSidebar from '@/Components/movies/AllMoviewSidebar';
import React from 'react';

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-20 grid grid-cols-4 gap-5">
            <div className='col-span-1 w-full'>
                <AllMoviewSidebar />
            </div>
            <div className='col-span-3'>
                <AllMoviewMainContent />
            </div>
        </div>
    );
}

export default Page;
