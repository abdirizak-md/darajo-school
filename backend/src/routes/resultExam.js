import express from "express";

import resultExams from "../modules/examResult/route.js";

const resultExamRouter = express.Router();

// mount route
resultExamRouter.use("/results", resultExams); 
  console.log("HIT CREATE ROUTE");

export default resultExamRouter;