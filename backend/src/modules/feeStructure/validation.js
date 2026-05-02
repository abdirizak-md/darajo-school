import mongoose from "mongoose";

const FEE_TYPES = ["tuition", "transport", "exam", "library"];

export const validateUpdateFeeStructure = (body) => {
  const { class: classId, feeType, amount, dueDate } = body || {};

  if (!classId && !feeType && amount === undefined && !dueDate) {
    return "At least one field is required";
  }

  if (classId && !mongoose.Types.ObjectId.isValid(classId)) {
    return "Invalid class ID";
  }

  if (feeType && !FEE_TYPES.includes(feeType)) {
    return "Invalid fee type";
  }

  if (amount !== undefined) {
    if (typeof amount !== "number" || amount <= 0) {
      return "Amount must be a positive number";
    }
  }

  if (dueDate && isNaN(new Date(dueDate).getTime())) {
    return "Invalid due date";
  }

  return null;
};