'use client';
import DeleteAccount from '@/Components/settings/DeleteAccount';
import EditProfile from '@/Components/settings/EditProfile';
import Notifications from '@/Components/settings/Notifications';
import Sharing from '@/Components/settings/Sharing';
import Subscription from '@/Components/settings/Subscription';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const tabs = [
    'Edit Profile',
    'Notification',
    'Sharing',
    'Subscription',
    'Delete Account',
];

const Page = () => {
    const [activeTab, setActiveTab] = useState('Edit Profile');

    return (
        <div className="min-h-screen pt-28 px-6 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

                {/* LEFT SETTINGS TABS */}
                <aside className="bg-[#132a3f] rounded-xl h-fit">
                    <h3 className="text-lg font-semibold text-center p-4">Settings</h3>

                    <ul className="space-y-3 text-sm">
                        {tabs.map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer transition px-5 py-2
                  ${activeTab === tab
                                        ? 'text-secondary bg-slate-600  font-semibold'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* RIGHT CONTENT */}
                <section className="lg:col-span-3 bg-[#0f253a] rounded-xl p-10 relative">

                    {/* Edit Icon */}


                    {/* Title */}
                    <h1 className="text-3xl font-extrabold tracking-widest flex items-center gap-4 mb-10">
                        <span className="text-secondary">★</span>
                        {activeTab.toUpperCase()}
                        <span className="text-secondary">★</span>
                    </h1>

                    {/* TAB CONTENT */}
                    {activeTab === 'Edit Profile' && <EditProfile />}
                    {activeTab === 'Notification' && <Notifications title="Notification Settings" />}
                    {activeTab === 'Sharing' && <Sharing title="Sharing Settings" />}
                    {activeTab === 'Subscription' && <Subscription title="Subscription Settings" />}
                    {activeTab === 'Delete Account' && <DeleteAccount title="Delete Account" danger />}
                </section>
            </div>
        </div>
    );
};

export default Page;

/* ---------------- TAB CONTENTS ---------------- */

function Placeholder({ title, danger }) {
    return (
        <div className={`text-lg ${danger ? 'text-red-400' : 'text-gray-300'}`}>
            {title} content goes here
        </div>
    );
}
