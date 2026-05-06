import Schedule from "./modal.js";

export const createSchedule = async (data) => {
  return await Schedule.create(data);
};

export const getSchedules = async () => {
  return await Schedule.find()
    .populate("classId")
    .populate("teacherId")
    .populate("subjectId");
};

export const getScheduleById = async (id) => {
  return await Schedule.findById(id);
};

export const updateSchedule = async (id, data) => {
  return await Schedule.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSchedule = async (id) => {
  return await Schedule.findByIdAndDelete(id);
};