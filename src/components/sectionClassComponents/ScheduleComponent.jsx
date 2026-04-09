import { FaCalendarWeek, FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'

const ScheduleComponent = () => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] text-2xl font-bold'>Class Schedule</span>
            <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Schedule</button>
        </div>
                
        <form className="grid grid-cols-1 md:grid-cols-[3fr_200px] gap-5 mb-4">
            <div className="mb-4">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">Select Class</option>
                    <option value="All Classes">All Classes</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <button type='submit' className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                <IoSearchOutline size={24}/>
                View Schedule
            </button>
        </form>
                
        <div className="text-center rounded-md bg-[#f8f9fa] p-8 text-[#666]">
            <div className="flex flex-col justify-center items-center gap-1">
                <FaCalendarWeek size={32}/>
                <h1 className='font-bold text-2xl'>Class Schedules</h1>
                <p>Select a class to view it's schedule</p>
            </div>
        </div>
    </div>
  )
}

export default ScheduleComponent