import mongoose from "mongoose";
const { Schema } = mongoose;
const paymentSchema = new Schema({
  studentId: { type:  Schema.Types.ObjectId, ref: "Student", required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  reference: String,
  paidAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
