import React from "react";
import CommunityLeftSide from "@/Components/Community/CommunityLeftSide";
import CommunityMainContents from "@/Components/Community/CommunityMainContents";
import CommunityRightSide from "@/Components/Community/CommunityRightSide";

const Page = () => {
    return (
        <div className="mx-auto w-full max-w-7xl pt-28 text-white">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-4">

                {/* LEFT SIDEBAR */}
                <aside className="hidden xl:sticky xl:top-24 xl:col-span-1 xl:block">
                    <CommunityLeftSide />
                </aside>

                {/* MAIN CONTENT */}
                <main className="col-span-1 xl:col-span-2">
                    <CommunityMainContents />
                </main>

                {/* RIGHT SIDEBAR */}
                <aside className="hidden xl:sticky xl:top-24 xl:col-span-1 xl:block">
                    <CommunityRightSide />
                </aside>

            </div>
        </div>
    );
};

export default Page;
