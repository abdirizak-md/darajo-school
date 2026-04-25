import React from 'react'

const TotalComponent = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>25</h1>
                   <span className='text-[#666]'>Total Classes</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>12</h1>
                   <span className='text-[#666]'>Grade Levels</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>1,259</h1>
                   <span className='text-[#666]'>Total Students</span>
               </div>
               <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
                   <h1 className='text-orange-500 text-4xl font-bold mb-1'>79</h1>
                   <span className='text-[#666]'>Total Teachers</span>
               </div>
           </div>
  )
}

export default TotalComponent