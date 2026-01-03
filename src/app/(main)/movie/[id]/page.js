import React from 'react';

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-20 grid grid-cols-4 gap-5">
            <div className='col-span-1 bg-blue-500 p-5'>
                sidebar
            </div>
            <div className='col-span-3 bg-red-500 p-5'>
                main content
            </div>
        </div>
    );
}

export default Page;
