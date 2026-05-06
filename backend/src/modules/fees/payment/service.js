import Payment from "./modal.js";

export const createPayment = async (data) => {
  return await Payment.create(data);
};

export const getPayments = async () => {
  return await Payment.find().populate("studentId feeTypeId classId");
};