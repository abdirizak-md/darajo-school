import React from "react";

export default function LoginUI() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage:
            "url('/mnt/data/WhatsApp Image 2026-02-26 at 11.16.55 AM.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[350px] overflow-hidden">
        {/* Header */}
        <div className="bg-red-700 text-white text-center py-6 px-4">
          <div className="text-xs bg-white text-red-700 inline-block px-3 py-1 rounded-full mb-2 font-semibold">
            Zillion
          </div>
          <h2 className="text-lg font-semibold leading-tight">
            Zillion School<br />Management School
          </h2>
          <p className="text-xs mt-1 opacity-90">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Form */}
        <div className="p-5 space-y-4">
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Email Address or Username
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-400 mr-2">📧</span>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

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

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button className="w-full bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-800 transition">
            🔑 Login
          </button>

          <p className="text-center text-xs text-blue-500 cursor-pointer">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}
