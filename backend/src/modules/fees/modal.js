// import mongoose from "mongoose";

// const feeSchema = new mongoose.Schema(
//   {
//     classId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Class",
//       required: true,
//     },
//     sectionId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//     },
//     studentId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Student",
//       required: true,
//     },
//     feeType: {
//       type: String,
//       enum: ["Tuition", "Exam", "Other"],
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//     },
//     paymentMethod: {
//       type: String,
//       enum: ["Cash", "Card", "Bank Transfer", "Mobile Money"],
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["Paid", "Pending", "Failed"],
//       default: "Paid",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Fee", feeSchema);