import React from "react";
import recentPayments from "../../../Data/recentPayments";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const RecentPaymentComponent = ({ setRecordPayment }) => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] lg:text-2xl font-bold">
          Recent Payments
        </span>
        <button
          className="px-3 lg:px-5 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2"
          onClick={() => setRecordPayment(true)}
        >
          <FaPlus />
          Record Payments
        </button>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
        <div className="">
          <input
            type="text"
            placeholder="Search Sections..."
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-[#006b3f]"
          />
        </div>
        <div className="">
          <select
            name="class"
            id="class"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select class</option>
            <option value="class 1">class 1</option>
            <option value="class 2">class 2</option>
            <option value="class 3">class 3</option>
            <option value="class 4">class 4</option>
            <option value="class 5">class 5</option>
            <option value="class 6">class 6</option>
            <option value="class 7">class 7</option>
            <option value="class 8">class 8</option>
            <option value="class 9">class 9</option>
            <option value="class 10">class 10</option>
            <option value="class 11">class 11</option>
            <option value="class 12">class 12</option>
          </select>
        </div>
        <div className="">
          <select
            name="section"
            id="section"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select Section</option>
            <option value="section A">Section A</option>
            <option value="section B">Section B</option>
            <option value="section C">Section C</option>
            <option value="section D">Section D</option>
            <option value="section E">Section E</option>
          </select>
        </div>

        <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
          <IoSearchOutline size={24} />
          Search
        </button>
      </form>

      <div className="w-full overflow-x-auto">
        <table className="min-w-200 w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Student name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Fee Type
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Amount
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Payment Method
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Date
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Status
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {recentPayments.map((payment, index) => (
              <tr key={index} className="hover:bg-[#f8f9fa]">
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {payment.studentName}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {payment.feeType}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-[#10b981] font-bold text-left">
                  {payment.Amount}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {payment.paymentMethod}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {payment.date}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  <span className="py-1 px-2.5 rounded-md text-sm font-medium text-[#006b3f] bg-[#d1fae5]">
                    {payment.status}
                  </span>
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                  <button className="bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md">
                    View
                  </button>
                  <button className="bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPaymentComponent;
