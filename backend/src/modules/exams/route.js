import express from "express";

import {
  createExam,
  getExams,
  updateExam,
  deleteExam,
} from "./controller.js";

import authMiddleware from "../../common/middlewares/middlewares.js";
import permissionMiddleware from "../../common/middlewares/roleMiddleware.js";
import permissions from "../../common/constant/permissions.js";
import roles from "../../common/constant/roles.js";

import { validateCreateExam } from "./validation.js";

const router = express.Router();




// 🧪 CREATE EXAM (ADMIN ONLY)
router.post(
  "/",
  authMiddleware,
  permissionMiddleware(permissions.CREATE_EXAM),
  createExam
);

// 📚 VIEW EXAMS (ALL ROLES THAT HAVE ACCESS)
router.get(
  "/",
  // authMiddleware,
  // permissionMiddleware(permissions.VIEW_EXAM),
  getExams
);

export default router;