import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import subjects from '../../Data/subjects'

const SubjectComponent = () => {
     const statusStyles = {
        active: "bg-[#d1fae5] text-[#10b981]",
        pending: "bg-[#fef3c7] text-[#92400e]",
        completed: "bg-[#dbeafe] text-[#1e40af]",
    };
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold '>Manage Subjects</span>
            <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Add Subjects</button>
        </div>
            
        <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
            <div className="">
                <input type="text" placeholder="Search students, teachers, fees, and exam..." className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out">
                <IoSearchOutline size={24}/> Search
            </button>
        </form>

        <div className="w-full overflow-x-auto">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr className='bg-[#eff1f3] p-4 text-[#333] font-semibold border-b border-[#e1e5e9] text-left'>
                        <th scope="col" className="p-4">Subject name</th>
                        <th scope="col" className="p-4">Code</th>
                        <th scope="col" className="p-4">Class Level</th>
                        <th scope="col" className="p-4">Teacher</th>
                        <th scope="col" className="p-4">Status</th>
                        <th scope="col" className="p-4">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {subjects.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No subjects found.
                            </td>
                        </tr>
                    )}

                    {   subjects.map((subject) => (
                        <tr key={subject.id} className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9] text-left">
                        <td className='p-4'>{subject.subjectName}</td>
                        <td className='p-4'>{subject.code}</td>
                        <td className='p-4'>{subject.classLevel}</td>
                        <td className='p-4'>{subject.teacher}</td>
                        <td className='p-4'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${ statusStyles[subject.status?.toLowerCase()] || "bg-gray-100 text-gray-500"  }`}> {subject.status}</span></td>
                        <td className='p-4'>
                            <div className="flex gap-2">
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

export default SubjectComponent