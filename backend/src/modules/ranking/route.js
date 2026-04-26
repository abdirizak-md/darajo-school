import express from "express";
import { classRankingController } from "./ranking.controller.js";

const router = express.Router();

router.get("/:classId", classRankingController);

export default router;