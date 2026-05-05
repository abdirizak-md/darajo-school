import React from 'react'

const ChartsGraphsComponent = () => {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 lg:mb-8 md:grid md:grid-cols-[1fr_1fr] md:gap-6 md:mb-8 grid grid-cols-[1fr] gap-4 mb-8">
        <div className="rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,0.2)] p-6">
            <h1 className='text-gray-700 font-bold mb-4 '>Attendance Trend</h1>
            <div className="h-90 rounded-md flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
            <p>Interactive Chart: Student Attendance by class</p>
            </div>
        </div>
        <div className="bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-md">
            <h1 className='text-gray-700 font-bold mb-4'>Fees Collection</h1>
            <div className="h-90 rounded-md p-4 flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
            <p>Interactive Chart: Monthly Fee Collection</p>
            </div>
        </div>
    </div>
  )
}

export default ChartsGraphsComponent