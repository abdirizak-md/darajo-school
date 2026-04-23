export const validateCreateTeacher = (req, res, next) => {
  const { fullName, employeeId, subject } = req.body;

  if (!fullName || !employeeId || !subject) {
    return res.status(400).json({
      success: false,
      message: "fullName, employeeId and subject are required",
    });
  }

  next();
};