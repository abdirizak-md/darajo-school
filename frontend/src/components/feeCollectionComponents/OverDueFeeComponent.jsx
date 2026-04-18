import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import { overdueFees } from '../../Data/pendingFees'

const OverDueFeeComponent = () => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold'>Overdue Fees</span>
            <button className='px-3 lg:px-5 py-2 cursor-pointer text-white bg-[#ce1126] rounded-md inline-flex items-center gap-2'><FaPlus />Send Urgent Remainders</button>
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

        <div className="w-full overflow-x-auto">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Due Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Days Overdues</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {   overdueFees.map((overdues, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.feeType}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>{overdues.amount}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.dueDate}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.daysLeft}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Call Parent</button>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OverDueFeeComponent