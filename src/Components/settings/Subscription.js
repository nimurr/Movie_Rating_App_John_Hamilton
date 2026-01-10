'use client';
import React, { useState } from 'react';

const Subscription = () => {
  const [features, setFeatures] = useState({
    noAds: true,
    noPopups: true,
    noFullscreenAds: true,
    supporterBadge: true,
    exclusiveFeatures: true,
  });

  const toggle = (key) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubscribe = () => {
    console.log('Subscribed with features:', features);
    // 🔴 connect payment / subscription API here
  };

  return (
    <div className="max-w-3xl space-y-10">

      {/* PLAN HEADER */}
      <div className="bg-[#132a3f] rounded-xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold text-secondary mb-2">
          $9.99 / Year
        </h3>
        <p className="text-sm text-gray-300">
          Unlock premium features and support the platform
        </p>
      </div>

      {/* FEATURES */}
      <div>
        <h3 className="text-lg font-semibold mb-4">What you get</h3>

        <Checkbox
          label="No ads at all"
          checked={features.noAds}
          onChange={() => toggle('noAds')}
        />
        <Checkbox
          label="No popups"
          checked={features.noPopups}
          onChange={() => toggle('noPopups')}
        />
        <Checkbox
          label="No full-screen ads"
          checked={features.noFullscreenAds}
          onChange={() => toggle('noFullscreenAds')}
        />
        <Checkbox
          label="Supporter badge"
          checked={features.supporterBadge}
          onChange={() => toggle('supporterBadge')}
        />
        <Checkbox
          label="Exclusive features"
          checked={features.exclusiveFeatures}
          onChange={() => toggle('exclusiveFeatures')}
        />
      </div>

      {/* ACTION BUTTON */}
      <div className="pt-6">
        <button
          onClick={handleSubscribe}
          className="bg-secondary hover:bg-orange-700 transition px-10 py-3 rounded-lg font-semibold"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscription;

/* ---------------- Checkbox Component ---------------- */

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-4 mb-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-secondary cursor-pointer"
      />
      <span className="text-gray-300">{label}</span>
    </label>
  );
}
