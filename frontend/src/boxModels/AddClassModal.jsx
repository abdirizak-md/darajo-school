import { useState } from 'react';
import { IoClose } from 'react-icons/io5'

const AddClassModal = ({setAllClasse}) => {
     const [formData, setFormData] = useState({
        className: "",
        classCode: "",
        room: "",
        section: "",
        grade: "",
        teacher: "",
        schedule: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
  return (
    <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-[#006b3f] font-bold">Create New Class</h1>
                <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setAllClasse(false)}/>
            </div>
            <form className="p-6">
            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class Name *</label>
                <input type="text" name="className" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.className} onChange={handleChange} placeholder='Enter class name'/>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Room No *</label>
                    <input type="text" name="room" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.room} onChange={handleChange} placeholder='Enter room number'/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Section *</label>
                    <select name="section" id="section" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select section</option>
                    <option value="section a">section a</option>
                    <option value="section b">section b</option>
                    <option value="section c">section c</option>
                    <option value="section d">section d</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Grade *</label>
                    <select name="grade" id="grade" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Grade</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                    <select name="teacher" id="teacher" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Teacher</option>
                    <option value="Teacher 1">Mr. Mohamed Warsame</option>
                    <option value="Teacher 2">Mr. Ahmed Mohamed</option>
                    <option value="Teacher 3">Mss. Hodan Ahmed</option>
                    <option value="Teacher 4">Mr. Ali Ahmed Abdi</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Schedule *</label>
                    <input type="text" name="schedule" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.schedule} onChange={handleChange} placeholder='Enter schedule'/>
                </div>

            <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAllClasse(false)}>Cancel</button>
                <button className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Class</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddClassModal