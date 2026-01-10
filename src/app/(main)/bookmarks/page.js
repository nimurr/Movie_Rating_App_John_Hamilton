import React from "react";
import { FiRepeat, FiX } from "react-icons/fi";

const Page = () => {
    return (
        <div className="min-h-screen bg-[#0b1d2e] text-white pt-28 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="flex items-center py-5">
                    <img className='max-w-64' src="/Images/Movies/bookmarks.png" alt="" />
                </div>

                {/* Bookmark List */}
                <div className="space-y-8">
                    {[1, 2].map((item) => (
                        <BookmarkCard key={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;

/* ---------------- Components ---------------- */

function BookmarkCard() {
    return (
        <div className="bg-[#1a344c] rounded-2xl p-6 flex gap-6 shadow-lg">

            {/* Image */}
            <img
                src="https://www.tallengestore.com/cdn/shop/products/Fast_Furious_-_Vin_Diesel_-_Dwayne_Rock_Johnson_-_Hollywood_Action_Movie_Poster_0aebe68a-696b-4c05-b814-08ff4f48d31a.jpg?v=1582542930"
                alt="bookmark"
                className="w-72 h-44 object-cover rounded-xl flex-shrink-0"
            />

            {/* Content */}
            <div className="flex flex-col justify-between">

                {/* Text */}
                <p className="text-gray-200 leading-relaxed text-sm">
                    When Mel Brooks was preparing for this film, he discovered that Ken
                    Strickfaden who'd made the elaborate electrical machinery for the lab
                    sequences in Frankenstein (1931) and its sequels, was still alive and
                    living in the Los Angeles area. Brooks visited Strickfaden, and found
                    that he had stored all the equipment in his garage. Brooks made a deal
                    to rent the equipment, and gave Strickfaden the screen credit he didn't
                    receive for the original films.
                </p>

                {/* Saved from */}
                <div className="flex items-center gap-3 mt-4">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="user"
                        className="w-8 h-8 rounded-full"
                    />
                    <p className="text-sm text-gray-300">
                        saved from{" "}
                        <span className="font-semibold text-white">
                            Tasmia Shabonty’s
                        </span>{" "}
                        post
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-8 mt-4 text-sm text-gray-300">
                    <button className="flex items-center gap-2 hover:text-white transition">
                        <FiRepeat />
                        Repost
                    </button>

                    <button className="flex items-center gap-2 hover:text-red-400 transition">
                        <FiX />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
