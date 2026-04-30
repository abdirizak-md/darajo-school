import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCreateSubjectMutation } from "../redux/features/subject";

const AddAssignedTeacherModal = ({ setAssignModal }) => {
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
        setAssignModal(false);
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
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded text-white ${
              type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b">
          <h1 className="text-2xl font-bold text-[#006b3f]">
            Create New Subject
          </h1>

          <IoClose
            size={30}
            className="cursor-pointer"
            onClick={() => setAssignModal(false)}
          />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Subject Name *
            </label>
            <input
              type="text"
              placeholder="Enter subject name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* CODE */}
          <div className="mb-4">

              <label className="block mb-2 font-medium">
                Subject Code *
              </label>
              <input
                type="text"
                placeholder="Enter subject code"
                className="w-full p-2 border rounded"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          <div className="mb-4">

              <label className="block mb-2 font-medium">
                Subject Description *
              </label>
              <input
                type="text"
                placeholder="Enter subject description"
                className="w-full p-2 border rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          {/* STATUS */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              className="w-full p-2 border rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="px-4 py-2 border"
              onClick={() => setAssignModal(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white disabled:opacity-50"
            >
              {isLoading ? "Creating..." : "Create Subject"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddAssignedTeacherModal;