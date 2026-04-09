import { FaArrowDown, FaArrowUp, FaCalendar, FaChalkboardUser, FaClock, FaEnvelope, FaGraduationCap } from "react-icons/fa6"

  const schoolData = [
    { title: 'TOTAL STUDENTS', inNumber: '1,246', upRise: '+12 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaGraduationCap className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'TOTAL TEACHERS', inNumber: '89', upRise: '+3 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'PENDING FEES', inNumber: '$2,456', upRise: '-5 this month', upRiseIcon: <FaArrowDown className='text-[#ce1126]'/>, icon: <FaClock className='text-white' size={20}/>, colorr: '#ce1126', colors: '#ce1126' },
    { title: 'ACTIVE CLASSES', inNumber: '25', upRise: '+2 this term', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, colorr: '#10b981', colors: '#10b981' },
    { title: 'ATTENDANCE TODAY', inNumber: '96%', upRise: '+5 vs yesterday', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, colorr: '#10b981', colors: '#10b981' },
    { title: 'UNREAD MESSAGES', inNumber: '32', upRise: '+3 new today', upRiseIcon: <FaArrowUp className='text-[#fcd116]'/>, icon: <FaEnvelope className='text-white' size={20}/>, colorr: '#fcd116', colors: '#fcd116' },
    { title: 'UPCOMING EVENTS', inNumber: '3', upRise: 'Next: Sports Day', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaCalendar className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'RECENT ADMISSIONS', inNumber: '10', upRise: '+10 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaCalendar className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
]

const CardComponent = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-8">
      {schoolData.map((data, index) => (
        <div key={index} className={`bg-white rounded-4xl border-l-4 border-[${data.colors}] p-6 shadow-2xs shadow-white cursor-pointer transition-all duration-300 hover:-translate-y-2`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className='text-[#666] font-medium'>{data.title}</h1>
            <div className={`bg-[${data.colorr}] p-3 rounded-lg`}>
              {data.icon}
            </div>
          </div>
          <div className="text-[2rem] font-bold mb-2">{data.inNumber}</div>
          <div className="flex items-center gap-1 text-sm">
            {data.upRiseIcon}
            <span className={`text-sm text-[${data.colors}]`}>{data.upRise}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardComponent