import express from "express";
import * as controller from "./class.controller.js";
import { validateCreateClass } from "./class.validation.js";

const router = express.Router();

router.post("/", validateCreateClass, controller.createClass);
router.get("/", controller.getClasses);
router.get("/:id", controller.getClass);
router.put("/:id", controller.updateClass);
router.delete("/:id", controller.deleteClass);

export default router;