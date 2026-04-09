import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaFile, FaGraduationCap, FaMoneyBill, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

export const dashboard = [
      {
        label: 'Overview',
        icon: FaTachographDigital,
        path: '/',
      },
    ]
    
export const academics = [
      {
        label: 'Classes & Sections',
        icon: FaGraduationCap ,
        path: '/classes',
      },
      {
        label: 'Subjects & Assignments',
        icon: FaBook ,
        path: '/subjects',
      },
      {
        label: 'Lesson Plans',
        icon: FaChalkboardUser ,
        path: '/lesson-plans',
      },
      {
        label: 'Study Materials',
        icon: FaFile ,
        path: '/materials',
      },
      {
        label: 'Exams & Marks',
        icon: FaClipboardCheck ,
        path: '/exams',
      },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/fees-collection' },
      { label: 'Pending Fees', icon: FaClock , path: '/pending-fees' },
    ]
    
export const staffManagements = [
      { label: 'Staff Directory', icon: FaUsers , path: '/staff-directory' },
      { label: 'Attendance Payroll', icon: FaCalendarCheck , path: '/payroll' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/student-info' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/attendance-reports' },
    ]