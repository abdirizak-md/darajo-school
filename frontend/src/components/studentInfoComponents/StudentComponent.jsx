import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import student from '../../Data/students'

const StudentComponent = ({setmodelStudent}) => {
    

    

    const calculateAge = (birthDate) => {
        if (!birthDate) return '';
            const today = new Date();
            const dob = new Date(birthDate);

            let age = today.getFullYear() - dob.getFullYear();

            const monthDiff = today.getMonth() - dob.getMonth();

            if (
                monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < dob.getDate())
            ) {
                age--;
            }

            return age;
        };
  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
        <div className="flex justify-between items-center mb-8">
            <span className='text-[#333] text-2xl font-bold'>Student Directory</span>
            <button className='px-5 py-2 text-white bg-[#006b3f] rounded-md flex items-center gap-2' onClick={() => setmodelStudent(true)}><FaPlus />Add Student</button>
        </div>
        
        <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
            <div className="">
                <input type="text" placeholder='Search by Name Admission number...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">Select Class</option>
                    <option value="All Classes">All Classes</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Admission No</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Parent Phone</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                {student.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No students found.
                            </td>
                        </tr>
                    )}
                    {   student.map((student, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>
                        <div className="flex flex-col">
                            <span>{student.fullName}</span>
                            <div className="flex items-center gap-2">
                            <span className='text-sm text-[#666]'>{student.gender}</span>
                            <span className='text-[#006b3f]'>•</span>
                            <span className='text-sm text-[#666]'>{calculateAge(student.birthDate)}</span>
                            </div>
                        </div>
                        </td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'> {student.admissionNo}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{student.classes}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{student.phone}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left capitalize'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${student.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${student.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${student.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{student.status}</span></td>
                        <td className='p-5 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button type='button' className='bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button type='button' className='bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => handleEdit(index)}>Edit</button>
                            <button type='button' className='bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => deleteStudent(index)}>Delete</button>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentComponent