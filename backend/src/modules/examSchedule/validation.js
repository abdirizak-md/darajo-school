import statusCodes from "../../common/constants/statusCodes.js";

export const validateSchedule = (req, res, next) => {
  const {
    examId,
    classId,
    subjectId,
    examDate,
    startTime,
    endTime,
  } = req.body;

  if (!examId || !classId || !subjectId || !examDate || !startTime || !endTime) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Missing required schedule fields",
    });
  }

  next();
};