import express from "express";
import examRoutes from '../modules/exams/route.js'


const examRoute  = express.Router();

examRoute.use("/exams", examRoutes);



export default examRoute;