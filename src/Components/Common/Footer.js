import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[url("/Images/Home/footer.png")] object-cover bg-cover bg-no-repeat h-full bg-[#152f45] w-full flex  items-center min-h-40 text-white py-5 text-xl text-center mt-5'>
            <div className="max-w-7xl mx-auto pt-8 flex items-center justify-between gap-10 w-full px-5">
                <img className='w-40' src="/Images/Auth/logo.png" alt="" />
                <ul className='md:flex items-center text-sm justify-center gap-8 space-y-1 flex-wrap'>
                    <li className='cursor-pointer'>Popular</li>
                    <li className='cursor-pointer'>Movies</li>
                    <li className='cursor-pointer'>Series</li>
                    <li className='cursor-pointer'>Leaderboard</li>
                    <li className='cursor-pointer'>Community</li>
                </ul>
                <div className='flex items-center gap-3'>
                    <img className='max-w-8 w-full   cursor-pointer' src="/Images/Others/fb-icons.png" alt="" />
                    <img className='max-w-8 w-full   cursor-pointer' src="/Images/Others/int-icons.png" alt="" />
                    <img className='max-w-6 w-full   cursor-pointer' src="/Images/Others/twitter.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
