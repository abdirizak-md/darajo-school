import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { ATTENDANCE_MESSAGES } from "../../common/constant/attendance.js";

// CREATE
export const createAttendance = asyncHandler(async (req, res) => {
  const data = await service.createAttendanceService(req.body);

  res.status(201).json({
    success: true,
    message: ATTENDANCE_MESSAGES.CREATED,
    data,
  });
});

// GET ALL
export const getAttendances = asyncHandler(async (req, res) => {
  const data = await service.getAttendancesService(req.query);

  res.json({
    success: true,
    message: ATTENDANCE_MESSAGES.FETCHED_ALL,
    data,
  });
});

// GET ONE
export const getAttendance = asyncHandler(async (req, res) => {
  const data = await service.getAttendanceByIdService(req.params.id);

  res.json({
    success: true,
    message: ATTENDANCE_MESSAGES.FETCHED_ONE,
    data,
  });
});

// UPDATE
export const updateAttendance = asyncHandler(async (req, res) => {
  const data = await service.updateAttendanceService(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    message: ATTENDANCE_MESSAGES.UPDATED,
    data,
  });
});

// DELETE
export const deleteAttendance = asyncHandler(async (req, res) => {
  await service.deleteAttendanceService(req.params.id);

  res.json({
    success: true,
    message: ATTENDANCE_MESSAGES.DELETED,
  });
});