import { FaPlus } from "react-icons/fa6";
import { useGetClassesQuery } from "../../../redux/features/classApi";
import { useGetFeesQuery } from "../../../redux/features/feeApi";
import { useGetFeeTypesQuery } from "../../../redux/features/feeTypeApi";
import { useGetSectionsQuery } from "../../../redux/features/sectionApi";
import { useGetStudentsQuery } from "../../../redux/features/studentApi";

const PendingFeesComponent = () => {
  const { data: classes } = useGetClassesQuery();
  const { data: sections } = useGetSectionsQuery();
  const { data: students } = useGetStudentsQuery();
  const { data: feeTypes } = useGetFeeTypesQuery();
  const { data: fees } = useGetFeesQuery();
  //   console.log("classes:", classes);
  //   console.log("sections:", sections);
  //   console.log("students:", students);
  //   console.log("feeTypes:", feeTypes);
  console.log("fees:", fees);

  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] lg:text-2xl font-bold">Pending Fees</span>
        <button className="px-3 lg:px-5 py-2 cursor-pointer bg-[#fcd116] rounded-md inline-flex items-center gap-2">
          <FaPlus />
          Send Remainders
        </button>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
        <div className="">
          <select
            name="class"
            id="class"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select class</option>
            {classes?.data.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {cls.name}
              </option>
            ))}
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
            {sections?.data.map((section) => (
              <option key={section._id} value={section._id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>
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
                Date
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Days Left
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {fees?.data.map((fee, index) => (
              <tr key={index} className="hover:bg-[#f8f9fa]">
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {fee.student?.fullName}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {fee.feeType?.name}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left">
                  {fee.amount}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {fee.dueDate}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left">
                  {fee.daysLeft}
                </td>
                <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                  <button className="bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md">
                    Mark Paid
                  </button>
                  <button className="bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md">
                    Send Email
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

export default PendingFeesComponent;
