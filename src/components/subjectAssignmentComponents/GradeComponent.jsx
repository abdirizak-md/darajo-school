import React from 'react'
import grades from '../../Data/grades'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'

const GradeComponent = () => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold'>Grade Management</span>
            <button className='lg:px-5 py-2 px-3 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Import Grades</button>
        </div>
            
        <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
            <div className="">
                <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">All Grades</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
                <IoSearchOutline size={24}/> Search
            </button>
        </form>

        <div className="w-full overflow-x-auto">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Name</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Assignment</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Grade</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Comments</th>
                        <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {grades.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No grades found.
                            </td>
                        </tr>
                    )}

                    {   grades.map((grade) => (
                        <tr key={grade.id} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.classLeve}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.subject}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.assignment}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.grade}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.comments}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <div className="flex gap-2">
                                <button type='button' className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md hover:bg-[#0c9c6c] transition-colors'>View</button>
                                <button type="button" className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-1.5 rounded-md hover:bg-gray-100 transition-colors">Edit</button>
                            </div>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GradeComponent