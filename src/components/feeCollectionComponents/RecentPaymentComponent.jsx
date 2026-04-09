import React from 'react'
import recentPayments from '../../Data/recentPayments'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'

const RecentPaymentComponent = () => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold'>Recent Payments</span>
            <button className='px-3 lg:px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Record Payments</button>
        </div>
            
        <form className="grid grid-cols-1 lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
            <div className="">
                <input type="text" placeholder='Search Sections...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-[#006b3f]"/>
            </div>
            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">Select Payment</option>
                    <option value="All Payments">All Payments</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>

            <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
                <IoSearchOutline size={24}/>
                Search
            </button>
        </form>

        <div className="w-full overflow-x-auto">
            <table className="min-w-200 w-full border-collapse mt-4">
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Payment Method</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {   recentPayments.map((payment, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.feeType}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#10b981] font-bold text-left'>{payment.Amount}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.paymentMethod}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.date}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium text-[#006b3f] bg-[#d1fae5]'>{payment.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentPaymentComponent