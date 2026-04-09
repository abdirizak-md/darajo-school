import { useState } from "react"
import { IoNotificationsOutline, IoSearch } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md"

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
      
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-emerald-700">Darajo SchoolMS</h1>
        <p className="text-xs text-gray-500 tracking-wide">Complete School Management System</p>
      </div>

      {/* Search */}
      <form onSubmit={handleSubmit} className="flex-1 max-w-xl mx-8" >
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
          <IoSearch className="text-gray-400 mr-2" size={18} />
          <input type="text" placeholder="Search students, teachers, fees..." className="bg-transparent w-full outline-none text-sm" />
        </div>
      </form>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-emerald-600 transition">
          <IoNotificationsOutline size={22} />
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] bg-red-500 text-white rounded-full">5</span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br to-[#006b3f] from-[#fcd116] text-white text-sm font-semibold shadow-md">
            A
          </div>

          <div className="flex items-center gap-1 text-gray-700">
            {open && <span className="text-sm font-medium">Admin</span>}
            <button onClick={() => setOpen(!open)} aria-expanded={open} >
              <MdKeyboardArrowDown className={`transition-transform duration-200 ${ open ? "rotate-180" : "" }`} />
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
