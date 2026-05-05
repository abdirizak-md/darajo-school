import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

const TeacherEnrollmentComponent = ({setEnrolled}) => {
    const enrolls = []
  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
      <div className="flex justify-between items-center mb-8">
          <span className='text-[#333] text-2xl font-bold'>Teacher Enrollment</span>
          <button className='px-5 py-2 text-white bg-orange-500 rounded-md flex items-center gap-2' onClick={() => setEnrolled(true)}><FaPlus />Enroll</button>
      </div>
      
      <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
        <div className="">
            <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
        </div>

        <div className="">
            <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                <option value="">Select Role</option>
                <option value="Staff">Teacher</option>
                <option value="Staff">Staff</option>
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
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Teacher Name</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Section</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Department</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Phone</th>
                    <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                </tr>
            </thead>
            <tbody className='table-row-group border-inherit'>
                {enrolls.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No enrolls found.
                            </td>
                        </tr>
                    )}
                {   enrolls.map((enroll, index) => (
                    <tr key={index} className="hover:bg-[#f8f9fa]">
                    <td className='p-4 border-b border-[#e1e5e9] text-left'> {enroll.enrollMember}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'> {enroll.role}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{enroll.department}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{enroll.phone}</td>
                    <td className='p-4 border-b border-[#e1e5e9] text-left'>{enroll.email}</td>
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

export default TeacherEnrollmentComponent