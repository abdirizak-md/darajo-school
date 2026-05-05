import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import PlainLayout from "./PlainLayout.jsx";
import { TooltipProvider } from "./context/contextToolTip.jsx";
import "./index.css";
import AttendanceReportPage from "./pages/AttendanceReportsPage.jsx";
import ClassesSectionsPage from "./pages/ClassesSectionsPage.jsx";
import CommunicationsPage from "./pages/CommunicationsPage.jsx";
import ExamsMarksPage from "./pages/ExamsMarksPage.jsx";
import FeesCollectionPage from "./pages/FeesCollectionPage.jsx";
import LessonPlansPage from "./pages/LessonPlansPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ParentsPage from "./pages/ParentsPage.jsx";
import PayrollsPage from "./pages/AssignTeachersPage.jsx";
import PendingFeesPage from "./pages/PendingFeesPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import StaffDirectoryPage from "./pages/StaffDirectoryPage.jsx";
import StudentInfoPage from "./pages/StudentInfoPage.jsx";
import StudyMaterialspage from "./pages/StudyMaterialsPage.jsx";
import SubjectsAssignmentPage from "./pages/SubjectsAssignmentPage.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import { store } from "./redux/store.js";
import StudentDashboardPage from "./studentPanel/studentDashboard/StudentDashboardPage.jsx";
import StudentPanelAttendanceReportPage from "./studentPanel/pages/StudentPanelAttendanceReportsPage.jsx";
import StudentPanelClassesSectionsPage from "./studentPanel/pages/StudentPanelClassesSectionsPage.jsx";
import StudentPanelExamsMarksPage from "./studentPanel/pages/StudentPanelExamsMarksPage.jsx";
import StudentPanelLessonPlansPage from "./studentPanel/pages/StudentPanelLessonPlansPage.jsx";
import StudentPanelStudyMaterialsPage from "./studentPanel/pages/StudentPanelStudyMaterialsPage.jsx";
import StudentPanelSubjectsAssignmentPage from "./studentPanel/pages/StudentPanelSubjectsAssignmentPage.jsx";
import StudentPanelStudentInfoPage from "./studentPanel/pages/StudentPanelStudentInfoPage.jsx";
import StudentPanelFeesCollectionPage from "./studentPanel/pages/StudentPanelFeesCollectionPage.jsx";
import TeacherPanelAttendanceReportPage from "./teacherPanel/teacherPages/TeacherPanelAttendanceReportsPage.jsx";
import TeacherPanelClassesSectionsPage from "./teacherPanel/teacherPages/TeacherPanelClassesSectionsPage.jsx";
import TeacherPanelExamsMarksPage from "./teacherPanel/teacherPages/TeacherPanelExamsMarksPage.jsx";
import TeacherPanelFeesCollectionPage from "./teacherPanel/teacherPages/TeacherPanelFeesCollectionPage.jsx";
import TeacherPanelLessonPlansPage from "./teacherPanel/teacherPages/TeacherPanelLessonPlansPage.jsx";
import TeacherPanelStudentInfoPage from "./teacherPanel/teacherPages/TeacherPanelStudentInfoPage.jsx";
import TeacherPanelStudyMaterialsPage from "./teacherPanel/teacherPages/TeacherPanelStudyMaterialsPage.jsx";
import TeacherPanelSubjectsAssignmentPage from "./teacherPanel/teacherPages/TeacherPanelSubjectsAssignmentPage.jsx";
import TeacherPanelStaffDirectoryPage from "./teacherPanel/teacherPages/TeacherPanelStaffDirectoryPage.jsx";
import ParentDashboardPage from "./parentPanel/parentDashboard/ParentDashboardPage.jsx";
import ParentPanelStaffDirectoryPage from "./parentPanel/pages/ParentPanelStaffDirectoryPage.jsx";
import ParentPanelSubjectsAssignmentPage from "./parentPanel/pages/ParentPanelSubjectsAssignmentPage.jsx";
import ParentPanelStudyMaterialsPage from "./parentPanel/pages/ParentPanelStudyMaterialsPage.jsx";
import ParentPanelStudentInfoPage from "./parentPanel/pages/ParentPanelStudentInfoPage.jsx";
import ParentPanelLessonPlansPage from "./parentPanel/pages/ParentPanelLessonPlansPage.jsx";
import ParentPanelFeesCollectionPage from "./parentPanel/pages/ParentPanelFeesCollectionPage.jsx";
import ParentPanelExamsMarksPage from "./parentPanel/pages/ParentPanelExamsMarksPage.jsx";
import ParentPanelClassesSectionsPage from "./parentPanel/pages/ParentPanelClassesSectionsPage.jsx";
import ParentPanelAttendanceReportPage from "./parentPanel/pages/ParentPanelAttendanceReportsPage.jsx";
import AssignTeachersPage from "./pages/AssignTeachersPage.jsx";
import TeacherDashboardPage from "./teacherPanel/teacherDashboard/TeacherDashboardPage.jsx";

