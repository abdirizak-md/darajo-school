import express from "express";
import {
  createFeeStructure,
  getFeeStructures,
} from "./controller.js";

const router = express.Router();

router.post("/", createFeeStructure);
router.get("/", getFeeStructures);

export default router