import statusCodes from "../../common/constant/statusCode.js";

export const validateCreateResult = (req, res, next) => {
  const {
    examId,
    subjectId,
    classId,
    sectionId,
    totalMarks,
    marksList,
  } = req.body || {};

  // ✅ validate root fields
  if (
    !examId ||
    !subjectId ||
    !classId ||
    !sectionId ||
    !totalMarks ||
    !Array.isArray(marksList) ||
    marksList.length === 0
  ) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Missing required fields",
    });
  }

  // ✅ validate inside marksList
  for (const item of marksList) {
    if (!item.studentId || item.obtainedMarks === undefined) {
      return res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: "Invalid marksList data",
      });
    }
  }

  next();
};