export const validateCreateAttendance = (req, res, next) => {
  const { studentId, classId, sectionId, date, status } = req.body || {};

  // Validate studentId
  if (!studentId) {
    return res.status(400).json({
      success: false,
      message: "Student ID is required",
    });
  }

  // Validate classId
  if (!classId) {
    return res.status(400).json({
      success: false,
      message: "Class ID is required",
    });
  }

  // Validate sectionId
  if (!sectionId) {
    return res.status(400).json({
      success: false,
      message: "Section ID is required",
    });
  }

  // Validate date
  if (!date) {
    return res.status(400).json({
      success: false,
      message: "Date is required",
    });
  }

  // Validate status
  if (!status) {
    return res.status(400).json({
      success: false,
      message: "Attendance status is required",
    });
  }

  const allowedStatus = ["Present", "Absent", "Late"];
  if (!allowedStatus.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status. Allowed values: Present, Absent, Late",
    });
  }

  next();
};