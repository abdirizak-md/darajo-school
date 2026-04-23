import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";

// ➕ CREATE
export const createSubject = asyncHandler(async (req, res) => {
  const data = await service.createSubjectService(req.body);
  res.status(201).json(data);
});

// 📄 GET ALL
export const getSubjects = asyncHandler(async (req, res) => {
  const data = await service.getSubjectsService(req.query);
  res.json(data);
});

// 🔍 GET ONE
export const getSubject = asyncHandler(async (req, res) => {
  const data = await service.getSubjectByIdService(req.params.id);
  res.json(data);
});

// ✏️ UPDATE
export const updateSubject = asyncHandler(async (req, res) => {
  const data = await service.updateSubjectService(
    req.params.id,
    req.body
  );
  res.json(data);
});

// ❌ DELETE
export const deleteSubject = asyncHandler(async (req, res) => {
  await service.deleteSubjectService(req.params.id);
  res.json({ message: "Subject deleted successfully" });
});