import express from "express";

import {
  createSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} from "./examSchedule.controller.js";

import authMiddleware from "../../common/middlewares/auth.middleware.js";
import permissionMiddleware from "../../common/middlewares/permission.middleware.js";
import permissions from "../../common/constants/permissions.js";

import { validateSchedule } from "./examSchedule.validation.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  permissionMiddleware(permissions.CREATE_STUDENT), // later CREATE_EXAM_SCHEDULE
  validateSchedule,
  createSchedule
);

router.get(
  "/",
  authMiddleware,
  permissionMiddleware(permissions.VIEW_STUDENT),
  getSchedules
);

router.patch(
  "/:id",
  authMiddleware,
  permissionMiddleware(permissions.UPDATE_STUDENT),
  updateSchedule
);

router.delete(
  "/:id",
  authMiddleware,
  permissionMiddleware(permissions.DELETE_STUDENT),
  deleteSchedule
);

export default router;