import ExamSchedule from "./examSchedule.model.js";
import AppError from "../../common/utils/appError.js";

export const createSchedule = async (data) => {
  // ⚠️ basic conflict check
  const conflict = await ExamSchedule.findOne({
    classId: data.classId,
    examDate: data.examDate,
    startTime: data.startTime,
  });

  if (conflict) {
    throw new AppError("Schedule conflict detected", 409);
  }

  const schedule = await ExamSchedule.create(data);
  return schedule;
};

export const getSchedules = async () => {
  return await ExamSchedule.find()
    .populate("examId")
    .populate("classId")
    .populate("subjectId");
};

export const updateSchedule = async (id, data) => {
  const schedule = await ExamSchedule.findById(id);

  if (!schedule) throw new AppError("Not found", 404);

  Object.assign(schedule, data);
  await schedule.save();

  return schedule;
};

export const deleteSchedule = async (id) => {
  const schedule = await ExamSchedule.findById(id);

  if (!schedule) throw new AppError("Not found", 404);

  await schedule.deleteOne();

  return true;
};