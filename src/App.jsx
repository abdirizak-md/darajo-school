import ASide from './pages/dashboard/ASide'
import Header from './pages/dashboard/Header'
import { Outlet } from 'react-router-dom'

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
