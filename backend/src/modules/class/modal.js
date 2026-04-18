import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      default: 50,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);