import express from "express";

import {
  createResult,
  getResults,
  getStudentResults,
  updateResult,
  deleteResult,
} from "./controller.js";

import authMiddleware from "../../common/middlewares/middlewares.js";
import permissionMiddleware from "../../common/middlewares/roleMiddleware.js";

import permissions from "../../common/constant/permissions.js";
import { validateCreateResult } from "./validation.js";

const routerGrading = express.Router();

routerGrading.post(
  "/",
  authMiddleware,
  permissionMiddleware(permissions.CREATE_MARKS),
  validateCreateResult,
  createResult
);

routerGrading.get(
  "/",
  authMiddleware,
  permissionMiddleware(permissions.VIEW_RESULTS),
  getResults
);

routerGrading.get(
  "/student/:studentId",
  authMiddleware,
  permissionMiddleware(permissions.VIEW_RESULTS),
  getStudentResults
);

routerGrading.patch(
  "/:id",
  authMiddleware,
  permissionMiddleware(permissions.UPDATE_MARK),
  updateResult
);

routerGrading.delete(
  "/:id",
  authMiddleware,
  permissionMiddleware(permissions.DELETE_EXAM_RESULT),
  deleteResult
);

export default routerGrading;