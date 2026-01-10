'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

            {/* Left Side */}
            <div className='flex justify-center items-center mt-20'>
                <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>

                    {/* Logo & Title */}
                    <div>
                        <img src="/Images/Auth/logo.png" alt="logo" />
                        <p className='mt-2'>Create your account</p>
                    </div>

                    {/* Full Name */}
                    <div className='mt-8'>
                        <label className='font-semibold'>Full Name</label>
                        <input
                            placeholder='Enter your full name'
                            className='mt-2 w-full p-2 border border-secondary rounded-md focus:outline-0 ring-0 bg-white'
                            type="text"
                        />
                    </div>

                    {/* Email */}
                    <div className='mt-5'>
                        <label className='font-semibold'>Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-secondary rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                        />
                    </div>

                    {/* Password */}
                    <div className='mt-5'>
                        <label className='font-semibold'>Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-secondary rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-[30px] -translate-y-1/2 text-gray-500'
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className='flex items-center my-5'>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms" className='ml-2 text-gray-600'>
                            I agree to all terms & conditions
                        </label>
                    </div>

                    {/* Signup Button */}
                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-secondary font-semibold text-white rounded-md'>
                            Sign Up
                        </button>
                    </div>

                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-2'>
                        <div className='mt-5 w-full'>
                            <button className='cursor-pointer flex items-center justify-center gap-2 w-full p-2  border border-white font-semibold text-white rounded-md'><FcGoogle /> Google</button>
                        </div>
                        <div className='mt-5 w-full'>
                            <button className='cursor-pointer flex items-center justify-center gap-2 w-full p-2  border border-white font-semibold text-white rounded-md'><FaFacebook className='text-blue-500' /> Facebook</button>
                        </div>
                    </div>

                    {/* Login Link */}
                    <p className='text-center mt-5 text-gray-600'>
                        Already have an account?
                        <Link className='text-secondary font-semibold ml-1' href="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <img className='lg:block hidden w-full' src="/Images/Auth/auth_image.png" alt="auth" />
        </div>
    );
};

export default Page;
