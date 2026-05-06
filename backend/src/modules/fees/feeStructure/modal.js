import mongoose from "mongoose";

const feeStructureSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    feeTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeeType",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// 🔥 prevent duplicate structure
feeStructureSchema.index(
  { classId: 1, sectionId: 1, feeTypeId: 1 },
  { unique: true }
);

export default mongoose.model("FeeStructure", feeStructureSchema);