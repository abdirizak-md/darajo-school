import mongoose from "mongoose";

export const validateCreatePayment = (req, res, next) => {
  const {
    classId,
    sectionId,
    studentId,
    feeTypeId,
    amount,
    paymentMethod,
    date,
  } = req.body;

  if (
    !classId ||
    !sectionId ||
    !studentId ||
    !feeTypeId ||
    !amount ||
    !paymentMethod ||
    !date
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const ids = { classId, sectionId, studentId, feeTypeId };

  for (let key in ids) {
    if (!mongoose.Types.ObjectId.isValid(ids[key])) {
      return res.status(400).json({
        success: false,
        message: `Invalid ${key}`,
      });
    }
  }

  if (amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "amount must be > 0",
    });
  }

  if (isNaN(Date.parse(date))) {
    return res.status(400).json({
      success: false,
      message: "Invalid date",
    });
  }

  next();
};