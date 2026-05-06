import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useGetClassesQuery } from "../../redux/features/classApi";
import { useGetSectionsQuery } from "../../redux/features/sectionApi";
import { useState } from "react";
import { useGetStudentsQuery } from "../../redux/features/studentApi";
import { useSaveAttendanceMutation } from "../../redux/features/attendanceApi";

const BySectionAttendanceComponent = () => {
  const { data: classData } = useGetClassesQuery();
  const { data: sectionData } = useGetSectionsQuery();
  const { data: studentData } = useGetStudentsQuery();

  const classes = classData?.data || [];
  const sections = sectionData?.data || [];
  const students = studentData?.data || [];

  const [saveAttendance, { isLoading }] = useSaveAttendanceMutation();
  console.log("students", students);

  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [search, setSearch] = useState("");

  // ✅ FIX: missing state
  const [attendanceMap, setAttendanceMap] = useState({});

  const statusStyles = {
    active: "bg-[#d1fae5] text-[#10b981]",
    pending: "bg-[#fef3c7] text-[#92400e]",
    completed: "bg-[#dbeafe] text-[#1e40af]",
  };

  const filteredStudents = students.filter((student) => {
    const matchesClass =
      !classId || classId === "all"
        ? true
        : student.classId?._id === classId;

    const matchesSection =
      !sectionId || sectionId === "all"
        ? true
        : student.sectionId?._id === sectionId;

    const matchesSearch = search
      ? student.fullName?.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesClass && matchesSection && matchesSearch;
  });

  // ✅ FIX: status handler
  const handleStatusChange = (studentId, status) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

const handleSubmit = async () => {
  const records = filteredStudents
    .map((student) => {
      const studentId = student?._id || student?.id;

      if (!studentId) {
        console.warn("❌ Missing student ID:", student);
        return null;
      }

      return {
        studentId,
        status: attendanceMap[studentId] || "absent",
      };
    })
    .filter(Boolean);

  const payload = {
    classId,
    sectionId,
    date: new Date().toISOString().split("T")[0],
    records,
  };

  console.log("🔥 FINAL PAYLOAD:", payload);

  if (!classId || !sectionId) {
    return alert("Class and Section required");
  }

  if (records.length === 0) {
    return alert("No valid student records found");
  }

  try {
    const res = await saveAttendance(payload).unwrap();
    console.log("SUCCESS RESPONSE:", res);

    alert("Attendance saved successfully");
    setAttendanceMap({});
  } catch (err) {
    console.log("ERROR RESPONSE:", err);
    alert(err?.data?.message || "Server error");
  }
};
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#333] lg:text-2xl font-bold">
          By Section Attendance
        </span>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_150px] md:grid-cols-[1fr] gap-3 ">
        <input
          type="text"
          placeholder="Search section attendances"
          className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg placeholder:text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mb-4">
          <select
            className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md"
            value={classId}
            onChange={(e) => {
              setClassId(e.target.value);
              setSectionId("");
            }}
          >
            <option value="">Select Class</option>
            <option value="">All Classes</option>
            {classes?.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <select
            className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md"
            value={sectionId}
            onChange={(e) => setSectionId(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="">All Sections</option>
            {sections?.map((sec) => (
              <option key={sec._id} value={sec._id}>
                {sec.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-200 w-full border-collapse mt-4">
          <thead>
            <tr className="bg-[#eff1f3] text-[#333] font-semibold text-left">
              <th className="p-4">Student Name</th>
              <th className="p-4">Section</th>
              <th className="p-4">Status</th>
              <th className="p-4">Mark Attendance</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No Section Attendance found.
                </td>
              </tr>
            )}

            {filteredStudents.map((student) => (
              <tr
                key={student._id}
                className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9]"
              >
                <td className="p-4">{student.fullName}</td>
                <td className="p-4">{student.sectionId?.name}</td>

                <td className="p-4">
                  <span
                    className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${
                      statusStyles[
                        attendanceMap[student._id]?.toLowerCase()
                      ] || "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {attendanceMap[student._id] || "not marked"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <label className="flex gap-1 items-center">
                      <input
                        type="radio"
                        name={student._id}
                        checked={
                          attendanceMap[student._id] === "present"
                        }
                        onChange={() =>
                          handleStatusChange(student._id, "present")
                        }
                      />
                      Present
                    </label>

                    <label className="flex gap-1 items-center text-red-600">
                      <input
                        type="radio"
                        name={student._id}
                        checked={attendanceMap[student._id] === "absent"}
                        onChange={() =>
                          handleStatusChange(student._id, "absent")
                        }
                      />
                      Absent
                    </label>

                    <label className="flex gap-1 items-center text-yellow-600">
                      <input
                        type="radio"
                        name={student._id}
                        checked={attendanceMap[student._id] === "excused"}
                        onChange={() =>
                          handleStatusChange(student._id, "excused")
                        }
                      />
                      Excused
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SUBMIT */}
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="lg:px-5 px-3 py-2 cursor-pointer text-white bg-orange-500 rounded-md inline-flex items-center gap-2"
          >
            <FaPlus />
            {isLoading ? "Saving..." : "Take Section Attendance"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BySectionAttendanceComponent;