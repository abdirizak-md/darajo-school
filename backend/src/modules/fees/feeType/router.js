import express from "express";
import * as controller from "./controller.js";
import { validateCreateFeeType } from "./validation.js";

const router = express.Router();

router.post("/", validateCreateFeeType, controller.createFeeType);
router.get("/", controller.getFeeTypes);
router.get("/:id", controller.getFeeType);
router.put("/:id", controller.updateFeeType);
router.delete("/:id", controller.deleteFeeType);

export default router