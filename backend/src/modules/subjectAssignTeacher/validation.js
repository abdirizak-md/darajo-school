export const validateAssignSubject = (req, res, next) => {
  const { subjectId, classId, teacherId } = req.body || {};

  if (!subjectId || !classId || !teacherId) {
    return res.status(400).json({
      success: false,
      message: "subjectId, classId and teacherId are required",
    });
  }

  next();
};