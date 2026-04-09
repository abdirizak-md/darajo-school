import { IoClose } from 'react-icons/io5'

const AddClassModal = ({setAllClasse}) => {
  return (
    <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-[#006b3f] font-bold">Create New Lesson Plan</h1>
                <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setAllClasse(false)}/>
            </div>
            <form className="p-6">
            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Title *</label>
                    <input type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Select Subject *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Class</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Duration (minutes) *</label>
                    <input type="number" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Week *</label>
                    <input type="number" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Teacher</option>
                    <option value="Class 1">Mr. Mohamed Warsame</option>
                    <option value="Class 2">Mr. Ahmed Mohamed</option>
                    <option value="Class 3">Mss. Hodan Ahmed</option>
                    <option value="Class 4">Mr. Ali Ahmed Abdi</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Description *</label>
                <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Desctiption what students will learn in this lesson"></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Leaning Objectives *</label>
                <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List the specific learning objectives in this lesson"></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Required Materials *</label>
                <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List any materials, resources or equipment needed"></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Activities *</label>
                <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Describe main activities and teaching methods"></textarea>
            </div>

            <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAllClasse(false)}>Cancel</button>
                <button className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Lesson Plan</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddClassModal