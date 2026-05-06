import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ParentComponent from "../studentComponents/studentInfoComponents/ParentComponent";
import StudentComponent from "../studentComponents/studentInfoComponents/StudentComponent";
import TodayAttendanceComponent from "../studentComponents/studentInfoComponents/TodayAttendanceComponent";

const StudentPanelStudentInfoPage = () => {
  const [active, setActive] = useState("students");
  const [modelStudent, setmodelStudent] = useState(false);
  const [modelAttendance, setmodelAttendance] = useState(false);

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      <Link
        to="/student"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">
          🏠 Student Management
        </h1>
        <span className="text-[#666]">
          Manage Student Information, Attendance, and Other Academic Records
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">1,246</h1>
            <span className="text-[#666]">Total Students</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">95%</h1>
            <span className="text-[#666]">Attendance Today's</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">54</h1>
            <span className="text-[#666]">New Admissions</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">12</h1>
            <span className="text-[#666]">Absent Today</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mb-8">
        {["students", "parents", "attendances"].map((Tab, index) => (
          <button
            key={index}
            onClick={() => setActive(Tab)}
            className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == Tab ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {Tab.toLocaleUpperCase()}
          </button>
        ))}
      </div>

      {/* student Directory, parent */}
      {active === "students" && <StudentComponent />}

      {/* parent Directory */}
      {active === "parents" && <ParentComponent />}

      {/* today attendance */}
      {active === "attendances" && <TodayAttendanceComponent />}
    </section>
  );
};

export default StudentPanelStudentInfoPage;
