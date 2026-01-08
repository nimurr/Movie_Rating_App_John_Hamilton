'use client';
import ProfileOthersAllinfo from '@/Components/Profile/ProfileOthersAllinfo';
import UpcomingForWatchlist from '@/Components/Profile/UpcomingForWatchlist';
import YourWatchlist from '@/Components/Profile/YourWatchlist';
import React from 'react';

const Page = () => {
    return (
        <div className="w-full min-h-screen ">
            <ProfileOthersAllinfo />
            <UpcomingForWatchlist />
            <YourWatchlist />

        </div>
    );
};

export default Page;
