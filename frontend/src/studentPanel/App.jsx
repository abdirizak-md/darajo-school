import { Outlet } from 'react-router-dom';
import ASide from './studentDashboard/ASide';
import Header from './studentDashboard/Header';

const App = () => {
  return (
    <div className="h-screen flex">
      {/* Header */}
      <ASide />
      {/* Body */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#f5f7fa] custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
