import mongoose from "mongoose";
const { Schema } = mongoose;
const feeSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  academicYear: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  balance: { type: Number, required: true }
});

const Fee = mongoose.model("Fee", feeSchema);
export default Fee;
