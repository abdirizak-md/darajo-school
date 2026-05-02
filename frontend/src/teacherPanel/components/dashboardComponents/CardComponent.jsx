import { FaArrowDown, FaArrowUp, FaCalendar, FaChalkboardUser, FaClock, FaEnvelope, FaGraduationCap } from "react-icons/fa6"

  const schoolData = [
    { title: 'TOTAL STUDENTS', inNumber: '1,246', upRise: '+12 this month', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaGraduationCap className='text-white' size={20}/>, iconBgColor: 'bg-orange-500', borderColors: 'border-orange-500', textColors: 'text-orange-500'  },
    { title: 'TOTAL TEACHERS', inNumber: '89', upRise: '+3 this month', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, iconBgColor: 'bg-orange-500', borderColors: 'border-orange-500', textColors: 'text-orange-500' },
    { title: 'PENDING FEES', inNumber: '$2,456', upRise: '-5 this month', upRiseIcon: <FaArrowDown className='text-red-600'/>, icon: <FaClock className='text-white' size={20}/>, iconBgColor: 'bg-red-600', borderColors: 'border-red-600', textColors: 'text-red-600' },
    { title: 'ACTIVE CLASSES', inNumber: '25', upRise: '+2 this term', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, iconBgColor: 'bg-orange-400', borderColors: 'border-orange-400', textColors: 'text-orange-400' },
    { title: 'ATTENDANCE TODAY', inNumber: '96%', upRise: '+5 vs yesterday', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, iconBgColor: 'bg-orange-400', borderColors: 'border-orange-400', textColors: 'text-orange-400' },
    { title: 'UNREAD MESSAGES', inNumber: '32', upRise: '+3 new today', upRiseIcon: <FaArrowUp className='text-yellow-400'/>, icon: <FaEnvelope className='text-white' size={20}/>, iconBgColor: 'bg-yellow-400', borderColors: 'border-yellow-400', textColors: 'text-yellow-400' },
    { title: 'UPCOMING EVENTS', inNumber: '3', upRise: 'Next: Sports Day', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaCalendar className='text-white' size={20}/>, iconBgColor: 'bg-orange-500', borderColors: 'border-orange-500', textColors: 'text-orange-500' },
    { title: 'RECENT ADMISSIONS', inNumber: '10', upRise: '+10 this month', upRiseIcon: <FaArrowUp className='text-emerald-500'/>, icon: <FaCalendar className='text-white' size={20}/>, iconBgColor: 'bg-orange-500', borderColors: 'border-orange-500', textColors: 'text-orange-500' },
]

const CardComponent = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-8">
      {schoolData.map((data, index) => (
        <div key={index} className={`bg-white rounded-4xl border-l-4 shadow-2xl ${data.borderColors} p-6 shadow-2xs shadow-white cursor-pointer transition-all duration-300 hover:-translate-y-2`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className='text-[#666] font-medium'>{data.title}</h1>
            <div className={`${data.iconBgColor} p-3 rounded-lg`}>
              {data.icon}
            </div>
          </div>
          <div className="text-[2rem] font-bold mb-2">{data.inNumber}</div>
          <div className="flex items-center gap-1 text-sm">
            {data.upRiseIcon}
            <span className={`text-sm ${data.textColors}`}>{data.upRise}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardComponent