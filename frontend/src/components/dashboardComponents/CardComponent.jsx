import {
  FaArrowUp,
  FaCalendar,
  FaChalkboardUser,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa6";

import { useGetAssignmentsQuery } from "../../redux/features/assignModule";
import { useGetStudentsQuery } from "../../redux/features/studentApi";

import { useMemo } from "react";

const CardComponent = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // ================= ASSIGNMENTS =================
  const { data: assignments } = useGetAssignmentsQuery(
    { teacherId: user?.id },
    { skip: !user?.id }
  );

  const assignmentList = useMemo(() => {
    if (!assignments) return [];

    return Array.isArray(assignments)
      ? assignments
      : Object.values(assignments).filter(Boolean);
  }, [assignments]);

  // ================= EXTRACT CLASS + SECTION =================
  const { classIds, sectionIds } = useMemo(() => {
    const classSet = new Set();
    const sectionSet = new Set();

    assignmentList.forEach((a) => {
      const cId = a?.classId?._id || a?.classId;
      const sId = a?.sectionId?._id || a?.sectionId;

      if (cId) classSet.add(String(cId));
      if (sId) sectionSet.add(String(sId));
    });

    return {
      classIds: Array.from(classSet),
      sectionIds: Array.from(sectionSet),
    };
  }, [assignmentList]);

  // ================= STUDENTS =================
  const { data: students } = useGetStudentsQuery(
    {
      classId: classIds,
      sectionId: sectionIds,
    },
    {
      skip: classIds.length === 0 || sectionIds.length === 0,
    }
  );

  const studentList = students?.data || [];

  // ================= CALCULATIONS =================
  const totalStudents = studentList.length;
  const totalClasses = classIds.length;
  const totalSections = sectionIds.length;

  // ================= DYNAMIC DATA =================
  const schoolData = [
    {
      title: "TOTAL STUDENTS",
      inNumber: totalStudents,
      upRise: "Based on your classes",
      upRiseIcon: <FaArrowUp className="text-emerald-500" />,
      icon: <FaGraduationCap className="text-white" size={20} />,
      iconBgColor: "bg-orange-500",
      borderColors: "border-orange-500",
      textColors: "text-orange-500",
    },
    {
      title: "ACTIVE CLASSES",
      inNumber: totalClasses,
      upRise: "Assigned to you",
      upRiseIcon: <FaArrowUp className="text-emerald-500" />,
      icon: <FaChalkboardUser className="text-white" size={20} />,
      iconBgColor: "bg-orange-400",
      borderColors: "border-orange-400",
      textColors: "text-orange-400",
    },
    {
      title: "TOTAL SECTIONS",
      inNumber: totalSections,
      upRise: "Across classes",
      upRiseIcon: <FaArrowUp className="text-emerald-500" />,
      icon: <FaChalkboardUser className="text-white" size={20} />,
      iconBgColor: "bg-orange-400",
      borderColors: "border-orange-400",
      textColors: "text-orange-400",
    },
    {
      title: "UNREAD MESSAGES",
      inNumber: "32",
      upRise: "+3 new today",
      upRiseIcon: <FaArrowUp className="text-yellow-400" />,
      icon: <FaEnvelope className="text-white" size={20} />,
      iconBgColor: "bg-yellow-400",
      borderColors: "border-yellow-400",
      textColors: "text-yellow-400",
    },
    {
      title: "UPCOMING EVENTS",
      inNumber: "3",
      upRise: "Next: Sports Day",
      upRiseIcon: <FaArrowUp className="text-emerald-500" />,
      icon: <FaCalendar className="text-white" size={20} />,
      iconBgColor: "bg-orange-500",
      borderColors: "border-orange-500",
      textColors: "text-orange-500",
    },
    {
      title: "RECENT ADMISSIONS",
      inNumber: "10",
      upRise: "+10 this month",
      upRiseIcon: <FaArrowUp className="text-emerald-500" />,
      icon: <FaCalendar className="text-white" size={20} />,
      iconBgColor: "bg-orange-500",
      borderColors: "border-orange-500",
      textColors: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-8">
      {schoolData.map((data, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl border-l-4 shadow-2xl ${data.borderColors} p-6 shadow-2xs shadow-white cursor-pointer transition-all duration-300 hover:-translate-y-2`}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[#666] font-medium">{data.title}</h1>
            <div className={`${data.iconBgColor} p-3 rounded-lg`}>
              {data.icon}
            </div>
          </div>

          <div className="text-[2rem] font-bold mb-2">
            {data.inNumber}
          </div>

          <div className="flex items-center gap-1 text-sm">
            {data.upRiseIcon}
            <span className={`text-sm ${data.textColors}`}>
              {data.upRise}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;