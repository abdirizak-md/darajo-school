import Student from "../student/modal.js";
import ExamResult from "../examResult/modal.js";
import SubjectAssign from "../subjectAssignTeacher/modal.js";
import AppError from "../../common/utils/appError.js";
import { getGradeAndGpa } from "../../common/utils/gpaCalculator.js";

// 🔐 Get students (teacher restricted)
export const getStudentsForMarksEntry = async ({
  classId,
  sectionId,
  teacherId,
}) => {
  const assignment = await SubjectAssign.findOne({
    teacherId,
    classId,
    sectionId,
  });

  if (!assignment) {
    throw new AppError("Not allowed to access this class", 403);
  }

  return await Student.find({
    classId,
    sectionId,
    status: "Active",
    isDeleted: false,
  }).select("fullName admissionNumber");
};

// 🔐 Save marks (MAIN LOGIC)
export const saveMarks = async (data, user) => {
  const {
    examId,
    subjectId,
    classId,
    sectionId,
    totalMarks,
    marksList,
  } = data;

  // verify teacher assignment
  // const assignment = await SubjectAssign.findOne({
  //   teacherId: user.id,
  //   subjectId,
  //   classId,
  //   sectionId,
  // });

  // if (!assignment) {
  //   throw new AppError("Unauthorized marks entry", 403);
  // }

  const results = [];

  for (const item of marksList) {
    if (
      item.obtainedMarks === undefined ||
      item.studentId === undefined
    ) {
      continue; // skip invalid row safely
    }

    const { grade, gpa } = getGradeAndGpa(
      item.obtainedMarks,
      totalMarks
    );

    const status =
      item.obtainedMarks >= totalMarks * 0.5 ? "Pass" : "Fail";

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
        gpa,
        status,
      },
      { new: true, upsert: true }
    );

    results.push(result);
  }

  return results;
};