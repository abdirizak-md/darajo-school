import mongoose from "mongoose";

export const validateCreateFeeStructure = (req, res, next) => {
  const { classId, sectionId, feeTypeId, amount } = req.body;

  if (!classId || !sectionId || !feeTypeId || !amount) {
    return res.status(400).json({
      success: false,
      message: "classId, sectionId, feeTypeId, amount required",
    });
  }

  const ids = { classId, sectionId, feeTypeId };

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

  next();
};