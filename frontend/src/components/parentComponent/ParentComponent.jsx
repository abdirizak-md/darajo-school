import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import student from '../../Data/students'

const ParentComponent = () => {
  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
        <div className="flex justify-between items-center mb-8">
            <span className='text-[#333] text-2xl font-bold'>Parent Directory</span>
        </div>
        
        <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
            <div className="">
                <input type="text" placeholder='Search by Name Admission number...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">Select Patent</option>
                    <option value="All Classes">All Parent</option>
                    <option value="Abbas Abdullahi">Abbas Abdullahi</option>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Parent Name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Address</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Parent Phone</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Email</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                {student.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No parents found.
                            </td>
                        </tr>
                    )}
                    {   student.map((student, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span>{student.parent}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'> {student.address}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{student.phone}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{student.email}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{student.fullName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left capitalize'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${student.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${student.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${student.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{student.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md' >Edit</button>
                            <button className='bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ParentComponent