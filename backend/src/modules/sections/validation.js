import mongoose from "mongoose";

export const validateCreateSection = (req, res, next) => {
  const {
    name,
    classId,
    roomNumber,
    capacity,
    shift,
  } = req.body;

  // ❌ required fields
  if (!name || !classId || !roomNumber) {
    return res.status(400).json({
      success: false,
      message: "name, classId and roomNumber are required",
    });
  }

  // ❌ validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(classId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid classId",
    });
  }

  // ❌ capacity check
  if (capacity && capacity < 1) {
    return res.status(400).json({
      success: false,
      message: "capacity must be greater than 0",
    });
  }

  // ❌ shift validation
  const allowedShifts = ["Morning", "Afternoon", "Evening"];
  if (shift && !allowedShifts.includes(shift)) {
    return res.status(400).json({
      success: false,
      message: "Invalid shift value",
    });
  }

  next();
};