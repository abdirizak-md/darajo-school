import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ParentsComponent from "../components/parentComponent/ParentsComponent";
import TodayAttendanceComponent from "../components/studentInfoComponents/TodayAttendanceComponent";
import AddParentModal from "../boxModels/AddParentModal";
import ParentChildStudentComponent from "../components/parentComponent/ParentChildStudentComponent";
// import AddParentModal from '../boxModels/AddParentModal'

const ParentsInfoPage = () => {
  const [active, setActive] = useState("parents");
  const [modelParent, setParentModal] = useState(false);
  const [modelContact, setmodelContact] = useState(false);

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      <Link
        to="/"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">
          👨‍👩‍👧 Parent Management
        </h1>
        <span className="text-[#666]">
          Manage Parent Information, Student Links, and Communication Records
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 border-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">842</h1>
            <span className="text-[#666]">Total Parents</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 border-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">312</h1>
            <span className="text-[#666]">Active Contacts</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 border-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">128</h1>
            <span className="text-[#666]">New Parents</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 border-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">24</h1>
            <span className="text-[#666]">Pending Verification</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mb-8">
        {["parents", "student"].map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item)}
            className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === item ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {" "}
            {item}{" "}
          </button>
        ))}
      </div>

      {/* Parent Directory */}
      {active === "parents" && (
        <ParentsComponent setParentModal={setParentModal} />
      )}

      {/* student logs */}
      {active === "student" && <ParentChildStudentComponent />}

      {/* Add Parent Modal */}
      {modelParent && <AddParentModal setParentModal={setParentModal} />}
    </section>
  );
};

export default ParentsInfoPage;
