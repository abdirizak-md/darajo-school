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
            {close && <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
              <ASide close={close} setClose={setClose}/>
              </div>}
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Admin!</h1>
              <p className='text-[#666] text-md'>Here's what's happening at our school today</p>
            </div>
            <MdMenu size={32} className='lg:hidden md:hidden'  onClick={() => setClose(true)}/>
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