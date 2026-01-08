import React from "react";

const topics = [
    "Office",
    "Workplace Comedy",
    "Office",
    "Workplace Comedy",
    "Sitcom",
    "Sitcom",
    "Workplace Comedy",
    "Employment",
    "Work",
    "Employer Employee Relationship",
    "Work",
    "Employment",
    "Boss",
    "Work",
    "Work",
];

const suggestions = Array(4).fill({
    name: "Miranda baju",
    username: "@miris",
    avatar: "https://i.pravatar.cc/100?img=32",
});

const CommunityRightSide = () => {
    return (
        <aside className="w-full max-w-sm rounded-xl bg-[#16324a] p-4 text-white shadow-xl">
            {/* Recommended Topics */}
            <div className="mb-6">
                <div className="flex items-center mb-5">
                    <img className='w-64' src="/Images/Movies/recommended_topics.png" alt="" />
                </div>

                <div className="flex flex-wrap gap-2">
                    {topics.map((topic, i) => (
                        <span
                            key={i}
                            className="cursor-pointer rounded-full border border-slate-500 px-3 py-1 text-xs text-slate-200 hover:border-orange-400 hover:text-orange-300"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            </div>

            {/* Suggestions */}
            <div>
                <div className="flex items-center my-5">
                    <img className='w-48' src="/Images/Movies/suggestions.png" alt="" />
                </div>
                <div className="space-y-4">
                    {suggestions.map((user, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between border-b border-slate-700 pb-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={user.avatar}
                                    alt="avatar"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold">{user.name}</p>
                                    <p className="text-xs text-slate-400">{user.username}</p>
                                </div>
                            </div>

                            <button className="rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white hover:bg-orange-600">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default CommunityRightSide;
