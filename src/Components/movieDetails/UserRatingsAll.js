import React from "react";

const reviews = [
    {
        id: 1,
        name: "Farhan Hasan",
        date: "Updated on 23 Nov, 2025",
        review:
            "Such an incredible show. Probably my favorite show of all time. The characters and office environment is easy to relate to. The Dwight and Jim rivalry is fantastic.",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 2,
        name: "Farhan Hasan",
        date: "Updated on 23 Nov, 2025",
        review:
            "Such an incredible show. Probably my favorite show of all time. The characters and office environment is easy to relate to. The Dwight and Jim rivalry is fantastic.",
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 3,
        name: "Farhan Hasan",
        date: "Updated on 23 Nov, 2025",
        review:
            "Such an incredible show. Probably my favorite show of all time. The characters and office environment is easy to relate to. The Dwight and Jim rivalry is fantastic.",
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 4,
        name: "Farhan Hasan",
        date: "Updated on 23 Nov, 2025",
        review:
            "Such an incredible show. Probably my favorite show of all time. The characters and office environment is easy to relate to. The Dwight and Jim rivalry is fantastic.",
        avatar: "https://i.pravatar.cc/100?img=15",
    },
];

const UserRatingsAll = () => {
    return (
        <section className="w-full bg-[#1a3248] text-white my-16 p-5 rounded-lg">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="mb-5">
                    <img src="/Images/Movies/userReview-All.png" alt="" />
                </div>

                {/* ADD REVIEW */}
                <div className="flex items-center gap-4 mb-8">
                    <img
                        src="https://i.pravatar.cc/100?img=32"
                        alt="user"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <input
                        type="text"
                        placeholder="Add Your Review"
                        className="w-full bg-transparent border-b border-white/40 focus:outline-none py-2 text-sm placeholder:text-gray-300"
                    />
                </div>

                <hr className="border-white/20 mb-8" />

                {/* REVIEWS */}
                <div className="space-y-10">
                    {reviews.map((item) => (
                        <div key={item.id} className="flex gap-4">
                            {/* Avatar */}
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <button className="text-orange-500 text-sm hover:underline">
                                        Follow
                                    </button>
                                </div>

                                <p className="text-xs text-gray-400 mb-3">
                                    {item.date}
                                </p>

                                <p className="text-sm text-gray-200 leading-relaxed max-w-4xl">
                                    {item.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE */}
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition">
                        Load More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default UserRatingsAll;
