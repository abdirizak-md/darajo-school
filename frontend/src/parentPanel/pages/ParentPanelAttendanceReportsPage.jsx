import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import BySectionAttendanceComponent from "../parentComponents/attendanceComponents/BySectionAttendanceComponent";
import ByStudentAttendanceComponent from "../parentComponents/attendanceComponents/ByStudentAttendanceComponent";
import DailyAttendanceComponent from "../parentComponents/attendanceComponents/DailyAttendanceComponent";

const ParentPanelAttendanceReportPage = () => {
  const [active, setActive] = useState("daily");
  const [showFilter, setShowFilter] = useState(false);
  const [allAttendance, setAllAttendance] = useState(false);

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      {/* Back Button */}
      <Link
        to="/parent"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">
          📊 Attendance Report
        </h1>
        <span className="text-[#666]">
          Monitor student attendance, track absences, and analyze trends
        </span>

        {/* total component removed */}
      </div>

      {/* Tabs */}
      <div className="flex gap-5 mb-8">
        {["daily", "class", "student"].map((Tab, index) => (
          <button
            key={index}
            onClick={() => setActive(Tab)}
            className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == Tab ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {Tab.toLocaleUpperCase()}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="bg-white rounded-md p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
        {active === "daily" && <DailyAttendanceComponent />}

        {active === "class" && <BySectionAttendanceComponent />}

        {active === "student" && <ByStudentAttendanceComponent />}
      </div>
    </section>
  );
};

export default ParentPanelAttendanceReportPage;
