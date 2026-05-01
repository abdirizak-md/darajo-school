import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useGetClassesQuery } from "../../redux/features/classApi";
import {
  useDeleteParentMutation,
  useGetParentsQuery,
  useUpdateParentMutation,
} from "../../redux/features/parentApi";
import { useGetSectionsQuery } from "../../redux/features/sectionApi";

const ParentsComponent = ({ setParentModal }) => {
  const { data: parentData, isLoading, isError } = useGetParentsQuery();
  const { data: classData } = useGetClassesQuery();
  const { data: sectionData } = useGetSectionsQuery();
  const [deleteParent] = useDeleteParentMutation();
  const [updateParent] = useUpdateParentMutation();

  const parents = parentData?.data || [];
  const classes = classData?.data || [];
  const sections = sectionData?.data || [];
  //   console.log(parents);

  const [search, setSearch] = useState("");
  const [selectedSections, setSelectedSections] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [editingParent, setEditingParent] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
  });

  // ✅ new state for delete target
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredParents = parents.filter((parent) => {
    const matchesSearch = parent?.fullName
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass = selectedClass
      ? parent.classId?._id === selectedClass
      : true;

    const matchesSection = selectedSections
      ? parent.sectionId?._id === selectedSections
      : true;

    return matchesSearch && matchesClass && matchesSection;
  });

  const confirmDelete = (id) => {
    setDeleteTarget(id);
  };

  const handleDelete = async () => {
    try {
      await deleteParent(deleteTarget).unwrap();
      setDeleteTarget(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (parent) => {
    setEditingParent(parent._id);
    setFormData({
      fullName: parent.fullName,
      address: parent.address,
      phone: parent.phone,
      email: parent.email,
    });
  };

  const handleUpdate = async () => {
    if (!editingParent) return;

    try {
      await updateParent({
        id: editingParent,
        ...formData,
      }).unwrap();

      setEditingParent(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
      <div className="flex justify-between items-center mb-8">
        <span className="text-[#333] text-2xl font-bold">Parent Directory</span>
        <button
          className="px-5 py-2 text-white bg-orange-500 rounded-md flex items-center gap-2"
          onClick={() => setParentModal(true)}
        >
          <FaPlus />
          Add Parent
        </button>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1  lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-[3fr_2fr_150px] gap-5 "
      >
        <div className="">
          <input
            type="text"
            placeholder="Search by Name Admission number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"
          />
        </div>

        <select
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
            setSelectedSection(""); // reset section when class changes
          }}
          className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg"
        >
          <option value="">All Classes</option>
          {classes.map((c) => (
            <option key={c._id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={selectedSections}
          onChange={(e) => setSelectedSections(e.target.value)}
          className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg"
        >
          <option value="">All Sections</option>
          {sections.map((s) => (
            <option key={s._id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </form>

      <div className="w-full overflow-x-auto">
        {editingParent !== null && (
          <div
            className="flex-1 bg-black/50 z-100 fixed inset-0 flex items-center justify-center"
            onClick={() => setEditingParent(null)}
          >
            <form
              className="flex flex-col gap-5 mb-4 bg-white p-6 rounded-md"
              onClick={(e) => e.stopPropagation()}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Update Parent Name"
                  className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              <div className="mb-4 flex items-center gap-2">
                <button
                  type="button"
                  className="px-5 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md"
                  onClick={handleUpdate}
                >
                  Update Parent
                </button>
                <button
                  type="button"
                  className="px-5 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                  onClick={() => setEditingParent(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <table className="min-w-200 w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Parent Name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Address
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Parent Phone
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Email
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {isLoading ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Loading parents...
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-red-500">
                  Failed to load parents. Please try again.
                </td>
              </tr>
            ) : (
              filteredParents.map((parent, index) => (
                <tr key={parent._id} className="hover:bg-[#f8f9fa]">
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    <span>{parent.fullName}</span>
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {" "}
                    {parent.address}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {parent.phone}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {parent.email}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                    <button className="bg-[#f8f9fa] hover:bg-[#ecf6ff] text-white border border-[#e1e5e9] px-4 py-2 rounded-md">
                      View
                    </button>
                    <button
                      className="bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md"
                      onClick={() => startEditing(parent)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#dc3545] hover:bg-[#c82333] text-white border border-[#e1e5e9] px-4 py-2 rounded-md"
                      onClick={() => setDeleteTarget(parent._id)}
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

        {/* {deleteTarget && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setDeleteTarget(null)}
          >
            <div
              className="bg-white p-6 rounded-md shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this parent?
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
                  onClick={() => handleDelete(deleteTarget)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* {editingParent && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setEditingParent(null)}
          >
            <div
              className="bg-white p-6 rounded-md shadow-md w-[400px]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Edit Parent</h2>

              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full mb-2 p-2 border rounded"
                placeholder="Full Name"
              />

              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full mb-2 p-2 border rounded"
                placeholder="Address"
              />

              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full mb-2 p-2 border rounded"
                placeholder="Phone"
              />

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded"
                placeholder="Email"
              />

              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setEditingParent(null)}
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 bg-orange-500 text-white rounded"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ParentsComponent;
