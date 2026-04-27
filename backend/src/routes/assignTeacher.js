import express from "express";
import router from "../modules/subjectAssignTeacher/route.js";

const routeAssign = express.Router();
routeAssign.use("/assign-teacher", router);

export default routeAssign;



