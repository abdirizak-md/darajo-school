import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    admissionNumber: {
      type: String,
      required: true,
      unique: true,
    },

    dateOfBirth: Date,

    gender: {
      type: String,
      enum: ["male", "female"],
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },

    admissionDate: Date,
parentId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Parent",
  required: true,
},

    address: String,
    emergencyContact: String,

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    medicalInfo: String,
  },
  { timestamps: true }
);

// 🚀 performance index
studentSchema.index({ classId: 1, sectionId: 1 });

export default mongoose.model("Student", studentSchema);