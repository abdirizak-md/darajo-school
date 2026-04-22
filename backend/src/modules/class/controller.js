import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";

// CREATE
export const createClass = asyncHandler(async (req, res) => {
  const data = await service.createClassService(req.body);
  res.status(201).json(data);
});

// GET ALL
export const getClasses = asyncHandler(async (req, res) => {
  const data = await service.getClassesService(req.query);
  res.json(data);
});

// GET ONE
export const getClass = asyncHandler(async (req, res) => {
  const data = await service.getClassByIdService(req.params.id);
  res.json(data);
});

// UPDATE
export const updateClass = asyncHandler(async (req, res) => {
  const data = await service.updateClassService(
    req.params.id,
    req.body
  );
  res.json(data);
});

// DELETE
export const deleteClass = asyncHandler(async (req, res) => {
  await service.deleteClassService(req.params.id);
  res.json({ message: "Class deleted successfully" });
});