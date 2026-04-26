import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import staffs from '../../Data/staffs'

const SchedulesExamMarkComponent = ({setTeacherModal}) => {
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
      
      <form className="grid grid-cols-1  lg:grid-cols-[2fr_2fr_2fr_150px] md:grid-cols-[2fr_2fr_2fr_150px] gap-5 ">
        <div className="">
            <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
        </div>

        <div className="">
            <select name="class" id="class" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                <option value="">Select Class</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
            </select>
        </div>

        <div className="">
            <select name="section" id="section" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                <option value="">Select Section</option>
                <option value="Section A">Section A</option>
                <option value="Section B">Section B</option>
                <option value="Section C">Section C</option>
            </select>
        </div>

        <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
            <IoSearchOutline size={24}/>
            <button>Search</button>
        </div>
    </form>

      <div className="w-full overflow-x-auto">
        <form action="post">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Id</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Marks</th>
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
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <input type="number" name='exam' className='border border-[#e1e5e9] rounded-md p-2.5 w-1/5 '/>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
            <div className="w-full flex justify-end">
                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 mt-4 flex itecms-end">Save Marks</button>
            </div>
        </form>
      </div>
  </div>
  )
}

export default SchedulesExamMarkComponent