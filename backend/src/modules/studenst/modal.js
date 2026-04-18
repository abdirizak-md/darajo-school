import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    admissionNumber: { type: String, unique: true, required: true },
    dateOfBirth: Date,
    gender: String,

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    section: String,
    admissionDate: Date,

    parent: {
      guardianName: String,
      phone: String,
      email: String,
      address: String,
    },

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

export default mongoose.model("Student", studentSchema);