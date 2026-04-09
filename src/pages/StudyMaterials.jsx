import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AllMaterialComponent from '../components/studyMaterialsComponents/AllMaterialComponent'
import StudyMaterialsComponent from '../components/studyMaterialsComponents/StudyMaterialsComponent'
import { documents, Images, Links, Video } from '../Data/studyMaterialsName'

const StudyMaterials = () => {
    const [active, setActive] = useState('Materials');
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] lg:text-4xl text-2xl font-bold mb-4'>🏫 Study Materials</h1>
            <span className='text-[#666] text-sm'>Manage Educational Resources, Documents and Study Materials</span>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>156</h1>
                    <span className='text-[#666]'>Total Materials</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>3.5GB</h1>
                    <span className='text-[#666]'>Storage Used</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                    <span className='text-[#666]'>Subjects</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>24</h1>
                    <span className='text-[#666]'>Recent Uploads</span>
                </div>
            </div>
        </div>
    
    
        <div className="lg:flex md:flex grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 mb-4">
            <button onClick={() => setActive('Materials')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Materials' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Materials</button>
            <button onClick={() => setActive('Documents')} className={`px-8 py-3 border border-[rgb(225,229,233)] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Documents' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Documents</button>
            <button onClick={() => setActive('Video')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Video' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Videos</button>
            <button onClick={() => setActive('Image')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Image' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Images</button>
            <button onClick={() => setActive('Link')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Link' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Links</button>
        </div>
    
        {/* Materials */}
        { active === 'Materials' && <AllMaterialComponent />} 

        {/* Documents */}
        { active === 'Documents' && <StudyMaterialsComponent StudyMaterialsName={documents} />}

        {/* Video */}
        { active === 'Video' && <StudyMaterialsComponent StudyMaterialsName={Video} />}

        {/* Image */}
        { active === 'Image' && <StudyMaterialsComponent StudyMaterialsName={Images} />}

        {/* Link */}
        { active === 'Link' && <StudyMaterialsComponent StudyMaterialsName={Links} />}

    </section>
  )
}

export default StudyMaterials