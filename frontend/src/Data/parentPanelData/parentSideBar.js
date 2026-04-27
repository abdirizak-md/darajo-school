import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaComment, FaFile, FaGraduationCap, FaMoneyBill, FaPeopleArrows, FaPeopleGroup, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

export const dashboard = [
      { label: 'Overview', icon: FaTachographDigital, path: '/parent', },
    ]
    
export const academics = [
      { label: 'Classes & Sections', icon: FaGraduationCap , path: '/parent/classes-sections-page', },
      { label: 'Subjects & Assignments', icon: FaBook , path: '/parent/subjects-assignments-page', },
      { label: 'Lesson Plans', icon: FaChalkboardUser , path: '/parent/lesson-plans-page', },
      { label: 'Study Materials', icon: FaFile , path: '/parent/study-materials-page', },
      { label: 'Exams & Marks', icon: FaClipboardCheck , path: '/parent/exams-marks-page', },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/parent/fees-collection-page' },
      { label: 'Pending Fees', icon: FaClock , path: '/parent/pending-fees-page' },
    ]

export const Parents = [
      { label: 'Parents', icon: FaPeopleGroup , path: '/parent/parents-page' },
    ]
export const Communications = [
      { label: 'Communications', icon: FaComment , path: '/parent/communications-page' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/parent/student-info-page' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/parent/attendance-reports-page' },
    ]