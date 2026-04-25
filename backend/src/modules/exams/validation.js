import statusCodes from "../../common/constant/statusCode.js";

export const validateCreateExam = (req, res, next) => {
  const {
    title,
    type,
    classId,
    subjectId,
    examDate,
    totalMarks,
    passMarks,
  } = req.body;

  if (
    !title ||
    !type ||
    !classId ||
    !subjectId ||
    !examDate ||
    !totalMarks ||
    !passMarks
  ) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Required fields missing",
    });
  }

  next();
};