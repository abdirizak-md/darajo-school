import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import TotalComponent from '../components/dashboardComponents/TotalComponent';
import { useState } from 'react';
import ParentComponent from '../components/studentInfoComponents/ParentComponent';

const Parents = () => {
  const [active, setActive] = useState('classes');

  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-orange-500 text-3xl font-bold mb-4'>🥳 Parent Management</h1>
            <span className='text-[#666]'>Manage parent information and their children's details</span>
            <TotalComponent />
        </div>


        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('Parent')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Parent' ? 'bg-orange-500 text-white' : 'bg-white'}`}>All Parent</button>
          </div>

          {active === 'Parent' && <ParentComponent />}
    </section>
  );
};

export default Parents;