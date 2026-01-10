'use client';
import React, { useState } from 'react';

const Sharing = () => {
  const [settings, setSettings] = useState({
    favoritePublic: true,
    ratedPublic: false,
    watchlistPublic: true,
    autoRemoveRated: false,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log('Saved sharing settings:', settings);
    // 🔴 connect API here
  };

  return (
    <div className="max-w-3xl space-y-10">

      {/* FAVORITE LIST */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Favorite List Settings</h3>

        <Checkbox
          label="Share this list publicly"
          checked={settings.favoritePublic}
          onChange={() => toggle('favoritePublic')}
        />
      </div>

      {/* RATED LIST */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Rated List Settings</h3>

        <Checkbox
          label="Share this list publicly"
          checked={settings.ratedPublic}
          onChange={() => toggle('ratedPublic')}
        />
      </div>

      {/* WATCHLIST */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Watchlist</h3>

        <Checkbox
          label="Share this list publicly"
          checked={settings.watchlistPublic}
          onChange={() => toggle('watchlistPublic')}
        />

        <Checkbox
          label="Automatically remove items when they’re rated"
          checked={settings.autoRemoveRated}
          onChange={() => toggle('autoRemoveRated')}
        />
      </div>

      {/* SAVE BUTTON */}
      <div className="pt-6">
        <button
          onClick={handleSave}
          className="bg-secondary hover:bg-orange-900 transition px-8 py-3 rounded-lg font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Sharing;

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
