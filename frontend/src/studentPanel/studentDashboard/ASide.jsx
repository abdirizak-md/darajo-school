import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { MdArrowBackIos, MdClose } from "react-icons/md";
import {
  academics,
  dashboard,
  feesAccounts,
  studentManagement,
} from "../studentPanelData/studentSideBar";
import SidebarComponent from "../studentComponents/dashboardComponents/SidebarComponent";

const ASide = ({ close, setClose }) => {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`${close ? "" : "hidden"} lg:flex flex-col h-screen overflow-y-auto custom-scrollbar backdrop-blur-xl bg-white/10 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out  ${open ? "w-72" : "w-20"} `}
    >
      {/* Top Brand */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
        {open && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-orange-500/15 backdrop-blur-md shadow-inner">
              <FaUserGraduate className="text-orange-500 text-4xl" />
            </div>
            <span className="text-orange-500 font-bold tracking-wide font-serif">
              {" "}
              DARAJO{" "}
            </span>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`${close ? "hidden" : ""} p-2 rounded-xl hover:bg-black/10 transition duration-200`}
        >
          <MdArrowBackIos
            className={`text-black transition-transform duration-300 ${open ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        {close && (
          <button
            onClick={() => setClose(false)}
            aria-expanded={open}
            className="p-2 rounded-xl hover:bg-orange-500/15 transition duration-200"
          >
            <MdClose
              className={`text-2xl transition-transform duration-300 text-orange-500 ${open ? "rotate-0" : "rotate-180"}`}
            />
          </button>
        )}
      </div>

      {/* Scroll Area */}
      <div className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <SidebarComponent title="DASHBOARD" items={dashboard} open={open} />
        <SidebarComponent title="ACADEMICS" items={academics} open={open} />
        <SidebarComponent
          title="FEES & ACCOUNTS"
          items={feesAccounts}
          open={open}
        />
        <SidebarComponent
          title="STUDENT MANAGEMENT"
          items={studentManagement}
          open={open}
        />
      </div>
    </aside>
  );
};

export default ASide;
