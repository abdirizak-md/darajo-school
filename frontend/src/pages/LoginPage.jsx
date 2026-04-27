import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350')] bg-cover bg-center blur-sm" />
      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-85 overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-6 px-4">
          <div className="text-xs bg-white text-green-700 inline-block px-3 py-1 rounded-full mb-2 font-semibold">
            Darajo
          </div>
          <h2 className="text-lg font-semibold leading-tight">
            Darajo School<br />Management School
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
              <FaEnvelope className="text-gray-400 mr-2" />
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
              <FaLock className="text-gray-400 mr-2" />
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
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition">
            <FaLock /> Login
          </button>

          <p className="text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 cursor-pointer">
              Register now
            </Link>
          </p>  
        </div>
      </div>
    </div>
  );
}

export default LoginPage;