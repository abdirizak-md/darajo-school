import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { PARENT_MESSAGES } from "../../common/constant/parent.js";

// ➕ CREATE
export const createParent = asyncHandler(async (req, res) => {
  const data = await service.createParentService(req.body);

  res.status(201).json({
    success: true,
    message: PARENT_MESSAGES.CREATED,
    data,
  });
});

// 📄 GET ALL
export const getParents = asyncHandler(async (req, res) => {
  const data = await service.getParentsService();

  res.json({
    success: true,
    message: PARENT_MESSAGES.FETCHED_ALL,
    data,
  });
});

// 🔍 GET ONE
export const getParent = asyncHandler(async (req, res) => {
  const data = await service.getParentByIdService(req.params.id);

  res.json({
    success: true,
    message: PARENT_MESSAGES.NOT_FOUND ? "Parent fetched successfully" : "",
    data,
  });
});

// ✏️ UPDATE
export const updateParent = asyncHandler(async (req, res) => {
  const data = await service.updateParentService(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    message: PARENT_MESSAGES.UPDATED,
    data,
  });
});

// ❌ DELETE
export const deleteParent = asyncHandler(async (req, res) => {
  await service.deleteParentService(req.params.id);

  res.json({
    success: true,
    message: PARENT_MESSAGES.DELETED,
  });
});