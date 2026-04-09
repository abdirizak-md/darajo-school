import exams from '../../Data/exams'

const FinalComponent = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-4">
        {   exams.map((exam, index) => (
        <div key={index} className="bg-[#f8f9fa] rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] border border-b-4 border-b-[#006b3f]">
            <div className="flex justify-between items-start mb-4">
                <h1 className='text-lg font-medium text-[#006b3f] mb-2'>{exam.examName}</h1>
                <span className={`py-1 px-2.5 rounded-2xl text-lg text-[#006b3f] font-medium`}>Score: {exam.score}</span>
            </div>
            <div className="bg-[#f8f9fa] rounded-lg p-1 mb-4">
                <ul className="pl-6 text-sm list-disc">
                    <li>Date of Exam: {exam.date}</li>
                    <li>Classes: {exam.classes}</li>
                </ul>
            </div>
            <div className="flex justify-end gap-5 text-sm mt-4">
                <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116] text-white  rounded-lg cursor-pointer'>Edit</button>
                <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
            </div>
        </div> )) }
    </div>
  )
}

export default FinalComponent