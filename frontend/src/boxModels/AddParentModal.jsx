import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";

const AddParentModal = ({ setParentModal }) => {
  const [createStudent, { isLoading , isError}] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();

  if (isLoading) console.log("Loading classes...");
if (isError) console.log("Error fetching classes");

  // ✅ Form state
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    admissionDate: "",
    parentName: "",
    parentPhone: "",
    email: "",
    address: "",
    status: "Active",
    emergencyContact: "",
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
      setParentModal(false);
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
          <h2 className="text-xl font-bold">Add Parent</h2>
          <IoClose size={26} onClick={() => setParentModal(false)} />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {/* PARENT */}
          <input
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <input
            name="parentPhone"
            placeholder="Parent Phone"
            value={formData.parentPhone}
            onChange={handleChange}
            className="w-full border p-2"
          />
          {/* GENDER */}
         <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />

          {/* ADDRESS */}
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2"
          />  

          

          {/* EMERGENCY */}
          <input
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
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
            {isLoading ? "Saving..." : "Create Parent"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddParentModal;