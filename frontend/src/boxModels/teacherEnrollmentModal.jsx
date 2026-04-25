import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";

const TeacherEnrollmentModal
 = ({ setTeacherEnrollmentModal }) => {
  const [createStudent, { isLoading }] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();

  // ✅ Form state
  const [formData, setFormData] = useState({
    staffMember: "",
    subjectId: "",
    teacherName: "",
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
      setTeacherEnrollment(false);
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
          <IoClose size={26} onClick={() => setTeacherEnrollmentModal(false)} />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">

          {/* teacherName */}
         <select
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select teacherName</option>
        <option value="male">Ahmed mustafe</option>
        <option value="male">Abdi Ali</option>
      </select>

          {/* classId */}
         <select
          name="classId"
          value={formData.classId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select class</option>
        <option value="male">class 1</option>
        <option value="male">class 2</option>
        <option value="male">class 3</option>
        <option value="male">class 4</option>
      </select>

          {/* sectionId */}
         <select
          name="sectionId"
          value={formData.sectionId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select section</option>
        <option value="male">section A</option>
        <option value="male">section B</option>
        <option value="male">section C</option>
        <option value="male">section D</option>
      </select>
          {/* classId */}
         <select
          name="classId"
          value={formData.classId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select class</option>
        <option value="male">class 1</option>
        <option value="male">class 2</option>
        <option value="male">class 3</option>
        <option value="male">class 4</option>
      </select>

          {/* subjectId */}
         <select
          name="subjectId"
          value={formData.subjectId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
        <option value="">Select subject</option>
        <option value="male">Mathematics</option>
        <option value="male">Physics</option>
        <option value="male">Biology</option>
        <option value="male">Chemistery</option>
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

export default TeacherEnrollmentModal
;