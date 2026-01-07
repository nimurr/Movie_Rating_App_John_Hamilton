import LeaderboardLeft from '@/Components/Leaderboard/LeaderboardLeft';
import LeaderboardRight from '@/Components/Leaderboard/LeaderboardRight';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-0 py-28 flex xl:flex-row flex-col gap-5 justify-between'>
            <LeaderboardLeft />
            <LeaderboardRight />
        </div>
    );
}

export default Page;
