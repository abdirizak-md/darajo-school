import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import ASide from './ASide';
import CardComponent from '../../components/dashboardComponents/CardComponent';
import ChartsGraphsComponent from '../../components/dashboardComponents/ChartsGraphsComponent';
import QuickActionComponent from '../../components/dashboardComponents/QuickActionComponent';
import RecentActivityComponent from '../../components/dashboardComponents/RecentActivityComponent';
import App from '../App';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const TeacherDashboardPage = () => {
  const [close, setClose] = useState(false);

  return (
        // Main Admin Dashboard
    <div className='h-screen flex'>
            {close && 
            <div className="fixed inset-0 z-40 flex h-screen">
              <ASide close={close} setClose={setClose} className="h-screen overflow-y-auto"/>
              <div className="flex-1 bg-black/50 " onClick={() => setClose(false)}></div>
            </div>
              }
            <ASide />
      <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
          {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#f5f7fa] custom-scrollbar p-8 transition-all duration-300 ease-in-out">
          <Outlet />
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Student!</h1>
                <p className='text-[#666] text-md'>Here's what's happening at our school today</p>
              </div>
              { !close && <MdMenu size={32} className='lg:hidden text-orange-500'  onClick={() => setClose(true)}/>}
            </div>

            {/* cards */}
            <CardComponent />

            {/* recents activities */}
              <RecentActivityComponent />
        </main>
      </div>
    </div>
  )
}

export default TeacherDashboardPage