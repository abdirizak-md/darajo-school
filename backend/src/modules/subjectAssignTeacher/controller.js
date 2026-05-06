import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";

// ➕ ASSIGN
import SubjectAssign from "./modal.js";

// ➕ ASSIGN SUBJECT (CLEAN + CONSISTENT)
export const assignSubject = asyncHandler(async (req, res) => {
  const data = await service.assignSubjectService(req.body);

  res.status(201).json({
    success: true,
    data,
  });
});


export const getAssignedSubjectsService = async (query = {}) => {
  const { page = 1, limit = 10, classId, teacherId, subjectId } = query;

  const filter = {};

  if (classId) filter.classId = classId;
  if (teacherId) filter.teacherId = teacherId;
  if (subjectId) filter.subjectId = subjectId;

  const data = await SubjectAssign.find(filter)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")
    .populate("teacherId", "fullName email")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const cleanData = data.filter(
    (item) => item.subjectId && item.classId && item.teacherId
  );

  const total = await SubjectAssign.countDocuments(filter);

  return {
    success: true,
    total,
    page: Number(page),
    limit: Number(limit),
    data: cleanData,
  };
};


export const getAssignedSubjectByIdService = async (id) => {
  if (!id) throw new Error("ID is required");

  const data = await SubjectAssign.findById(id)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")
    .populate("teacherId", "fullName email")
    .lean();

  if (!data) {
    throw new Error("Assignment not found");
  }

  return data;
};




// 📄 GET ALL
export const getAssignedSubjects = asyncHandler(async (req, res) => {
  const data = await service.getAssignedSubjectsService(req.query);

  res.status(200).json(data);
});

// 🔍 GET ONE
export const getAssignedSubject = asyncHandler(async (req, res) => {
  const data = await service.getAssignedSubjectByIdService(req.params.id);

  res.status(200).json({
    success: true,
    data,
  });
});

// ❌ DELETE
export const deleteAssignedSubject = asyncHandler(async (req, res) => {
  await service.deleteAssignedSubjectService(req.params.id);

  res.status(200).json({
    success: true,
    message: "Assignment deleted successfully",
  });
});

// 🎯 STUDENTS
export const getAssignedStudents = asyncHandler(async (req, res) => {
  const data = await service.getAssignedStudentsService(req.query, req.user);

  res.status(200).json({
    success: true,
    data,
  });
});