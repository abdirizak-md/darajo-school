import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";
import { useGetParentsQuery } from "../redux/features/parentApi";
import { useGetStudentsQuery } from "../redux/features/studentApi";

const AddStudentModal = ({ setModelStudent }) => {
  const [createStudent] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();
  const { data: parentsData } = useGetParentsQuery();

  // ✅ Form state
  const [formData, setFormData] = useState({
    fullName: "",
    admissionNumber: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    admissionDate: "",
    classId: "",
    sectionId: "",
    parentId: "",
    medicalInfo: "",
    status: "Active",
    emergencyContact: "",
  });

  const classes = classesData?.data || [];
  const sections = sectionsData?.data || [];
  const parents = parentsData?.data || [];

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
      setModelStudent(false);
    } catch (error) {
      console.log(error);
      alert("Failed to create student");
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 flex items-center justify-center custom-scrollbar">
      <div className="bg-white w-[50%] max-h-[90vh] overflow-y-auto rounded-lg">
        {/* HEADER */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-orange-500">Add Student</h2>
          <IoClose
            className="hover:text-orange-500"
            size={26}
            onClick={() => setModelStudent(false)}
          />
        </div>

        {/* FORM */}

        <form className="p-6" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="mb-4">
            <label
              htmlFor="studentName"
              className="font-medium block mb-2 text-[#333]"
            >
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter student name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="admissionNumber"
              className="font-medium block mb-2 text-[#333]"
            >
              Admission Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="admissionNumber"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.admissionNumber}
              onChange={handleChange}
              placeholder="Enter admission number"
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
              type="password"
              name="password"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* classId */}
            <div className="mb-4">
              <label
                htmlFor="classId"
                className="font-medium block mb-2 text-[#333]"
              >
                Select classId <span className="text-red-500">*</span>
              </label>
              <select
                name="classId"
                id="classId"
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
                value={formData.classId}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                {classes.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            {/* section */}
            <div className="mb-4">
              <label
                htmlFor="sectionId"
                className="font-medium block mb-2 text-[#333]"
              >
                Select sectionId <span className="text-red-500">*</span>
              </label>
              <select
                name="sectionId"
                id="sectionId"
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
                value={formData.sectionId}
                onChange={handleChange}
                required
              >
                <option value="">Select Section</option>
                {sections.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* gender */}
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
            {/* date of birth */}
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="font-medium block mb-2 text-[#333]"
              >
                Select Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* parent */}
          <div className="mb-4">
            <label
              htmlFor="parentId"
              className="font-medium block mb-2 text-[#333]"
            >
              Select Parent <span className="text-red-500">*</span>
            </label>
            <select
              name="parentId"
              id="parentId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.parentId}
              onChange={handleChange}
              required
            >
              <option value="">Select Parent</option>
              {parents.map((parent) => (
                <option key={parent._id} value={parent._id}>
                  {parent.fullName}
                </option>
              ))}
            </select>
          </div>
          {/* emergency contact */}
          <div className="mb-4">
            <label
              htmlFor="emergencyContact"
              className="font-medium block mb-2 text-[#333]"
            >
              Emergency Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="emergencyContact"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="Enter emergency contact number"
            />
          </div>

          {/* medical information */}
          <div className="mb-4">
            <label
              htmlFor="medicalInfo"
              className="font-medium block mb-2 text-[#333]"
            >
              Medical Information <span className="text-red-500">*</span>
            </label>
            <textarea
              name="medicalInfo"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.medicalInfo}
              onChange={handleChange}
              placeholder="Enter medical information (allergies, conditions, etc.)"
            />
          </div>
          {/* STATUS */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="font-medium block mb-2 text-[#333]"
            >
              Select Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              id="status"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
            <button
              type="button"
              className="bg-[#f8f9fa] hover:text-orange-500 hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
              onClick={() => setModelStudent(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              Create Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
