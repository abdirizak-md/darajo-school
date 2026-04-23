import express from "express";
import * as controller from "./controller.js";
import { validateCreateParent } from "./validation.js";

const router = express.Router();

router.post("/", validateCreateParent, controller.createParent);
router.get("/", controller.getParents);
router.get("/:id", controller.getParent);
router.put("/:id", controller.updateParent);
router.delete("/:id", controller.deleteParent);

export default router;