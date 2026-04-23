import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import { SECTION_MESSAGES } from "../../common/constant/section.js";

// ➕ CREATE
export const createSection = asyncHandler(async (req, res) => {
  const data = await service.createSectionService(req.body);

  res.status(201).json({
    success: true,
    message: SECTION_MESSAGES.CREATED,
    data,
  });
});

// 📄 GET ALL
export const getSections = asyncHandler(async (req, res) => {
  const data = await service.getSectionsService();

  res.json({
    success: true,
    data,
  });
});

// 🔍 GET ONE
export const getSection = asyncHandler(async (req, res) => {
  const data = await service.getSectionByIdService(req.params.id);

  res.json({
    success: true,
    data,
  });
});

// ✏️ UPDATE
export const updateSection = asyncHandler(async (req, res) => {
  const data = await service.updateSectionService(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    data,
  });
});

// ❌ DELETE
export const deleteSection = asyncHandler(async (req, res) => {
  await service.deleteSectionService(req.params.id);

  res.json({
    success: true,
    message: SECTION_MESSAGES.DELETED,
  });
});