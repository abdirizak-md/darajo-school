import express from "express";
import {
  createFeeStructure,
  getAllFeeStructures,
  getFeeStructureByClass,
} from "./controller.js";

const router = express.Router();

router.post("/", createFeeStructure);
router.get("/", getAllFeeStructures);
router.get("/class/:classId", getFeeStructureByClass);

export default router;