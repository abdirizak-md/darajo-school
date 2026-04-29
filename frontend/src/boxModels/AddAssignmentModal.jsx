import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useCreateSectionMutation } from '../redux/features/sectionApi';
import { useGetClassesQuery } from '../redux/features/classApi';

const AddAssignmentModal = ({ setAddAssignment }) => {

  const [title, setTitle] = useState('');
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

    if (!title || !classId || !roomNumber) {
      return alert("Please fill required fields");
    }

    try {
      await createSection({
        title,
        classId,
        roomNumber,
        status,
      }).unwrap();

      alert("Section created successfully ✅");
      setAddAssignment(false);

    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Error creating section");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b border-[#e1e5e9]">
          <h1 className="text-2xl text-orange-500 font-bold"> Create Assignment </h1>
          <IoClose className='hover:text-orange-500 transition-all duration-200' size={28} onClick={() => setAddAssignment(false)} />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>

          {/* SECTION NAME */}
          <div className="mb-4">
                <label htmlFor="assignmentTitle" className="font-medium block mb-2 text-[#333]">Assignment Title <span className="text-red-500">*</span></label> 
                <input type="text" name="assignmentTitle" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={title} onChange={() => setTitle(e.target.value)} placeholder='Enter section name'/>
            </div>

          {/* ✅ CLASS DROPDOWN */}
          <div className="mb-4">
            <label htmlFor="classes" className="font-medium block mb-2 text-[#333]">Select class <span className="text-red-500">*</span></label>
            <select name="classes" id="classes" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={classes} onChange={() => setClassId(e.target.value)} required>
              <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}> {cls.name} </option>
                ))}
            </select>
          </div>

          {/* ROOM */}
          <div className="mb-4">
                <label htmlFor="roomNumber" className="font-medium block mb-2 text-[#333]">Room Number <span className="text-red-500">*</span></label>
                <input type="text" name="roomNumber" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={roomNumber} onChange={() => setRoomNumber(e.target.value)} placeholder='Enter class name'/>
            </div>

          {/* STATUS */}
          <div className="mb-4">
                <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Select Status <span className="text-red-500">*</span></label>
                <select name="status" id="status" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={status} onChange={() => setStatus(e.target.value)} required>
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAddAssignment(false)}>Cancel</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">{isLoading ? 'Saving...': 'Create Section'}</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddAssignmentModal;