import express from "express";
import AttendanceRouter from "../modules/attendance/route.js";

const routeAtten  = express.Router();

routeAtten.use("/attendances", AttendanceRouter);



export default routeAtten;