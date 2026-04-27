import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaComment, FaFile, FaGraduationCap, FaMoneyBill, FaPeopleArrows, FaPeopleGroup, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

export const dashboard = [
      { label: 'Overview', icon: FaTachographDigital, path: '/', },
    ]
    
export const academics = [
      { label: 'Classes & Sections', icon: FaGraduationCap , path: '/classes-sections-page', },
      { label: 'Subjects & Assignments', icon: FaBook , path: '/subjects-assignments-page', },
      { label: 'Lesson Plans', icon: FaChalkboardUser , path: '/lesson-plans-page', },
      { label: 'Study Materials', icon: FaFile , path: '/materials-page', },
      { label: 'Exams & Marks', icon: FaClipboardCheck , path: '/exams-marks-page', },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/fees-collection-page' },
      { label: 'Pending Fees', icon: FaClock , path: '/pending-fees-page' },
    ]

export const Parents = [
      { label: 'Parents', icon: FaPeopleGroup , path: '/parents-page' },
    ]
export const Communications = [
      { label: 'Communications', icon: FaComment , path: '/communications-page' },
    ]
    
export const staffManagements = [
      { label: 'Staff Directory', icon: FaUsers , path: '/staff-directory-page' },
      { label: 'Attendance Payroll', icon: FaCalendarCheck , path: '/payroll-page' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/student-info-page' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/attendance-reports-page' },
    ]