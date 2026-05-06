import Payment from "../models/Payment.js";
import Fee from "../models/Fee.js";

export const makePayment = async (req, res) => {
  const payment = await Payment.create(req.body);

  const fee = await Fee.findOne({
    studentId: req.body.studentId,
    academicYear: req.body.academicYear
  });

  if (fee) {
    fee.paidAmount += payment.amount;
    fee.balance = fee.totalAmount - fee.paidAmount;
    await fee.save();
  }

  res.status(201).json(payment);
};

export const getPayments = async (req, res) => {
  const payments = await Payment.find().populate("studentId");
  res.json(payments);
};