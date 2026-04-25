import Student from "../student/modal.js";
import ExamResult from "../examResult/modal.js";
import AppError from "../../common/utils/appError.js";
import { getGradeAndGpa } from "../../common/utils/gpaCalculator.js";

const calculateGrade = (marks, total) => {
  const percent = (marks / total) * 100;

  if (percent >= 90) return "A+";
  if (percent >= 80) return "A";
  if (percent >= 70) return "B";
  if (percent >= 60) return "C";
  if (percent >= 50) return "D";
  return "F";
};

// 1. Get students for marks entry screen
export const getStudentsForMarksEntry = async ({
  classId,
  sectionId,
}) => {
  const students = await Student.find({
    classId,
    sectionId,
    status: "Active",
    isDeleted: false,
  }).select("fullName admissionNumber");

  return students;
};

// 2. Bulk marks save (teacher submits form)
export const saveMarks = async ({
  examId,
  subjectId,
  classId,
  sectionId,
  totalMarks,
  marksList,
}) => {
  // marksList = [{ studentId, obtainedMarks }]

  const results = [];

  for (const item of marksList) {
    const grade = calculateGrade(item.obtainedMarks, totalMarks);

    const status =
      item.obtainedMarks >= totalMarks * 0.5 ? "Pass" : "Fail";

    // upsert (update if exists, else create)
    const result = await ExamResult.findOneAndUpdate(
      {
        studentId: item.studentId,
        examId,
        subjectId,
      },
      {
        studentId: item.studentId,
        examId,
        subjectId,
        classId,
        sectionId,
        totalMarks,
        obtainedMarks: item.obtainedMarks,
        grade,
        status,
      },
      { new: true, upsert: true }
    );

    results.push(result);
  }

  return results;
};