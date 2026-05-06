import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCreateTeacherMutation } from "../redux/features/teacherApi";

const addTeacherModal = ({ setTeacherModal }) => {
  const [createTeacher, { isLoading }] = useCreateTeacherMutation();

  // ✅ Form state
  const [formData, setFormData] = useState({
    staffMember: "",
    employeeId: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    status: "Active",
  });

  // 🔄 handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🚀 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTeacher(formData).unwrap();

      alert("Teacher created successfully");
      setTeacherModal(false);
    } catch (error) {
      console.log(error);
      alert(
        "Failed to create teacher: " + (error?.data?.message || error.message),
      );
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[50%] max-h-[90vh] overflow-y-auto rounded-lg">
        {/* HEADER */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-orange-500">Add Teacher</h2>
          <IoClose
            className="hover:text-orange-500"
            size={26}
            onClick={() => setTeacherModal(false)}
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {/* NAME */}
          <div className="mb-4">
            <label
              htmlFor="teacherName"
              className="font-medium block mb-2 text-[#333]"
            >
              Teacher Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter teacher name"
            />
          </div>
          {/* employeeId */}
          <div className="mb-4">
            <label
              htmlFor="employeeId"
              className="font-medium block mb-2 text-[#333]"
            >
              Employee ID<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="employeeId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Enter employeeId"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="font-medium block mb-2 text-[#333]"
            >
              Select gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              id="gender"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* phone */}

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="font-medium block mb-2 text-[#333]"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          {/* EMAIL */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-medium block mb-2 text-[#333]"
            >
              email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter staff email"
            />
          </div>
          {/* password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-medium block mb-2 text-[#333]"
            >
              password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="password"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          {/* STATUS */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {/* BUTTON */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
            <button
              type="button"
              className="bg-[#f8f9fa] hover:text-orange-500 hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
              onClick={() => setTeacherModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              Create Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTeacherModal;
