import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";

const addTeacherModal = ({ setTeacherModal }) => {
  const [createStudent, { isLoading }] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();

  // ✅ Form state
  const [formData, setFormData] = useState({
    staffMember: "",
    department: "",
    role: "",
    phone: "",
    email: "",
    status: "Active",
  });

  

  const classes = classesData?.data || [];
  const sections = sectionsData?.data || [];

  // 🔄 handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,

      // reset section when class changes
      ...(name === "classId" ? { sectionId: "" } : {}),
    }));
  };

  // 🚀 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createStudent(formData).unwrap();

      alert("Student created successfully");
      setTeacherModal(false);
    } catch (error) {
      console.log(error);
      alert("Failed to create student");
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
            name="Staff Member"
            placeholder="staff Member"
            value={formData.staffMember}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />

          {/* Role */}
         <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select Role</option>
        <option value="male">Teacher</option>
        <option value="female">Staff</option>
      </select>

          {/* Department */}
         <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select Department</option>
        <option value="male">Mathematics</option>
        <option value="male">Physics</option>
        <option value="male">Biology</option>
        <option value="male">Chemistery</option>
      </select>

         

          {/* PARENT */}
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
            {isLoading ? "Saving..." : "Create Student"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default addTeacherModal;