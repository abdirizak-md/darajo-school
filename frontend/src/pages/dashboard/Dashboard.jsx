import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import CardComponent from '../../components/dashboardComponents/CardComponent';
import ChartsGraphsComponent from '../../components/dashboardComponents/ChartsGraphsComponent';
import QuickActionComponent from '../../components/dashboardComponents/QuickActionComponent';
import RecentActivityComponent from '../../components/dashboardComponents/RecentActivityComponent';
import ASide from '../dashboard/ASide';

const Dashboard = () => {
  const [close, setClose] = useState(false);

  return (
        // Main Admin Dashboard
    <div className='bg-[#f5f7fa] p-8 transition-all duration-300 ease-in-out'>
            {close && 
            <div className="fixed inset-0 z-40 flex h-screen">
              <ASide close={close} setClose={setClose} className="h-screen overflow-y-auto"/>
              <div className="flex-1 bg-black/50 "></div>
            </div>
              }
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Admin!</h1>
              <p className='text-[#666] text-md'>Here's what's happening at our school today</p>
            </div>
            { !close && <MdMenu size={32} className='lg:hidden text-orange-500'  onClick={() => setClose(true)}/>}
          </div>

          {/* cards */}
          <CardComponent />

        {/* chart and graphs */}
          <ChartsGraphsComponent />

          {/* quicks action to do */}
          <QuickActionComponent />

          {/* recents activits */}
            <RecentActivityComponent />
    </div>
  )
}

export default Dashboard