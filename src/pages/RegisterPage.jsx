import React from "react";

export default function RegisterUI() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage:
            "url('/mnt/data/WhatsApp Image 2026-02-26 at 11.16.55 AM.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[360px] overflow-hidden">
        {/* Header */}
        <div className="bg-red-700 text-white text-center py-6 px-4">
          <div className="text-xs bg-white text-red-700 inline-block px-3 py-1 rounded-full mb-2 font-semibold">
            Zillion
          </div>
          <h2 className="text-lg font-semibold leading-tight">
            Create Account
          </h2>
          <p className="text-xs mt-1 opacity-90">
            Register to access your dashboard
          </p>
        </div>

        {/* Form */}
        <div className="p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-400 mr-2">📧</span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-400 mr-2">🔒</span>
              <input
                type="password"
                placeholder="********"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-400 mr-2">🔐</span>
              <input
                type="password"
                placeholder="********"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center text-xs text-gray-600 gap-2">
            <input type="checkbox" /> I agree to the terms & conditions
          </div>

          {/* Button */}
          <button className="w-full bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-800 transition">
            📝 Register
          </button>

          <p className="text-center text-xs text-gray-500">
            Already have an account?{' '}
            <span className="text-blue-500 cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
