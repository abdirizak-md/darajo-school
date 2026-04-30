import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useGetClassesQuery } from '../../redux/features/classApi'
import { useGetStudentsQuery } from '../../redux/features/studentApi'


const AllClassesComponent = ({setAllClasse}) => {
    const { data, isLoading, isError } = useGetClassesQuery();
    const { data: studentsData } = useGetStudentsQuery();

    const [search, setSearch] = useState("");
    const [selectedClass, setSelectedClass] = useState("");


    const filteredClasses = data?.data?.filter((classs) => {
        const matchesSearch = classs?.name
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchesSelect =
            selectedClass && selectedClass !== "All Classes"
                ? classs?.name === selectedClass
                : true;

        return matchesSearch && matchesSelect;
    });

  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
        <div className="flex justify-between items-center mb-8">
            <span className='text-[#333] text-2xl font-bold'>Class Management</span>
            <button className='px-5 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md flex items-center gap-2' onClick={() => setAllClasse(true)}><FaPlus />Add Class</button>
        </div>
                
        <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mb-4">
            <div className="mb-4">
                <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <div className="mb-4">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-orange-500 transition-all duration-300 ease-in-out" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} required>
                    <option value="">Select Class</option>
                    <option value="All Classes">All Classes</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>
        </form>
    
        {/* All Classes */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {   
                isLoading ? (
                    <div className="col-span-full text-center">
                        <span className='text-[#666] text-lg'>Loading classes...</span>
                    </div>
                ) : isError ? (
                    <div className="col-span-full text-center">
                        <span className='text-[#666] text-lg'>Error loading classes</span>
                    </div>
                ) : (
                    filteredClasses?.map((classs, index) => (
                        <div key={index} className="bg-white rounded-2xl border-l-4 border-orange-500 p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className='text-orange-500 text-2xl font-bold mb-1'>{classs.name}</h1>
                                <div>
                        <span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${classs.status === 'active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${classs.status === 'pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${classs.status === 'completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{classs.status}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className='text-[#666]'>Students</span>
                        <span className='font-medium'>{studentsData?.data.data.length || 0}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className=    'text-[#666]'>Class Teacher</span>
                       <span className='font-medium'>
                        {classs.teacherId?.fullName || "No Teacher"}
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <span className='text-[#666]'>Room</span>
                        <span className='font-medium'>{classs.sectionId?.roomNumber}</span>
                    </div>
                </div>
                <div className="flex justify-between gap-1 text-sm mt-4">
                    <button className='px-5 py-1.5 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg cursor-pointer'>View Details</button>
                    <button className='px-5 py-1.5 border border-[#fcd116] bg-[#fcd116]  rounded-lg cursor-pointer'>Edit</button>
                    <button className='px-5 py-1.5 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
                </div>
            </div> )) )}
        </div>
    </div>
  )
}

export default AllClassesComponent