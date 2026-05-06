import mongoose from "mongoose";

export const validateCreateFeeType = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "name is required",
    });
  }

  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "name must be a valid string",
    });
  }

  next();
};