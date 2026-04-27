import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaComment, FaFile, FaGraduationCap, FaMoneyBill, FaPeopleArrows, FaPeopleGroup, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

export const dashboard = [
      {
        label: 'Overview',
        icon: FaTachographDigital,
        path: '/student',
      },
    ]
    
export const academics = [
      {
        label: 'Classes & Sections',
        icon: FaGraduationCap ,
        path: '/student/classes-sections-page',
      },
      {
        label: 'Subjects & Assignments',
        icon: FaBook ,
        path: '/student/subjects-assignments-page',
      },
      {
        label: 'Lesson Plans',
        icon: FaChalkboardUser ,
        path: '/student/lesson-plans-page',
      },
      {
        label: 'Study Materials',
        icon: FaFile ,
        path: '/student/study-materials-page',
      },
      {
        label: 'Exams & Marks',
        icon: FaClipboardCheck ,
        path: '/student/exams-marks-page',
      },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/student/fees-collection-page' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/student/student-info-page' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/student/attendance-reports-page' },
    ]