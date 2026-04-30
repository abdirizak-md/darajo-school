import mongoose from "mongoose";
import statusCodes from "../../common/constant/statusCode.js";

export const validateSendMessage = (req, res, next) => {
  const {
    messageType,
    priority,
    recipients,
    subject,
    content,
    targetClass,
    targetSection,
    targetEmail,
  } = req.body;

  if (!messageType || !priority || !recipients || !subject || !content) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Required fields missing",
    });
  }

  // CLASS validation
  if (recipients === "CLASS") {
    if (!targetClass || !mongoose.Types.ObjectId.isValid(targetClass)) {
      return res.status(400).json({
        success: false,
        message: "Valid targetClass is required",
      });
    }
  }

  // SECTION validation
  if (recipients === "SECTION") {
    if (!targetSection || !mongoose.Types.ObjectId.isValid(targetSection)) {
      return res.status(400).json({
        success: false,
        message: "Valid targetSection is required",
      });
    }
  }

  // SINGLE PARENT validation
  if (recipients === "SINGLE_PARENT") {
    if (!targetEmail) {
      return res.status(400).json({
        success: false,
        message: "targetEmail is required",
      });
    }
  }

  next();
};