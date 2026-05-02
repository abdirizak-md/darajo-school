import Student from "../student/modal.js";
import ExamResult from "../examResult/modal.js";
import SubjectAssign from "../subjectAssignTeacher/modal.js";
import AppError from "../../common/utils/appError.js";
import { getGradeAndGpa } from "../../common/utils/gpaCalculator.js";
import mongoose from "mongoose";

// 🔐 Get students
export const getStudentsForMarksEntry = async ({
  classId,
  sectionId,
  teacherId,
}) => {
  if (!classId || !sectionId) {
    throw new AppError("classId and sectionId required", 400);
  }

  const assignment = await SubjectAssign.findOne({
    teacherId,
    classId,
    sectionId,
  });

  if (!assignment) {
    throw new AppError("Not allowed to access this class", 403);
  }

  return Student.find({
    classId,
    sectionId,
    status: "Active",
    isDeleted: false,
  }).select("fullName admissionNumber");
};

// 🔐 Save marks (FIXED)
export const saveMarks = async (data, user) => {
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

  // 🔐 restore teacher check (IMPORTANT FIX)
  const assignment = await SubjectAssign.findOne({
    teacherId: user.id,
    subjectId,
    classId,
    sectionId,
  });

  if (!assignment) {
    throw new AppError("Unauthorized marks entry", 403);
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