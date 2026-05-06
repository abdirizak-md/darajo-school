import express from "express";
import * as controller from "./controller.js";
import validate from "../../common/middlewares/middlewares.js";
import { createScheduleSchema } from "./validation.js";

const router = express.Router();

router.post("/", createScheduleSchema, controller.createSchedule);
router.get("/", controller.getSchedules);
router.get("/:id", controller.getSchedule);
router.put("/:id", controller.updateSchedule);
router.delete("/:id", controller.deleteSchedule);

export default router;