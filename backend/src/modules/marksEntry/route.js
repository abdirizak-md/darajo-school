import express from "express";
import {
  getStudentsForMarksEntry,
  saveMarks,
} from "./controller.js";

import authMiddleware from "../../common/middlewares/middlewares.js";
import permissionMiddleware from "../../common/middlewares/roleMiddleware.js";
import permissions from "../../common/constant/permissions.js";

const router = express.Router();

router.get(
  "/",
  // authMiddleware,
  // permissionMiddleware(permissions.ENTER_MARKS),
  getStudentsForMarksEntry
);

router.post(
  "/",
  // authMiddleware,
  // permissionMiddleware(permissions.ENTER_MARKS),
  saveMarks
);

export default router;