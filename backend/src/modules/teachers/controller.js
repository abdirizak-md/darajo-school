import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { TEACHER_MESSAGES } from "../../common/constant/teacher.js";

// CREATE
export const createTeacher = asyncHandler(async (req, res) => {
  const data = await service.createTeacherService(req.body);

  res.status(201).json({
    success: true,
    message: TEACHER_MESSAGES.CREATED,
    data,
  });
});

// GET ALL
export const getTeachers = asyncHandler(async (req, res) => {
  const data = await service.getTeachersService();

  res.json({
    success: true,
    data,
  });
});

// GET ONE
export const getTeacher = asyncHandler(async (req, res) => {
  const data = await service.getTeacherByIdService(req.params.id);

  res.json({
    success: true,
    data,
  });
});

// UPDATE
export const updateTeacher = asyncHandler(async (req, res) => {
  const data = await service.updateTeacherService(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    data,
  });
});

// DELETE
export const deleteTeacher = asyncHandler(async (req, res) => {
  await service.deleteTeacherService(req.params.id);

  res.json({
    success: true,
    message: TEACHER_MESSAGES.DELETED,
  });
});