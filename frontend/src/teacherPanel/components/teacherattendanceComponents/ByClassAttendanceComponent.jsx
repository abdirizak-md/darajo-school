import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

const ByClassAttendanceComponent = () => {
     const statusStyles = {
        active: "bg-[#d1fae5] text-[#10b981]",
        pending: "bg-[#fef3c7] text-[#92400e]",
        completed: "bg-[#dbeafe] text-[#1e40af]",
    };

    const classAttendance = []
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold'>By Class Attendance</span>
            <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2'><FaPlus />Take Class Attendance</button>
        </div>
        
        <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3 ">
            <div className="">
                <input type="text" placeholder="Search class attendances" className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
                <IoSearchOutline size={24}/> Search
            </button>
        </form>

        <div className="w-full overflow-x-auto">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr className='bg-[#eff1f3] text-[#333] font-semibold border-b border-[#e1e5e9] text-left'>
                        <th scope="col" className="p-4">Date</th>
                        <th scope="col" className="p-4">Student Name</th>
                        <th scope="col" className="p-4">Class</th>
                        <th scope="col" className="p-4">Status</th>
                        <th scope="col" className="p-4">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {classAttendance.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No Class Attendance found.
                            </td>
                        </tr>
                    )}

                    {   classAttendance.map((classAttend) => (
                        <tr key={classAttend.id} className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9] text-left">
                        <td className='p-4'>{classAttend.assignmetTitle}</td>
                        <td className='p-4'>{classAttend.subject}</td>
                        <td className='p-4'>{classAttend.classLevel}</td>
                        <td className='p-4'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${ statusStyles[classAttend.status?.toLowerCase()] || "bg-gray-100 text-gray-500"  }`}> {classAttend.status}</span></td>
                        <td className='p-4'>
                            <div className="flex gap-2">
                                <button type='button' className='bg-[#10b981] hover:bg-[#0c9c6c] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md'>View</button>
                                <button type="button" className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-1.5 rounded-md hover:bg-gray-100 transition-colors">Edit</button>
                                <button type="button" className="bg-red-600 text-white px-4 py-1.5 rounded-md hover:bg-red-700 transition-colors">Delete</button>
                            </div>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ByClassAttendanceComponent