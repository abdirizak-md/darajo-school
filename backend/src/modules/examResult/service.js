import ExamResult from "./modal.js";
import AppError from "../../common/utils/appError.js";
import { getGradeAndGpa } from "../../common/utils/gpaCalculator.js";

// CREATE
export const createResult = async (data) => {
  const {
    studentId,
    examId,
    subjectId,
    totalMarks,
    obtainedMarks,
  } = data;

  const existing = await ExamResult.findOne({
    studentId,
    examId,
    subjectId,
  });

  if (existing) {
    throw new AppError("Result already exists", 409);
  }

  const { grade, gpa } = getGradeAndGpa(obtainedMarks, totalMarks);

  const status = obtainedMarks >= totalMarks * 0.5 ? "Pass" : "Fail";

  return await ExamResult.create({
    ...data,
    grade,
    gpa,
    status,
  });
};

// GET ALL (ROLE FILTERED)
export const getResults = async (user) => {
  let filter = {};

  if (user.role === "teacher") {
    filter.classId = { $in: user.classIds || [] };
  }

  if (user.role === "student") {
    filter.studentId = user.id;
  }

  return await ExamResult.find(filter)
    .populate("studentId")
    .populate("examId")
    .populate("subjectId");
};

// GET ONE STUDENT
export const getStudentResults = async (studentId) => {
  return await ExamResult.find({ studentId })
    .populate("examId")
    .populate("subjectId");
};

// UPDATE
export const updateResult = async (id, data) => {
  const result = await ExamResult.findById(id);

  if (!result) throw new AppError("Result not found", 404);

  if (
    data.obtainedMarks !== undefined &&
    data.totalMarks !== undefined
  ) {
    const { grade, gpa } = getGradeAndGpa(
      data.obtainedMarks,
      data.totalMarks
    );

    data.grade = grade;
    data.gpa = gpa;
    data.status =
      data.obtainedMarks >= data.totalMarks * 0.5 ? "Pass" : "Fail";
  }

  Object.assign(result, data);
  await result.save();

  return result;
};

// DELETE
export const deleteResult = async (id) => {
  const result = await ExamResult.findById(id);

  if (!result) throw new AppError("Result not found", 404);

  await result.deleteOne();
  return true;
};

// CGPA (SAFE VERSION)
export const calculateStudentCGPA = async (studentId) => {
  const results = await ExamResult.find({ studentId });

  if (!results || results.length === 0) return 0;

  const totalGpa = results.reduce(
    (sum, r) => sum + (r.gpa || 0),
    0
  );

  return Number((totalGpa / results.length).toFixed(2));
};