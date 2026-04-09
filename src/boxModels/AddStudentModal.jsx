import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import student from '../Data/students';

const AddStudentModal = ({setmodelStudent}) => {
    // add section functionality
    const [fullName, setFullName] = useState('');
    const [admissionNo, setAdmissionNo] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [classes, setClasses] = useState('');
    const [section, setSection] = useState('');
    const [parent, setParent] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [medical, setMedical] = useState('');
    const [status, setStatus] = useState('');
    const [emerganyContact, setEmerganyContact] = useState('');

    const [updatedIndex, setUpdatedIndex] = useState(null);

    const [students, setStudents] = useState(student);


    // add to section function handler
    const addASection = () => {
        if (!fullName.trim() || !admissionNo.trim() || !birthDate.trim() || !gender.trim() || !admissionDate.trim() || !status.trim()) return alert('Please fill the fields!');

        if (updatedIndex !== null) {
            setStudents(students.map((student, i) => (
                i === updatedIndex ? {...student, fullName, admissionNo, birthDate, gender, admissionDate, status} : student
            )));

            // setStudents(prev => prev.map((studentt, i) => i === updatedIndex ? { ...studentt, fullName, admissionNo, birthDate, gender, admissionDate, classes, section, parent, phone, email, address, medical, status, emerganyContact } : studentt ));

            setFullName('');
            setAdmissionNo('');
            setBirthDate('');
            setGender('');
            setAdmissionDate('');
            setClasses('');
            setSection('');
            setParent('');
            setPhone('');
            setEmail('');
            setAddress('');
            setMedical('');
            setStatus('');
            setEmerganyContact('');
        } else {

            let newStudent = {
                id: Date.now(),
                fullName,
                admissionNo,
                birthDate,
                gender,
                admissionDate,
                classes,
                section,
                parent,
                phone,
                email,
                address,
                medical,
                status,
                emerganyContact
            }

            setStudents([...students, newStudent]);
            setFullName('');
            setAdmissionNo('');
            setBirthDate('');
            setGender('');
            setAdmissionDate('');
            setClasses('');
            setParent('');
            setPhone('');
            setEmail('');
            setAddress('');
            setMedical('');
            setStatus('');
            setEmerganyContact('');
        }

        setUpdatedIndex(null);

    }

    const startUpdatedIndex = (index) => {
        const selected = students[index];

        setFullName(selected.fullName);
        setAdmissionNo(selected.admissionNo);
        setBirthDate(selected.birthDate);
        setGender(selected.gender);
        setAdmissionDate(selected.admissionDate);
        setClasses(selected.classes);
        setSection(selected.section);
        setParent(selected.parent);
        setPhone(selected.phone);
        setEmail(selected.email);
        setStatus(selected.status);
        setEmerganyContact(selected.emerganyContact);

        setUpdatedIndex(index);        
    };

    // handle the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        addASection();
        setmodelStudent(false);
        setUpdatedIndex(null);
    }

   

    // delete section functionality
    const deleteStudent = (index) => {
        const confirmDelete = window.confirm('Are you sure to delete this section!');
        if (confirmDelete) {
            setStudents(students.filter((_, i) => i != index));
        }
    }

  return (
    <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-[#006b3f] font-bold">🎓Add New Student</h1>
                <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setmodelStudent(false)}/>
            </div>
            <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fullname" className="font-medium block mb-2 text-[#333]">Full Name *</label>
                <input id='fullname' type="text" placeholder='Enter student Full Name' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="admissionNo" className="font-medium block mb-2 text-[#333]">Admission Number *</label>
                    <input id='admissionNo' type="text" placeholder='Enter student Full Name' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={admissionNo} onChange={(e) => setAdmissionNo(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="font-medium block mb-2 text-[#333]">Date of Birth *</label>
                    <input id='dateOfBirth' type="date" placeholder='Enter student Full Name' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="gender" className="font-medium block mb-2 text-[#333]">Gender *</label>
                    <select name="gender" id="gender" className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="classs" className="font-medium block mb-2 text-[#333]">Class *</label>
                    <select name="classs" id="classs" className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={classes} onChange={(e) => setClasses(e.target.value)} required>
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
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="admissionDate" className="font-medium block mb-2 text-[#333]">Admission Date *</label>
                    <input id='admissionDate' type="date" placeholder='Enter student Full Name' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="section" className="font-medium block mb-2 text-[#333]">Section *</label>
                    <select name="section" id="section" className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={section} onChange={(e) => setSection(e.target.value)} required>
                    <option value="">Select Section</option>
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
                    <option value="Section C">Section C</option>
                    <option value="Section D">Section D</option>
                    <option value="Section E">Section E</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="parentName" className="font-medium block mb-2 text-[#333]">Parent/Guardian Name *</label>
                <input id='parentName' type="text" placeholder='Enter total students in the section: Example 48 students' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={parent} onChange={(e) => setParent(e.target.value)}/>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="parentPhone" className="font-medium block mb-2 text-[#333]">Parent Phone *</label>
                    <input id='parentPhone' name='parentPhones' type="tel" placeholder='Enter admissionDate Number' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete='additional-name'/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="font-medium block mb-2 text-[#333]">Email *</label>
                    <input id='email' type="email" placeholder='Enter admissionDate Number' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='additional-name'/>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="textarea" className="font-medium block mb-2 text-[#333]">Address *</label>
                <textarea name="text" id="textarea" cols="30" rows="5" placeholder='Enter students address info' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label htmlFor="emergancy" className="font-medium block mb-2 text-[#333]">Emergancy Contact *</label>
                    <input id='emergancy' type="tel" placeholder='Enter admissionDate Number' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={emerganyContact} onChange={(e) => setEmerganyContact(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Status *</label>
                    <select name="status" id="status" className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="textareaInfo" className="font-medium block mb-2 text-[#333]">Medical information *</label>
                <textarea name="text" id="textareaInfo" cols="30" rows="5" placeholder='Any medical conditions' className="w-full p-2.5 border border-[#006b3f] rounded-md text-sm transition-all duration-300 ease-in-out" value={medical} onChange={(e) => setMedical(e.target.value)}></textarea>
            </div>

            <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#006b3f]">
                <button id='cancle' type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#006b3f] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setmodelStudent(false)}>Cancel</button>
                <button id='addStudent' type='submit' className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#006b3f] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">{updatedIndex !== null ? 'Update Student Info' : 'Add New Student'}</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddStudentModal