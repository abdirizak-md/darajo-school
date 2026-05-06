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
      </div>

      <div className="flex gap-5 mb-8">
        {["parents"].map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item)}
            className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === item ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {" "}
            {item.toLocaleUpperCase()}{" "}
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
