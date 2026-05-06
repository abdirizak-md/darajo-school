import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import sectionss from "../../Data/sections";
import { useState } from "react";
import { useGetSectionsQuery } from "../../redux/features/sectionApi";
import { useGetStudentsQuery } from "../../redux/features/studentApi";
import { useUpdateSectionMutation } from "../../redux/features/sectionApi";
import { useDeleteSectionMutation } from "../../redux/features/sectionApi";

const SectionsComponent = ({ setAddSection }) => {
  const { data, isLoading, isError } = useGetSectionsQuery();
  const { data: studentsData } = useGetStudentsQuery();
  const [updateSection] = useUpdateSectionMutation();
  const [deleteSection] = useDeleteSectionMutation();

  const sectionss = data?.data || []; // ✅ safe fallback
  // console.log(sectionss);

  const [search, setSearch] = useState("");
  const [selectedSections, setSelectedSections] = useState("");
  const [editingSection, setEditingSection] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    roomNumber: "",
    status: "",
  });

  // ✅ new state for delete target
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredSections = data?.data?.filter((section) => {
    const matchesSearch = section?.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesSelect =
      selectedSections && selectedSections !== "All Sections"
        ? section?.name === selectedSections
        : true;

    return matchesSearch && matchesSelect;
  });

  const confirmDelete = (id) => {
    setDeleteTarget(id);
  };

  const handleDelete = async () => {
    try {
      await deleteSection(deleteTarget).unwrap();
      setDeleteTarget(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (section) => {
    setEditingSection(section._id);

    setFormData({
      name: section.name,
      roomNumber: section.roomNumber,
      status: section.status,
    });
  };

  const handleUpdate = async () => {
    if (!editingSection) return; // ✅ safety check

    try {
      await updateSection({
        id: editingSection,
        ...formData,
      }).unwrap();

      setEditingSection(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] text-2xl font-bold">Manage Sections</span>
        <button
          className="px-5 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2"
          onClick={() => setAddSection(true)}
        >
          <FaPlus />
          Add Section
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mb-4">
        <div className="mb-4">
          <input
            type="text"
            name="section"
            placeholder="Search Sections..."
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <select
            name="sections"
            id="sections"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-orange-500 transition-all duration-300 ease-in-out"
            value={selectedSections}
            onChange={(e) => setSelectedSections(e.target.value)}
            required
          >
            <option value="">Select section</option>
            <option value="All Sections">All sections</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
            <option value="D">Section D</option>
          </select>
        </div>
      </form>

      {editingSection !== null && (
        <div
          className="flex-1 bg-black/50 z-100 fixed inset-0 flex items-center justify-center"
          onClick={() => setEditingSection(null)}
        >
          <form
            className="flex flex-col gap-5 mb-4 bg-white p-6 rounded-md"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Update Section Name"
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <button
                type="button"
                className="px-5 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md"
                onClick={handleUpdate}
              >
                Update Section
              </button>
              <button
                type="button"
                className="px-5 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                onClick={() => setEditingSection(null)}
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
              Section name
            </th>
            <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
              Class
            </th>
            <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
              Students
            </th>
            <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
              Class Teacher
            </th>
            <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
              Room
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
            <tr className="col-span-full text-center">
              <td className="text-[#666] text-lg">Loading Sections...</td>
            </tr>
          ) : isError ? (
            <tr className="col-span-full text-center">
              <td className="text-[#666] text-lg">Error loading Sections</td>
            </tr>
          ) : (
            filteredSections?.map((section) => (
              <tr key={section._id} className="hover:bg-[#f8f9fa]">
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  Section {section.name}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {section.classId.name}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {section._id}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {section.teacher}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {section.roomNumber}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left capitalize">
                  <span
                    className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${section.status === "Active" ? "bg-[#d1fae5] text-[#10b981]" : ""} ${section.status === "Pending" ? " bg-[#fef3c7] text-[#92400e]" : ""} ${section.status === "Completed" ? " bg-[#dbeafe] text-[#1e40af]" : ""}`}
                  >
                    {section.status}
                  </span>
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                  <button className="bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md">
                    View
                  </button>
                  <button
                    className="bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                    onClick={() => startEditing(section)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                    onClick={() => confirmDelete(section._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
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
              Are you sure you want to delete this section?
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
  );
};

export default SectionsComponent;
