import SubjectAssign from "./modal.js";
import Student from "../student/modal.js";
import { SUBJECT_ASSIGN_MESSAGES } from "../../common/constant/jubjectAssign.js";


// ➕ ASSIGN SUBJECT (IMPROVED)
export const assignSubjectService = async (data) => {
  const { subjectId, classId, teacherId } = data;

  // ✅ Validation
  if (!subjectId || !classId || !teacherId) {
    throw new Error("subjectId, classId, teacherId are required");
  }

  // ❌ Prevent duplicate
  const exists = await SubjectAssign.findOne({
    subjectId,
    classId,
    teacherId,
  });

  if (exists) {
    throw new Error(SUBJECT_ASSIGN_MESSAGES.EXISTS);
  }

  // ✅ Create
  const created = await SubjectAssign.create(data);

  // ✅ Return populated
  return await SubjectAssign.findById(created._id)
  .populate("subjectId", "name")
  .populate("classId", "name")
  .populate("sectionId", "name")   // ✅ ADD THIS
  .populate("teacherId", "name email")
  .lean();
};


// 📄 GET ALL (IMPROVED + FILTER + CLEAN DATA)
export const getAssignedSubjectsService = async (query = {}) => {
  const { page = 1, limit = 10, classId, teacherId, subjectId } = query;

  const filter = {};

  if (classId) filter.classId = classId;
  if (teacherId) filter.teacherId = teacherId;
  if (subjectId) filter.subjectId = subjectId;

  const data = await SubjectAssign.find(filter)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")   // ✅ ADD THIS
    .populate("teacherId", "name email")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  // ❌ Remove broken data
  const cleanData = data.filter(
    (item) => item.subjectId && item.classId && item.teacherId
  );

  const total = await SubjectAssign.countDocuments(filter);

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    data: cleanData,
  };
};


// 🔍 GET ONE (SAFE)
export const getAssignedSubjectByIdService = async (id) => {
  if (!id) throw new Error("ID is required");

  const data = await SubjectAssign.findById(id)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")   // ✅ ADD THIS
    .populate("teacherId", "name email")
    .lean();

  if (!data) {
    throw new Error(SUBJECT_ASSIGN_MESSAGES.NOT_FOUND);
  }

  return data;
};


// ❌ DELETE (SAFE)
export const deleteAssignedSubjectService = async (id) => {
  if (!id) throw new Error("ID is required");

  const deleted = await SubjectAssign.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error(SUBJECT_ASSIGN_MESSAGES.NOT_FOUND);
  }

  return deleted;
};


// 🎯 NEW: GET STUDENTS FOR ASSIGNED SUBJECT (IMPORTANT)
export const getAssignedStudentsService = async (query, user) => {
  const { classId, subjectId } = query;

  // ✅ validation
  if (!classId || !subjectId) {
    throw new Error("classId and subjectId are required");
  }

  // 🔐 check assignment (teacher must be assigned)
  const assignment = await SubjectAssign.findOne({
    classId,
    subjectId,
    teacherId: user._id,
  });

  if (!assignment) {
    throw new Error("You are not assigned to this subject");
  }

  // 👨‍🎓 fetch students
  const students = await Student.find({ classId })
    .select("fullName admissionNumber")
    .lean();

  return students;
};