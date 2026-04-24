import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // A, B, C
      trim: true,
    },

    roomNumber: {
      type: String,
      required: true, // e.g. "R-101"
    },

    description: {
      type: String,
      default: "",
    },

    capacity: {
      type: Number,
      default: 60, // max students
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    classTeacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },


  

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

// prevent duplicate section in same class
sectionSchema.index({ name: 1, classId: 1 }, { unique: true });

export default mongoose.model("Section", sectionSchema);