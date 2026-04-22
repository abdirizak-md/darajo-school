import express from "express";
import classRoutes from "../modules/class/route.js";


const router = express.Router();

// mount route
router.use("/classes", classRoutes);


export default router;