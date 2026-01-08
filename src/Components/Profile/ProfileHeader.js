import Link from 'next/link';
import React from 'react';

const ProfileHeader = () => {
    return (
        <div>
            {/* Cover Section */}
            <div
                className="relative h-[150px] xl:h-[280px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17')",
                }}
            >
                {/* Profile Info */}
                <div className="absolute bottom-[-50px] left-16 flex items-center gap-6">
                    <img
                        src="https://i.pravatar.cc/120"
                        alt="profile"
                        className="w-28 h-28 rounded-full border-4 border-[#0f2a3d] object-cover"
                    />

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Tasmiasahabu
                        </h2>
                        <div className="flex gap-6 text-sm text-gray-300 mt-5">
                            <Link href="/profile/followers" className='underline cursor-pointer'>
                                <strong className="text-gray-50">50</strong> Followers
                            </Link>
                            <Link href="/profile/following"  className='underline cursor-pointer'>
                                <strong className="text-gray-50">102</strong> Following
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;
