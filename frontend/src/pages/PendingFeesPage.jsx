import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import TotalComponent from '../components/dashboardComponents/TotalComponent'

const PendingFeesPage = () => {
  const [active, setActive] = useState('students')
  const [addPayment, setAddPayment] = useState(false)
  const [allFees, setAllFees] = useState(false)

  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
      
      {/* Back Button */}
      <Link 
        to='/' 
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className='text-white' size={24}/>
        <span className='text-white font-medium'>Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className='text-orange-500 text-3xl font-bold mb-4'>💰 Pending Fees</h1>
        <span className='text-[#666]'>
          Track unpaid fees, manage payments, and monitor student balances
        </span>

        {/* Summary Cards */}
        <TotalComponent />
      </div>

      {/* Tabs */}
      <div className="flex gap-5 mb-8">
        <button
          onClick={() => setActive('students')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'students' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Students
        </button>

        <button
          onClick={() => setActive('pending')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'pending' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Pending Fees
        </button>

        <button
          onClick={() => setActive('history')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'history' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Payment History
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="bg-white rounded-md p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
        {active === 'students' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">All Students</h2>
            <p className="text-[#666]">List of students with fee status</p>
          </div>
        )}

        {active === 'pending' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pending Fees</h2>
            <p className="text-[#666]">Students with unpaid balances</p>
          </div>
        )}

        {active === 'history' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment History</h2>
            <p className="text-[#666]">Record of all completed payments</p>
          </div>
        )}
      </div>

    </section>
  )
}

export default PendingFeesPage