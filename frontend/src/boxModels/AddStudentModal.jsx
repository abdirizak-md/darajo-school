import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";
import { useGetParentsQuery } from "../redux/features/parentApi";

const AddStudentModal = ({ setmodelStudent }) => {
  const [createStudent, { isLoading , isError}] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();
  const { data: parentsData } = useGetParentsQuery();

  if (isLoading) console.log("Loading classes...");
if (isError) console.log("Error fetching classes");
console.log("parentsData:", parentsData);

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
      setmodelStudent(false);
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
          <h2 className="text-xl font-bold">Add Student</h2>
          <IoClose size={26} onClick={() => setmodelStudent(false)} />
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

          {/* ADMISSION */}
          <input
            name="admissionNumber"
            placeholder="Admission Number"
            value={formData.admissionNumber}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          {/* PASSWORD */}
          <input
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
            required
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

          {/* CLASS */}
          <select
            name="classId"
            value={formData.classId}
            onChange={handleChange}
            className="w-full border p-2"
            required
          >
            <option value="">Select Class</option>
            {classes.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* SECTION */}
          <select
            name="sectionId"
            value={formData.sectionId}
            onChange={handleChange}
            className="w-full border p-2"
            required
            disabled={!formData.classId}
          >
            <option value="">Select Section</option>
            {sections.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}


          </select>
          {/* Parent */}
          <select
            name="parentId"
            value={formData.parentId}
            onChange={handleChange}
            className="w-full border p-2"
            required
            disabled={!formData.classId}
          >
            <option value="">Select Parent</option>
            {parentsData?.data.map((parent) => (
              <option key={parent._id} value={parent._id}>
                {parent.fullName}
              </option>
            ))}
          </select>

        


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

          {/* MEDICAL */}
          <textarea
            name="medicalInfo"
            placeholder="Medical Info"
            value={formData.medicalInfo}
            onChange={handleChange}
            className="w-full border p-2"
          />

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

export default AddStudentModal;