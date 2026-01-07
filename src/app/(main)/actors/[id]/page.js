import OthersInfo from '@/Components/ActorsDetails/OthersInfo';
import Personalinfo from '@/Components/ActorsDetails/Personalinfo';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl mx-auto text-white w-full pt-28 grid grid-cols-4 gap-10'>
            {/* Personalinfo */}
            <Personalinfo />

            {/* others info  */}
            <OthersInfo />

        </div>
    );
}

export default Page;
