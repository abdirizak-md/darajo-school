import mongoose from "mongoose";

export const createScheduleSchema = (req, res, next) => {
  const {
    classId,
    sectionId,
    teacherId,
    subjectId,
    timeFrom,
    timeTo,
    days,
  } = req.body;

  // ❌ required fields
  if (
    !classId ||
    !sectionId ||
    !teacherId ||
    !subjectId ||
    !timeFrom ||
    !timeTo ||
    !days
  ) {
    return res.status(400).json({
      success: false,
      message:
        "classId, sectionId, teacherId, subjectId, timeFrom, timeTo and days are required",
    });
  }

  // ❌ validate ObjectIds
  if (!mongoose.Types.ObjectId.isValid(classId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid classId",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(sectionId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid sectionId",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(teacherId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid teacherId",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(subjectId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid subjectId",
    });
  }

  // ❌ validate time format (basic HH:mm)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (!timeRegex.test(timeFrom) || !timeRegex.test(timeTo)) {
    return res.status(400).json({
      success: false,
      message: "timeFrom and timeTo must be in HH:mm format",
    });
  }

  // ❌ logical time check
  if (timeFrom >= timeTo) {
    return res.status(400).json({
      success: false,
      message: "timeFrom must be earlier than timeTo",
    });
  }

  // ❌ validate days
  const allowedDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (!Array.isArray(days) || days.length === 0) {
    return res.status(400).json({
      success: false,
      message: "days must be a non-empty array",
    });
  }

  const invalidDays = days.filter((day) => !allowedDays.includes(day));

  if (invalidDays.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Invalid days: ${invalidDays.join(", ")}`,
    });
  }

  next();
};