import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useGetSubjectsQuery } from "../../redux/features/subject";
import { useState } from "react";
import { useDeleteSubjectMutation } from "../../redux/features/subject";
import { useUpdateSubjectMutation } from "../../redux/features/subject";

const SubjectComponent = ({ setAddSubject }) => {
  const { data, isLoading, isError } = useGetSubjectsQuery();
  const [deleteSubject] = useDeleteSubjectMutation();
  const [updateSubject] = useUpdateSubjectMutation();

  const subjects = data?.data || []; // ✅ safe fallback\

  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [editingSubject, setEditingSubject] = useState(null);

  const [formData, setFormData] = useState({
    subjectName: "",
    subjectDescription: "",
    subjectCode: "",
    status: "",
  });

  // ✅ new state for delete target
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredSubjects = data?.data?.filter((subject) => {
    const matchesSearch = subject?.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesSelect =
      selectedSubject && selectedSubject !== "All Subjects"
        ? subject?.name === selectedSubject
        : true;

    return matchesSearch && matchesSelect;
  });

  const confirmDelete = (id) => {
    setDeleteTarget(id);
  };

  const handleDelete = async () => {
    try {
      await deleteSubject(deleteTarget).unwrap();
      setDeleteTarget(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (subject) => {
    setEditingSubject(subject._id);

    setFormData({
      subjectName: subject.name,
      subjectDescription: subject.description,
      subjectCode: subject.code,
      status: subject.status,
    });
  };

  const handleUpdate = async () => {
    if (!editingSubject) return; // ✅ safety check

    try {
      await updateSubject({
        id: editingSubject,
        name: formData.subjectName,
        description: formData.subjectDescription,
        code: formData.subjectCode,
        status: formData.status,
      }).unwrap();

      setEditingSubject(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const statusStyles = {
    active: "bg-[#d1fae5] text-[#10b981]",
    pending: "bg-[#fef3c7] text-[#92400e]",
    completed: "bg-[#dbeafe] text-[#1e40af]",
  };

  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] lg:text-2xl font-bold ">
          Manage Subjects
        </span>

        <button
          className="lg:px-5 px-3 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2"
          onClick={() => setAddSubject(true)}
        >
          <FaPlus />
          Add Subjects
        </button>
      </div>

      {/* SEARCH */}
      <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mb-4">
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Search Subjects..."
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <select
            name="subjects"
            id="subjects"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-orange-500 transition-all duration-300 ease-in-out"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            required
          >
            <option value="">Select subject</option>
            <option value="All Subjects">All Subjects</option>

            {subjects.map((sub) => (
              <option key={sub._id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        {editingSubject !== null && (
          <div
            className="flex-1 bg-black/50 z-100 fixed inset-0 flex items-center justify-center"
            onClick={() => setEditingSubject(null)}
          >
            <form
              className="flex flex-col gap-5 mb-4 bg-white p-6 rounded-md"
              onClick={(e) => e.stopPropagation()}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Update Subject Name"
                  className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
                  value={formData.subjectName}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectName: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Update Subject code"
                  className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
                  value={formData.subjectCode}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectCode: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Update Subject description"
                  className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
                  value={formData.subjectDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subjectDescription: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4 flex items-center gap-2">
                <button
                  type="button"
                  className="px-5 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md"
                  onClick={handleUpdate}
                >
                  Update Subject
                </button>
                <button
                  type="button"
                  className="px-5 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                  onClick={() => setEditingSubject(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Subject Name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Subject Code
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Description
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
            {subjects.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No Subject found.
                </td>
              </tr>
            )}
            {filteredSubjects?.map((subject) => (
              <tr key={subject._id} className="hover:bg-[#f8f9fa]">
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {subject.name}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {" "}
                  {subject.code}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {subject.description}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left capitalize">
                  {/* <span
                    className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${subject.status === "Active" ? "bg-[#d1fae5] text-[#10b981]" : ""} ${subject.status === "Pending" ? " bg-[#fef3c7] text-[#92400e]" : ""} ${subject.status === "Completed" ? " bg-[#dbeafe] text-[#1e40af]" : ""}`}
                  >
                    {subject.status}
                  </span> */}
                  <span
                    className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${
                      statusStyles[subject.status?.toLowerCase()] || ""
                    }`}
                  >
                    {subject.status}
                  </span>
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                  <button className="bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md">
                    View
                  </button>
                  <button
                    className="bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                    onClick={() => startEditing(subject)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                    onClick={() => confirmDelete(subject._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteTarget && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setDeleteTarget(null)}
          >
            <div
              className="bg-white p-6 rounded-md shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this subject?
              </h2>

              <div className="flex gap-3 justify-end">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setDeleteTarget(null)}
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={handleDelete}
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectComponent;
