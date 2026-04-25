import statusCodes from "../../common/constant/statusCode.js";

export const validateCreateResult = (req, res, next) => {
  const {
    studentId,
    examId,
    subjectId,
    totalMarks,
    obtainedMarks,
  } = req.body;

  if (!studentId || !examId || !subjectId || !totalMarks || obtainedMarks === undefined) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Missing required fields",
    });
  }

  next();
};