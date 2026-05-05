import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useGetClassesQuery } from "../../../redux/features/classApi";
import { useGetSectionsQuery } from "../../../redux/features/sectionApi";

const ByStudentAttendanceComponent = () => {
  const { data: classData } = useGetClassesQuery();
  const { data: sectionData } = useGetSectionsQuery();

  const classes = classData?.data || [];
  const sections = sectionData?.data || [];
  // console.log("Classes:", classes);
  //   console.log("Sections:", sections);

  const statusStyles = {
    active: "bg-[#d1fae5] text-[#10b981]",
    pending: "bg-[#fef3c7] text-[#92400e]",
    completed: "bg-[#dbeafe] text-[#1e40af]",
  };

  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");

  const classAttendance = [
    {
      id: 1,
      assignmetTitle: "Math Assignment 1",
      subject: "Mathematics",
      classLevel: "Grade 10",
      status: "Active",
    },
  ];
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] lg:text-2xl font-bold">
          By Student Attendance
        </span>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-[3fr_2fr_2fr] md:grid-cols-[1fr] gap-3 ">
        <div className="">
          <input
            type="text"
            placeholder="Search student attendances"
            className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"
          />
        </div>

        {/* ✅ CLASS DROPDOWN */}
        <div className="mb-4">
          <select
            name="classes"
            id="classes"
            className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            {classes?.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {" "}
                {cls.name}{" "}
              </option>
            ))}
          </select>
        </div>
        {/* section name */}
        <div className="mb-4">
          <select
            name="sections"
            id="sections"
            className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"
            value={sectionId}
            onChange={(e) => setSectionId(e.target.value)}
            required
          >
            <option value="">Select Section</option>
            {sections?.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {" "}
                {cls.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </form>

      <form className="w-full overflow-x-auto">
        <table className="min-w-200 w-full border-collapse mt-4">
          <thead>
            <tr className="bg-[#eff1f3] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">
              <th scope="col" className="p-4">
                Date
              </th>
              <th scope="col" className="p-4">
                Student Name
              </th>
              <th scope="col" className="p-4">
                Class
              </th>
              <th scope="col" className="p-4">
                Status
              </th>
              <th scope="col" className="p-4">
                Mark Attendance
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group border-inherit">
            {classAttendance.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No Student Attendance found.
                </td>
              </tr>
            )}

            {classAttendance.map((classAttend) => (
              <tr
                key={classAttend.id}
                className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9] text-left"
              >
                <td className="p-4">{classAttend.assignmetTitle}</td>
                <td className="p-4">{classAttend.subject}</td>
                <td className="p-4">{classAttend.classLevel}</td>
                <td className="p-4">
                  <span
                    className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${statusStyles[classAttend.status?.toLowerCase()] || "bg-gray-100 text-gray-500"}`}
                  >
                    {" "}
                    {classAttend.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <input type="checkbox" name="present" id="present" />
                      <label
                        htmlFor="present"
                        className="text-sm text-gray-700"
                      >
                        Present
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" name="absent" id="absent" />
                      <label htmlFor="absent" className="text-sm text-red-700">
                        Absent
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" name="excused" id="excused" />
                      <label
                        htmlFor="excused"
                        className="text-sm text-yellow-700"
                      >
                        Excused
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button className="lg:px-5 px-3 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2">
            <FaPlus />
            Take Student Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default ByStudentAttendanceComponent;
