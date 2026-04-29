import { useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { useCreateClassMutation } from '../redux/features/classApi';
import { useGetTeachersQuery } from "../redux/features/teacherApi";

const AddClassModal = ({setAllClasse}) => {
    
    const [createClass, { isLoading }] = useCreateClassMutation();

    const { data } = useGetTeachersQuery();
    const teachers = data?.data || [];

    const [formData, setFormData] = useState({
        className: "",
        teacherId: "",
        status: "",
    });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.className.trim()) {
    alert("Class name is required");
    return;
  }

  try {
    const payload = {
      name: formData.className,
      teacherId: formData.teacherId,
      status: formData.status,
    };

    await createClass(payload).unwrap();

    alert("Class created successfully");
    setAllClasse(false);
  } catch (error) {
    console.log("ERROR:", error);
    console.log("ERROR DATA:", error?.data);

    alert(error?.data?.message || "Failed to create class");
  }
};
  return (
    <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-[#e1e5e9]">
                <h1 className="text-2xl text-orange-500 font-bold">Create New Class</h1>
                <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setAllClasse(false)}/>
            </div>
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="className" className="font-medium block mb-2 text-[#333]">Class Name <span className="text-red-500">*</span></label>
                <input type="text" name="className" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.className} onChange={handleChange} placeholder='Enter class name'/>
            </div>

            <div className="mb-4">
                <label htmlFor="teacherId" className="font-medium block mb-2 text-[#333]">Select Teacher <span className="text-red-500">*</span></label>
                <select name="teacherId" id="teacherId" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.teacherId} onChange={handleChange} required>
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                        <option key={teacher._id} value={teacher._id}>
                            {teacher.fullName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Select Status <span className="text-red-500">*</span></label>
                <select name="status" id="status" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAllClasse(false)}>Cancel</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Class</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddClassModal