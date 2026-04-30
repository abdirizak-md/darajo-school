import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useCreateSectionMutation } from '../redux/features/sectionApi';
import { useGetClassesQuery } from '../redux/features/classApi';

const RecordPaymentModal = ({ setRecordPayment }) => {
  const [status, setStatus] = useState('Active');
  const [formData, setFormData] = useState({
    studentName: '',
    amount: '',
    paymentMethod: '',
    date: '',
    feeType: '',
    status: ''

  });

  const [createSection, { isLoading }] = useCreateSectionMutation();

  // ✅ FETCH DATA
  const { data: classData } = useGetClassesQuery();

  // ✅ SAFE ACCESS
  const classes = classData?.data || [];

  const handleChange = () => {
    setFormData([
      ...formData,
      [e.target.name], e.target.value,
    ])
  }

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !classId || !roomNumber) {
      return alert("Please fill required fields");
    }

    try {
      await createSection({
        title,
        classId,
        roomNumber,
        status,
      }).unwrap();

      alert("Section created successfully ✅");
      setRecordPayment(false);

    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Error creating section");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b border-[#e1e5e9]">
          <h1 className="text-2xl text-orange-500 font-bold"> Create Assignment </h1>
          <IoClose className='hover:text-orange-500 transition-all duration-200' size={28} onClick={() => setRecordPayment(false)} />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>

          {/* studentName DROPDOWN */}
          <div className="mb-4">
            <label htmlFor="studentName" className="font-medium block mb-2 text-[#333]">Select student <span className="text-red-500">*</span></label>
            <input type="text" name="studentName" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.studentName} onChange={handleChange} placeholder='Enter student name or Id'/>
          </div>

          {/* Fee type */}
          <div className="mb-4">
                <label htmlFor="feeType" className="font-medium block mb-2 text-[#333]">Fee Type <span className="text-red-500">*</span></label>
                <select name="feeType" id="feeType" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.feeType} onChange={handleChange} required>
                    <option value="">Select Fee Type</option>
                    <option value="tuition fee">Tuition Fee</option>
                    <option value="tutorial fee">Tutorial Fee</option>
                </select>
            </div>

          {/* Amount */}
          <div className="mb-4">
                <label htmlFor="amount" className="font-medium block mb-2 text-[#333]"> Amount <span className="text-red-500">*</span></label>
                <input type="date" name="amount" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.amount} onChange={handleChange} placeholder='Enter class name'/>
            </div>

          {/* payment method */}
          <div className="mb-4">
                <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Select Payment Method <span className="text-red-500">*</span></label>
                <select name="status" id="status" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="">Select Payment Method</option>
                    <option value="cash">Cash</option>
                    <option value="mobile money">Mobile Money</option>
                    <option value="bank transfer">Bank Transfer</option>
                </select>
            </div>
          {/* ROOM */}
          <div className="mb-4">
                <label htmlFor="dueDate" className="font-medium block mb-2 text-[#333]"> Date <span className="text-red-500">*</span></label>
                <input type="date" name="dueDate" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={formData.date} onChange={handleChange} placeholder='Enter class name'/>
            </div>

          {/* STATUS */}
          <div className="mb-4">
                <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Select Status <span className="text-red-500">*</span></label>
                <select name="status" id="status" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="unpaid">Unpaid</option>
                </select>
            </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setRecordPayment(false)}>Cancel</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">{isLoading ? 'Saving...': 'Create Section'}</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RecordPaymentModal;