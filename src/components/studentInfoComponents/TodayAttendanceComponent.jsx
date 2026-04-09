import { FaCheck } from 'react-icons/fa6'

const TodayAttendanceComponent = ({setmodelAttendance}) => {
  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">
        <div className="flex justify-between items-center mb-8">
            <span className='text-[#333] text-2xl font-bold'>Student Directory</span>
            <button className='px-5 py-2 text-white bg-[#006b3f] rounded-md flex items-center gap-2' onClick={() => setmodelAttendance(true)} ><FaCheck />Mark Attendance</button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mb-8">
            <div className="flex flex-col bg-[#f8f9fa] rounded-lg border-l-4 border-[#006b3f] px-6 py-4">
            <h1 className='text-lg'>Class 10A</h1>
            <div className="flex justify-between py-1">
                <span className='text-[#006b3f]'>Present: 25</span>
                <span className='text-[#ce1126]'>Absent: 5</span>
                <span className='text-[#fcd116]'>Late: 0</span>
            </div>
            </div>
            <div className="flex flex-col bg-[#f8f9fa] rounded-lg border-l-4 border-[#006b3f] px-6 py-4">
            <h1 className='text-lg'>Class 10A</h1>
            <div className="flex justify-between py-1">
                <span className='text-[#006b3f]'>Present: 25</span>
                <span className='text-[#ce1126]'>Absent: 5</span>
                <span className='text-[#fcd116]'>Late: 0</span>
            </div>
            </div>
            <div className="flex flex-col bg-[#f8f9fa] rounded-lg border-l-4 border-[#006b3f] px-6 py-4">
            <h1 className='text-lg'>Class 10A</h1>
            <div className="flex justify-between py-1">
                <span className='text-[#006b3f]'>Present: 25</span>
                <span className='text-[#ce1126]'>Absent: 5</span>
                <span className='text-[#fcd116]'>Late: 0</span>
            </div>
            </div>
            <div className="flex flex-col bg-[#f8f9fa] rounded-lg border-l-4 border-[#006b3f] px-6 py-4">
            <h1 className='text-lg'>Class 10A</h1>
            <div className="flex justify-between py-1">
                <span className='text-[#006b3f]'>Present: 25</span>
                <span className='text-[#ce1126]'>Absent: 5</span>
                <span className='text-[#fcd116]'>Late: 0</span>
            </div>
            </div>
        </div>

    </div>
  )
}

export default TodayAttendanceComponent