import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";



export const createStudent = asyncHandler(async (req, res) => {
  const { student, user } = await service.createStudentService(req.body);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: {
      student,
      user: {
        id: user._id,
        role: user.role,
        identifier: user.identifier,
      },
    },
  });
});


export const getStudents = asyncHandler(async (req, res) => {
  const students = await service.getStudentsService();

  res.status(200).json({
    success: true,
    message: "Students fetched successfully",
    data: students,
  });
});

export const getStudent = asyncHandler(async (req, res) => {
  const student = await service.getStudentByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: "Student fetched successfully",
    data: student,
  });
});

export const updateStudent = asyncHandler(async (req, res) => {
  const student = await service.updateStudentService(req.params.id, req.body);  

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: student,
  });
});

export const deleteStudent = asyncHandler(async (req, res) => {
  await service.deleteStudentService(req.params.id);


  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
  });
});