import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import staffs from '../Data/staffs'
import AssignmentComponent from '../components/staffDirectoryComponents/AssignmentComponent'
import PayrollComponent from '../components/staffDirectoryComponents/PayrollComponent'
import StaffDirectoryComponent from '../components/staffDirectoryComponents/StaffDirectoryComponent'

const StaffDirectory = () => {
    const [active, setActive] = useState('Staff');
    const [sectionn, setSectionn] = useState(false);
    const [allClasse, setAllClasse] = useState(false);

    // add section functionality
    const [sectionName, setSectionName] = useState('');
    const [classs, setClasss] = useState('');
    const [students, setStudents] = useState('');
    const [teacher, setteacher] = useState('');
    const [room, setroom] = useState('');
    const [status, setstatus] = useState('');

    const [updatingIndex, setUpdatinIndex] = useState(null);

    const [sections, setSections] = useState(staffs);

    // console.log(sections)


    // add to section function handler
    const addASection = () => {
        if (!sectionName.trim() || !classs.trim() || !students.trim() || !teacher.trim() || !room.trim() || !status.trim()) return alert('Please fill the fields!');

        if (updatingIndex !== null) {
            setSections(sections.map((sectioned, i) => (
                i === updatingIndex ? {...sectioned, sectionName, classs, students, teacher, room, status} : sectioned
            )));
            setSectionName('');
            setClasss('');
            setStudents('');
            setteacher('');
            setroom('');
            setstatus('');
        } else {

            let newSection = {
                sectionName,
                classs,
                students,
                teacher,
                room,
                status
            }

            setSections([...sections, newSection]);
            setSectionName('');
            setClasss('');
            setStudents('');
            setteacher('');
            setroom('');
            setstatus('');
        }

        setUpdatinIndex(null);

    }

    const startUpdatingIndex = (index) => {
        const selected = sections[index];

        setSectionName(selected.sectionName);
        setClasss(selected.classs);
        setStudents(selected.students);
        setteacher(selected.teacher);
        setroom(selected.room);
        setstatus(selected.status);

        setUpdatinIndex(index);
        setSectionn(true); // open modal
    };

    // delete section functionality
    const deleteSection = (index) => {
        alert('Are you sure to delete this section!',
            setSections(sections.filter((_, i) => i != index))
        )
    }


    // handle the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        addASection();
        setSectionn(!sectionn);
    }
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-3xl font-bold mb-4'>🏠 Staff Management</h1>
            <span className='text-[#666]'>Manage Teachers, Administrators and Support staff</span>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>67</h1>
                    <span className='text-[#666]'>Total Staff</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>56</h1>
                    <span className='text-[#666]'>Total Teachers</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>7</h1>
                    <span className='text-[#666]'>Administrators</span>
                </div>
                <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-[#006b3f] border-t-4 border-l-[#006b3f] borsder-b-4 border-b-[#006b3f] rounded-2xl">
                    <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                    <span className='text-[#666]'>Support Staff</span>
                </div>
            </div>
        </div>


        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('Staff')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Staff' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Staff Directory</button>
            <button onClick={() => setActive('assignment')} className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'assignment' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Assignment</button>
            <button onClick={() => setActive('payroll')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'payroll' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Payroll</button>
         </div>

        {/* Staff Directory, assignment and payroll */}
        { active === 'Staff' && <StaffDirectoryComponent setAllClasse={setAllClasse} />}
       
        {/* assignment */}
        { active === 'assignment' && <AssignmentComponent />} 
       
        {/* Schedules */}
        { active === 'payroll' && <PayrollComponent />} 
    </section>
  )
}

export default StaffDirectory