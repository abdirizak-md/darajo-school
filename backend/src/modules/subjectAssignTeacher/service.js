import SubjectAssign from "./modal.js";
import { SUBJECT_ASSIGN_MESSAGES } from "../../common/constant/jubjectAssign.js";

// ➕ ASSIGN
export const assignSubjectService = async (data) => {
  const exists = await SubjectAssign.findOne({
    subjectId: data.subjectId,
    classId: data.classId,
  });

  console.log("Checking for existing assignment:", exists); // Debug log

  if (exists) {
    throw new Error(SUBJECT_ASSIGN_MESSAGES.EXISTS);
  }

  return await SubjectAssign.create(data);
};

// 📄 GET ALL (WITH POPULATE ✅)
export const getAssignedSubjectsService = async (query = {}) => {
  const { page = 1, limit = 10 } = query;

  const data = await SubjectAssign.find()
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("teacherId", "name email")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const total = await SubjectAssign.countDocuments();

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    data,
  };
};

// 🔍 GET ONE
export const getAssignedSubjectByIdService = async (id) => {
  const data = await SubjectAssign.findById(id)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("teacherId", "name email")
    .lean();

  if (!data) throw new Error(SUBJECT_ASSIGN_MESSAGES.NOT_FOUND);

  return data;
};

// ❌ DELETE
export const deleteAssignedSubjectService = async (id) => {
  const deleted = await SubjectAssign.findByIdAndDelete(id);

  if (!deleted)
    throw new Error(SUBJECT_ASSIGN_MESSAGES.NOT_FOUND);

  return deleted;
};