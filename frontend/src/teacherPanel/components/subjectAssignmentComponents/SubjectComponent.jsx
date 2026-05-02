import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

// ❌ REMOVE STATIC DATA
// import subjects from '../../Data/subjects'

import { useGetSubjectsQuery } from '../../redux/features/subject'
import { useState } from 'react';

const SubjectComponent = ({ setAddSubject }) => {
  const { data, isLoading, isError } = useGetSubjectsQuery();

  const subjects = data?.data || []; // ✅ safe fallback\
  
  const [search, setSearch] = useState("");
  const [selectedSections, setSelectedSections] = useState("");

  const statusStyles = {
    active: "bg-[#d1fae5] text-[#10b981]",
    pending: "bg-[#fef3c7] text-[#92400e]",
    completed: "bg-[#dbeafe] text-[#1e40af]",
  };

  const filteredSubjects = data?.data?.filter((subject) => {
        const matchesSearch = subject?.name
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchesSelect =
            selectedSections && selectedSections !== "All Sections"
                ? subject?.section === selectedSections
                : true;

        return matchesSearch && matchesSelect;
    });

  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <span className='text-[#333] lg:text-2xl font-bold '>
          Manage Subjects
        </span>

        <button
          className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2'
          onClick={() => setAddSubject(true)}
        >
          <FaPlus />Add Subjects
        </button>
      </div>

      {/* SEARCH */}
      <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mb-4">
            <div className="mb-4">
                <input type="text" name='section' placeholder='Search Sections...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-orange-500" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <div className="mb-4">
                <select name="sections" id="sections" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-orange-500 transition-all duration-300 ease-in-out" value={selectedSections} onChange={(e) => setSelectedSections(e.target.value)} required>
                    <option value="">Select section</option>
                    <option value="All Sections">All sections</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="C">Section C</option>
                    <option value="D">Section D</option>
                </select>
            </div>
        </form>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
         <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject Name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject Code</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Description</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {subjects.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                            No Subject found.
                            </td>
                        </tr>
                    )}
                    {   filteredSubjects?.map((section, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Section {section.name}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'> {section.code}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{section.description}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left capitalize'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${section.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${section.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${section.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{section.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md'>View</button>
                            <button className='bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md' onClick={() => startUpdatingIndex(id)}>Edit</button>
                            <button className='bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md' onClick={() => deleteSection(id)}>Delete</button>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
      </div>

    </div>
  )
}

export default SubjectComponent