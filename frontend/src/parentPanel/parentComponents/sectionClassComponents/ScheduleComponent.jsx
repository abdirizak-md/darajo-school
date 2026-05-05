import { FaCalendarWeek, FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const ScheduleComponent = ({ setAddSchedule }) => {
  const schedules = [
    {
      classes: "Class 12",
      section: "A",
      days: "Mon",
      subject: "Math",
      teacher: "Ali Ahemd",
      timeFrom: "10:00",
      timeEnd: "11:00",
      room: "room-1020",
    },
  ];
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] text-2xl font-bold">Class Schedule</span>
        <button
          className="px-5 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2"
          onClick={(e) => setAddSchedule(true)}
        >
          <FaPlus />
          Create Schedule
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-5 mb-4">
        <div className="mb-4">
          <select
            name="subject"
            id="subject"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select Class</option>
            <option value="All Classes">All Classes</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="section"
            id="section"
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"
            required
          >
            <option value="">Select section</option>
            <option value="All sections">All sections</option>
            <option value="section A">section A</option>
            <option value="section B">section B</option>
            <option value="section C">section C</option>
            <option value="section D">Class D</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4"
        >
          <IoSearchOutline size={24} />
          View Schedule
        </button>
      </form>

      <div className="text-center rounded-md ">
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Class Name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Section Name
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Day
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Subject
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Teacher
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Time From
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Time End
              </th>
              <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {
              //   isLoading ? (
              //     <div className="col-span-full text-center">
              //       <span className="text-[#666] text-lg">
              //         Loading Sections...
              //       </span>
              //     </div>
              //   ) : isError ? (
              //     <div className="col-span-full text-center">
              //       <span className="text-[#666] text-lg">
              //         Error loading Sections
              //       </span>
              //     </div>
              //   ) : (
              schedules.map((schedule, index) => (
                <tr key={schedule.index} className="hover:bg-[#f8f9fa]">
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {schedule.classes}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {schedule.section}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {schedule.days}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {schedule.subject}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left">
                    {schedule.teacher}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left capitalize">
                    {schedule.timeFrom}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left capitalize">
                    {schedule.timeEnd}
                  </td>
                  <td className="p-4 border-b border-[#e1e5e9] text-left flex gap-2">
                    <button className="bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md">
                      View
                    </button>
                    <button
                      className="bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                      onClick={() => startEditing(section)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-1.5 rounded-md"
                      onClick={() => confirmDelete(section._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleComponent;
