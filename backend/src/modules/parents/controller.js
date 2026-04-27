import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { PARENT_MESSAGES } from "../../common/constant/parent.js";

// ➕ CREATE
export const createParent = asyncHandler(async (req, res) => {
  const { parent, user } = await service.createParentService(req.body);

  res.status(201).json({
    success: true,
    message: PARENT_MESSAGES.CREATED,
    data: {
      parent,
      user: {
        id: user._id,
        role: user.role,
        identifier: user.identifier,
      },
    },
  });
});

// 📄 GET ALL
export const getParents = asyncHandler(async (req, res) => {
  const parents = await service.getParentsService();

  res.status(200).json({
    success: true,
    message: PARENT_MESSAGES.FETCHED_ALL,
    data: parents,
  });
});

// 🔍 GET ONE
export const getParent = asyncHandler(async (req, res) => {
  const parent = await service.getParentByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: PARENT_MESSAGES.FETCHED,
    data: parent,
  });
});

// ✏️ UPDATE
export const updateParent = asyncHandler(async (req, res) => {
  const parent = await service.updateParentService(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: PARENT_MESSAGES.UPDATED,
    data: parent,
  });
});

// ❌ DELETE
export const deleteParent = asyncHandler(async (req, res) => {
  await service.deleteParentService(req.params.id);

  res.status(200).json({
    success: true,
    message: PARENT_MESSAGES.DELETED,
  });
});