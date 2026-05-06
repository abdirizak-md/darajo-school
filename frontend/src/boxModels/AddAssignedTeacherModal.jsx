import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGetTeachersQuery } from "../redux/features/teacherApi";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";
import { useGetSubjectsQuery } from "../redux/features/subject";
import { useCreateAssignmentMutation } from "../redux/features/assignModule";

const AddAssignedTeacherModal = ({ setAssignedTeacher }) => {
  const [createAssignment, { isLoading }] = useCreateAssignmentMutation();

  const { data: teachers } = useGetTeachersQuery();
  const { data: classes } = useGetClassesQuery();
  const { data: sections } = useGetSectionsQuery();
  const { data: subjects } = useGetSubjectsQuery();

  const [teacherId, setTeacherId] = useState("");
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!teacherId || !classId || !sectionId || !subjectId) {
      alert("All fields are required");
      return;
    }

    try {
      await createAssignment({
        teacherId,
        classId,
        sectionId,
        subjectId,
      }).unwrap();

      alert("Teacher assigned successfully");

      setTeacherId("");
      setClassId("");
      setSectionId("");
      setSubjectId("");

      setAssignedTeacher(false);
    } catch (error) {
      console.error(error);
      alert(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between p-6 border-b">
          <h1 className="text-2xl font-bold text-orange-500">
            Assign Teacher to Class
          </h1>

          <IoClose
            size={28}
            className="cursor-pointer"
            onClick={() => setAssignModal(false)}
          />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>
          {/* TEACHER */}
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

          {/* CLASS */}
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

          {/* SECTION */}
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

          {/* SUBJECT */}
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

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="px-4 py-2 border"
              onClick={() => setAssignModal(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white disabled:opacity-50"
            >
              {isLoading ? "Assigning..." : "Assign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignedTeacherModal;
