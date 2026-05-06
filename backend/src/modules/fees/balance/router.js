import express from "express";
import * as controller from "./controller.js";
import { validateGetBalance } from "./validation.js";

const router = express.Router();

// GET student balance
router.get(
  "/:studentId/:feeTypeId",
  validateGetBalance,
  controller.getBalance
);

export default router