const router = createBrowserRouter([
  // Dashboard Route
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },

  // Main App Routes
  {
    element: <PlainLayout />,
    children: [
      {
        path: "/classes-sections-page",
        element: <ClassesSectionsPage />,
      },
      {
        path: "/subjects-assignments-page",
        element: <SubjectsAssignmentPage />,
      },
      {
        path: "/lesson-plans-page",
        element: <LessonPlansPage />,
      },
      {
        path: "/materials-page",
        element: <StudyMaterialspage />,
      },
      {
        path: "/exams-marks-page",
        element: <ExamsMarksPage />,
      },
      {
        path: "/fees-collection-page",
        element: <FeesCollectionPage />,
      },
      {
        path: "/pending-fees-page",
        element: <PendingFeesPage />,
      },
      {
        path: "/communications-page",
        element: <CommunicationsPage />,
      },
      {
        path: "/parents-page",
        element: <ParentsPage />,
      },
      {
        path: "/staff-directory-page",
        element: <StaffDirectoryPage />,
      },
      {
        path: "/assign-teachers-page",
        element: <AssignTeachersPage />,
      },
      {
        path: "/student-info-page",
        element: <StudentInfoPage />,
      },
      {
        path: "/attendance-reports-page",
        element: <AttendanceReportPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  // Student Panel Routes
  {
    path: "/student",
    element: <StudentDashboardPage />,
  },
  {
    path: "/student/attendance-reports-page",
    element: <StudentPanelAttendanceReportPage />,
  },
  {
    path: "/student/classes-sections-page",
    element: <StudentPanelClassesSectionsPage />,
  },
  {
    path: "/student/subjects-assignments-page",
    element: <StudentPanelSubjectsAssignmentPage />,
  },
  {
    path: "/student/lesson-plans-page",
    element: <StudentPanelLessonPlansPage />,
  },
  {
    path: "/student/study-materials-page",
    element: <StudentPanelStudyMaterialsPage />,
  },
  {
    path: "/student/exams-marks-page",
    element: <StudentPanelExamsMarksPage />,
  },
  {
    path: "/student/subjects-assignments-page",
    element: <StudentPanelSubjectsAssignmentPage />,
  },
  {
    path: "/student/student-info-page",
    element: <StudentPanelStudentInfoPage />,
  },
  {
    path: "/student/fees-collection-page",
    element: <StudentPanelFeesCollectionPage />,
  },

  // Teacher Panel Routes
  {
    path: "/teacher",
    element: <TeacherDashboardPage />,
  },
  {
    path: "/teacher/attendance-reports-page",
    element: <TeacherPanelAttendanceReportPage />,
  },
  {
    path: "/teacher/classes-sections-page",
    element: <TeacherPanelClassesSectionsPage />,
  },
  {
    path: "/teacher/exams-marks-page",
    element: <TeacherPanelExamsMarksPage />,
  },
  {
    path: "/teacher/lesson-plans-page",
    element: <TeacherPanelLessonPlansPage />,
  },
  {
    path: "/teacher/student-info-page",
    element: <TeacherPanelStudentInfoPage />,
  },
  {
    path: "/teacher/study-materials-page",
    element: <TeacherPanelStudyMaterialsPage />,
  },
  {
    path: "/teacher/staff-directory-page",
    element: <TeacherPanelStaffDirectoryPage />,
  },

  // Parent Panel Routes
  {
    path: "/parent",
    element: <ParentDashboardPage />,
  },
  {
    path: "/parent/attendance-reports-page",
    element: <ParentPanelAttendanceReportPage />,
  },
  {
    path: "/parent/classes-sections-page",
    element: <ParentPanelClassesSectionsPage />,
  },
  {
    path: "/parent/exams-marks-page",
    element: <ParentPanelExamsMarksPage />,
  },
  {
    path: "/parent/lesson-plans-page",
    element: <ParentPanelLessonPlansPage />,
  },
  {
    path: "/parent/student-info-page",
    element: <ParentPanelStudentInfoPage />,
  },
  {
    path: "/parent/study-materials-page",
    element: <ParentPanelStudyMaterialsPage />,
  },
  {
    path: "/parent/subjects-assignments-page",
    element: <ParentPanelSubjectsAssignmentPage />,
  },
  {
    path: "/parent/staff-directory-page",
    element: <ParentPanelStaffDirectoryPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </Provider>
  </StrictMode>,
);
