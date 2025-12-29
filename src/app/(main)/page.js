'use client';
import HeroSection from '@/Components/Home/HeroSection';
import IntheSpotLight from '@/Components/Home/IntheSpotLight';
import PopularMoviesSection from '@/Components/Home/PopularMoviesSection';
import Top10Wmplist from '@/Components/Home/Top10Wmplist';
import React from 'react';

const Page = () => {


    return (
        <div className=''>
            <HeroSection />
            <PopularMoviesSection />
            <Top10Wmplist />
            <IntheSpotLight />
        </div>
    );
}

export default Page;
