import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true, // 🔥 important
    },
    email: String,
    address: String,
  },
  { timestamps: true }
);

export default mongoose.model("Parent", parentSchema);