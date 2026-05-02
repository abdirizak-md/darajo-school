import { IoSearchOutline } from 'react-icons/io5'
import { useGetAssignmentsQuery } from '../../../redux/features/assignModule'
import { useGetStudentsQuery, useSaveMarksMutation } from '../../../redux/features/entryMark'
import { useState } from 'react'

const EntryExamMarkComponent = ({ setTeacherModal }) => {

  // ===============================
  // ✅ STATE
  // ===============================
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");
  const [marks, setMarks] = useState({}); // ✅ store marks

  // ===============================
  // ✅ DATA
  // ===============================
  const { data: assignments } = useGetAssignmentsQuery();
  const [saveMarks, { isLoading, isError }] = useSaveMarksMutation();

  const { data: students } = useGetStudentsQuery(
    {
      classId: selectedClass,
      sectionId: selectedSection,
    },
    {
      skip: !selectedClass || !selectedSection,
    }
  );

  // ===============================
  // 🔥 SAFE HELPERS
  // ===============================
  const getId = (field) => {
    if (!field) return null;
    return typeof field === "object" ? field._id : field;
  };

  const getName = (field) => {
    if (!field) return "";
    return typeof field === "object" ? field.name : "";
  };

  // ===============================
  // ✅ FILTERS
  // ===============================
  const uniqueClasses = [
    ...new Map(
      (assignments?.data || [])
        .filter(a => a.classId)
        .map(a => [getId(a.classId), a])
    ).values()
  ];

  const filteredSections = assignments?.data?.filter(
    (a) => !selectedClass || getId(a.classId) === selectedClass
  );

  const filteredSubjects = assignments?.data?.filter(
    (a) =>
      (!selectedClass || getId(a.classId) === selectedClass) &&
      (!selectedSection || getId(a.sectionId) === selectedSection)
  );

  // ✅ STATIC EXAM TYPES (MATCH BACKEND ENUM)
  const examTypes = ["Midterm", "Final", "Quiz", "Test"];

  // ===============================
  // ✅ HANDLE MARK CHANGE
  // ===============================
  const handleMarkChange = (studentId, value) => {
    setMarks(prev => ({
      ...prev,
      [studentId]: value
    }));
  };

  // ===============================
  // ✅ SUBMIT (FIXED)
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClass || !selectedSection || !selectedSubject || !selectedExamType) {
      alert("Please select all fields");
      return;
    }

    const marksList = Object.keys(marks).map(id => ({
      studentId: id,
      obtainedMarks: Number(marks[id])
    }));

    if (!marksList.length) {
      alert("Please enter marks");
      return;
    }

    try {
      await saveMarks({
        examType: selectedExamType, // ✅ FIXED
        subjectId: selectedSubject,
        classId: selectedClass,
        sectionId: selectedSection,
        totalMarks: 100,
        marksList
      }).unwrap();

      alert("Marks saved successfully");
      setMarks({});
    } catch (error) {
      console.error(error);
      alert("Error saving marks");
    }
  };

  return (
    <div className="bg-white p-6 mb-8 shadow rounded-md">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <span className='text-[#333] text-2xl font-bold'>
          Entry Exam Marks
        </span>
      </div>

      {/* FILTERS */}
      <form className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_2fr_150px] md:grid-cols-[2fr_2fr_2fr_150px] gap-5 ">

        <div>
          <input
            type="text"
            placeholder='Search Classes...'
            className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg"
          />
        </div>

        {/* CLASS */}
        <div>
          <select
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2.5 border rounded-md text-lg"
          >
            <option value="">Select Class</option>
            {uniqueClasses.map((a) => (
              <option key={getId(a.classId)} value={getId(a.classId)}>
                {getName(a.classId)}
              </option>
            ))}
          </select>
        </div>

        {/* SECTION */}
        <div>
          <select
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-full p-2.5 border rounded-md text-lg"
          >
            <option value="">Select Section</option>
            {filteredSections.map((a) => (
              <option key={getId(a.sectionId)} value={getId(a.sectionId)}>
                {getName(a.sectionId)}
              </option>
            ))}
          </select>
        </div>

        {/* SUBJECT */}
        <div>
          <select
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-2.5 border rounded-md text-lg"
          >
            <option value="">Select Subject</option>
            {filteredSubjects.map((a) => (
              <option key={getId(a.subjectId)} value={getId(a.subjectId)}>
                {getName(a.subjectId)}
              </option>
            ))}
          </select>
        </div>

        {/* EXAM TYPE */}
        <div>
          <select
            onChange={(e) => setSelectedExamType(e.target.value)}
            className="w-full p-2.5 border rounded-md text-lg"
          >
            <option value="">Select Exam Type</option>
            {examTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 w-fit px-5 py-2.5 border rounded-md text-lg">
          <IoSearchOutline size={24} />
          <button type="button">Search</button>
        </div>
      </form>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <form onSubmit={handleSubmit}>
          <table className="min-w-200 w-full border-collapse mt-4">
            <thead>
              <tr>
                <th className="p-4 bg-[#f8f9fa] text-left">Student Name</th>
                <th className="p-4 bg-[#f8f9fa] text-left">addmissionNo</th>
                <th className="p-4 bg-[#f8f9fa] text-left">Marks</th>
              </tr>
            </thead>

            <tbody>
              {!students?.data?.length && (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-[#666]">
                    No Students Found
                  </td>
                </tr>
              )}

              {students?.data?.map((student, index) => (
                <tr key={index} className="hover:bg-[#f8f9fa]">
                  <td className="p-4 text-left">
                    {student.fullName}
                  </td>

                  <td className="p-4 text-left">
                    {student.admissionNumber}
                  </td>

                  <td className="p-4 text-left flex gap-2">
                    <input
                      type="number"
                      className="border rounded-md p-2.5 w-1/5"
                      value={marks[student._id] || ""}
                      onChange={(e) =>
                        handleMarkChange(student._id, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded-md mt-4"
            >
              {isLoading ? "Saving..." : "Save Marks"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EntryExamMarkComponent