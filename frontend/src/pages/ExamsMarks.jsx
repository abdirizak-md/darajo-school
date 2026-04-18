import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import TotalComponent from '../components/dashboardComponents/TotalComponent'


const PendingFees = () => {
  const [active, setActive] = useState('classes');
  const [addSection, setAddSection] = useState(false);
  const [allClasse, setAllClasse] = useState(false);
  
  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-3xl font-bold mb-4'>🏠 Classes & Sections</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Student Groups</span>
            <TotalComponent />
        </div>


        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('classes')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'classes' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Classes</button>
            <button onClick={() => setActive('sections')} className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'sections' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Sections</button>
            <button onClick={() => setActive('schedules')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'schedules' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Schedules</button>
         </div>
    </section>
  )
}

export default PendingFees