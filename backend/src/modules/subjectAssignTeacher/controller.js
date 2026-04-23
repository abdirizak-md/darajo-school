import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";

// ASSIGN
export const assignSubject = asyncHandler(async (req, res) => {
  const data = await service.assignSubjectService(req.body);
  res.status(201).json(data);
});

// GET ALL
export const getAssignedSubjects = asyncHandler(async (req, res) => {
  const data = await service.getAssignedSubjectsService(req.query);
  res.json(data);
});

// GET ONE
export const getAssignedSubject = asyncHandler(async (req, res) => {
  const data = await service.getAssignedSubjectByIdService(req.params.id);
  res.json(data);
});

// DELETE
export const deleteAssignedSubject = asyncHandler(async (req, res) => {
  await service.deleteAssignedSubjectService(req.params.id);
  res.json({ message: "Assignment deleted successfully" });
});