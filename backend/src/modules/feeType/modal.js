import mongoose from "mongoose";


const feeTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // prevent duplicate like "Tuition"
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

     status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("FeeType", feeTypeSchema);