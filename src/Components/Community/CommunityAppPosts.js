'use client';
import React, { useState } from "react";
import {
    FaArrowUp,
    FaArrowDown,
    FaRegCommentDots,
    FaRetweet,
    FaEllipsisH,
    FaTimes,
} from "react-icons/fa";

const CommunityAppPosts = () => {
    const reasons = [
        { title: "Inappropriate Content", desc: "This post contains offensive or explicit material." },
        { title: "Spam", desc: "This post seems to be irrelevant or promotional." },
        { title: "Harassment", desc: "This post is bullying or targeting individuals in a harmful way." },
        { title: "Spoilers", desc: "This post reveals key plot details without warning." },
        { title: "Off-Topic", desc: "This post is unrelated to the community or movie discussions." },
        { title: "Misinformation", desc: "This post contains incorrect or misleading information." },
        { title: "Hate Speech", desc: "This post promotes hate or discrimination." },
        { title: "False Rating", desc: "This post includes manipulated or fake reviews." },
        { title: "Other", desc: "Any other reason not listed above." },
    ];

    const [repostOpen, setRepostOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    return (
        <div className="space-y-3 sticky top-0">
            {
                [...Array(10)].map((item) => (
                    <div className="rounded-xl bg-[#16324a] p-5 text-white shadow-lg">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                                <img
                                    src="https://i.pravatar.cc/50"
                                    alt="user"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Miranda Baju</span>
                                        <button className="text-xs text-blue-400 hover:underline">
                                            Follow
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400">@miris • 2h ago</p>
                                </div>
                            </div>

                            <button className="text-gray-400 hover:text-white">
                                <FaEllipsisH />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-4 text-sm leading-relaxed text-gray-200">
                            Working in an office be like… endless meetings that could’ve been an
                            email 😅 What’s the funniest workplace moment you’ve had recently?
                        </div>

                        {/* Post Image */}
                        <div className="mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt="post"
                                className="max-h-96 w-full rounded-lg object-cover"
                            />
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-3 text-gray-400">
                            <div className="flex items-center gap-2">
                                <button className="flex items-center bg-[#1f4668] p-1 rounded gap-1 hover:text-orange-400">
                                    <FaArrowUp />
                                    <span className="text-xs">Upvote (1k)</span>
                                </button>

                                <button className="flex bg-[#1f4668] p-1 rounded items-center gap-1 hover:text-blue-400">
                                    <FaArrowDown />
                                </button>
                            </div>

                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-1 hover:text-white">
                                    <FaRegCommentDots />
                                    <span className="text-xs">24</span>
                                </button>

                                <button onClick={() => setRepostOpen(true)} className="flex items-center gap-1 hover:text-green-400">
                                    <FaRetweet />
                                    <span className="text-xs">Repost</span>
                                </button>

                                <button className="text-xs hover:text-red-400">Hide</button>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* Repost / Report Modal */}
            {repostOpen && (
                <div className="fixed inset-0 z-[999] pt-20 flex items-center justify-center bg-black/60">
                    <div className="w-full max-w-lg rounded-xl bg-[#1f2a37] p-5">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">Why are you reporting this post?</h2>
                            <FaTimes onClick={() => setRepostOpen(false)} className="cursor-pointer text-gray-400" />
                        </div>

                        <div className="space-y-3">
                            {reasons.map((r, i) => (
                                <label key={i} className="flex cursor-pointer gap-3 rounded-lg border border-gray-700 p-3 hover:bg-[#2a3646]">
                                    <input
                                        type="radio"
                                        name="reason"
                                        checked={selected === i}
                                        onChange={() => setSelected(i)}
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-white">{r.title}</p>
                                        <p className="text-xs text-gray-400">{r.desc}</p>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <button
                            disabled={selected === null}
                            onClick={() => setRepostOpen(false)}
                            className="mt-4 w-full rounded-lg bg-red-600 py-2 text-white disabled:opacity-50"
                        >
                            Submit Report
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommunityAppPosts;