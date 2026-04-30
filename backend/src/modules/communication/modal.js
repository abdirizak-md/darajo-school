import mongoose from "mongoose";

const communicationSchema = new mongoose.Schema(
  {
    messageType: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      required: true,
    },

    recipients: {
      type: String,
      enum: ["ALL_PARENTS", "CLASS", "SECTION", "SINGLE_PARENT"],
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    targetClass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      default: null,
    },

    targetSection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      default: null,
    },

    targetEmail: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "SENT", "FAILED"],
      default: "PENDING",
    },

    sentAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Communication", communicationSchema);