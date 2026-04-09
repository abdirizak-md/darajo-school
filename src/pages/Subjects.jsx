import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AssignmentComponent from '../components/subjectAssignmentComponents/AssignmentComponent'
import GradeComponent from '../components/subjectAssignmentComponents/GradeComponent'
import SubjectComponent from '../components/subjectAssignmentComponents/SubjectComponent'

const Subjects = () => {
    const [active, setActive] = useState('subjects');

    const statusStyles = {
        active: "bg-[#d1fae5] text-[#10b981]",
        pending: "bg-[#fef3c7] text-[#92400e]",
        completed: "bg-[#dbeafe] text-[#1e40af]",
    };

  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] lg:text-4xl text-2xl font-bold mb-4'>🏠 Subjects & Assignment</h1>
            <span className='text-[#666] text-sm'>Manage Academic Classes, Sections and Track Student Progress</span>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                    <span className='text-[#666]'>Total Subjects</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>32</h1>
                    <span className='text-[#666]'>Active Assignments</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>89%</h1>
                    <span className='text-[#666]'>Submission Rate</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>135</h1>
                    <span className='text-[#666]'>Pending Reviews</span>
                </div>
            </div>
        </div>
    
    
        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('subjects')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'subjects' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Subjects</button>
            <button onClick={() => setActive('assignments')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'assignments' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Assignments</button>
            <button onClick={() => setActive('grades')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'grades' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Grades</button>
        </div>
    
        {/* Subjects */}
        { active == 'subjects' && <SubjectComponent />}

        {/* Assignments */}
        { active === 'assignments' && <AssignmentComponent /> }

        {/* grades */}
        { active === 'grades' && <GradeComponent /> }
    </section>
  )
}

export default Subjects