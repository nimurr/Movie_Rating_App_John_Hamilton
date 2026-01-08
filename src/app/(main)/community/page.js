import CommunityLeftSide from '@/Components/Community/CommunityLeftSide';
import CommunityMainContents from '@/Components/Community/CommunityMainContents';
import CommunityRightSide from '@/Components/Community/CommunityRightSide';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl relative mx-auto w-full pt-28 text-white grid grid-cols-4 items-start gap-10 '>
            <div className='sticky top-24'>
                <CommunityLeftSide />
            </div>
            <CommunityMainContents />
            <div className='sticky top-24'>
                <CommunityRightSide />
            </div>
        </div>
    );
}

export default Page;
