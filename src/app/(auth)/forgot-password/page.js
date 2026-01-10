'use client'
import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

            {/* Left Side */}
            <div className='flex justify-center items-center mt-20'>
                <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>

                    {/* Logo & Title */}
                    <div>
                        <img src="/Images/Auth/logo.png" alt="logo" />
                        <p className='mt-2'>Forgot your password?</p>
                    </div>

                    {/* Description */}
                    <p className='mt-6 text-gray-400'>
                        Please enter your email address to receive an OTP
                        for resetting your password.
                    </p>

                    {/* Email */}
                    <div className='mt-8'>
                        <label className='font-semibold'>Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-secondary rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                        />
                    </div>

                    {/* Send OTP */}
                    <div className='mt-6'>
                        <Link href="/verify-otp">
                            <button className='cursor-pointer w-full p-2 bg-secondary font-semibold text-white rounded-md'>
                                Send OTP
                            </button>
                        </Link>
                    </div>

                    {/* Back to Login */}
                    <p className='text-center mt-5 text-gray-600'>
                        Remember your password?
                        <Link href="/login" className='text-secondary font-semibold ml-1'>
                            Login
                        </Link>
                    </p>

                </div>
            </div>

            {/* Right Side Image */}
            <img
                className='lg:block hidden'
                src="/Images/Auth/auth_image.png"
                alt="auth"
            />
        </div>
    );
};

export default Page;
