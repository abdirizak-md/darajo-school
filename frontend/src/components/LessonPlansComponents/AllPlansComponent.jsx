import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import lessonPlans from '../../Data/lessonPlans'

const AllPlansComponent = ({setClose}) => {
  return (
    <div className="bg-white p-6 mb-6 shadow rounded-md">
        <div className="flex justify-between items-center mb-4">
            <span className='text-[#333] lg:text-2xl font-bold'>Lesson Plans Overviews</span>
            <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2' onClick={() => setClose(true)}><FaPlus />Create Lesson Plan</button>
        </div>
    
        <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
            <div className="">
                <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">All Classes</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                <IoSearchOutline size={24}/>
                <button>Search</button>
            </div>
        </form>
                
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-4">
            {   lessonPlans.map((lesson, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] border-l-4 border-l-[#006b3f]">
                <div className="flex justify-between items-start mb-4">
                    <div className="">
                        <h1 className='text-lg font-medium text-[#006b3f] mb-2'>{lesson.lessonName}</h1>
                        <p className='text-[1rem] text-[#333] mb-2'>{lesson.subject} • {lesson.classLevel}</p>
                        <div className="flex gap-3.5 text-[#333] mb-4 text-sm">
                            <span className='text-[#666] text-sm'>{lesson.durations}</span>
                            <span className='text-[#666] text-sm'>{lesson.Period}</span>
                            <span className='text-[#666] text-sm'>{lesson.teacher}</span>
                        </div>
                    </div>
                    <span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${lesson.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${lesson.status === 'Draft' ? 'bg-[#fef3c7] text-[#92400e]' : ''} ${lesson.status === 'Completed' ? 'bg-[#dbeafe] text-[#1e40af]' : ''}`}>{lesson.status}</span>
                </div>
                <div className="text-[#333] mb-4">
                    {lesson.description}
                </div>
                <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
                    <h4 className='text-[#333] text-sm mb-2'>Learning Objectives:</h4>
                    <ul className="pl-6 text-sm text-[#666] list-disc">
                        <li>{lesson.learningObjectives1}</li>
                        <li>{lesson.learningObjectives2}</li>
                        <li>{lesson.learningObjectives3}</li>
                    </ul>
                </div>
                <div className="flex justify-start gap-1 text-sm mt-4">
                    <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg cursor-pointer'>View Details</button>
                    <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg cursor-pointer'>Edit</button>
                    <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
                </div>
            </div> )) }
        </div>
    </div>
  )
}

export default AllPlansComponent