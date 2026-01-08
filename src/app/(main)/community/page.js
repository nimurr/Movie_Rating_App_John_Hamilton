import CommunityLeftSide from '@/Components/Community/CommunityLeftSide';
import CommunityMainContents from '@/Components/Community/CommunityMainContents';
import CommunityRightSide from '@/Components/Community/CommunityRightSide';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl mx-auto w-full pt-28 text-white grid grid-cols-4 items-start gap-10 '>
            <CommunityLeftSide />
            <CommunityMainContents />
            <CommunityRightSide />
        </div>
    );
}

export default Page;
