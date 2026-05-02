import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { useGetClassesQuery } from '../redux/features/classApi';
import { useGetSectionsQuery } from '../redux/features/sectionApi';
import { useGetStudentsQuery } from '../redux/features/studentApi';
import { useCreateFeeMutation } from '../redux/features/feeApi';
import { useGetFeeTypesQuery } from '../redux/features/feeTypeApi';

const RecordPaymentModal = ({ setRecordPayment }) => {

  const [formData, setFormData] = useState({
    studentId: '',
    classId: '',
    sectionId: '',
    feeTypeId: '',
    amount: '',
    paymentMethod: '',
    date: '',
    status: ''
  });

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const [createFee, { isLoading }] = useCreateFeeMutation();
  console.log("formData:", formData)

  // FETCH DATA
  const { data: classData } = useGetClassesQuery();


  const { data: sectionData } = useGetSectionsQuery(selectedClass, {
    skip: !selectedClass
  });

  const { data: studentData } = useGetStudentsQuery(
    { classId: selectedClass, sectionId: selectedSection },
    { skip: !selectedClass || !selectedSection }
  );

  const { data: feeTypeData } = useGetFeeTypesQuery();
  console.log("feeTypeData:", feeTypeData )

  // SAFE ACCESS
  const classes = classData?.data || [];
  const sections = sectionData?.data || [];
  const students = studentData?.data || [];
  const feeTypes = feeTypeData?.data || [];

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // CLASS CHANGE
const handleClassChange = (e) => {
  const value = e.target.value;

  if (formData.studentId) {
    alert("Changing class will reset student selection");
  }

  setSelectedClass(value);

  setFormData((prev) => ({
    ...prev,
    classId: value,
    sectionId: '',
    studentId: ''
  }));

  setSelectedSection('');
};

const payload = {
  student: formData.studentId,
  class: formData.classId,  
  section: formData.sectionId,
  feeType: formData.feeTypeId,
  amount: formData.amount,
  paymentMethod: formData.paymentMethod,
  date: formData.date,
  status: formData.status
};
  // SECTION CHANGE
  const handleSectionChange = (e) => {
    const value = e.target.value;

    setSelectedSection(value);

    setFormData({
      ...formData,
      sectionId: value,
      studentId: ''
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFee(payload).unwrap();

      alert("Payment recorded successfully ✅");
      setRecordPayment(false);

    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Error recording payment");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">

      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b border-[#e1e5e9]">
          <h1 className="text-2xl text-orange-500 font-bold">
            Record Payment
          </h1>
          <IoClose
            className='hover:text-orange-500 transition-all duration-200'
            size={28}
            onClick={() => setRecordPayment(false)}
          />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>

          {/* CLASS */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Class <span className="text-red-500">*</span>
            </label>

            <select
              name="classId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.classId}
              onChange={handleClassChange}
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          {/* SECTION */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Section <span className="text-red-500">*</span>
            </label>

            <select
              name="sectionId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.sectionId}
              onChange={handleSectionChange}
              required
              disabled={!selectedClass}
            >
              <option value="">Select Section</option>

              {sections.map((section) => (
                <option key={section._id} value={section._id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          {/* STUDENT */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Student <span className="text-red-500">*</span>
            </label>

            <select
              name="studentId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.studentId}
              onChange={handleChange}
              required
              disabled={!selectedSection}
            >
              <option value="">Select Student</option>

              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* FEE TYPE (FROM DB) */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Fee Type <span className="text-red-500">*</span>
            </label>

            <select
              name="feeTypeId"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.feeTypeId}
              onChange={handleChange}
              required
            >
              <option value="">Select Fee Type</option>

              {feeTypes.map((ft) => (
                <option key={ft._id} value={ft._id}>
                  {ft.name}
                </option>
              ))}
            </select>
          </div>

          {/* AMOUNT */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Amount <span className="text-red-500">*</span>
            </label>

            <input
              type="number"
              name="amount"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
            />
          </div>

          {/* PAYMENT METHOD */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Payment Method <span className="text-red-500">*</span>
            </label>

            <select
              name="paymentMethod"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash</option>
              <option value="mobile">Mobile Money</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          {/* DATE */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Date <span className="text-red-500">*</span>
            </label>

            <input
              type="date"
              name="date"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* STATUS */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">
              Status <span className="text-red-500">*</span>
            </label>

            <select
              name="status"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">

            <button
              type="button"
              className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md"
              onClick={() => setRecordPayment(false)}
            >
              Cancel
            </button>

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
            >
              {isLoading ? 'Saving...' : 'Record Payment'}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default RecordPaymentModal;