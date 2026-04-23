import express from "express";
import * as controller from "./controller.js";
import { validateCreateSubject } from "./validation.js";

const router = express.Router();

router.post("/", validateCreateSubject, controller.createSubject);
router.get("/", controller.getSubjects);
router.get("/:id", controller.getSubject);
router.put("/:id", controller.updateSubject);
router.delete("/:id", controller.deleteSubject);

export default router;