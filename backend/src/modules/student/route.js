import express from "express";
import * as controller from "./controller.js";
import { validateCreateStudent } from "./validation.js";
import routerGrading from '../examResult/route.js'
import authMiddleware from "../../common/middlewares/middlewares.js";
import permissionMiddleware from "../../common/middlewares/roleMiddleware.js";
import {getStudentCGPA}  from "../examResult/controller.js";


const studentRouter = express.Router();

studentRouter.post("/", validateCreateStudent, controller.createStudent);
studentRouter.get("/", controller.getStudents);
studentRouter.get("/:id", controller.getStudent);
studentRouter.put("/:id", controller.updateStudent);
studentRouter.delete("/:id", controller.deleteStudent);


routerGrading.get(
  "/cgpa/:studentId",
  authMiddleware,
  permissionMiddleware(permissionMiddleware.VIEW_STUDENT),
  getStudentCGPA
);

export default studentRouter;