import React from 'react';

const Personalinfo = () => {
    return (
        <div className="col-span-1 text-white space-y-5">
            {/* Profile Image */}
            <img
                className="w-full rounded-xl border-2 border-gray-500 object-cover"
                src="https://www.bollywoodshaadis.com/img/article-2024411813231648196000.webp"
                alt="Actor"
            />

            {/* Name */}
            <h2 className="text-2xl font-semibold">Amir Khan</h2>

            {/* Info List */}
            <div className="space-y-4 text-sm">

                <div>
                    <p className="text-gray-400 uppercase text-xs">Known For</p>
                    <p className="font-medium">Acting</p>
                </div>

                <div>
                    <p className="text-gray-400 uppercase text-xs">Gender</p>
                    <p className="font-medium">Male</p>
                </div>

                <div>
                    <p className="text-gray-400 uppercase text-xs">Birthday</p>
                    <p className="font-medium">
                        January 20, 1966 <span className="text-gray-400">(59 years old)</span>
                    </p>
                </div>

                <div>
                    <p className="text-gray-400 uppercase text-xs">Place of Birth</p>
                    <p className="font-medium">Seattle, Washington, USA</p>
                </div>

                <div>
                    <p className="text-gray-400 uppercase text-xs">Also Known As</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-200">
                        <li>Rainn Dietrich Wilson</li>
                        <li>Rainn Percival Dietrich Wilson</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className='flex items-center gap-3'>
                    <img className='max-w-8 w-full   cursor-pointer' src="/Images/Others/fb-icons.png" alt="" />
                    <img className='max-w-8 w-full   cursor-pointer' src="/Images/Others/int-icons.png" alt="" />
                    <img className='max-w-6 w-full   cursor-pointer' src="/Images/Others/twitter.png" alt="" />
                </div>

            </div>
        </div>
    );
}

export default Personalinfo;
