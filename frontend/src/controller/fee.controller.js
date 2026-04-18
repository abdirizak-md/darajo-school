import Fee from "../models/Fee.js";

export const createFeeRecord = async (req, res) => {
  const fee = await Fee.create(req.body);
  res.status(201).json(fee);
};

export const getFees = async (req, res) => {
  const fees = await Fee.find().populate("studentId");
  res.json(fees);
};