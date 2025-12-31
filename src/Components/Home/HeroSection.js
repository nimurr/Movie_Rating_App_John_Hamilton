import React, { useState } from "react";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {/* HERO SECTION */}
      <div>
        <img
          className="w-full min-h-[80vh] object-cover"
          src="/Images/Home/hero_section.png"
          alt="Hero"
        />
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-2xl w-[90%] max-w-md p-5 z-10 shadow-xl">
            
            {/* AD label */}
            <span className="absolute top-2 left-3 text-xs text-gray-400">
              AD
            </span>

            {/* Content */}
            <div className="flex items-center gap-4 mt-4">
              <img
                src="https://cdn.sanity.io/images/kts928pd/production/d9da9779bf3ab2af0b50a065b78c869a4607adf4-720x720.webp"
                alt="Opera GX"
                className="w-12 h-12"
              />

              <div>
                <h3 className="font-semibold text-lg">Opera GX</h3>
                <p className="text-sm text-gray-500">Click to install</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
