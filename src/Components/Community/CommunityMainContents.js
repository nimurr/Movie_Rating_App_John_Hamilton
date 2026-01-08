'use client'
import React, { useState } from "react";
import { FaImage, FaVideo, FaTimes, FaTrash } from "react-icons/fa";
import CommunityAppPosts from "./CommunityAppPosts";

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

const CommunityMainContents = () => {
  const [open, setOpen] = useState(false);
  const [repostOpen, setRepostOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

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
    <div className="col-span-2">
      {/* Post Input */}
      <div
        onClick={() => setOpen(true)}
        className="mb-5 flex cursor-pointer items-center gap-3 rounded-lg bg-[#16324a] px-4 py-3 transition hover:bg-[#34485c]"
      >
        <img src="https://i.pravatar.cc/40" className="h-10 w-10 rounded-full" />
        <div className="flex-1 rounded-full border border-gray-600 p-3 text-sm text-gray-300">
          Share your thoughts, reviews, or recommendations!
        </div>
        <FaImage className="text-gray-300" />
        <FaVideo className="text-gray-300" />
      </div>

      {/* Posts */}
      <div onClick={() => setRepostOpen(true)}>
        <CommunityAppPosts />
      </div>

      {/* Create Post Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg rounded-xl bg-[#1f2a37]">
            <div className="flex items-center justify-between border-b border-gray-700 px-5 py-4">
              <h2 className="text-white">Create post</h2>
              <FaTimes onClick={() => setOpen(false)} className="cursor-pointer text-gray-400" />
            </div>

            <div className="p-5">
              <textarea
                rows={4}
                placeholder="What's on your mind?"
                className="w-full resize-none bg-transparent text-white outline-none"
              />

              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {images.map((img, i) => (
                    <div key={i} className="relative">
                      <img src={img.url} className="h-24 w-full rounded-lg object-cover" />
                      <FaTrash
                        onClick={() => removeImage(i)}
                        className="absolute right-1 top-1 cursor-pointer text-white"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex justify-between rounded-lg border border-gray-700 px-4 py-3">
                <span className="text-sm text-gray-400">Add to your post</span>
                <label className="cursor-pointer text-gray-300">
                  <FaImage />
                  <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>

              <button onClick={() => setOpen(false)} className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Repost / Report Modal */}
      {repostOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
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

export default CommunityMainContents;
