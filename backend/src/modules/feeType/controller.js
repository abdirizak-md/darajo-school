import {asyncHandler} from "../../common/utils/asyncHandler.js";
import {
  createFeeTypeService,
  getAllFeeTypesService,
  getSingleFeeTypeService,
  updateFeeTypeService,
  deleteFeeTypeService,
} from "./service.js";

// CREATE
export const createFeeType = asyncHandler(async (req, res) => {
  const feeType = await createFeeTypeService(req.body);

  res.status(201).json({
    success: true,
    data: feeType,
  });
});

// GET ALL
export const getAllFeeTypes = asyncHandler(async (req, res) => {
  const feeTypes = await getAllFeeTypesService();

  res.status(200).json({
    success: true,
    data: feeTypes,
  });
});

// GET ONE
export const getSingleFeeType = asyncHandler(async (req, res) => {
  const feeType = await getSingleFeeTypeService(req.params.id);

  res.status(200).json({
    success: true,
    data: feeType,
  });
});

// UPDATE
export const updateFeeType = asyncHandler(async (req, res) => {
  const feeType = await updateFeeTypeService(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: feeType,
  });
});

// DELETE (soft)
export const deleteFeeType = asyncHandler(async (req, res) => {
  const feeType = await deleteFeeTypeService(req.params.id);

  res.status(200).json({
    success: true,
    message: "Fee type deactivated successfully",
    data: feeType,
  });
});