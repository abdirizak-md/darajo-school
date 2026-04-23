import express from "express";
import * as controller from "./controller.js";
import { validateAssignSubject } from "./validation.js";

const router = express.Router();

router.post("/", validateAssignSubject, controller.assignSubject);
router.get("/", controller.getAssignedSubjects);
router.get("/:id", controller.getAssignedSubject);
router.delete("/:id", controller.deleteAssignedSubject);

export default router;