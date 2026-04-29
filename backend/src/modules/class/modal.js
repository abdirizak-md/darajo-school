import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },

    status: {
      type: String,
      enum: ["active", "pending", "completed"],
      default: "active", // optional but typical
    },
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);