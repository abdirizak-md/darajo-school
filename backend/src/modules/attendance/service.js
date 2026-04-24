import Attendance from "./modal.js";
import { ATTENDANCE_MESSAGES } from "../../common/constant/attendance.js";

// CREATE
export const createAttendanceService = async (data) => {
  const attendance = await Attendance.create(data);
  return attendance;
};

// GET ALL
export const getAttendancesService = async (query) => {
  const { classId, sectionId, date } = query;

  const filter = {};

  if (classId) filter.classId = classId;
  if (sectionId) filter.sectionId = sectionId;
  if (date) filter.date = new Date(date);

  const attendances = await Attendance.find(filter)
    .populate("studentId", "fullName")
    .populate("classId", "name")
    .populate("sectionId", "name");

  return attendances;
};

// GET ONE
export const getAttendanceByIdService = async (id) => {
  const attendance = await Attendance.findById(id);

  if (!attendance) {
    throw new Error(ATTENDANCE_MESSAGES.NOT_FOUND);
  }

  return attendance;
};

// UPDATE
export const updateAttendanceService = async (id, data) => {
  const attendance = await Attendance.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!attendance) {
    throw new Error(ATTENDANCE_MESSAGES.NOT_FOUND);
  }

  return attendance;
};

// DELETE
export const deleteAttendanceService = async (id) => {
  const attendance = await Attendance.findByIdAndDelete(id);

  if (!attendance) {
    throw new Error(ATTENDANCE_MESSAGES.NOT_FOUND);
  }

  return attendance;
};