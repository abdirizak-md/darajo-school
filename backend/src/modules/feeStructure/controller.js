import { asyncHandler } from "../../common/utils/asyncHandler.js";
import {
  createFeeStructureService,
  getAllFeeStructuresService,
  getFeeStructureByClassService,
} from "./service.js";

import { validateUpdateFeeStructure } from "./validation.js";

// CREATE
export const createFeeStructure = asyncHandler(async (req, res) => {
  const body = req.body || {};

  const error = validateUpdateFeeStructure(body); // 🔥 MISSING LINE FIXED

  if (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  const data = await createFeeStructureService(body);

  return res.status(201).json({
    success: true,
    message: "Fee structure created",
    data,
  });
});

// GET ALL
export const getAllFeeStructures = asyncHandler(async (req, res) => {
  const data = await getAllFeeStructuresService();

  res.status(200).json({
    success: true,
    data,
  });
});

// GET BY CLASS
export const getFeeStructureByClass = asyncHandler(async (req, res) => {
  const { classId } = req.params;

  const data = await getFeeStructureByClassService(classId);

  res.status(200).json({
    success: true,
    data,
  });
});