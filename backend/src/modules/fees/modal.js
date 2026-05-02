import mongoose from "mongoose";
import { PAYMENT_METHODS, PAYMENT_STATUS } from "../../common/constant/feeConstant.js";

const feeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      index: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    feeType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeeType",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    paymentMethod: {
      type: String,
      enum: PAYMENT_METHODS,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: PAYMENT_STATUS,
      default: "paid",
    },
    receiptNumber: {
      type: String,
      unique: true,
      default: () => `RCPT-${Date.now()}`,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

feeSchema.index({ student: 1, date: -1 });

export default mongoose.model("Fee", feeSchema);