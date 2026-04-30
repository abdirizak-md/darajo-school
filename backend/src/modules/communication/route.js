import express from "express";
import * as controller from "./controlller.js";
import { validateSendMessage } from "./validation.js";

const router = express.Router();

// CREATE MESSAGE
router.post("/", validateSendMessage, controller.createMessage);

// GET MESSAGES
router.get("/", controller.getMessages);

// SEND MESSAGE
router.post("/:id/send", controller.sendMessage);

export default router;