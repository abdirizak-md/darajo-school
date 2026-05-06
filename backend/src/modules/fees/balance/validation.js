import mongoose from "mongoose";

export const validateGetBalance = (req, res, next) => {
  const { studentId, feeTypeId } = req.params;

  if (!studentId || !feeTypeId) {
    return res.status(400).json({
      success: false,
      message: "studentId and feeTypeId are required",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(studentId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid studentId",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(feeTypeId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid feeTypeId",
    });
  }

  next();
};