import React from 'react';

const Keywords = () => {
    return (
        <div>
            <img src="/Images/Others/keyword.png" alt="" />

            <div className='flex items-center gap-3 mt-5 flex-wrap'>
                <span className='bg-gray-400 border-gray-50 border-2 text-white rounded-lg px-3 py-2'>Office Series</span>
                <span className='bg-gray-400 border-gray-50 border-2 text-white rounded-lg px-3 py-2'>Comedy</span>
                <span className='bg-gray-400 border-gray-50 border-2 text-white rounded-lg px-3 py-2'>Series</span>
                <span className='bg-gray-400 border-gray-50 border-2 text-white rounded-lg px-3 py-2'>TV Series</span>
                <span className='bg-gray-400 border-gray-50 border-2 text-white rounded-lg px-3 py-2'>TV Show</span>
            </div>
        </div>
    );
}

export default Keywords;
