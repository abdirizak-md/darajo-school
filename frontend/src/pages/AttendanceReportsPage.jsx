import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import TotalComponent from "../components/dashboardComponents/TotalComponent";
import DailyReportsComponent from "../components/attendanceComponents/DailyAttendanceComponent";
import DailyAttendanceComponent from "../components/attendanceComponents/DailyAttendanceComponent";
import ByClassAttendanceComponent from "../components/attendanceComponents/BySectionAttendanceComponent";
import ByStudentAttendanceComponent from "../components/attendanceComponents/ByStudentAttendanceComponent";
import TakeAttendanceModal from "../boxModels/TakeAttendanceModal";
import BySectionAttendanceComponent from "../components/attendanceComponents/BySectionAttendanceComponent";

const AttendanceReportPage = () => {
  const [active, setActive] = useState("daily");
  const [showFilter, setShowFilter] = useState(false);
  const [allAttendance, setAllAttendance] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(false);

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      {/* Back Button */}
      <Link
        to="/"
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
        {["daily", "section", "student"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
              active === tab ? "bg-orange-500 text-white" : "bg-white"
            }`}
          >
            {tab.toLocaleUpperCase()}
          </button>
        ))}
      </div>
      {/* Dynamic Content */}
      {active === "daily" && (
        <DailyAttendanceComponent setAttendanceModal={setAttendanceModal} />
      )}
      {active === "section" && <BySectionAttendanceComponent />}
      {active === "student" && <ByStudentAttendanceComponent />}

      {/* Take Attendance Modal */}
      {attendanceModal && (
        <TakeAttendanceModal setAttendanceModal={setAttendanceModal} />
      )}
    </section>
  );
};

export default AttendanceReportPage;
