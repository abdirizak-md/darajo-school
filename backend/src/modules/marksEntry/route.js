import express from "express";

import {
  getStudentsForMarksEntry,
  saveMarks,
} from "./marksEntry.controller.js";

import authMiddleware from "../../common/middlewares/auth.middleware.js";
import permissionMiddleware from "../../common/middlewares/permission.middleware.js";

import permissions from "../../common/constants/permissions.js";

const router = express.Router();

// 📌 Load students for teacher panel
router.get(
  "/students",
  authMiddleware,
  permissionMiddleware(permissions.MARK_ATTENDANCE),
  getStudentsForMarksEntry
);

// 📌 Save marks (bulk submit)
router.post(
  "/save",
  authMiddleware,
  permissionMiddleware(permissions.MARK_ATTENDANCE),
  saveMarks
);

export default router;