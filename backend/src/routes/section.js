import express from "express";
import section from "../modules/sections/route.js";

const SectionRouter = express.Router();

// mount route
SectionRouter.use("/sections", section);

export default SectionRouter;