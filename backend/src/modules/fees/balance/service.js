import FeeStructure from "../feeStructure/modal.js";
import Payment from "../payment/modal.js";

export const getBalance = async (studentId, feeTypeId) => {
  const fee = await FeeStructure.findOne({ feeTypeId });

  const payments = await Payment.aggregate([
    { $match: { studentId, feeTypeId } },
    {
      $group: {
        _id: null,
        totalPaid: { $sum: "$amount" },
      },
    },
  ]);

  const paid = payments[0]?.totalPaid || 0;

  return {
    totalFee: fee?.amount || 0,
    paid,
    balance: (fee?.amount || 0) - paid,
  };
};