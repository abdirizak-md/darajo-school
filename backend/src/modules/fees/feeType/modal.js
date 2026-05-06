import mongoose from "mongoose";

const feeTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // 🔥 prevents duplicates like "Tuition"
      trim: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FeeType", feeTypeSchema);