import express from "express";
import studentRoutes from "../modules/student/route.js";

const StudentRouter = express.Router();

// mount route
StudentRouter.use("/students", studentRoutes);

export default StudentRouter;