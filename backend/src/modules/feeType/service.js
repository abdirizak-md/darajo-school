import FeeType from "./modal.js";
import AppError from "../../common/utils/appError.js";

// CREATE
export const createFeeTypeService = async (data) => {
  const existing = await FeeType.findOne({ name: data.name });

  if (existing) {
    throw new AppError("Fee type already exists", 400);
  }

  return await FeeType.create(data);
};

// GET ALL
export const getAllFeeTypesService = async () => {
  return await FeeType.find().sort({ createdAt: -1 });
};

// GET ONE
export const getSingleFeeTypeService = async (id) => {
  const feeType = await FeeType.findById(id);

  if (!feeType) {
    throw new AppError("Fee type not found", 404);
  }

  return feeType;
};

// UPDATE
export const updateFeeTypeService = async (id, data) => {
  const feeType = await FeeType.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!feeType) {
    throw new AppError("Fee type not found", 404);
  }

  return feeType;
};

// DELETE (soft delete recommended)
export const deleteFeeTypeService = async (id) => {
  const feeType = await FeeType.findByIdAndUpdate(
    id,
    { status: "inactive" },
    { new: true }
  );

  if (!feeType) {
    throw new AppError("Fee type not found", 404);
  }

  return feeType;
};