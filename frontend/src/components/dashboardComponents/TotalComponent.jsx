import React from 'react'
import { useGetClassesQuery } from '../../redux/features/classApi'
import { useGetStudentsQuery } from '../../redux/features/studentApi'
import { useGetTeachersQuery } from '../../redux/features/teacherApi'

const TotalComponent = () => {
  const { data: classes } = useGetClassesQuery();
  const { data: studentsData } = useGetStudentsQuery();
  const { data: teachersData } = useGetTeachersQuery();
  const { data: sectionsData } = useGetClassesQuery();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{classes?.data.length || 0}</h1>
                   <span className='text-[#666]'>Total Classes</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{sectionsData?.data.length || 0}</h1>
                   <span className='text-[#666]'>Total Sections</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{studentsData?.data?.data.length || 0}</h1>
                   <span className='text-[#666]'>Total Students</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{teachersData?.data.length || 0}</h1>
                   <span className='text-[#666]'>Total Teachers</span>
               </div>
           </div>
  )
}

export default TotalComponent