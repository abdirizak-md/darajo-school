import Student from "../student/modal.js";
import ExamResult from "../examResult/modal.js";
import AppError from "../../common/utils/appError.js";
import { getGradeAndGpa } from "../../common/utils/gpaCalculator.js";
import mongoose from "mongoose";

// 📌 Get students (NO AUTH)
export const getStudentsForMarksEntry = async ({
  classId,
  sectionId,
}) => {
  if (!classId || !sectionId) {
    throw new AppError("classId and sectionId required", 400);
  }

  return Student.find({
    classId,
    sectionId,
    status: "Active",
    isDeleted: false,
  }).select("fullName admissionNumber");
};

// 📌 Save marks (NO AUTH)
export const saveMarks = async (data) => {
  const {
    examId,
    subjectId,
    classId,
    sectionId,
    totalMarks,
    marksList,
  } = data;

  // ✅ validation
  if (!marksList || marksList.length === 0) {
    throw new AppError("No marks provided", 400);
  }

  if (!examId || !subjectId || !classId || !sectionId) {
    throw new AppError("Missing required fields", 400);
  }

  const results = [];

  for (const item of marksList) {
    if (!item.studentId || item.obtainedMarks == null) continue;

    const { grade, gpa } = getGradeAndGpa(
      item.obtainedMarks,
      totalMarks
    );

    const status =
      item.obtainedMarks >= totalMarks * 0.5 ? "Pass" : "Fail";

    const result = await ExamResult.findOneAndUpdate(
      {
        studentId: new mongoose.Types.ObjectId(item.studentId),
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
      {
        new: true,
        upsert: true,
      }
    );

    results.push(result);
  }

  return results;
};