'use client';
import React, { useState } from 'react';

const Notifications = () => {
  const [settings, setSettings] = useState({
    newsUpdates: true,
    commentReplies: true,
    commentOff: false,
    watchlistReleases: false,
  });

  const handleChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log('Saved notification settings:', settings);
    // 🔴 connect API here
  };

  return (
    <div className="max-w-3xl space-y-10">

      {/* GENERAL */}
      <div>
        <h3 className="text-lg font-semibold mb-4">General</h3>

        <Checkbox
          label="Email me news & product updates"
          checked={settings.newsUpdates}
          onChange={() => handleChange('newsUpdates')}
        />
      </div>

      {/* DISCUSSIONS */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Discussions</h3>

        <Checkbox
          label="Email me about new replies for comments I have started"
          checked={settings.commentReplies}
          onChange={() => handleChange('commentReplies')}
        />

        <Checkbox
          label="Turn off notifications for my comments"
          checked={settings.commentOff}
          onChange={() => handleChange('commentOff')}
        />
      </div>

      {/* WATCHLIST */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Watchlist</h3>

        <Checkbox
          label="Email me about new releases on my watchlist (coming soon!)"
          checked={settings.watchlistReleases}
          onChange={() => handleChange('watchlistReleases')}
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

export default Notifications;

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
