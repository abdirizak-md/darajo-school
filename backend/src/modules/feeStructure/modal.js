import mongoose from "mongoose";

const feeStructureSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    feeType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    dueDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("FeeStructure", feeStructureSchema);