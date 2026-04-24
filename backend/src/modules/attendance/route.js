import express from "express";
import * as controller from "./controller.js";
import { validateCreateAttendance } from "./validation.js";

const router = express.Router();

// CREATE
router.post("/", validateCreateAttendance, controller.createAttendance);

// GET ALL
router.get("/", controller.getAttendances);

// GET ONE
router.get("/:id", controller.getAttendance);

// UPDATE (reuse same validator OR create update validator later)
router.put("/:id", validateCreateAttendance, controller.updateAttendance);

// DELETE
router.delete("/:id", controller.deleteAttendance);

export default router;