import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AddClassModal from '../boxModels/AddClassModal'
import AddSectionModal from '../boxModels/AddSectionModal'
import TotalComponent from '../components/dashboardComponents/TotalComponent'
import AllClassesComponent from '../components/sectionClassComponents/AllClassesComponent'
import ScheduleComponent from '../components/sectionClassComponents/ScheduleComponent'
import SectionsComponent from '../components/sectionClassComponents/SectionsComponent'
import AssignedTeachersComponent from '../components/subjectAssignmentComponents/AssignedTeachersComponent'
import AddAssignedTeacherModal from '../boxModels/AddAssignedTeacherModal'


const AssignTeachersPage = () => {
  const [active, setActive] = useState('');
  const [assignModal, setAssignModal] = useState(false);
  const [allClasse, setAllClasse] = useState(false);
  
  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-orange-500 text-3xl font-bold mb-4'>🏠 Classes & Sections</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Student Groups</span>
            <TotalComponent />
        </div>


        <div className="flex gap-5 mb-8">
          {
            ['Assign Teacher', 'Assign Student'].map((item, index) => (
                <button key={index}
                    onClick={() => setActive(item)} 
                    className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === item ? 'bg-orange-500 text-white' : 'bg-white'}`}
                > {item} </button>
            ))
          }
          </div>
          {/* assign teacher component */}
          {active === 'Assign Teacher' && <AssignedTeachersComponent setAssignModal={setAssignModal}/>}

          {/* assign teacher modal */}
          {assignModal && <AddAssignedTeacherModal setAssignModal={setAssignModal} />}
    </section>
  )
}

export default AssignTeachersPage