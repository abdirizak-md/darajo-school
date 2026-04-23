import express from "express";
import * as controller from "./controller.js";
import { validateCreateTeacher } from "./validation.js";

const router = express.Router();

router.post("/", validateCreateTeacher, controller.createTeacher);
router.get("/", controller.getTeachers);
router.get("/:id", controller.getTeacher);
router.put("/:id", controller.updateTeacher);
router.delete("/:id", controller.deleteTeacher);

export default router;