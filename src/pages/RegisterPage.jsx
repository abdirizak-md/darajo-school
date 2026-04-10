import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

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

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350')] bg-cover bg-center blur-sm" />

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-90 overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-6 px-4">
          <div className="text-xs bg-white text-green-700 inline-block px-3 py-1 rounded-full mb-2 font-semibold">
            Darajo
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
              <FaUser className="text-gray-400 mr-2" />
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
              <FaEnvelope className="text-gray-400 mr-2" />
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
              <FaLock className="text-gray-400 mr-2" />
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
              <RiLockPasswordLine className="text-gray-400 mr-2" />
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
          <button className="w-full bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition">
            <HiOutlinePencilAlt /> Register
          </button>

          <p className="text-center text-xs text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
