import * as service from "./service.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";
import successResponse from "../../common/utils/responseApi.js";

export const createMessage = asyncHandler(async (req, res) => {
  const message = await service.createMessage(req.body);

  return successResponse(res, {
    success: true,
    message: "Message created",
    data: message,
  });
});

// GET ALL MESSAGES
export const getMessages = asyncHandler(async (req, res) => {
  const messages = await service.getMessages();

  return successResponse(res, {
    success: true,
    message: "Messages retrieved",
    data: messages,
  });
});

// SEND MESSAGE
export const sendMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await service.sendMessageNow(id);

  return successResponse(res, {
    success: true,
    message: "Message sent successfully",
    data: message,
  });
});