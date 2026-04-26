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
      alert("Failed to create teacher: " + (error?.data?.message || error.message));
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[50%] max-h-[90vh] overflow-y-auto rounded-lg">

        {/* HEADER */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Add Teacher</h2>
          <IoClose size={26} onClick={() => setTeacherModal(false)} />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">

          {/* NAME */}
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          {/* employeeId */}
          <input type="text" placeholder="Employee ID"
       name="employeeId"
       value={formData.employeeId}
       onChange={handleChange}
       className="w-full border p-2"
       required />

          {/* Gender */}
         <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>


          {/* phone */}
          <input
            name="phone"
            placeholder="phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2"
          />
          

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />
          {/* password */}
          <input
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
          />

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
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white p-2"
          >
            {isLoading ? "Saving..." : "Create Teacher"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default addTeacherModal;