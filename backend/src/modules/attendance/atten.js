import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
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

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    admissionDate: {
      type: Date,
      required: true,
    },

    parentName: {
      type: String,
      required: true,
    },

    parentPhone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
    },

    emergencyContact: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    medicalInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);