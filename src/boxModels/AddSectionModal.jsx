import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import sectionss from '../Data/sections';

const AddSectionModal = ({setAddSection}) => {
        // add section functionality
    const [sectionName, setSectionName] = useState('');
    const [classs, setClasss] = useState('');
    const [students, setStudents] = useState('');
    const [teacher, setteacher] = useState('');
    const [room, setroom] = useState('');
    const [status, setstatus] = useState('');

    const [updatingIndex, setUpdatinIndex] = useState(null);

    const [sections, setSections] = useState(sectionss);

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
                id: crypto.randomUUID(),
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

    const startUpdatingIndex = (id) => {
        const selected = sections[id];

        setSectionName(selected.sectionName);
        setClasss(selected.classs);
        setStudents(selected.students);
        setteacher(selected.teacher);
        setroom(selected.room);
        setstatus(selected.status);

        setUpdatinid(id);
        setAddSection(true); // open modal
    };

    // delete section functionality
    const deleteSection = (id) => {
        const confirm = window.confirm('Are you sure to delete this section!');
        if (!confirm) {
            setSections(sections.filter((_, i) => i !== id));
        }
    }


    // handle the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        addASection();
        setAddSection(false);
    }
  return (
    <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-[#006b3f] font-bold">Create New Section</h1>
                <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setAddSection(false)}/>
            </div>
            <form className="p-6" onSubmit={handleSubmit}>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Section Name *</label>
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={sectionName} onChange={(e) => setSectionName(e.target.value)} required>
                <option value="">Select Section</option>
                <option value="Section A">Section A</option>
                <option value="Section B">Section B</option>
                <option value="Section C">Section C</option>
                <option value="Section D">Section D</option>
                <option value="Section E">Section E</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class *</label>
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={classs} onChange={(e) => setClasss(e.target.value)} required>
                <option value="">Select Class</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={teacher} onChange={(e) => setteacher(e.target.value)} required>
                <option value="">Select Teacher</option>
                <option value="Mr. Mohamed Warsame">Mr. Mohamed Warsame</option>
                <option value="Mr. Ahmed Mohamed">Mr. Ahmed Mohamed</option>
                <option value="Mss. Hodan Ahmed">Mss. Hodan Ahmed</option>
                <option value="Mr. Ali Ahmed Abdi">Mr. Ali Ahmed Abdi</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Student No *</label>
                <input type="text" placeholder='Enter total students in the section: Example 48 students' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={students} onChange={(e) => setStudents(e.target.value)}/>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Room *</label>
                <input type="text" placeholder='Enter Room Number' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={room} onChange={(e) => setroom(e.target.value)}/>
            </div>

            <div className="mb-4">
                <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Status *</label>                    
                <select value={status} onChange={(e) => setstatus(e.target.value)} className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out">
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAddSection(false)}>Cancel</button>
                <button type='submit' className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">{updatingIndex !== null ? 'Edit Section' : 'Create New Section'}</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddSectionModal