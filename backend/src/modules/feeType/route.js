import express from "express";
import {
  createFeeType,
  getAllFeeTypes,
  getSingleFeeType,
  updateFeeType,
  deleteFeeType,
} from "./controller.js";

import {
  validateCreateFeeType,
  validateUpdateFeeType,
} from "./validation.js";

const router = express.Router();

router.post("/", validateCreateFeeType, createFeeType);
router.get("/", getAllFeeTypes);
router.get("/:id", getSingleFeeType);
router.put("/:id", validateUpdateFeeType, updateFeeType);
router.delete("/:id", deleteFeeType);

export default router;