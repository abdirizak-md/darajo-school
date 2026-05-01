import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";

const TakeAttendanceModal = ({ setAttendanceModal }) => {
  const { data: classData } = useGetClassesQuery();
  const { data: sectionData } = useGetSectionsQuery();

  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [mark, setmark] = useState("");
  const [status, setStatus] = useState("Active");

  const classes = classData?.data || [];
  const sections = sectionData?.data || [];

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !classId || !roomNumber) {
      return alert("Please fill required fields");
    }

    try {
      await createSection({
        name,
        classId,
        roomNumber,
        status,
      }).unwrap();

      alert("Section created successfully ✅");
      setAttendanceModal(false);
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
          <h1 className="text-2xl text-orange-500 font-bold">
            {" "}
            Take Attendance{" "}
          </h1>
          <IoClose
            className="hover:text-orange-500 transition-all duration-200"
            size={28}
            onClick={() => setAttendanceModal(false)}
          />
        </div>

        {/* FORM */}
        <form className="p-6" onSubmit={handleSubmit}>
          {/* SECTION NAME */}

          {/* ✅ CLASS DROPDOWN */}
          <div className="mb-4">
            <label
              htmlFor="classes"
              className="font-medium block mb-2 text-[#333]"
            >
              Select class <span className="text-red-500">*</span>
            </label>
            <select
              name="classes"
              id="classes"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              required
            >
              <option value="">Select Class</option>
              {classes?.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {" "}
                  {cls.name}{" "}
                </option>
              ))}
            </select>
          </div>
          {/* section name */}
          <div className="mb-4">
            <label
              htmlFor="section"
              className="font-medium block mb-2 text-[#333]"
            >
              Select Section <span className="text-red-500">*</span>
            </label>
            <select
              name="sections"
              id="sections"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
              required
            >
              <option value="">Select Section</option>
              {sections?.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {" "}
                  {cls.name}{" "}
                </option>
              ))}
            </select>
          </div>

          {/* mark */}
          <div className="mb-4">
            <label
              htmlFor="mark"
              className="font-medium block mb-2 text-[#333]"
            >
              Select mark <span className="text-red-500">*</span>
            </label>
            <select
              name="mark"
              id="mark"
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"
              value={mark}
              onChange={(e) => setmark(e.target.value)}
              required
            >
              <option value="">Select mark</option>
              <option value="present">present</option>
              <option value="absent">absent</option>
              <option value="fasax">fasax</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
            <button
              type="button"
              className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
              onClick={() => setAttendanceModal(false)}
            >
              Cancel
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">
              Save Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TakeAttendanceModal;
