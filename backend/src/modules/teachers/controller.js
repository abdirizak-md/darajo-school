import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { TEACHER_MESSAGES } from "../../common/constant/teacher.js";


// ================= CREATE =================
export const createTeacher = asyncHandler(async (req, res) => {
  const { user, teacher } = await service.createTeacherService(req.body);

  res.status(201).json({
    success: true,
    message: TEACHER_MESSAGES.CREATED,
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile,
      },
      teacher,
    },
  });
});

// ================= GET ALL =================

export const getAllTeachers = asyncHandler(async (req, res) => {
  const teachers = await service.getAllTeachersService();

  res.status(200).json({
    success: true,
    data: teachers,
  });
});

// ================= GET BY ID =================
export const getTeacherById = asyncHandler(async (req, res) => {
  const teacher = await service.getTeacherByIdService(req.params.id);

  res.status(200).json({
    success: true,
    data: teacher,
  });
});

// ================= UPDATE =================
export const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await service.updateTeacherService(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: TEACHER_MESSAGES.UPDATED,
    data: teacher,
  });
}
);

// ================= DELETE =================
export const deleteTeacher = asyncHandler(async (req, res) => {
  await service.deleteTeacherService(req.params.id);

  res.status(200).json({
    success: true,
    message: TEACHER_MESSAGES.DELETED,
  });
}
);

