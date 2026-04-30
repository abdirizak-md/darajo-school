import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/userApi";

export default function LoginUI() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();


  // ✅ state
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [error, setError] = useState("");

  // ✅ handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // validation
    if (!form.identifier || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
    const res = await login(form).unwrap();

console.log("FULL RESPONSE:", res);

// ✅ correct access
const token = res.data.token;
const user = res.data.user;

// store
localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(user));

// redirect
switch (user.role) {
  case "ADMIN":
    navigate("/");
    break;
  case "TEACHER":
    navigate("/teacher");
    break;
  case "STUDENT":
    navigate("/student");
    break;
    case "PARENT":
    navigate("/parent");
    break;
  default:
    navigate("/login");
}

    } catch (err) {
      setError(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-85 overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-6 px-4">
          <div className="text-xs bg-white text-green-700 inline-block px-3 py-1 rounded-full mb-2 font-semibold">
            Darajo
          </div>
          <h2 className="text-lg font-semibold">
            School Management System
          </h2>
        </div>

        {/* Form */}
        <form className="p-5 space-y-4" onSubmit={handleSubmit}>
          
          {/* Error */}
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          {/* Identifier */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Email / Username
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                name="identifier"
                value={form.identifier}
                onChange={handleChange}
                placeholder="Enter email or ID"
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
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register now
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}