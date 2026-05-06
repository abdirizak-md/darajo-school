import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";
import { useCreateStudentMutation } from "../redux/features/studentApi";
import { useGetSubjectsQuery } from "../redux/features/subject";
import { useGetTeachersQuery } from "../redux/features/teacherApi";

const TeacherEnrollmentModal = ({ setEnrolled }) => {
  const [createStudent, { isLoading }] = useCreateStudentMutation();

  // ✅ Classes (always load)
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery();
  const { data: teachers } = useGetTeachersQuery();
  const { data: classes } = useGetClassesQuery();
  const { data: sections } = useGetSectionsQuery();
  const { data: subjects } = useGetSubjectsQuery();

  const [teacherId, setTeacherId] = useState("");
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [subjectId, setSubjectId] = useState("");

  // ✅ Form state
  const [formData, setFormData] = useState({
    staffMember: "",
    subjectId: "",
    teacherName: "",
    phone: "",
    email: "",
    status: "Active",
  });

  // const classes = classesData?.data || [];
  // const sections = sectionsData?.data || [];

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
          <h2 className="text-xl font-bold text-orange-500">Add Teacher</h2>
          <IoClose
            className="hover:text-orange-500"
            size={26}
            onClick={() => setEnrolled(false)}
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {/* teacherName */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Teacher <span className="text-red-500">*</span>
            </label>

            <select
              className="w-full p-2 border rounded"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
            >
              <option value="">Select teacher</option>
              {teachers?.data?.map((t) => (
                <option key={t._id} value={t._id}>
                  {t.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* classId */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Class <span className="text-red-500">*</span>
            </label>

            <select
              className="w-full p-2 border rounded"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
            >
              <option value="">Select class</option>
              {classes?.data?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* sectionId */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Section <span className="text-red-500">*</span>
            </label>

            <select
              className="w-full p-2 border rounded"
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
            >
              <option value="">Select section</option>
              {sections?.data?.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* subjectId */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>

            <select
              className="w-full p-2 border rounded"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
            >
              <option value="">Select subject</option>
              {subjects?.data?.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* BUTTON */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
            <button
              type="button"
              className="bg-[#f8f9fa] hover:text-orange-500 hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
              onClick={() => setEnrolled(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
            >
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherEnrollmentModal;
