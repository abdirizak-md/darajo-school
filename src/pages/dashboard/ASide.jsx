import { useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa6';
import { MdArrowBackIos, MdClose } from 'react-icons/md';
import SidebarComponent from "../../components/dashboardComponents/SidebarComponent";
import {
  academics,
  dashboard,
  feesAccounts,
  staffManagements,
  studentManagement
} from '../../Data/sideBar';

const ASide = ({close, setClose}) => {
  const [open, setOpen] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <aside className={`${close ? '' : 'hidden'} lg:flex flex-col h-screen backdrop-blur-xl bg-white/10 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out  ${open ? 'w-72' : 'w-20'} `} >
      
      {/* Top Brand */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
        {open && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-black/10 backdrop-blur-md shadow-inner">
              <FaUserGraduate className="text-white text-lg" />
            </div>
            <span className="text-black font-semibold tracking-wide text-base"> Darajo </span>
          </div>
        )}

        <button onClick={() => setOpen(!open)} aria-expanded={open} className={`${close ? 'hidden' : ''} p-2 rounded-xl hover:bg-white/10 transition duration-200`} >
          <MdArrowBackIos className={`text-white transition-transform duration-300 ${ open ? 'rotate-0' : 'rotate-180' }`} />
        </button>
        { close && <button onClick={() => setClose(false)} aria-expanded={open} className="p-2 rounded-xl hover:bg-red-500/70 transition duration-200" >
          <MdClose className={`text-white transition-transform duration-300 ${ open ? 'rotate-0' : 'rotate-180' }`} />
        </button> }
      </div>

      {/* Scroll Area */}
      <div className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <SidebarComponent title="DASHBOARD" items={dashboard} open={open} />
        <SidebarComponent title="ACADEMICS" items={academics} open={open} />
        <SidebarComponent title="FEES & ACCOUNTS" items={feesAccounts} open={open} />
        <SidebarComponent title="STUDENT MANAGEMENT" items={studentManagement} open={open} />
        <SidebarComponent title="STAFF MANAGEMENT" items={staffManagements} open={open} />
      </div>
    </aside>
  )
}

export default ASide
