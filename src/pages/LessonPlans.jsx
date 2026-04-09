import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AddPlanModal from '../boxModels/AddPlanModal'
import AllPlansComponent from '../components/LessonPlansComponents/AllPlansComponent'
import LessonsPlanComponent from '../components/LessonPlansComponents/LessonsPlanComponent'
import { Biology, English, Maths, Physics } from '../Data/lessonPlansName'

const LessonPlans = () => {
    const [active, setActive] = useState('plans');
    const [close, setClose] = useState(false)
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] lg:text-4xl text-2xl font-bold mb-4'>🏠 Lesson Plans</h1>
            <span className='text-[#666] text-sm'>Create, Manage, and Organize Lesson Plans and Study Materials</span>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>45</h1>
                    <span className='text-[#666]'>Total Lesson Plans</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>13</h1>
                    <span className='text-[#666]'>Active Plans</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>8</h1>
                    <span className='text-[#666]'>Subject Covered</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>8</h1>
                    <span className='text-[#666]'>Grade Levels</span>
                </div>
            </div>
        </div>
    
    
        <div className="lg:flex md:flex grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 mb-4">
            <button onClick={() => setActive('plans')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'plans' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Plans</button>
            <button onClick={() => setActive('maths')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'maths' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Mathematics</button>
            <button onClick={() => setActive('English')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'English' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>English</button>
            <button onClick={() => setActive('Physics')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Physics' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Physics</button>
            <button onClick={() => setActive('Biology')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Biology' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Biology</button>
        </div>
    
        {/* All plans */}
        { active === 'plans' && <AllPlansComponent setClose={setClose} /> } 

        {/* maths */}
        { active === 'maths'&& <LessonsPlanComponent lessonPlansName={Maths}/>}

        {/* English */}
        { active === 'English' && <LessonsPlanComponent lessonPlansName={English} /> }

        {/* Physics */}
        { active === 'Physics' && <LessonsPlanComponent lessonPlansName={Physics} /> }

        {/* Biology */}
        { active === 'Biology' && <LessonsPlanComponent lessonPlansName={Biology} />}

        {/* box modal */}
        {   close && <AddPlanModal setClose={setClose} /> }

    </section>
  )
}

export default LessonPlans