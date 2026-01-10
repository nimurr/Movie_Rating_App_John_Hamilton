'use client';
import React, { useState } from 'react';

const DeleteAccount = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    if (!password) return alert('Please enter your password');

    setLoading(true);

    // 🔴 Replace with real API call
    setTimeout(() => {
      console.log('Account deleted with password:', password);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl space-y-8">

      {/* Danger Warning */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-red-400 mb-3">
          Danger Zone
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          You’ve just entered the danger zone! If you would like to continue and
          remove your account, you can do so by entering your password below and
          confirming the prompts.
        </p>
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
        />
      </div>

      {/* Delete Button */}
      <div className="pt-4">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 transition px-8 py-3 rounded-lg font-semibold"
        >
          {loading ? 'Deleting...' : 'Delete Account'}
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
