import express from "express";
import * as controller from "./student.controller.js";

const router = express.Router();

router.post("/", controller.createStudent);
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudent);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);

export default router;