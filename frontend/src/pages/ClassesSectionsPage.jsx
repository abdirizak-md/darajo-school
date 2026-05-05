import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import AllClassesComponent from "../components/sectionClassComponents/AllClassesComponent";
import ScheduleComponent from "../components/sectionClassComponents/ScheduleComponent";
import SectionsComponent from "../components/sectionClassComponents/SectionsComponent";
import AddClassModal from "../boxModels/AddClassModal";
import AddSectionModal from "../boxModels/AddSectionModal";
import TotalComponent from "../components/dashboardComponents/TotalComponent";
import AddScheduleModal from "../boxModels/AddScheduleModal";

const ClassesSectionsPage = () => {
  const [active, setActive] = useState("classes");
  const [addSection, setAddSection] = useState(false);
  const [addSchedule, setAddSchedule] = useState(false);
  const [allClasse, setAllClasse] = useState(false);

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      <Link
        to="/"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">
          🏠 Classes & Sections
        </h1>
        <span className="text-[#666]">
          Manage Academic Classes, Sections and Student Groups
        </span>

        {/* total component removed */}
      </div>

      <div className="flex gap-5 mb-8">
        {["classes", "sections", "schedules"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(tab)}
            className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == tab ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {tab.toLocaleUpperCase()}
          </button>
        ))}
      </div>

      {/* all classes, Sections and Schedules */}
      {active === "classes" && (
        <AllClassesComponent setAllClasse={setAllClasse} />
      )}

      {/* Sections */}
      {active === "sections" && (
        <SectionsComponent setAddSection={setAddSection} />
      )}

      {/* Schedules */}
      {active === "schedules" && (
        <ScheduleComponent setAddSchedule={setAddSchedule} />
      )}

      {/* box modal for All Classes*/}
      {allClasse && <AddClassModal setAllClasse={setAllClasse} />}

      {/* box modal for sections*/}
      {addSection && <AddSectionModal setAddSection={setAddSection} />}

      {/* box modal for schedule*/}
      {addSchedule && <AddScheduleModal setAddSchedule={setAddSchedule} />}
    </section>
  );
};

export default ClassesSectionsPage;
