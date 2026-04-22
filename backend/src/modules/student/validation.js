export const validateCreateStudent = (req, res, next) => {
  const {
    fullName,
    admissionNumber,
    classId,
    sectionId,
  } = req.body;

  // ❌ required fields check
  if (!fullName || !admissionNumber || !classId || !sectionId) {
    return res.status(400).json({
      success: false,
      message:
        "fullName, admissionNumber, classId and sectionId are required",
    });
  }

  // ❌ basic string checks
  if (fullName.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "fullName must be at least 3 characters",
    });
  }

  if (admissionNumber.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "admissionNumber is too short",
    });
  }

  next();
};