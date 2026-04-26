export const validateCreateTeacher = (req, res, next) => {
  const { fullName, employeeId, password } = req.body;

  if (!fullName || !employeeId || !password) {
    return res.status(400).json({
      success: false,
      message: "fullName, employeeId and password are required",
    });
  }

  next();
};