import express from "express";
import * as controller from "./controller.js";
import { validateCreateSection } from "./validation.js";

const router = express.Router();

router.post("/", validateCreateSection, controller.createSection);
router.get("/", controller.getSections);
router.get("/:id", controller.getSection);
router.put("/:id", controller.updateSection);
router.delete("/:id", controller.deleteSection);

export default router;