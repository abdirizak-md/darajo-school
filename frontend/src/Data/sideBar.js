import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaComment, FaFile, FaGraduationCap, FaMoneyBill, FaTachographDigital, FaUserGraduate, FaUsers } from "react-icons/fa6"

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
        path: '/classes&sectionsPage',
      },
      {
        label: 'Subjects & Assignments',
        icon: FaBook ,
        path: '/subjects&assignmentsPage',
      },
      {
        label: 'Lesson Plans',
        icon: FaChalkboardUser ,
        path: '/lesson-plansPage',
      },
      {
        label: 'Study Materials',
        icon: FaFile ,
        path: '/materialsPage',
      },
      {
        label: 'Exams & Marks',
        icon: FaClipboardCheck ,
        path: '/exams-marksPage',
      },
    ]

    
export const feesAccounts = [
      { label: 'Fees Collection', icon: FaMoneyBill , path: '/fees-collectionPage' },
      { label: 'Pending Fees', icon: FaClock , path: '/pending-feesPage' },
    ]

export const Onlines = [
      { label: 'Communications', icon: FaComment , path: '/communicationsPage' },
    ]
    
export const staffManagements = [
      { label: 'Staff Directory', icon: FaUsers , path: '/staff-directoryPage' },
      { label: 'Attendance Payroll', icon: FaCalendarCheck , path: '/payrollPage' },
    ]
    
export const studentManagement = [
      { label: 'Student Info', icon: FaUserGraduate , path: '/student-infoPage' },
      { label: 'Attendance Reports', icon: FaCalendar , path: '/attendance-reportsPage' },
    ]