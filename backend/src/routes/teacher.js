import express from "express";
import teacherRoute from "../modules/teachers/route.js";

const TeacherRouter = express.Router();
// mount route
TeacherRouter.use("/teachers", teacherRoute);

export default TeacherRouter;   