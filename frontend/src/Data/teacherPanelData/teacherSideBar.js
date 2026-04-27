import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaComment, FaFile, FaGraduationCap, FaMoneyBill, FaPeopleArrows, FaPeopleGroup, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

export const dashboard = [
      { label: 'Overview', icon: FaTachographDigital, path: '/teacher', },
    ]
    
export const academics = [
      { label: 'Classes & Sections', icon: FaGraduationCap , path: '/teacher/classes-sections-page', },
      { label: 'Subjects & Assignments', icon: FaBook , path: '/teacher/subjects-assignments-page', },
      { label: 'Lesson Plans', icon: FaChalkboardUser , path: '/teacher/lesson-plans-page', },
      { label: 'Study Materials', icon: FaFile , path: '/teacher/study-materials-page', },
      { label: 'Exams & Marks', icon: FaClipboardCheck , path: '/teacher/exams-marks-page', },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/teacher/fees-collection-page' },
      { label: 'Pending Fees', icon: FaClock , path: '/teacher/pending-fees-page' },
    ]
    
export const staffManagements = [
      { label: 'Staff Directory', icon: FaUsers , path: '/teacher/staff-directory-page' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/teacher/student-info-page' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/teacher/attendance-reports-page' },
    ]