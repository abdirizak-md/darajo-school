import ExamResult from "./modal.js";
import AppError from "../../common/utils/appError.js";

const calculateGrade = (marks, total) => {
  const percent = (marks / total) * 100;

  if (percent >= 90) return "A+";
  if (percent >= 80) return "A";
  if (percent >= 70) return "B";
  if (percent >= 60) return "C";
  if (percent >= 50) return "D";
  return "F";
};

export const createResult = async (data) => {
  const { studentId, examId, subjectId, totalMarks, obtainedMarks } = data;

  const existing = await ExamResult.findOne({
    studentId,
    examId,
    subjectId,
  });

  if (existing) {
    throw new AppError("Result already exists", 409);
  }

  const grade = calculateGrade(obtainedMarks, totalMarks);

  const status = obtainedMarks >= totalMarks * 0.5 ? "Pass" : "Fail";

  const result = await ExamResult.create({
    ...data,
    grade,
    status,
  });

  return result;
};

export const getResults = async () => {
  return await ExamResult.find()
    .populate("studentId")
    .populate("examId")
    .populate("subjectId");
};

export const getStudentResults = async (studentId) => {
  return await ExamResult.find({ studentId })
    .populate("examId")
    .populate("subjectId");
};

export const updateResult = async (id, data) => {
  const result = await ExamResult.findById(id);

  if (!result) throw new AppError("Result not found", 404);

  if (data.obtainedMarks && data.totalMarks) {
    data.grade = calculateGrade(data.obtainedMarks, data.totalMarks);
    data.status =
      data.obtainedMarks >= data.totalMarks * 0.5 ? "Pass" : "Fail";
  }

  Object.assign(result, data);
  await result.save();

  return result;
};

export const deleteResult = async (id) => {
  const result = await ExamResult.findById(id);

  if (!result) throw new AppError("Result not found", 404);

  await result.deleteOne();

  return true;
};



export const calculateStudentCGPA = async (studentId) => {
  const results = await ExamResult.find({ studentId });

  if (!results.length) return 0;

  const totalGpa = results.reduce((sum, r) => sum + (r.gpa || 0), 0);

  const cgpa = totalGpa / results.length;

  return Number(cgpa.toFixed(2));
};