'use client'
import React, { useState } from "react";
import { FaImage, FaVideo, FaTimes, FaTrash } from "react-icons/fa";
import CommunityAppPosts from "./CommunityAppPosts";

const CommunityMainContents = () => {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setImages((prev) => [...prev, ...previews]);
    };

    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="col-span-2 sticky top-0">
            {/* Post Input */}
            <div
                onClick={() => setOpen(true)}
                className="flex items-center gap-3 mb-5 rounded-lg bg-[#16324a] px-4 py-3 transition hover:bg-[#34485c] cursor-pointer"
            >
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="h-10 w-10 rounded-full object-cover"
                />

                <div className="flex-1 rounded-full border border-gray-600 p-3 text-sm text-gray-300">
                    Share your thoughts, reviews, or recommendations!
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                    <FaImage className="text-lg" />
                    <FaVideo className="text-lg" />
                </div>
            </div>
            {/* all posts  */}
            <CommunityAppPosts />


            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="w-full max-w-lg rounded-xl bg-[#1f2a37] shadow-xl">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-700 px-5 py-4">
                            <h2 className="text-lg font-semibold text-white">Create post</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-5">
                            <div className="mb-4 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    alt="avatar"
                                    className="h-10 w-10 rounded-full"
                                />
                                <span className="font-medium text-white">Your Name</span>
                            </div>

                            <textarea
                                rows={4}
                                placeholder="What's on your mind?"
                                className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none"
                            />

                            {/* Image Preview */}
                            {images.length > 0 && (
                                <div className="mt-4 grid grid-cols-3 gap-3">
                                    {images.map((img, i) => (
                                        <div key={i} className="relative">
                                            <img
                                                src={img.url}
                                                alt="preview"
                                                className="h-24 w-full rounded-lg object-cover"
                                            />
                                            <button
                                                onClick={() => removeImage(i)}
                                                className="absolute right-1 top-1 rounded-full bg-black/70 p-1 text-xs text-white"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Add to post */}
                            <div className="mt-4 flex items-center justify-between rounded-lg border border-gray-700 px-4 py-3">
                                <span className="text-sm text-gray-400">Add to your post</span>

                                <div className="flex gap-4 text-gray-300">
                                    <label className="cursor-pointer hover:text-white">
                                        <FaImage />
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                    <FaVideo className="cursor-pointer hover:text-white" />
                                </div>
                            </div>

                            <button onClick={() => setOpen(false)} className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommunityMainContents;
