import express from "express";
import * as controller from "./controller.js";
import { validateCreateStudent } from "./validation.js";

const studentRouter = express.Router();

studentRouter.post("/", validateCreateStudent, controller.createStudent);
studentRouter.get("/", controller.getStudents);
studentRouter.get("/:id", controller.getStudent);
studentRouter.put("/:id", controller.updateStudent);
studentRouter.delete("/:id", controller.deleteStudent);

export default studentRouter;