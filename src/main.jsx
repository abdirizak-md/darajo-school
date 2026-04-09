import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ClassesSections from './pages/ClassesSections.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Subjects from './pages/Subjects.jsx'
import LessonPlans from './pages/LessonPlans.jsx'
import StudyMaterials from './pages/StudyMaterials.jsx'
import ExamsMarks from './pages/ExamsMarks.jsx'
import FeesCollection from './pages/FeesCollection.jsx'
import PendingFees from './pages/PendingFees.jsx'
import StaffDirectory from './pages/StaffDirectory.jsx'
import Payroll from './pages/Payroll.jsx'
import StudentInfo from './pages/StudentInfo.jsx'
import AttendanceReports from './pages/AttendanceReports.jsx'
import PlainLayout from './PlainLayout.jsx'
import { TooltipProvider } from './context/contextToolTip.jsx'

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
        path: '/classes',
        element: <ClassesSections />
      },
      {        
        path: '/subjects',
        element: <Subjects />
      },
      {        
        path: '/lesson-plans',
        element: <LessonPlans />
      },
      {        
        path: '/materials',
        element: <StudyMaterials />
      },
      {        
        path: '/exams',
        element: <ExamsMarks />
      },
      {        
        path: '/fees-collection',
        element: <FeesCollection />
      },
      {        
        path: '/pending-fees',
        element: <PendingFees />
      },
      {        
        path: '/staff-directory',
        element: <StaffDirectory />
      },
      {        
        path: '/payroll',
        element: <Payroll />
      },
      {        
        path: '/Student-info',
        element: <StudentInfo />
      },
      {        
        path: '/attendance-reports',
        element: <AttendanceReports />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </StrictMode>,
)
