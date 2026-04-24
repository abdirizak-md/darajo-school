import express from "express";
import { createUser, login } from "./controller.js";

import authMiddleware from "../../common/middlewares/middlewares.js";
import roleMiddleware from "../../common/middlewares/roleMiddleware.js";
import { validateCreateUser, validateLogin } from "./validation.js";

import roles from "../../common/constant/roles.js";

const router = express.Router();

router.post("/", validateLogin, login);

router.post(
  "/",
  authMiddleware,
  roleMiddleware(roles.ADMIN),
  validateCreateUser,
  createUser
);

export default router;