import express from "express";
import * as controller from "./controler.js";
import {
  validateCreateFee,
  
} from "./validation.js";

const router = express.Router();

router.post("/", validateCreateFee, controller.createFee);
router.get("/", controller.getFees);
router.get("/:id", controller.getFee);
// router.put("/:id", validate(updateFeeValidation), controller.updateFee);
router.delete("/:id", controller.deleteFee);

// 🔥 summary route
router.get("/summary/:studentId", controller.studentSummary);

export default router;