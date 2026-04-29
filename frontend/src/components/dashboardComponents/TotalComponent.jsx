import React from 'react'
const TotalComponent = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>98</h1>
                   <span className='text-[#666]'>Total Parents</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>5</h1>
                   <span className='text-[#666]'>Total Classes</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
<<<<<<< HEAD
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>120</h1>
=======
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{classes?.data[0]?.gradeLevels?.length || 0}</h1>
                   <span className='text-[#666]'>Total Sections</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>{studentsData?.data?.data.length || 0}</h1>
>>>>>>> rizeh
                   <span className='text-[#666]'>Total Students</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>25</h1>
                   <span className='text-[#666]'>Total Teachers</span>
               </div>
           </div>
  )
}

export default TotalComponent