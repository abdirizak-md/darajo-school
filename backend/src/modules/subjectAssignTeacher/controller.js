import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";


// ➕ ASSIGN
export const assignSubject = asyncHandler(async (req, res) => {
  const data = await service.assignSubjectService(req.body);

  res.status(201).json({
    success: true,
    message: "Subject assigned successfully",
    data,
  });
});


// 📄 GET ALL
export const getAssignedSubjects = asyncHandler(async (req, res) => {
  const data = await service.getAssignedSubjectsService(req.query);

  res.status(200).json({
    success: true,
    ...data,
  });
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


// 🎯 NEW: GET STUDENTS (IMPORTANT FOR YOUR UI)
export const getAssignedStudents = asyncHandler(async (req, res) => {
  const data = await service.getAssignedStudentsService(
    req.query,
    req.user
  );

  res.status(200).json({
    success: true,
    data,
  });
});