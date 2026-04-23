import express from "express";
import subject from "../modules/subject/route.js";

const SubjectRouter = express.Router();

// mount route
SubjectRouter.use("/subjects", subject);


export default SubjectRouter;