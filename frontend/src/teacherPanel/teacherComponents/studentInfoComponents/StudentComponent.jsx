import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
  useUpdateStudentMutation,
} from "../../../redux/features/studentApi";

const StudentComponent = ({ setmodelStudent }) => {
  const { data, isLoading, isError } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();

  const students = data?.data || []; // ✅ safe fallback

  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    roomNumber: "",
    status: "",
  });

  // ✅ new state for delete target
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredStudents = data?.data?.filter((student) => {
    const matchesSearch = student?.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesSelect =
      selectedStudent && selectedStudent !== "All Sections"
        ? student?.name === selectedStudent
        : true;

    return matchesSearch && matchesSelect;
  });

  const confirmDelete = (id) => {
    setDeleteTarget(id);
  };

  const handleDelete = async () => {
    try {
      await deleteStudent(deleteTarget).unwrap();
      setDeleteTarget(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (student) => {
    setEditingStudent(student._id);

    setFormData({
      name: section.name,
      roomNumber: section.roomNumber,
      status: section.status,
    });
  };

  const handleUpdate = async () => {
    if (!editingSection) return; // ✅ safety check

    try {
      await updateStudent({
        id: editingStudent,
        ...formData,
      }).unwrap();

      setEditingStudent(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
      <div className="flex justify-between items-center mb-8">
        <span className="text-[#333] text-2xl font-bold">
          Student Directory
        </span>
        <button
          className="px-5 py-2 text-white bg-orange-500 rounded-md flex items-center gap-2"
          onClick={() => setmodelStudent(true)}
        >
          <FaPlus />
          Add Student
        </button>
      </div>

      <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
        <div className="">
          <input
            type="text"
            placeholder="Search by Name Admission number..."
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"
          />
        </div>

        <div className="">
          <select
            name="subject"
            id="subject"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select Class</option>
            <option value="All Classes">All Classes</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
          </select>
        </div>

        <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
          <IoSearchOutline size={24} />
          <button>Search</button>
        </div>
      </form>

      <div className="w-full overflow-x-auto">
        <table className="min-w-200 w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Student Name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Admission No
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Class
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Parent Phone
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Status
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {isLoading ? (
              <tr className="text-center">
                <td className="text-[#666] text-lg">Loading classes...</td>
              </tr>
            ) : isError ? (
              <tr className="border-inherit">
                <td className="text-[#666] text-lg">Error loading classes</td>
              </tr>
            ) : (
              students?.map((student, index) => (
                <tr key={index} className="hover:bg-[#f8f9fa]">
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    <div className="flex flex-col">
                      <span>{student.fullName}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#666]">
                          {student.gender},{" "}
                        </span>
                        <span className="text-orange-500">•</span>
                        <span className="text-sm text-[#666]">
                          {calculateAge(student.birthDate)}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {" "}
                    {student.admissionNumber}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {student.classId?.name}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {student.parentId?.phone}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left capitalize">
                    <span
                      className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${student.status === "Active" ? "bg-[#d1fae5] text-[#10b981]" : ""} ${student.status === "Pending" ? " bg-[#fef3c7] text-[#92400e]" : ""} ${student.status === "Completed" ? " bg-[#dbeafe] text-[#1e40af]" : ""}`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-5 border-b border-[#e1e5e9] text-left flex gap-2">
                    <button
                      type="button"
                      className="bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md"
                      onClick={() => handleEdit(student._id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-2 rounded-md"
                      onClick={() => deleteStudent(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentComponent;
