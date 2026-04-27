import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import TotalComponent from '../../components/dashboardComponents/TotalComponent'
import DailyReportsComponent from '../../components/attendanceComponents/DailyAttendanceComponent'
import ByClassAttendanceComponent from '../../components/attendanceComponents/ByClassAttendanceComponent'
import ByStudentAttendanceComponent from '../../components/attendanceComponents/ByStudentAttendanceComponent'
import DailyAttendanceComponent from '../../components/attendanceComponents/DailyAttendanceComponent'


const StudentPanelAttendanceReportPage = () => {
  const [active, setActive] = useState('daily')
  const [showFilter, setShowFilter] = useState(false)
  const [allAttendance, setAllAttendance] = useState(false)

  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>

      {/* Back Button */}
      <Link 
        to='/student' 
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className='text-white' size={24}/>
        <span className='text-white font-medium'>Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className='text-orange-500 text-3xl font-bold mb-4'>📊 Attendance Report</h1>
        <span className='text-[#666]'>
          Monitor student attendance, track absences, and analyze trends
        </span>

        {/* Summary Cards */}
        <TotalComponent />
      </div>

      {/* Tabs */}
      <div className="flex gap-5 mb-8">
        <button
          onClick={() => setActive('daily')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'daily' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Daily Report
        </button>

        <button
          onClick={() => setActive('class')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'class' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          By Class
        </button>

        <button
          onClick={() => setActive('student')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'student' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          By Student
        </button>
      </div>

      {/* Filters (optional toggle) */}
      {/* <div className="mb-6">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="px-6 py-2 bg-orange-500 text-white rounded-md shadow hover:shadow-md active:scale-95 transition"
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>

        {showFilter && (
          <div className="mt-4 bg-white p-4 rounded-md shadow">
            <p className="text-[#666]">Filters (date range, class, section)</p>
          </div>
        )}
      </div> */}

      {/* Dynamic Content */}
      <div className="bg-white rounded-md p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
        
        {active === 'daily' && <DailyAttendanceComponent />}

        {active === 'class' && <ByClassAttendanceComponent />}

        {active === 'student' && <ByStudentAttendanceComponent />}

      </div>

    </section>
  )
}

export default StudentPanelAttendanceReportPage