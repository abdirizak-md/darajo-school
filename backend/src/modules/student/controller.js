import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { STUDENT_MESSAGES } from "../../common/constant/student.js";

// ➕ CREATE
export const createStudent = asyncHandler(async (req, res) => {
  const data = await service.createStudentService(req.body);

  res.status(201).json({
    success: true,
    message: STUDENT_MESSAGES.CREATED,
    data,
  });
});

// 📄 GET ALL
export const getStudents = asyncHandler(async (req, res) => {
  const data = await service.getStudentsService(req.query);

  res.status(200).json({
    success: true,
    message: STUDENT_MESSAGES.FETCHED_ALL,
    data,
  });
});

// 🔍 GET ONE
export const getStudent = asyncHandler(async (req, res) => {
  const data = await service.getStudentByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: STUDENT_MESSAGES.FETCHED_ONE,
    data,
  });
});

// ✏️ UPDATE
export const updateStudent = asyncHandler(async (req, res) => {
  const data = await service.updateStudentService(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: STUDENT_MESSAGES.UPDATED,
    data,
  });
});

// ❌ DELETE
export const deleteStudent = asyncHandler(async (req, res) => {
  await service.deleteStudentService(req.params.id);

  res.status(200).json({
    success: true,
    message: STUDENT_MESSAGES.DELETED,
  });
});