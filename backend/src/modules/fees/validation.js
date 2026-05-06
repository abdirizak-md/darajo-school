// import mongoose from "mongoose";

// export const validateCreateFee = (req, res, next) => {
//   const {
//     classId,
//     sectionId,
//     studentId,
//     feeType,
//     amount,
//     paymentMethod,
//     date,
//     status,
//   } = req.body;

//   // ❌ required fields
//   if (
//     !classId ||
//     !sectionId ||
//     !studentId ||
//     !feeType ||
//     !amount ||
//     !paymentMethod ||
//     !date
//   ) {
//     return res.status(400).json({
//       success: false,
//       message:
//         "classId, sectionId, studentId, feeType, amount, paymentMethod and date are required",
//     });
//   }

//   // ❌ ObjectId validation
//   const ids = { classId, sectionId, studentId };

//   for (let key in ids) {
//     if (!mongoose.Types.ObjectId.isValid(ids[key])) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid ${key}`,
//       });
//     }
//   }

//   // ❌ amount check
//   if (typeof amount !== "number" || amount <= 0) {
//     return res.status(400).json({
//       success: false,
//       message: "amount must be a positive number",
//     });
//   }

//   // ❌ feeType validation
//   const allowedFeeTypes = ["Tuition", "Exam", "Transport", "Hostel", "Other"];
//   if (!allowedFeeTypes.includes(feeType)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid feeType",
//     });
//   }

//   // ❌ payment method
//   const allowedMethods = ["Cash", "Card", "Bank Transfer", "Mobile Money"];
//   if (!allowedMethods.includes(paymentMethod)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid paymentMethod",
//     });
//   }

//   // ❌ date validation
//   if (isNaN(Date.parse(date))) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid date format",
//     });
//   }

//   // ❌ status validation
//   const allowedStatus = ["Paid", "Pending", "Failed"];
//   if (status && !allowedStatus.includes(status)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid status",
//     });
//   }

//   next();
// };