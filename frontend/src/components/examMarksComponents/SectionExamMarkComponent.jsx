import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import staffs from '../../Data/staffs'

const SectionExamMarkComponent = ({setTeacherModal}) => {
    const examsmarksections = [
        { section: 'section A', subject: 'Mathematics', examDate: '2023-10-15', maxMarks: 100, passingMarks: 40, status: 'Active' },
        { section: 'section B', subject: 'Science', examDate: '2023-10-16', maxMarks: 100, passingMarks: 40, status: 'Pending' },
        { section: 'section C', subject: 'English', examDate: '2023-10-17', maxMarks: 100, passingMarks: 40, status: 'Completed' }
    ];
  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
      <div className="flex justify-between items-center mb-8">
          <span className='text-[#333] text-2xl font-bold'>All Sections</span>
      </div>
      
      <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
        <div className="">
            <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
        </div>

        <div className="">
            <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                <option value="">Select Role</option>
                <option value="Staff">Staff</option>
                <option value="Administrators">Administrators</option>
                <option value="Support Staff">Support Staff</option>
            </select>
        </div>

        <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
            <IoSearchOutline size={24}/>
            <button>Search</button>
        </div>
    </form>

      <div className="w-full overflow-x-auto">
        <table className="min-w-200 w-full border-collapse mt-4">
            <thead>
                <tr>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Exam Date</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Max Marks</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Passing Marks</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                </tr>
            </thead>
            <tbody className='table-row-group border-inherit'>
                {examsmarksections.length === 0 && (
                    <tr>
                        <td colSpan="8" className='p-4 border-b border-[#e1e5e9] text-center text-[#666]'>No Exam Marks Found</td>
                    </tr>
                ) }
                {   examsmarksections.map((exam, index) => (
                    <tr key={index} className="hover:bg-[#f8f9fa]">
                    <td className='p-4 border-b border-[#e1e5e9] text-left'> {exam.section}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'> {exam.subject}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{exam.examDate}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{exam.maxMarks}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{exam.passingMarks}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left capitalize'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${exam.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${exam.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${exam.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{exam.status}</span></td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                        <button className='bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                        <button className='bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => startUpdatingIndex(index)}>Edit</button>
                        <button className='bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => deleteSection(index)}>Delete</button>
                    </td>
                </tr> ))}
            </tbody>
        </table>
      </div>
  </div>
  )
}

export default SectionExamMarkComponent