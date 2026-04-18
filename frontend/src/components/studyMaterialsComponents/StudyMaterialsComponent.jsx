import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

const StudyMaterialsComponent = ({StudyMaterialsName}) => {
  return (
    <div className="">
        { StudyMaterialsName.map((study, index) => ( <div key={index} className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] lg:text-2xl font-bold'>{study.label} Materials</span>
                <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload {study.label}</button>
            </div>
            
            <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
                <div className="">
                    <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    <button>Search</button>
                </div>
            </form>
            
            <div className="text-center rounded-md bg-[#f8f9fa] p-8 text-[#666]">
                <div className="flex flex-col justify-center items-center gap-1">
                    <study.icon size={32}/>
                    <h1 className='font-bold text-2xl'>{study.label} Materials</h1>
                    <p>Select <strong>All Plans</strong> to view Documents or upload a new one</p>
                </div>
            </div>
        </div> ))}
    </div>
  )
}

export default StudyMaterialsComponent