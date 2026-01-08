import React from "react";
import {
    FaArrowUp,
    FaArrowDown,
    FaRegCommentDots,
    FaRetweet,
    FaEllipsisH,
} from "react-icons/fa";

const CommunityAppPosts = () => {
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

                                <button className="flex items-center gap-1 hover:text-green-400">
                                    <FaRetweet />
                                    <span className="text-xs">Repost</span>
                                </button>

                                <button className="text-xs hover:text-red-400">Hide</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CommunityAppPosts;