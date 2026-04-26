import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ClassesSections from './pages/ClassesSections.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import LessonPlans from './pages/LessonPlans.jsx'
import StudyMaterials from './pages/StudyMaterials.jsx'
import ExamsMarks from './pages/ExamsMarks.jsx'
import FeesCollection from './pages/FeesCollection.jsx'
import PendingFees from './pages/PendingFees.jsx'
import Communications from './pages/Communications.jsx'
import StaffDirectory from './pages/StaffDirectory.jsx'
import Payroll from './pages/Payroll.jsx'
import StudentInfo from './pages/StudentInfo.jsx'
import AttendanceReports from './pages/AttendanceReports.jsx'
import PlainLayout from './PlainLayout.jsx'
import { TooltipProvider } from './context/contextToolTip.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterUI from './pages/RegisterPage.jsx'
import SubjectsAssignment from './pages/SubjectsAssignment.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Parents from './pages/Parents.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {        
        index: true,
        path: '/',
        element: <Dashboard />
      },
      
    ]
  },
  {
    element: <PlainLayout />,
    children: [
      {        
        path: '/classes&sectionsPage',
        element: <ClassesSections />
      },
      {        
        path: '/subjects&assignmentsPage',
        element: <SubjectsAssignment />
      },
      {        
        path: '/lesson-plansPage',
        element: <LessonPlans />
      },
      {        
        path: '/materialsPage',
        element: <StudyMaterials />
      },
      {        
        path: '/exams-marksPage',
        element: <ExamsMarks />
      },
      {        
        path: '/fees-collectionPage',
        element: <FeesCollection />
      },
      {        
        path: '/pending-feesPage',
        element: <PendingFees />
      },
      {        
        path: '/communicationsPage',
        element: <Communications />
      },
      {        
        path: '/parents',
        element: <Parents />
      },
      {        
        path: '/staff-directoryPage',
        element: <StaffDirectory />
      },
      {        
        path: '/payrollPage',
        element: <Payroll />
      },
      {        
        path: '/student-infoPage',
        element: <StudentInfo />
      },
      {        
        path: '/attendance-reportsPage',
        element: <AttendanceReports />
      },
      {        
        path: '/login',
        element: <LoginPage />
      },
      {        
        path: '/register',
        element: <RegisterUI />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </Provider>
  </StrictMode>,
)
