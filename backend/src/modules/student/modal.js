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
      trim: true,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    birthDate: {
      type: Date,
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

    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
      required: true,
    },

    emergencyContact: String,
    medicalInfo: String,

    status: {
      type: String,
      enum: ["Active", "Inactive", "Graduated"],
      default: "Active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);