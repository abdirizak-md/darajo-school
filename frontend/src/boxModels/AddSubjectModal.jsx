import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCreateSubjectMutation } from "../redux/features/subject";

const AddSubjectModal = ({ setAddSubject }) => {
  const [createSubject, { isLoading }] = useCreateSubjectMutation();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription ] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  // ✅ ALERT STATE
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // success | error

  const showAlert = (msg, type = "success") => {
    setMessage(msg);
    setType(type);

    setTimeout(() => {
      setMessage("");
      setType("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !code.trim()) {
      showAlert("Please fill all required fields!", "error");
      return;
    }

    try {
      await createSubject({
        name,
        code,
        description,
        status,
      }).unwrap();

      // reset form
      setName("");
      setCode("");
      setDescription("");
      setStatus("ACTIVE");

      // ✅ show success first
      showAlert("Subject created successfully!", "success");

      // ⛔ close modal after alert shows
      setTimeout(() => {
        setAddSubject(false);
      }, 1000);
    } catch (error) {
      console.log(error);

      showAlert(
        error?.data?.message || "Failed to create subject",
        "error"
      );
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">

      <div className="bg-white rounded-lg w-[50%] max-h-[90vh] overflow-y-auto relative">

        {/* 🔔 ALERT */}
        {message && (
          <div className={`absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded text-white ${ type === "success" ? "bg-green-600" : "bg-red-600" }`} >
            {message}
          </div>
        )}

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b">
          <h1 className="text-2xl font-bold text-orange-500"> Create New Subject </h1>
          <IoClose size={30} className="cursor-pointer hover:text-orange-500" onClick={() => setAddSubject(false)} />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="mb-4">
                <label htmlFor="subjectName" className="font-medium block mb-2 text-[#333]">Subject Name <span className="text-red-500">*</span></label>
                <input type="text" name="subjectName" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={name} onChange={() => setName(e.target.value)} placeholder='Enter class name'/>
            </div>

          {/* CODE */}
          <div className="mb-4">
                <label htmlFor="subjectCode" className="font-medium block mb-2 text-[#333]">Subject Code <span className="text-red-500">*</span></label>
                <input type="text" name="subjectCode" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={code} onChange={() => setCode(e.target.value)} placeholder='Enter class name'/>
            </div>
            {/* subject description */}
          <div className="mb-4">
                <label htmlFor="subjectDes" className="font-medium block mb-2 text-[#333]">Subject Description <span className="text-red-500">*</span></label>
                <input type="text" name="subjectDes" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={description} onChange={() => setDescription(e.target.value)} placeholder='Enter class name'/>
            </div>
          {/* STATUS */}
          <div className="mb-4">
                <label htmlFor="status" className="font-medium block mb-2 text-[#333]">Select Status <span className="text-red-500">*</span></label>
                <select name="status" id="status" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={status} onChange={() => setStatus(e.target.value)} required>
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                <button type='button' className="bg-[#f8f9fa] hover:text-orange-500 hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAddSubject(false)}>Cancel</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Class</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSubjectModal;