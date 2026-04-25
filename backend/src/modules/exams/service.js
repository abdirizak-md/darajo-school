import Exam from "./modal.js";
import AppError from "../../common/utils/appError.js";

export const createExam = async (data) => {
  const exam = await Exam.create(data);
  return exam;
};

export const getExams = async () => {
  return await Exam.find({ isDeleted: false })
    .populate("classId")
    .populate("subjectId");
};

export const updateExam = async (id, data) => {
  const exam = await Exam.findById(id);

  if (!exam) {
    throw new AppError("Exam not found", 404);
  }

  Object.assign(exam, data);
  await exam.save();

  return exam;
};

export const deleteExam = async (id) => {
  const exam = await Exam.findById(id);

  if (!exam) {
    throw new AppError("Exam not found", 404);
  }

  exam.isDeleted = true;
  await exam.save();

  return true;
};