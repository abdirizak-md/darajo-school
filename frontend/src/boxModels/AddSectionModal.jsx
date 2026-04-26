import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useCreateSectionMutation } from '../redux/features/sectionApi';
import { useGetClassesQuery } from '../redux/features/classApi';

const AddSectionModal = ({ setAddSection }) => {

  const [name, setName] = useState('');
  const [classId, setClassId] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [status, setStatus] = useState('Active');

  const [createSection, { isLoading }] = useCreateSectionMutation();

  // ✅ FETCH DATA
  const { data: classData } = useGetClassesQuery();

  // ✅ SAFE ACCESS
  const classes = classData?.data || [];

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !classId || !roomNumber) {
      return alert("Please fill required fields");
    }

    try {
      await createSection({
        name,
        classId,
        roomNumber,
        status,
      }).unwrap();

      alert("Section created successfully ✅");
      setAddSection(false);

    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Error creating section");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b">
          <h1 className="text-2xl text-[#006b3f] font-bold">
            Create Section
          </h1>
          <IoClose size={28} onClick={() => setAddSection(false)} />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>

          {/* SECTION NAME */}
          <div className="mb-4">
            <label>Section Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border"
              placeholder="e.g. A, B, C..."
              required
            />
          </div>

          {/* ✅ CLASS DROPDOWN */}
          <div className="mb-4">
            <label>Class *</label>
            <select
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              className="w-full p-2 border"
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          {/* ROOM */}
          <div className="mb-4">
            <label>Room *</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full p-2 border"
              required
            />
          </div>

          {/* STATUS */}
          <div className="mb-4">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setAddSection(false)}>
              Cancel
            </button>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Create Section"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSectionModal;